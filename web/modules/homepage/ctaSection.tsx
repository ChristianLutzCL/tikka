import Image from 'next/image'
import Button from '../../components/button'
import Link from 'next/link'

import bg from '../../public/background/polka-dots.svg'

export default function CtaSection() {
  return (
    <div className='relative grid xl:flex justify-center items-center h-80 bg-white xl:px-32 overflow-hidden'>
      <div className='w-full bg-gradient-to-br from-menetrend-blue to-menetrend-pink rounded-xl overflow-hidden'>
        <div className='absolute'>
          <svg width='1000' height='1000' fill='none' viewBox='0 0 1000 1000'>
            <defs>
              <pattern
                id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'>
                <rect
                  x='0'
                  y='0'
                  width='2'
                  height='2'
                  className='text-gray-100'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='200'
              height='150'
              fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
            />
          </svg>
        </div>
        <div className='grid xl:flex justify-center items-center xl:space-x-5 relative xl:z-10 xl:w-full xl:h-60 h-40 px-8'>
          <div className='text-white text-center xl:text-left font-bold text-3xl'>
            Start a free trial.
          </div>
          <Link href='/signup' passHref>
            <div className='bg-gray-800 hover:bg-gray-600 cursor-pointer font-semibold text-xl text-white py-4 px-8 rounded-md'>
              Get started for free
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
