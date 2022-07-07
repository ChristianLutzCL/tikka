import Image from 'next/image'
import {useEffect, useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat, BsBookmark} from 'react-icons/bs'
import {FiSend, FiArrowLeft} from 'react-icons/fi'
import {MdOutlineImageNotSupported} from 'react-icons/md'

export default function InstagramPreview({
  description,
  image,
  userName,
  userImage,
}) {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(image)
  }, [image])

  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='344'
        height='714'
        viewBox='0 0 344 714'
        fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M51.2159 0H292.784C320.127 0 342.293 22.1678 342.293 49.5131V156.368C343.287 156.72 344 157.668 344 158.783V229.638C344 230.753 343.287 231.702 342.293 232.054V664.159C342.293 691.504 320.127 713.672 292.784 713.672H51.2159C23.873 713.672 1.7072 691.504 1.7072 664.159V243.151C0.71259 242.8 0 241.851 0 240.736V199.76C0 198.645 0.71259 197.696 1.7072 197.344V181.687C0.71259 181.335 0 180.387 0 179.272V138.295C0 137.18 0.71259 136.231 1.7072 135.88V115.1C0.71259 114.749 0 113.8 0 112.685V91.3431C0 90.228 0.71259 89.2794 1.7072 88.9278V49.5131C1.7072 22.1678 23.873 0 51.2159 0Z'
          fill='black'
        />
        <foreignObject
          x={12}
          y={10}
          width='320'
          height='694'
          className='rad flex justify-center'>
          <style>
            {`
              .rad{
                  border-radius: 40px;
              }
            `}
          </style>
          <div className='h-full bg-gray-500'>
            <div className='bg-white h-6 flex justify-center'>
              <div className='h-6 w-2/4 bg-black rounded-b-2xl'></div>
            </div>
            <div className='flex justify-between items-center px-4 bg-white h-12 p-2'>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-gray-400 rounded-full mr-2'>
                  {userImage ? (
                    <Image
                      src={userImage}
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className='text-xs font-semibold'>{userName}</div>
              </div>
              <BsThreeDots />
            </div>
            <div className='relative h-80 '>
              <div className='overflow-x-auto snap-x flex scrollbar-hide '>
                {!image.length ? (
                  <div className='bg-gray-200 w-80 h-80 flex justify-center items-center'>
                    <div className='grid items-center justify-center'>
                      <div className='flex justify-center'>
                        <MdOutlineImageNotSupported className='h-24 w-20 text-gray-400' />
                      </div>
                      <div className='font-semibold text-gray-400 text-center flex space-x-2 justify-center items-center'>
                        <FiArrowLeft /> <div>Add your images</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  image.map((img, index) => (
                    <div key={index} className='flex-none snap-center'>
                      <div className='flex flex-col'>
                        {!image[index] ? (
                          <div>none</div>
                        ) : (
                          <Image
                            src={image[index].dataURL}
                            alt={image[index].name}
                            width={320}
                            height={320}
                          />
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className='bg-white max-h-full h-full'>
              <div className='flex h-12 justify-between items-center w-full p-2'>
                <div className='flex items-center w-1/3 space-x-4'>
                  <AiOutlineHeart className='w-6 h-6' />
                  <BsChat className='w-6 h-6' />
                  <FiSend className='w-6 h-6' />
                </div>
                <div className='flex space-x-2'>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                </div>
                <div>
                  <BsBookmark className='w-6 h-6' />
                </div>
              </div>
              <div className='h-full w-full flex p-2'>
                <div className='text-xs'>
                  <b>{userName}</b> {description}
                </div>
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
