import Image from 'next/image'
import {Menu, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import {BiPowerOff} from 'react-icons/bi'
import {FaMoneyBill} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import { TbPlugConnected } from 'react-icons/tb'
import {signout} from '../utils/supabaseClient'
import Link from 'next/link'

export default function ProfileMenu(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex h-12 justify-center space-x-4 items-center'>
      <div className='h-8 w-8 border border-indigo-700 bg-gray-200 rounded-full flex justify-center items-center'>
        {props.avatarURL ? (
          <Image
            className='rounded-full'
            src={props.avatarURL}
            width={40}
            height={40}
            alt='profile img'
          />
        ) : (
          <div className='animate-pulse h-10 w-10 bg-gray-600 rounded-full'></div>
        )}
      </div>
      <div className='flex space-x-2 text-gray-700 dark:text-white text-md font-semibold'>
        {props.firstName ? (
          props.firstName
        ) : (
          <div className='animate-pulse h-3 w-16 bg-gray-600 rounded-full col-span-2'></div>
        )}{' '}
        {props.lastName ? (
          props.lastName
        ) : (
          <div className='animate-pulse h-3 w-16 bg-gray-600 rounded-full col-span-2'></div>
        )}
      </div>
      <div className='relative'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button
              onClick={() => setOpen(!open)}
              className='inline-flex w-8 h-8 text-white justify-center items-center rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              {!open ? (
                <FiChevronDown className='text-gray-900 dark:text-gray-300 h-5 w-5' />
              ) : (
                <FiChevronUp className='text-gray-900 dark:text-gray-300 h-5 w-5' />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items
              onAbort={() => setOpen(false)}
              onStalled={() => setOpen(false)}
              className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({active}) => (
                    <Link href='/account/settings'>
                      <a className='group hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white flex w-full items-center rounded-md px-2 py-2 text-sm'>
                        <FiSettings className='h-5 w-4 mr-2 group-hover:text-indigo-400' />
                        Settings
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({active}) => (
                    <Link href='/account/connect'>
                      <a className='group hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white flex w-full items-center rounded-md px-2 py-2 text-sm'>
                        <TbPlugConnected className='h-4 w-4 mr-2 dark:text-white group-hover:text-indigo-400' />
                        Connect
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({active}) => (
                    <Link href='/account/payment'>
                      <a className='group hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white flex w-full items-center rounded-md px-2 py-2 text-sm'>
                        <FaMoneyBill className='h-4 w-4 mr-2 dark:text-white group-hover:text-indigo-400' />
                        Payment
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({active}) => (
                    <button
                      onClick={() => signout()}
                      className='group hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white flex w-full items-center rounded-md px-2 py-2 text-sm'>
                      <BiPowerOff className='h-4 w-4 mr-2 group-hover:text-indigo-400' />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

ProfileMenu.defaultProps = {
  avatarURL: undefined,
  firstName: 'FirstName',
  lastName: 'LastName',
}
