import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { navLinks } from '../../../assets/data/data'
const NavBar = ({ open }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <nav
      className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
        open ? 'flex' : 'hidden'
      }`}
    >
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
            to={link.href}
          >
            <div className='flex gap-2 items-center'>
              <span className='size-5'>{link.icon}</span>
              <span className=' mt-2'>{link.label}</span>
            </div>
          </Link>
        )
      })}

      <button
        onClick={handleLogout}
        className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
      >
        <div className='flex gap-2 items-center'>
          <span className='size-5' title='déconnexion'>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </span>
          <span className='mt-2 md:hidden'>Déconnexion</span>
        </div>
      </button>
    </nav>
  )
}

export default NavBar
