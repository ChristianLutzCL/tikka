import Link from 'next/link'

export default function CommentsSection() {
  return (
    <div className='grid bg-white px-32 pb-20'>
      <div className='justify-center align-center text-center text-3xl md:text-6xl font-black py-12 md:py-20 text-gray-900'>
        <div className=''>
          What people are saying
          <a className='text-transparent bg-clip-text bg-gradient-to-br from-menetrend-blue to-menetrend-pink'>
            .
          </a>
        </div>
        <div className='flex text-sm md:text-xl font-medium justify-center text-center text-gray-700 mt-8'>
          Companies and individuals use Menetrend to stay connected with their
          followers.
        </div>
      </div>
      <div className='grid justify-center space-y-4 text-gray-900'>
        <div className='flex space-x-4'>
          <div className='border border-gray-300 rounded-md h-44'>
            <div className='grid p-4 space-y-4'>
              <div className='flex text-gray-900 space-x-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='grid'>
                  <span>Test</span>
                  <span>Test2</span>
                </div>
              </div>
              <div className=''>
                <span>Test text test text</span>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 rounded-md h-44'>
            <div className='grid p-4 space-y-4'>
              <div className='flex text-gray-900 space-x-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='grid'>
                  <span>Test</span>
                  <span>Test2</span>
                </div>
              </div>
              <div className=''>
                <span>Test text test text</span>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 rounded-md h-44'>
            <div className='grid p-4 space-y-4'>
              <div className='flex text-gray-900 space-x-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='grid'>
                  <span>Test</span>
                  <span>Test2</span>
                </div>
              </div>
              <div className=''>
                <span>Test text test text</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex space-x-8'>
          <div className='border border-gray-300 rounded-md w-96 h-44'>
            <div className='grid p-4 space-y-4'>
              <div className='flex text-gray-900 space-x-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='grid'>
                  <span>Test</span>
                  <span>Test2</span>
                </div>
              </div>
              <div className=''>
                <span>Test text test text</span>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 rounded-md w-64 h-44'>
            <div className='grid p-4 space-y-4'>
              <div className='flex text-gray-900 space-x-2'>
                <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
                <div className='grid'>
                  <span>Test</span>
                  <span>Test2</span>
                </div>
              </div>
              <div className=''>
                <span>Test text test text</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
