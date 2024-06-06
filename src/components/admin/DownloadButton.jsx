import React from 'react'

const DownloadButton = ({ title, onClick }) => {
  return (
    <article className='flex justify-center items-center'>
      <button
        onClick={onClick}
        type='button'
        className='relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-gray-900 rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform ease-in-out'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5 ml-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
          />
        </svg>

        <span className='pl-2 mx-1'>{title}</span>
      </button>
    </article>
  )
}

export default DownloadButton
