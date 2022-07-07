import Head from 'next/head'
import Header from '../modules/homepage/header'

export default function Fifehundret() {
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
      <div className='flex-col justify-center text-white'>
        <div className='flex'>
          <span className='text-7xl font-extrabold text-indigo-700 pr-10'>
            500
          </span>
          <div className='border-r border-gray-300 h-52'></div>
          <div className='grid pl-10'>
            <span className='text-7xl font-extrabold'>
              Internal Server Error
            </span>
            <span className='text-xl font-normal text-gray-300'>
              Please contact the support if the error presists.
            </span>
            <div className='py-2 space-x-2'>
              <button className='bg-indigo-700 text-white py-2 px-10 rounded-md font-semibold'>
                Go back home
              </button>
              <button className='bg-blue-300 text-indigo-700 py-2 px-10 rounded-md font-semibold'>
                Contact support
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
