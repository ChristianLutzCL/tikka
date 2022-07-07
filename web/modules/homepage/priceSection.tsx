import Image from 'next/image'
import Button from '../../components/button'
import styles from '../../styles/Home.module.css'
import {Switch, Dialog, Transition} from '@headlessui/react'
import {useState, Fragment} from 'react'

export default function PriceSection() {
  const [enabled, setEnabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      name: 'Freelancer',
      description: 'All the basics to get your first customers',
      monthly: 7,
      anually: 70,
      features: ['3 Channels', 'Planning & publishing'],
    },
    {
      name: 'Business',
      monthly: 17,
      anually: 170,
    },
    {
      name: 'Enterprise',
      monthly: 27,
      anually: 270,
    },
  ]

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
    console.log(isOpen)
  }

  return (
    <div className='h-[900px] w-screen justify-center bg-gray-900 py-20 text-white'>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Payment successful
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className='grid space-y-5 text-center'>
        <span className='text-lg font-bold text-purple-700'>PRICING</span>
        <span className='text-6xl font-black'>
          The best price for you
          <a className='text-transparent bg-clip-text bg-gradient-to-br from-menetrend-blue to-menetrend-pink'>
            .
          </a>
        </span>
        <span className='font-normal'>
          More exposure + Less marketing = More customers
        </span>
      </div>
      <div className='flex justify-center items-center space-x-4 pt-10'>
        <span>Monthly</span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-indigo-600' : 'bg-gray-400'
          } relative inline-flex h-8 w-16 items-center rounded-full`}>
          <span className='sr-only'>Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-9' : 'translate-x-1'
            } inline-block h-6 w-6 transform duration-150 rounded-full bg-white`}
          />
        </Switch>
        <span>Anually (2 months free)</span>
      </div>
      <div className='flex justify-center pb-20'>
        <div className='absolute flex space-x-6 pt-10'>
          <div className='border-1 w-90 rounded-lg border-gray-800 bg-white text-gray-900 shadow-md'>
            <div className='grid p-4'>
              <span className='pb-4 text-2xl font-bold'>{prices[0].name}</span>
              <span className='font-normal text-gray-700'>
                {prices[0].description}
              </span>
            </div>
            <div className='p-4'>
              <span className='text-6xl font-bold'>
                ${enabled ? prices[0].anually : prices[0].monthly}
              </span>
              <span className='text-lg font-semibold text-gray-600'>
                {!enabled ? '/mo' : '/year'}
              </span>
            </div>
            <div className='flex justify-center p-4'>
              <button
                onClick={(e) => openModal()}
                className='h-10 w-full rounded-lg bg-gray-800 font-semibold text-white'>
                Try free for 14-days
              </button>
            </div>
            <hr />
            <div className='space-y-4 p-4'>
              <span className='font-semibold'>WHAT'S INCLUED</span>
              <ul>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ring-2 ring-offset-4 ring-indigo-600 w-90 rounded-lg border-indigo-600 bg-white text-gray-900 shadow-lg shadow-indigo-600'>
            <div className='grid p-4'>
              <span className='pb-4 text-2xl font-bold'>{prices[1].name}</span>
              <span className='font-normal text-gray-700'>
                All the basics to get your first customers.
              </span>
            </div>
            <div className='p-4'>
              <span className='text-6xl font-bold'>
                ${enabled ? prices[1].anually : prices[1].monthly}
              </span>
              <span className='text-lg font-semibold text-gray-600'>
                {!enabled ? '/mo' : '/year'}
              </span>
            </div>
            <div className='flex justify-center p-4'>
              <button className='h-10 w-full rounded-lg bg-gray-800 font-semibold text-white'>
                Try free for 14-days
              </button>
            </div>
            <hr />
            <div className='space-y-4 p-4'>
              <span className='font-semibold'>WHAT'S INCLUED</span>
              <ul>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-1 w-90 rounded-lg border-gray-800 bg-white text-gray-900 shadow-md'>
            <div className='grid p-4'>
              <span className='pb-4 text-2xl font-bold'>{prices[2].name}</span>
              <span className='font-normal text-gray-700'>
                All the basics to get your first customers.
              </span>
            </div>
            <div className='p-4'>
              <span className='text-6xl font-bold'>
                ${enabled ? prices[2].anually : prices[2].monthly}
              </span>
              <span className='text-lg font-semibold text-gray-600'>
                {!enabled ? '/mo' : '/year'}
              </span>
            </div>
            <div className='flex justify-center p-4'>
              <button className='h-10 w-full rounded-lg bg-gray-800 font-semibold text-white'>
                Try free for 14-days
              </button>
            </div>
            <hr />
            <div className='space-y-4 p-4'>
              <span className='font-semibold'>WHAT'S INCLUED</span>
              <ul>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>3 Channels</span>
                </li>
                <li className='flex space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-purple-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Planning & publishing tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
