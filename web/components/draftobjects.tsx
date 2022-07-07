import BackgroundIcon from './backgroundicon'
import Link from 'next/link'
import {ArrowRightOutlined} from '@ant-design/icons'
import Image from 'next/image'

export default function DraftObjects(props) {
  return (
    <div className='rounded-md flex'>
      {props.drafts.map((i) => (
        <div key={i} className='mr-4 rounded-md bg-white dark:bg-gray-800 dark:text-white overflow-hidden'>
          {i.images[0] ? (
            <Image
              src={i.images[0]}
              layout='intrinsic'
              width={300}
              height={300}
              alt='a'
            />
          ) : (
            <div>No image</div>
          )}
          <div className='grid m-2'>
            <span>{i.description}</span>
            <span>{i.is_scheduled ? 'Scheduled' : 'Not scheduled'}</span>
            <hr />
            <span className='text-sm'>{i.created_at}</span>
            <div className='flex justify-end pt-6 space-x-2'>
              <button className='bg-blue-500 py-2 px-4 text-white font-semibold rounded-md'>
                Schedule
              </button>
              <button className='bg-blue-500 py-2 px-4 text-white font-semibold rounded-md'>
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
