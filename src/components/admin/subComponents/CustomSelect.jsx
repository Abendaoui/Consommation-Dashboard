import React from 'react'

const CustomSelect = ({ name, id, options, value, onChange }) => {
  return (
    <div className='relative focus-within:text-gray-600 text-gray-400'>
      <select
        type='text'
        name={name}
        id={id}
        className='px-2 py-2 border-2 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CustomSelect
