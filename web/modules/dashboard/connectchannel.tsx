import {useEffect, useState} from 'react'
import {supabase} from '../../utils/supabaseClient'
import {AiOutlineInstagram} from 'react-icons/ai'
import {
  facebookLogin,
  getFBUserID,
  getIGUserAccounts,
  getIGBusinessAcountID,
} from '../../utils/channel'
import absoluteUrl from 'next-absolute-url'
import Button from '../../components/button'

export default function ConnectChannel() {
  const [origin, setOrigin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [channelAccessToken, setChannelAccessToken] = useState('')
  const [channelUsername, setChannelUsername] = useState('')
  const [channelID, setChannelID] = useState('')
  const [isChannelConnected, setIsChannelConnected] = useState(false)

  useEffect(() => {
    getChannel()
    setOrigin(absoluteUrl().origin)
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
        setChannelUsername(data.username)
        setChannelID(data.user_id)
        setIsChannelConnected(data.connected)
        setChannelAccessToken(data.access_token)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function delChannel() {
    // openModal()

    const user = supabase.auth.user()
    try {
      let {data, error} = await supabase
        .from('channel')
        .delete()
        .match({uid: user.id})
    } catch (error) {
      console.log(error)
    }
  }

  async function setChannel(provider?, user_id?, username?, access_token?) {
    return new Promise<any>(async (resolve, reject) => {
      const user = supabase.auth.user()

      try {
        const channel = {
          uid: user.id,
          provider: provider,
          user_id: user_id,
          username: username,
          access_token: access_token,
          connected: true,
        }

        let {error, data} = await supabase
          .from('channel')
          .upsert(channel, {returning: 'representation'})

        resolve(data)
        return data
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  async function connectChannel() {
    setLoading(true)
    if (!isChannelConnected) {
      facebookLogin().then(() => {
        getFBUserID().then((fbUidResponse) => {
          getIGUserAccounts(fbUidResponse).then((accountsResponse) => {
            let {name, access_token, id} = accountsResponse.accounts.data[0] // Todo: Add a modal to select the account
            setChannelUsername(name)
            getIGBusinessAcountID(id).then((idResponse) => {
              setChannel(
                'Instagram', // for future use
                idResponse.instagram_business_account.id,
                name,
                access_token
              )
              setIsChannelConnected(true)
              setLoading(false)
            })
          })
        })
      })
    } else if (isChannelConnected) {
      // Todo: Add a modal to confirm disconnection
      delChannel()
      setIsChannelConnected(false)
      setChannelUsername('')
      setLoading(false)
    }
  }

  return (
    <div className='w-2/3 h-20 border-b justify-between border-gray-400 dark:border-gray-800 flex items-center'>
      <div className='flex space-x-4'>
        <div className='flex w-12 h-12 bg-menetrend-pink rounded-full justify-center items-center'>
          <AiOutlineInstagram className='h-8 w-8 text-white' />
        </div>
        <div>
          <div className='text-xl font-bold'>Instagram</div>
          <div className='text-sm font-medium text-gray-600 dark:text-gray-400'>
            Business Account <br />
          </div>
        </div>
      </div>
      <div>
        {loading === false ? (
          <span>{channelUsername}</span>
        ) : (
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
          </svg>
        )}
      </div>
      <div>
        <Button
          className='bg-indigo-800 py-2 px-8 rounded-md hover:bg-indigo-600'
          onClick={connectChannel}>
          {!isChannelConnected && !loading ? (
            <span>Connect</span>
          ) : (
            <span>Disconnect</span>
          )}
        </Button>
      </div>
    </div>
  )
}
