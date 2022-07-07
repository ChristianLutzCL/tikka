import Image from 'next/image'
import menetrendLogo from '../../public/menetrend_dark.svg'

export default function Footer() {
  return (
    <footer className='flex justify-start bg-white px-52 pt-10 pb-10'>
      <div className='hidden xl:flex w-full justify-between'>
        <div className='w-2/5'>
          <Image src={menetrendLogo} width={210} height={40} alt='Menetrend' />
          <div className='font-normal text-base text-gray-600'>
            <p className='font-normal text-base text-gray-600'>
              Social Media Management for Entrepreneurs.
              <br />
              Grow your social media brand easily and get new customers faster.
            </p>
            <p className='font-semibold pt-4'>© 2022 by Menetrend</p>
          </div>
        </div>
        <div className='list-none flex justify-between w-3/5 h-full text-gray-900 font-medium'>
          <ul>
            <li className='font-bold'>PRODUCT</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>HELP</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>COMPANY</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>LEGAL</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className='xl:hidden grid w-full justify-center'>
        <div className='list-none grid space-y-8 text-center text-gray-900 font-medium'>
          <ul>
            <li className='font-bold'>PRODUCT</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>HELP</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>COMPANY</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li className='font-bold'>LEGAL</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='pt-12'>
          <Image src={menetrendLogo} layout='fixed' alt='Menetrend' />
            <p className='font-semibold pt-4'>© 2022 by Menetrend</p>
        </div>
      </div>
    </footer>
  )
}
