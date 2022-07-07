import Image from 'next/image'
import Button from '../../components/button'
import styles from '../../styles/Home.module.css'

import svg from '../../public/outline.webp'

export default function FeatureTwo() {
  return (
    <div className='flex text-center justify-center 2xl:text-left 2xl:space-x-40 bg-gray-900 px-16 py-12 2xl:px-32 2xl:py-16'>
      <div className='grid items-center space-y-4'>
        <span className='2xl:text-lg font-bold text-purple-500'>
          FOR AMBITIOUS ENTREPRENEURS
        </span>
        <span className='2xl:w-9/12 text-3xl 2xl:text-7xl font-black text-white'>
          Automate your Marketing<a className='text-purple-700'>.</a>
        </span>
        <span className='2xl:w-8/12 2xl:text-lg font-medium text-gray-300'>
          Easily schedule your releases in advance and reach your customers when
          it's most convenient, while you focus on what matters most.
        </span>
        <div>
          <button className='rounded border-2 border-gray-300 py-2 px-4 text-lg font-bold text-gray-300 hover:border-purple-700 duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:-translate-y-1 hover:transition'>
            Learn About Automation
          </button>
        </div>
      </div>
      <div className='hidden 2xl:flex 2xl:visible w-full 2xl:w-1/2'>
        <div className='flex aspect-video h-full w-full items-center justify-center'>
          <span className='font-bold text-gray-400'>
            PLACEHOLDER
          </span>
        </div>
      </div>
    </div>
  )
}
