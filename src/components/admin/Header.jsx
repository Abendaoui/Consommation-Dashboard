import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathParts = location.pathname.split('/').filter((part) => part)

  const route = pathParts[1] || 'Utilisateurs'
  const handleLogout = async () => {
    navigate('/login')
  }
  return (
    <header className='fixed w-full flex items-center justify-between h-14 text-white z-10'>
      <div className='w-14 md:w-64 h-14 bg-gray-950 border-none flex items-center justify-center'>
        <span className='hidden md:block cursor-pointer'>Tableau De Bord</span>
        <span className='md:hidden block cursor-pointer' title='Dashboard'>
          <DashboardIcon />
        </span>
      </div>
      <div className='flex justify-between items-center h-14 bg-gray-800 header-right'>
        <div className='flex items-center justify-center w-full cursor-pointer text-xl capitalize'>
          <h1>{route}</h1>
        </div>
        <ul className='flex items-center'>
          <li>
            <button
              onClick={handleLogout}
              className='flex items-center mr-4 hover:text-blue-100'
            >
              <span className='inline-flex mr-1'>
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
              Déconnexion
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
