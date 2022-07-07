import Head from 'next/head'
import Header from '../modules/homepage/header'
import HeroSection from '../modules/homepage/heroSection'
import FeatureSection from '../modules/homepage/featureSection'
import CtaSection from '../modules/homepage/ctaSection'
import Footer from '../modules/homepage/footer'
import PriceSection from '../modules/homepage/priceSection'
import HeaderBanner from '../components/headerbanner'
import TitleSection from '../modules/homepage/titleSection'
import FeatureOne from '../modules/homepage/featureOne'
import FeatureTwo from '../modules/homepage/featureTwo'
import CommentsSection from '../modules/homepage/commentsSection'

export default function Home() {
  return (
    <div className='h-screen'>
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
      {/* <HeaderBanner /> */}
      <HeroSection />
      <div>
        <TitleSection />
        <FeatureOne />
        <FeatureTwo />
        <FeatureSection />
        <div className='hidden 2xl:flex'>
          <PriceSection />
        </div>
        {/* <CommentsSection /> */}
        <CtaSection />
        <Footer />
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

