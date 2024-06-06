import React from 'react'

const AddButton = ({ title, handleOpen }) => {
  return (
    <article className='flex justify-center items-center'>
      <button
        onClick={handleOpen}
        type='button'
        className='relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-gray-900 rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#FFFFFF'
        >
          <g>
            <rect fill='none' height={24} width={24} />
          </g>
          <g>
            <g>
              <path d='M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z' />
            </g>
          </g>
        </svg>
        <span className='pl-2 mx-1'>{title}</span>
      </button>
    </article>
  )
}

export default AddButton
