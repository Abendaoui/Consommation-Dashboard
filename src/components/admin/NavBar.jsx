import React from 'react'
import { navBarLinks } from '../../assets/data/data'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <aside className='fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-800 h-full text-white transition-all duration-300 border-none z-10 sidebar'>
      <div className='overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow'>
        <ul className='flex flex-col py-4 space-y-1'>
          {/* Data section */}
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center mt-5 h-8'>
              <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                Données
              </div>
            </div>
          </li>
          {navBarLinks.slice(0, 7).map((link) => (
            <li key={link.id}>
              <Link
                to={`/dashboard/${link.link}`}
                className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-50 pr-6'
                title={link.label}
              >
                <span className='inline-flex justify-center items-center ml-4'>
                  {link.icon}
                </span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <li className='px-5 hidden md:block'>
            <div className='flex flex-row items-center mt-5 h-8'>
              <div className='text-sm font-light tracking-wide text-gray-400 uppercase'>
                Visuel
              </div>
            </div>
          </li>
          {navBarLinks.slice(7).map((link) => (
            <li key={link.id}>
              <Link
                to={`/dashboard/${link.link}`}
                className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-50 pr-6'
                title={link.label}
              >
                <span className='inline-flex justify-center items-center ml-4'>
                  {link.icon}
                </span>
                <span className='ml-2 text-sm tracking-wide truncate'>
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default NavBar
