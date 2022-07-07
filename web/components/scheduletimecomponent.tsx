import BackgroundIcon from './backgroundicon'
import Link from 'next/link'
import {ArrowRightOutlined} from '@ant-design/icons'
import Image from 'next/image'

export default function ScheduleTimeComponent(props) {
  return (
    <div className='w-full h-16 bg-white dark:bg-gray-800 rounded-md items-center flex justify-center dark:hover:border-gray-600 dark:hover:border hover:border-gray-600 hover:border'>
      <span>{props.time}</span>
    </div>
  )
}
