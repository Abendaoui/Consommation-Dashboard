import React from 'react'
import { CustomLabel, CustomInput, CustomSelect } from './subComponents'

const InputWrapper = (props) => {
  return (
    <div className={`flex flex-col text-sm ${props.className || ''}`}>
      <CustomLabel label={props.label} />
      {props.select ? <CustomSelect {...props} /> : <CustomInput {...props} />}
    </div>
  )
}

export default InputWrapper
