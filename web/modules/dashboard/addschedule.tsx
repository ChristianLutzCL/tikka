import ScheduleComponent from '../../components/schedulecomponent'
import {useEffect, useState, Fragment} from 'react'
import {supabase} from '../../utils/supabaseClient'
import {Transition, Listbox} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'

const days = [
  {id: 1, name: 'Every day'},
  {id: 2, name: 'Every Monday'},
  {id: 3, name: 'Every Thuesday'},
  {id: 4, name: 'Every Wednesday'},
  {id: 5, name: 'Every Thursday'},
  {id: 6, name: 'Every Friday'},
  {id: 7, name: 'Every Saturday'},
  {id: 8, name: 'Every Sunday'},
]

const hours = [
  {id: 1, name: '00'},
  {id: 2, name: '01'},
  {id: 3, name: '02'},
  {id: 4, name: '03'},
  {id: 5, name: '04'},
  {id: 6, name: '05'},
  {id: 7, name: '06'},
  {id: 8, name: '07'},
  {id: 9, name: '08'},
  {id: 10, name: '09'},
  {id: 11, name: '10'},
  {id: 12, name: '11'},
]

const minutes = [
  {id: 1, name: '00'},
  {id: 2, name: '05'},
  {id: 3, name: '10'},
  {id: 4, name: '15'},
  {id: 5, name: '20'},
  {id: 6, name: '25'},
  {id: 7, name: '30'},
  {id: 8, name: '35'},
  {id: 9, name: '40'},
  {id: 10, name: '45'},
  {id: 11, name: '50'},
  {id: 12, name: '55'},
]

const amPM = [
  {id: 1, name: 'AM'},
  {id: 2, name: 'PM'},
]

export default function AddSchedule() {
  const [selectedDay, setSelectedDay] = useState(days[0])
  const [selectedHour, setSelectedHour] = useState(hours[0])
  const [selectedMinute, setSelectedMinute] = useState(minutes[0])
  const [selectedAMPM, setSelectedAMPM] = useState(amPM[1])

  const [loading, setLoading] = useState(true)
  const [first_name, setFirstName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let {data, error, status} = await supabase
        .from('profiles')
        .select(
          `username, first_name, last_name, bio, email, website, avatar_url`
        )
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='pt-12 dark:text-white text-background'>
      <span>Add a new posting time</span>
      <div className='flex items-center space-x-2'>
        <Listbox value={selectedDay} onChange={setSelectedDay}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-52 cursor-default rounded-md bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <span className='block truncate'>{selectedDay.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
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
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {days.map((day, dayIdx) => (
                  <Listbox.Option
                    key={dayIdx}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'text-gray-900 dark:text-white'
                      }`
                    }
                    value={day}>
                    {({selected}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {day.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
        <Listbox value={selectedHour} onChange={setSelectedHour}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-20 cursor-default rounded-md bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <span className='block truncate'>{selectedHour.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
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
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {hours.map((hour, hourIdx) => (
                  <Listbox.Option
                    key={hourIdx}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'text-gray-900 dark:text-white'
                      }`
                    }
                    value={hour}>
                    {({selected}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {hour.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
        <Listbox value={selectedMinute} onChange={setSelectedMinute}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-20 cursor-default rounded-md bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <span className='block truncate'>{selectedMinute.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
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
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {minutes.map((minute, minuteIdx) => (
                  <Listbox.Option
                    key={minuteIdx}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'text-gray-900 dark:text-white'
                      }`
                    }
                    value={minute}>
                    {({selected}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {minute.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
        <Listbox value={selectedAMPM} onChange={setSelectedAMPM}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-20 cursor-default rounded-md bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <span className='block truncate'>{selectedAMPM.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
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
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {amPM.map((time, timeIdx) => (
                  <Listbox.Option
                    key={timeIdx}
                    className={({active}) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'text-gray-900 dark:text-white'
                      }`
                    }
                    value={time}>
                    {({selected}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}>
                          {time.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
        <button
          onClick={(e) =>
            console.log(selectedDay, selectedHour, selectedMinute, selectedAMPM)
          }
          className='bg-indigo-600 text-white px-3 py-2 rounded-md'>
          Add time
        </button>
      </div>
    </div>
  )
}
