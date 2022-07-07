import React from 'react'
import Image from 'next/image'

export default function LoadingDashboard(props) {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <main className='flex bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden text-background'>
        <header className='flex w-full bg-gray-100 dark:bg-gray-900 font-sans justify-left h-16 px-3 text-background fixed border-b border-gray-300 dark:border-gray-700'>
          <div className='animate-pulse flex w-full justify-between items-center'>
            <div className='rounded-full bg-gray-300 dark:bg-gray-600 h-8 w-44'></div>
            <div className='flex items-center space-x-2'>
              <div className='rounded-full bg-gray-300 dark:bg-gray-600 h-8 w-8'></div>
              <div className='rounded-full bg-gray-300 dark:bg-gray-600 h-6 w-20'></div>
              <div className='rounded-full bg-gray-300 dark:bg-gray-600 h-6 w-20'></div>
              <div className='rounded-full bg-gray-300 dark:bg-gray-600 h-8 w-8'></div>
            </div>
          </div>
        </header>
        <div className='flex animate-pulse justify-center p-3 border-r border-gray-300 dark:border-gray-700 h-screen bg-gray-100 dark:bg-gray-900 mt-16'>
          <div className='flex items-center flex-col space-y-2'>
            <div className='flex border-b border-gray-300 dark:border-gray-700 dark:bg-gray-900 pb-2'>
              <div>
                <div className='rounded-md bg-gray-300 dark:bg-gray-600 h-9 w-9'></div>
              </div>
            </div>
            <div>
              <div className='rounded-md bg-gray-300 dark:bg-gray-600 h-9 w-9'></div>
            </div>
            <div>
              <div className='rounded-md bg-gray-300 dark:bg-gray-600 h-9 w-9'></div>
            </div>
            <div>
              <div className='rounded-md bg-gray-300 dark:bg-gray-600 h-9 w-9'></div>
            </div>
          </div>
        </div>
        <div className='flex w-screen h-screen justify-center items-center'>
          <Image src='/loading.svg' width={100} height={100} alt='Menetrend' />
        </div>
      </main>
    </div>
  )
}
