import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import Button from '../../components/button'
import {BiEdit, BiHome, BiCalendar} from 'react-icons/bi'
import Tippy from '@tippyjs/react'
//import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import {IoFileTrayStacked} from 'react-icons/io5'
import {useTheme} from 'next-themes'
import {HiOutlineSun, HiOutlineMoon} from 'react-icons/hi'

export default function Sidebar() {
  const {systemTheme, theme, setTheme} = useTheme()
  const router = useRouter()
  const currentRoute = router.pathname
  const currentTheme = theme === 'system' ? systemTheme : theme

  // useEffect(() => {
  //   setTheme(currentTheme)
  // }, [currentTheme])

  return (
    <div className='grid p-3 border-r border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 mt-16'>
      <div className='h-full min-h-full max-h-full relative'>
        <div className='flex w-full items-center flex-col space-y-2'>
          <div className='flex border-b border-gray-300 dark:border-gray-700 pb-2'>
            <Tippy
              content='Home'
              animation='shift-away'
              arrow={false}
              placement='right'
              className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 dark:text-white bg-white'>
              <div>
                <Button
                  onClick={() => router.push('/publish/home')}
                  className={`h-9 w-9 rounded-md flex justify-center items-center group transition-color duration-200 hover:bg-menetrend-blue/40 ${
                    currentRoute === '/publish/home' ? 'bg-menetrend-blue' : ''
                  }`}>
                  <BiHome
                    className={`h-5 w-5 text-white group-hover:text-white ${
                      currentRoute === '/publish/home'
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                  />
                </Button>
              </div>
            </Tippy>
          </div>
          <Tippy
            content='Composer'
            animation='shift-away'
            arrow={false}
            placement='right'
            className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 dark:text-white bg-white'>
            <div>
              <Button
                onClick={() => router.push('/publish/composer')}
                className={`h-9 w-9 rounded-md flex justify-center items-center group transition-color duration-200 hover:bg-menetrend-blue/40 ${
                  currentRoute === '/publish/composer'
                    ? 'bg-menetrend-blue'
                    : ''
                }`}>
                <BiEdit
                  className={`h-5 w-5 text-white group-hover:text-white ${
                    currentRoute === '/publish/composer'
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                />
              </Button>
            </div>
          </Tippy>
          <Tippy
            content='Draft (Coming soon)'
            animation='shift-away'
            arrow={false}
            placement='right'
            className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 dark:text-white bg-white'>
            <div>
              <Button
                disabled
                onClick={() => router.push('/publish/draft')}
                className={`h-9 w-9 rounded-md flex justify-center items-center group transition-color duration-200 hover:bg-menetrend-blue/40 ${
                  currentRoute === '/publish/draft' ? 'bg-menetrend-blue' : ''
                }`}>
                <IoFileTrayStacked
                  className={`h-5 w-5 text-white group-hover:text-white ${
                    currentRoute === '/publish/draft'
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                />
              </Button>
            </div>
          </Tippy>
          <Tippy
            content='Calendar'
            animation='shift-away'
            arrow={false}
            placement='right'
            className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 dark:text-white bg-white'>
            <div>
              <Button
                onClick={() => router.push('/publish/calendar')}
                className={`h-9 w-9 rounded-md flex justify-center items-center group transition-color duration-200 hover:bg-menetrend-blue/40 ${
                  currentRoute === '/publish/calendar'
                    ? 'bg-menetrend-blue'
                    : ''
                }`}>
                <BiCalendar
                  className={`h-5 w-5 text-white group-hover:text-white ${
                    currentRoute === '/publish/calendar'
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                />
              </Button>
            </div>
          </Tippy>
        </div>
        <div className='flex w-full absolute bottom-0 justify-center'>
          {currentTheme === 'dark' ? (
            <Tippy
              content='Light mode'
              animation='shift-away'
              arrow={false}
              placement='right'
              className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 transition-color duration-200 dark:text-white bg-white'>
              <div>
                <Button
                  className='dark:bg-gray-800 p-1 rounded-full hover:bg-gray-200'
                  onClick={() => setTheme('light')}>
                  <HiOutlineSun className='h-5 w-5 text-gray-400 group-hover:text-white' />
                </Button>
              </div>
            </Tippy>
          ) : (
            <Tippy
              content='Dark mode'
              animation='shift-away'
              arrow={false}
              placement='right'
              className='flex justify-center rounded-md shadow-md text-[12px] font-semibold py-1 px-2 dark:bg-gray-800 dark:text-white bg-white'>
              <div>
                <Button
                  className='bg-gray-200 p-1 rounded-full'
                  onClick={() => setTheme('dark')}>
                  <HiOutlineMoon className='h-5 w-5 text-gray-400 group-hover:text-white' />
                </Button>
              </div>
            </Tippy>
          )}
        </div>
      </div>
    </div>
  )
}
