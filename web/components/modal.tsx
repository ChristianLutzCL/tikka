import {Dialog, Transition, Listbox} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'

const people = [
  {id: 1, name: 'Durward Reynolds', unavailable: false},
  {id: 2, name: 'Kenton Towne', unavailable: false},
  {id: 3, name: 'Therese Wunsch', unavailable: false},
  {id: 4, name: 'Benedict Kessler', unavailable: true},
  {id: 5, name: 'Katelyn Rohan', unavailable: false},
]

export default function Modal() {
  let [isOpen, setIsOpen] = useState(true)
  const [selected, setSelected] = useState(people[0])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform rounded-2xl dark:bg-gray-900 dark:text-white bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900 dark:text-white'>
                    Select your Channel
                  </Dialog.Title>
                  <div className='mt-2'>
                    <Listbox value={selected} onChange={setSelected}>
                      <div className='relative mt-1'>
                        <Listbox.Button className='relative w-full cursor-default rounded-lg dark:bg-gray-800 dark:text-white bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                          <span className='block truncate'>
                            {selected.name}
                          </span>
                          <span className='pointer-events-none absolute z-10 inset-y-0 right-0 flex items-center pr-2'>
                            <SelectorIcon
                              className='h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave='transition ease-in duration-100'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'>
                          <Listbox.Options className='absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-800 dark:text-white bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({active}) =>
                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active
                                      ? 'bg-amber-100 text-amber-900'
                                      : 'text-gray-900'
                                  }`
                                }
                                value={person}>
                                {({selected}) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}>
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                        <CheckIcon
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
