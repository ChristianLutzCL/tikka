import React from 'react'

export default function MenetrendInput(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
      required
      minLength={props.minLength}
      maxLength={props.maxLength}
      className={props.className}
      placeholder={props.placeholder}
    />
  )
}
