import React from 'react'
import ImageUploading, {ImageListType} from 'react-images-uploading'
import {supabase} from '../../utils/supabaseClient'
import Tippy from '@tippyjs/react'
import Image from 'next/image'
import Button from '../../components/button'
import IconButton from '../../components/iconbutton'
import {BiTrash} from 'react-icons/bi'
import {MdOutlineChangeCircle, MdOutlineImageNotSupported} from 'react-icons/md'
import {AiOutlineCloudUpload} from 'react-icons/ai'

export default function ImageUploader({setParentImages}) {
  const [images, setImages] = React.useState([])
  const maxNumber = 9

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    setImages(imageList as never[])
    setParentImages(imageList as never[])
  }

  return (
    <div className='w-full'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className='upload__image-wrapper overflow-x-hidden'>
            <div className='relative flex pb-4 space-x-2'>
              <Tippy
                content='Uplaod images'
                animation='shift-away'
                arrow={false}
                placement='right'
                className='text-xs dark:bg-white dark:text-background'>
                <div>
                  <Button
                    className='bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'
                    onClick={onImageUpload}>
                    <AiOutlineCloudUpload className='w-6 h-6' />
                  </Button>
                </div>
              </Tippy>
              {images.length != 0 ? (
              <Tippy
                content='Delete all images'
                animation='shift-away'
                arrow={false}
                placement='right'
                className='text-xs dark:bg-white dark:text-background'>
                <div>
                  <Button
                    className='bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full'
                    onClick={onImageRemoveAll}>
                    <BiTrash className='w-6 h-6' />
                  </Button>
                </div>
              </Tippy>
              ) : null}
            </div>
            <div className='flex w-full overflow-y-auto h-52'>
              {!imageList.length ? (
                <div className='flex justify-center items-center bg-gray-100 dark:bg-gray-800 h-52 w-full'>
                  <div className='grid items-center justify-center'>
                    <div className='flex justify-center'>
                      <MdOutlineImageNotSupported className='h-24 w-20 text-gray-400' />
                    </div>
                    <div className='font-semibold text-gray-400 text-center'>
                      Add your images (max. 10)
                    </div>
                    <Button
                      className='flex font-medium text-white bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 justify-center align-center py-1 rounded-sm'
                      onClick={onImageUpload}>
                      Upload images
                    </Button>
                  </div>
                </div>
              ) : (
                imageList.map((image, index) => (
                  <div
                    key={index}
                    className='flex-none image-item w-52 h-56 group'>
                    <div className='relative h-52'>
                      <div className='absolute w-52 h-52 group-hover:grayscale'>
                        <Image
                          alt={image.file.name}
                          src={image.dataURL}
                          width={208}
                          height={208}
                        />
                      </div>
                      <div className='relative flex space-x-2 h-8 w-52 p-4 invisible group-hover:visible'>
                        <div className='text-white font-bold text-lg'>
                          {index + 1} |{' '}
                        </div>
                        <IconButton onClick={() => onImageUpdate(index)}>
                          <MdOutlineChangeCircle className='text-gray-900' />
                        </IconButton>
                        <IconButton onClick={() => onImageRemove(index)}>
                          <BiTrash className='text-gray-900' />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
