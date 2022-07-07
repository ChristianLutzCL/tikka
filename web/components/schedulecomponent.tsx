import BackgroundIcon from './backgroundicon'
import Link from 'next/link'
import {ArrowRightOutlined} from '@ant-design/icons'
import Image from 'next/image'
import ScheduleTimeComponent from './scheduletimecomponent'
import { supabase } from '../utils/supabaseClient'
import { useState, useEffect } from 'react'
import moment from 'moment'




const weekdays = [
  {day: moment().format('[Today] - DD.MM.YYYY')},
  {day: moment().add(1, 'days').format('[Tomorrow] - DD.MM.YYYY')},
  {day: moment().add(2, 'days').format('dddd - DD.MM.YYYY')},
  {day: moment().add(3, 'days').format('dddd - DD.MM.YYYY')},
  {day: moment().add(4, 'days').format('dddd - DD.MM.YYYY')},
  {day: moment().add(5, 'days').format('dddd - DD.MM.YYYY')},
  {day: moment().add(6, 'days').format('dddd - DD.MM.YYYY')},
]

export default function ScheduleComponent(props) {
  moment().format();


  const [loading, setLoading] = useState(true)
  const [times, setTimes] = useState([]);

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
          `schedule`
        )
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setTimes(data.schedule)
        console.log(data);
      }
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='grid space-y-8'>
      {weekdays.map((day, id) => (
        <div className='space-y-2' key={id}>
          <span className='font-bold text-xl'>{day.day}</span>
          <div className='space-y-2'>
          <ScheduleTimeComponent time={'12:00'} />
          <ScheduleTimeComponent time={'12:00'} />
          </div>
        </div>
      ))}
    </div>
  )
}
