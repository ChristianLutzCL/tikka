/*

Composer Steps:

Schedule:
1. Upload Image(s)
2. Add Caption
3. Click 'Schedule post'
4. Modal opens with dates to select
5. Click 'Publish'
6. Post is added to the feed at scheduled time

Share now:
1. Upload Image(s)
2. Add Caption
3. Click 'Share now'
4. Post is added to the feed



Backend Steps:

Schedule:
5. Upload Image(s) to Storage
6. Create Table with all data in Database
7. Adds data to Cron Job schedule Database
8. CronJob posts to Instagram at scheduled time

Share now:
3. Upload Image(s) to Storage
4. Create Table with all data in Database
5. Shares post to Instagram

*/

import Head from 'next/head'
import Header from '../../modules/dashboard/header'
import Sidebar from '../../modules/dashboard/sidebar'
import {BiEdit} from 'react-icons/bi'
import InstagramPreview from '../../modules/dashboard/instagrampreview'
import {useEffect, useState} from 'react'
import ImageUploader from '../../modules/dashboard/imageuploader'
import Button from '../../components/button'
import {supabase} from '../../utils/supabaseClient'
import {
  getAccessToken
} from '../../utils/channel'

export default function Composer() {
  const [description, setDescription] = useState('')
  const [parentImages, setParentImages] = useState([])
  const [containerID, setContainerID] = useState([])
  const [imageUrl, setImageUrl] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('none')
  const [userImage, setUserImage] = useState()

  const [loading, setLoading] = useState(false)
  const [channelUsername, setChannelUsername] = useState('')
  const [channelID, setChannelID] = useState('')
  const [isChannelConnected, setIsChannelConnected] = useState(false)
  const [channelAccessToken, setChannelAccessToken] = useState('')

  const [businessID, setBusinessID] = useState('')

  useEffect(() => {
  }, [])



  async function getChannel() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let {data, error, status} = await supabase
        .from('channel')
        .select(`provider, user_id, username, connected, access_token`)
        .eq('uid', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        return data
      }
    } catch (error) {
      console.log(error.message)
      return error.message
    } finally {
      setLoading(false)
    }
  }

  // async function addToDraft(images, description, isScheduled, schedule) {
  //   console.log(parentImages)
  //   if (parentImages) {
  //     setIsLoading(true)

  //     let data = await createDraft(description, isScheduled)
  //     let image_urls = await onImageUpload(images, data[0].draft_id)

  //     await updateDraft(
  //       image_urls,
  //       data[0].draft_id,
  //       description,
  //       isScheduled,
  //       schedule
  //     )

  //     setIsLoading(false)
  //   } else {
  //     alert('No images')
  //   }
  // }

  async function onImageUpload(images, draft_id) {
    console.log(images, draft_id)

    const user_id = supabase.auth.user().id
    let image_urls = []

    for (let i = 0; i < images.length; i++) {
      const {data, error} = await supabase.storage
        .from('igcontent')
        .upload(`${user_id}/${draft_id}/${images[i].file.name}`, images[i].file)

      const image_url = `https://reuboqosniiyeuaokkpl.supabase.co/storage/v1/object/public/${data.Key}`
      image_urls.push(image_url)
    }

    return image_urls
  }

  async function createDraft() {
    const user = supabase.auth.user()

    try {
      const draft = {
        uid: user.id,
      }

      let {error, data} = await supabase
        .from('igcontent')
        .upsert(draft, {returning: 'representation'})

      console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  async function getIGBusinessImage(igBusinessID, accessToken) {
    try {
     window.FB.api(
        `/${igBusinessID}`,
        'get',
        {'fields': 'profile_picture_url', 'access_token': accessToken},
        function (response : any) {
          setUserImage(response.profile_picture_url)
          console.log('image', response)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function updateDraft(
    image_urls,
    draft_id,
    description,
    is_scheduled,
    schedule
  ) {
    const user = supabase.auth.user()

    try {
      const updates = {
        uid: user.id,
        draft_id: draft_id,
        images: image_urls,
        description: description,
        is_scheduled: is_scheduled,
        schedule: schedule,
      }

      let {error, data} = await supabase
        .from('igcontent')
        .update(updates, {returning: 'representation'})
        .match({draft_id})

      console.log(data, error)
      return data
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createCarousel(
    image_url,
    business_id,
    desc,
    containderID,
    is_carousel
  ) {
    // Create Element-Container
    try {
      window.FB.api(
        `/${business_id}/media`,
        'post',
        {
          image_url: image_url,
          transport: 'cors',
          is_carousel_item: is_carousel,
        },
        function (response: any) {
          console.log('element_container_id', image_url, business_id, response)
          getContainerID([response])
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  // // Create Carousel-Container
  // try {
  //   console.log("CreateCarouselContainer", containerID);
  //   window.FB.api(
  //     `/${business_id}/media`,
  //     "post",
  //     {
  //       "media_type": "CAROUSEL",
  //       "description": desc,
  //       "transport": "cors",
  //       "children": containderID,
  //     },
  //     function (response: any) {
  //       console.log("carousel_container_id", response);

  //       // Publish to IG
  //       try {
  //         window.FB.api(
  //           `/${business_id}/media_publish`,
  //           "post",
  //           { "creation_id": response.id },
  //           function (response: any) {
  //             console.log("media_id", response);
  //           }
  //         );
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
  // }

  async function getContainerID(cID) {
    setContainerID([...containerID, cID.id])
    console.log('getContainerID', containerID)
  }

  async function onShareNow(description, isScheduled, images) {
    console.log('onShareNow')


    createDraft().then((draft) => {
      const draft_id = draft[0].draft_id
      onImageUpload(images, draft_id).then((image_urls) => {
        updateDraft(image_urls, draft_id, description, isScheduled, null).then((data) => {
            console.log(data)
            getAccessToken(businessID).then((token) => {
              console.log('token', token)
            })
            createCarousel(image_urls[0], businessID, description, null, true)
          }
        )
      })
    })
  }

  async function onSchedulePost() {
    console.log('onSchedulePost')
  }

  return (
    <div>
      <Head>
        <title>Menetrend - Composer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden text-background dark:text-white'>
        <Header />
        <Sidebar />
        <div className='mt-24 ml-8 mr-8 w-full text-background dark:text-white'>
          <div className='text-3xl font-bold flex items-center space-x-2'>
            <div className='bg-gray-300 dark:bg-gray-700 h-10 w-10 flex justify-center items-center rounded-md text-gray-700 dark:text-gray-200'>
              <BiEdit />
            </div>
            <div>Composer</div>
          </div>
          <div className='pt-12 space-y-4'>
            <ImageUploader setParentImages={setParentImages} />
            <textarea
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
              className='flex items-center justify-center focus:ring-ping-800 focus:border-gray-500 focus:outline-none min-h-6 max-h-64 h-32 w-full pl-2 pt-1 pr-2 sm:text-sm border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md'></textarea>
            <div className='flex justify-end w-full'>
              <div className='flex space-x-2'>
                <Button
                  onClick={() => onShareNow('test', false, parentImages)}
                  className='bg-gray-400 hover:bg-purple-600 cursor-pointer font-semibold text-md text-white py-3 px-8 rounded-md'>
                  Share now
                </Button>
                <Button
                  onClick={() => console.log('Add to schedule')}
                  className='bg-menetrend-pink hover:bg-purple-600 cursor-pointer font-semibold text-md text-white py-3 px-8 rounded-md'>
                  {!isLoading ? (
                    <span>Schedule post</span>
                  ) : (
                    <div>Adding to schedule...</div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='grid bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700 text-gray-800 w-1/3 mt-16 justify-center items-center'>
          <div className='pt-8'>
            <span className='text-gray-400 bg-gray-200 dark:text-gray-400 dark:bg-gray-700 py-2 px-4 rounded-full text-xs font-semibold'>
              Instagram preview
            </span>
          </div>
          <div className='grid w-full h-full justify-center mt-16'>
            <InstagramPreview
              userImage={userImage}
              userName={channelUsername}
              image={parentImages}
              description={description}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  }
}
