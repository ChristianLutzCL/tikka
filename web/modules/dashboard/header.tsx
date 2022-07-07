import Image from 'next/image'
import Link from 'next/link'
import menetrendLogoDark from '../../public/menetrend_dark.svg'
import menetrendLogoLight from '../../public/menetrend_light.svg'
import {useEffect, useState} from 'react'
import {supabase, signout} from '../../utils/supabaseClient'
import ProfileMenu from '../../components/profilemenu'
import {useTheme} from 'next-themes'

export default function Header() {
  const [loading, setLoading] = useState(true)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    getProfile()
  }, [first_name, last_name])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let {data, error, status} = await supabase
        .from('profiles')
        .select(
          `username, first_name, last_name, bio, email, website, avatar_url`
        )
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className='flex w-full bg-gray-100 dark:bg-gray-900 font-sans justify-left h-16 px-3 text-background fixed border-b border-gray-300 dark:border-gray-700'>
      <div className='flex w-full justify-between items-center'>
        <Link passHref href={'/publish/home'}>
          <a>
            {currentTheme === 'dark' ? (
              <Image
                src={menetrendLogoLight}
                width={168}
                height={32}
                alt='Menetrend'
              />
            ) : (
              <Image
                src={menetrendLogoDark}
                width={168}
                height={32}
                alt='Menetrend'
              />
            )}
          </a>
        </Link>
        <div className='flex space-x-16'>
          {/* <div className='text-menetrend-blue font-bold text-base hover:text-menetrend-pink'>
            <Link href='/publish/composer' passHref>
              Publishing
            </Link>
          </div>
          <div className='text-gray-400 font-bold text-base hover:text-gray-500'>
            <Link href='/publish/dashboard' passHref>
              Analytics
            </Link>
          </div>
          <div className='text-gray-400 font-bold text-base hover:text-gray-500'>
            <Link href='/publish/dashboard' passHref>
              Engagement
            </Link>
          </div> */}
        </div>
        <ProfileMenu
          avatarURL={avatar_url}
          firstName={first_name}
          lastName={last_name}
          userLogout={signout}
        />
      </div>
    </header>
  )
}
