import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './SubComponents'
const Header = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)
  return (
    <header className='flex flex-col max-w-7xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 bg-gray-800 md:rounded-md shadow-md md:mt-5'>
      <div className='flex flex-row items-center justify-between p-4'>
        {/* Loo */}
        <Link
          to='/formdata'
          className='text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline'
        >
          <h1>
            Consom
            <span className='text-[#16e1ed]'>.</span>
          </h1>
        </Link>
        {/* Toogle Button */}
        <button
          className='rounded-lg md:hidden focus:outline-none focus:shadow-outline text-white'
          onClick={handleToggle}
        >
          <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
            {open ? (
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            ) : (
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            )}
          </svg>
        </button>
      </div>
      {/* NavLinks */}
      <NavBar open={open} />
    </header>
  )
}

export default Header
