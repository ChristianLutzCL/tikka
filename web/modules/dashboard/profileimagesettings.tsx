import Image from 'next/image'
import {useEffect, useState} from 'react'
import {supabase} from '../../utils/supabaseClient'

export default function ProfileImageSettings() {
    const [avatar_url, setAvatarUrl] = useState(null)
    const [uploading, setUploading] = useState(false)

    async function downloadImage(path) {
        try {
          const { data, error } = await supabase.storage.from('avatars').download(path)
          if (error) {
            throw error
          }
          const url = URL.createObjectURL(data)
          setAvatarUrl(url)
        } catch (error) {
          console.log('Error downloading image: ', error.message)
        }
      }
    
      function handleFileUpload(event) {
        console.log(event.target.files[0].name)
      }
    
      async function uploadAvatar(event) {
        try {
          setUploading(true)
    
          if (!event.target.files || event.target.files.length === 0) {
            throw new Error('You must select an image to upload.')
          }
    
          const file = event.target.files[0]
          const fileExt = file.name.split('.').pop()
          const fileName = `${Math.random()}.${fileExt}`
          const filePath = `${fileName}`
    
          let { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filePath, file)
    
          if (uploadError) {
            throw uploadError
          }
    
        } catch (error) {
          alert(error.message)
        } finally {
          setUploading(false)
        }
      }
    


  return (
    <div className='flex space-x-2 w-1/3 items-center'>
    <div className='bg-gray-600 h-14 w-14 rounded-md overflow-clip'>
      {avatar_url ? (
        <Image alt='img' src={avatar_url} width={64} height={64} />
      ) : (
        <div></div>
      )}
    </div>
    <div className='flex space-x-4'>
      {/* <Button
        title='Delete'
        className='text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md'
        onClick={() => {}}>
        Remove
      </Button> */}
      <div>
        <label className='button primary block' htmlFor='single'>
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type='file'
          id='single'
          accept='image/*'
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  </div>
  )
}
