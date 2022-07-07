import React from 'react'
import {MailOutlined, LockOutlined} from '@ant-design/icons'

export default function IconInput(props) {
  return (
    <div className='flex justify-center items-center mt-1 relative rounded-md font-sans w-full'>
      <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
        <span className='text-gray-500 sm:text-sm flex items-center'>
          {props.children}
        </span>
      </div>
      <input
        type={props.type}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        className={props.className}
        placeholder={props.placeholder}
      />
    </div>
  )
}

IconInput.defaultProps = {
  type: 'text',
  defaultValue: '',
  onChange: {},
  autoComplete: true,
  minLength: 10,
  maxLenghth: 100,
  className:
    'flex items-center justify-center focus:ring-ping-800 focus:border-gray-500 invalid:border-red-700 invalid:text-red-700 focus:outline-none h-10 w-full pl-8 pr-2 sm:text-sm border text-gray-800 bg-gray-100 border-gray-300 rounded-md',
  placeholder: 'PLACEHOLDER',
  required: false,
  children: <MailOutlined />,
}
