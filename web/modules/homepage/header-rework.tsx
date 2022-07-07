import LinkButton from '../../components/linkbutton'
import Image from 'next/image'
import {BiCheck} from 'react-icons/bi'
import Link from 'next/link'

import image from '../../public/heroImg.png'

export default function HeroSection() {
  return (
    <div className='flex h-full w-full overflow-clip justify-center items-start pt-6 sm:pt-12 xl:pt-0 xl:items-center bg-background text-white'>
      <div className='block w-full absolute z-10 pt-20 md:pt-20 pl-0 xl:pl-52'>
        <div className='text-5xl xl:text-7xl text-center xl:text-left font-extrabold w-full xl:w-2/3'>
          Social Media Management <br /> for{' '}
          <b className='text-transparent font-extrabold font-sans bg-clip-text bg-gradient-to-br from-menetrend-blue to-menetrend-pink'>
            Entrepreneurs
          </b>
          .
        </div>
        <div className='text-xl md:text-2xl text-center xl:text-left font-extralight font-inter py-4 drop-shadow-xl'>
          Grow your social media brand easily and get new customers faster.
        </div>
        <div className='flex xl:hidden justify-center animate-fade-in-down '>
          <Image
            src={image}
            alt='image'
            width={400}
            height={218}
            quality='100'
            layout='intrinsic'
          />
        </div>
        <div className='xl:flex xl:space-x-10 pt-6'>
          <div className='flex justify-center xl:justify-start items-center space-x-2'>
            <BiCheck className='text-menetrend-pink' size={25} />
            <div className='font-sans font-medium text-md'>
              14-day free trial
            </div>
          </div>
          <div className='flex justify-center xl:justify-start items-center space-x-2'>
            <BiCheck className='text-menetrend-pink' size={25} />
            <div className='font-sans font-medium text-md'>Cancel anytime</div>
          </div>
          <div className='flex justify-center xl:justify-start items-center space-x-2'>
            <BiCheck className='text-menetrend-pink' size={25} />
            <div className='font-sans font-medium text-md'>
              No credit card required
            </div>
          </div>
        </div>
        <div className='flex justify-center xl:justify-start py-6 space-x-4'>
          <Link href='/signup' passHref>
            <div className='bg-gradient-to-br from-menetrend-blue to-menetrend-pink hover:from-purple-600 hover:to-pink-700 cursor-pointer font-semibold text-xl text-white py-4 px-8 rounded-md'>
              Start marketing now
            </div>
          </Link>
        </div>
      </div>
      <div className='hidden xl:flex xl:visible relative z-1 -right-96 pl-32 pt-20 animate-fade-in-down '>
        <Image
          src={image}
          alt='image'
          width={1000}
          height={545}
          quality='100'
          layout='intrinsic'
        />
      </div>
    </div>
  )
}
