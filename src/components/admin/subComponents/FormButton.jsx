import React from 'react'

const FormButton = ({ type, icon = '', onClick, className = '', title }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none ${className}`}
    >
      <span>{icon}</span> {title}
    </button>
  )
}

export default FormButton
