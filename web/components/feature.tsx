import BackgroundIcon from './backgroundicon'
import Link from 'next/link'
import {ArrowRightOutlined} from '@ant-design/icons'

export default function Feature(props) {
  return (
    <div>
      <BackgroundIcon icon={props.icon} />
      <div className='pt-4 font-sans w-40 2xl:w-80'>
        <div className='font-medium text-lg text-background'>{props.title}</div>
        <div className='2xl:font-normal 2xl:text-base text-gray-600 pt-2'>
          {props.description}
        </div>
        <div className='group flex font-semibold text-base text-indigo-600 hover:text-indigo-800 items-center space-x-2 pt-2'>
          <Link passHref href={props.href}>
            Learn More
          </Link>
          <Link passHref href={props.href}>
            <ArrowRightOutlined className="group-hover:animate-wiggle" />
          </Link>
        </div>
      </div>
    </div>
  )
}
