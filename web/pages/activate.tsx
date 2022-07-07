import Head from 'next/head'
import Header from '../modules/homepage/header'
import HeroSection from '../modules/homepage/heroSection'
import FeatureSection from '../modules/homepage/featureSection'
import CtaSection from '../modules/homepage/ctaSection'
import Footer from '../modules/homepage/footer'
import PriceSection from '../modules/homepage/priceSection'
import HeaderBanner from '../components/headerbanner'

import Image from 'next/image'
import logo from '../public/menetrend_dark.svg'
import Button from '../components/button'
import LinkButton from '../components/linkbutton'

export default function Activate() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-900'>
      <Head>
        <title>
          Menetrend - All you need social media management for Entrepreneurs
        </title>
        <meta
          name='description'
          content='Use Menetrend to manage your social media and reach your customers right where they are. Join Menetrend today and grow your business faster.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.menetrend.xyz/' />
        <meta
          property='og:title'
          content='Menetrend - All you need social media management for Entrepreneurs'
        />
        <meta
          property='og:description'
          content='Use Menetrend to manage your social media and reach your customers right where they are. Join Menetrend today and grow your business faster.'
        />
        <meta
          property='og:image'
          content='https://reuboqosniiyeuaokkpl.supabase.co/storage/v1/object/public/igcontent/meta-content.png'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.menetrend.xyz/' />
        <meta
          property='twitter:title'
          content='Menetrend - All you need social media management for Entrepreneurs'
        />
        <meta
          property='twitter:description'
          content='Use Menetrend to manage your social media and reach your customers right where they are. Join Menetrend today and grow your business faster.'
        />
        <meta
          property='twitter:image'
          content='https://reuboqosniiyeuaokkpl.supabase.co/storage/v1/object/public/igcontent/meta-content.png'></meta>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='flex-col justify-center'>
        <div className='flex'>
          <span className='text-7xl font-extrabold text-indigo-700 pr-10'>
            📫
          </span>
          <div className='border-r border-gray-300 h-52'></div>
          <div className='grid pl-10'>
            <span className='text-7xl font-extrabold text-gray-200'>
              Welcome to Menetrend!
            </span>
            <span className='text-xl font-normal text-gray-200'>
              Please look at your email inbox and activate your account.
            </span>
            {/* TODO: Make link */}
            <div className='py-2 space-x-2'>
              <button className='bg-indigo-700 text-white py-2 px-10 rounded-md font-semibold'>
                Go to Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protected: false,
    },
  }
}
