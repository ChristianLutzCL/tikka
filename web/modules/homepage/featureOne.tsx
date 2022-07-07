import Image from 'next/image'
import Button from '../../components/button'
import styles from '../../styles/Home.module.css'

import demand from '../../public/demand.webp'

export default function FeatureOne() {
  return (
    <div className='flex text-center justify-center 2xl:text-left 2xl:space-x-40 bg-purple-100 px-16 py-12 2xl:px-32 2xl:py-16'>
      <div className='hidden 2xl:flex 2xl:visible w-full 2xl:w-1/2'>
        <div className='flex aspect-video h-full w-full items-center justify-center'>
          <span className='font-bold text-gray-400'>
            <Image src={demand}  layout='fixed' width={300} height={300} quality={100} />
          </span>
        </div>
      </div>
      <div className='grid items-center space-y-4'>
        <span className='2xl:text-lg font-bold text-purple-700'>
          FOR ENTREPRENEURS ON INSTAGRAM
        </span>
        <span className='2xl:w-9/12 text-3xl 2xl:text-7xl font-black text-gray-900'>
          Easily reach your target audience<a className='text-purple-700'>.</a>
        </span>
        <span className='2xl:w-8/12 2xl:text-lg font-medium text-gray-800'>
          Reach your new customers where thry are easily without much effort in
          an organic way.
        </span>
        <div>
          <button className='rounded border-2 border-gray-700 py-2 px-4 2xl:text-lg font-bold text-gray-700 hover:border-purple-700 duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:-translate-y-1 hover:transition'>
            Learn About Audience
          </button>
        </div>
      </div>
    </div>
  )
}
