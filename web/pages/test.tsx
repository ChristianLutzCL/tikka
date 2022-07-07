import Head from 'next/head'
import Header from '../modules/homepage/header'
import HeaderRework from '../modules/homepage/header-rework'
import HeroSection from '../modules/homepage/heroSection'
import FeatureSection from '../modules/homepage/featureSection'
import CtaSection from '../modules/homepage/ctaSection'
import Footer from '../modules/homepage/footer'
import PriceSection from '../modules/homepage/priceSection'
import HeaderBanner from '../components/headerbanner'
import TitleSection from '../modules/homepage/titleSection'
import FeatureOne from '../modules/homepage/featureOne'
import FeatureTwo from '../modules/homepage/featureTwo'

export default function Test() {
  return (
    <div className='h-screen'>
      <Header />
      <HeaderRework />
      <TitleSection />
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
