import React from 'react'
import Image from 'next/image'

export default function Loading(props) {
  return (
    <div className='flex h-screen w-screen bg-gray-900 z-50 overflow-x-hidden overflow-clip'>
      {!props.loading ? (
        <></>
      ) : (
        <div className='flex w-screen h-screen justify-center items-center'>
          <Image src='/loading.svg' width={100} height={100} alt='Menetrend' />
        </div>
      )}
    </div>
  )
}
