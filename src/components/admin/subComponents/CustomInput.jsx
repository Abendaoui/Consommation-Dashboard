import React from 'react'

const CustomInput = ({
  value,
  onChange,
  placeHolder,
  name,
  id,
  type,
  className = '',
}) => {
  return (
    <input
      type={type}
      className={`px-4 py-2 border-2 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 ${className}`}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    />
  )
}

export default CustomInput
