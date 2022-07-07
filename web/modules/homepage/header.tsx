import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import menetrendLogo from '../../public/logo.png'
import {FiMenu} from 'react-icons/fi'
import IconButton from '../../components/iconbutton'
import {IoMdClose} from 'react-icons/io'
import {useState} from 'react'
import HeaderBanner from '../../components/headerbanner'
import {useEffect} from 'react'
import UseAnimations from 'react-useanimations'
import menu2 from 'react-useanimations/lib/menu2'
import React from 'react'
import {Popover, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {Fragment} from 'react'
import {
  ClockCircleOutlined,
  ControlOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: ClockCircleOutlined,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: ControlOutlined,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: SettingOutlined,
  },
]

export default function HeaderRework() {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        scrollPosition > 0
          ? 'bg-gray-900/60 backdrop-blur transition ease-in-out duration-300'
          : 'bg-transparent transition ease-in-out duration-300'
      } flex w-full justify-between font-sans items-center h-16 md:h-20 px-4 xl:px-52 text-white fixed z-20 top-0`}>
      <Head>
        <meta name='theme-color' content='#10172A' />
      </Head>
      <div className='flex'>
        <Link passHref href={'/'}>
          <a>
            <Image
              src={menetrendLogo}
              width={128.63}
              height={30}
              alt='Menetrend'
            />
          </a>
        </Link>
        <div className='pl-12 hidden md:flex'>
          <Popover className='relative'>
            {({open}) => (
              <>
                <Popover.Button
                  className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none hover:underline hover:decoration-2`}>
                  <span>Features</span>
                  <ChevronDownIcon
                    className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden='true'
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'>
                  <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
                    <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                            <div className='flex h-10 w-10 shrink-0 items-center justify-center text-white bg-indigo-700 rounded-md sm:h-12 sm:w-12'>
                              <item.icon aria-hidden='true' />
                            </div>
                            <div className='ml-4'>
                              <p className='text-sm font-medium text-gray-900'>
                                {item.name}
                              </p>
                              <p className='text-sm text-gray-500'>
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className='bg-gray-50 p-4'>
                        <a
                          href='##'
                          className='flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                          <span className='flex items-center'>
                            <span className='text-sm font-medium text-gray-900'>
                              Documentation
                            </span>
                          </span>
                          <span className='block text-sm text-gray-500'>
                            Start integrating products and tools
                          </span>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Link href='#price' passHref>
            <div className='cursor-pointer text-base font-medium text-white hover:underline hover:decoration-2 py-2 px-4 rounded-md'>
              Pricing
            </div>
          </Link>
          <Link passHref href={'/blog'}>
            <button className=' py-2 px-4 text-base font-medium text-white hover:underline hover:decoration-2'>
              Blog
            </button>
          </Link>
        </div>
      </div>
      <div className=''>
        <div className='h-16 flex items-center md:hidden'>
          <FiMenu
            className='h-8 w-8 text-white'
            onClick={() => setOpen(!open)}
          />
          {!open ? (
            <></>
          ) : (
            <div
              className='origin-top-right absolute right-0 mt-56 mr-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
              tabIndex={-1}>
              <div className='py-1' role='none'>
                <div
                  className='text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm'
                  role='menuitem'
                  id='menu-item-0'>
                  <Link href='/features' passHref>
                    Features
                  </Link>
                </div>
                <div
                  className='text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm'
                  role='menuitem'
                  id='menu-item-0'>
                  <Link href='/blog' passHref>
                    Blog
                  </Link>
                </div>
              </div>
              <div className='py-1' role='none'>
                <div
                  className='text-indigo-700 border text-center border-indigo-700 rounded-md mx-2 my-2 hover:bg-indigo-600 hover:text-white block px-4 py-2 text-sm'
                  role='menuitem'
                  id='menu-item-0'>
                  <Link href='/features' passHref>
                    Sign In
                  </Link>
                </div>
                <div
                  className='text-white bg-indigo-700 text-center rounded-md mx-2 hover:bg-indigo-600 pointer block px-4 py-2 text-sm'
                  role='menuitem'
                  id='menu-item-0'>
                  <Link href='/blog' passHref>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='hidden md:flex'>
          <Link passHref href={'/login'}>
            <button className='transition-all ease-in-out duration-300 text-white hover:underline decoration-2 py-2 px-4 text-base font-medium'>
              Sign In
            </button>
          </Link>
          <Link href='/signup' passHref>
            <div className='bg-gradient-to-br from-red-900 to-red-600 transition ease-in-out duration-300 hover:scale-105 hover:from-red-800 hover:to-red-500 cursor-pointer text-base font-medium text-white hover:text-opacity-100 py-2 px-4 rounded-md'>
              Get started now
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
