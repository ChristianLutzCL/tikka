import Image from 'next/image'
import Button from '../../components/button'
import styles from '../../styles/Home.module.css'

export default function TitleSection() {
  return (
    <div className='flex bg-white justify-center items-center 2xl:h-[25rem] w-full'>
      <div className='justify-center align-center text-center text-3xl md:text-6xl font-black py-12 md:py-20 text-gray-900'>
        <div className=''>
          Be where your customers are
          <a className='text-transparent bg-clip-text bg-gradient-to-br from-menetrend-blue to-menetrend-pink'>
            .
          </a>
        </div>
        <div className='flex text-sm md:text-xl font-medium justify-center text-center text-gray-700 mt-8'>
          On average, people spend almost 2.5 hours on social media every day.{' '}
          <br /> Menetrend makes it easy for you, to let them find your
          business.
        </div>
      </div>
    </div>
  )
}
