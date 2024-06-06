import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  const handleLogin = async (ev) => {
    ev.preventDefault()
    if (login.email === 'admin@gmail.com') {
      navigate('/dashboard')
    }
    if (login.email === 'userone@gmail.com') {
      navigate('/formdata')
    } else {
      setError('Email or Password Incoorect')
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setError('')
    }, 2000)
  }, [error])
  return (
    <section className='flex'>
      <div className='w-1/2 hidden lg:block border-r-2 h-screen border-gray-500'>
        <div className='flex flex-col gap-5  justify-center'>
          <article className='ml-10'>
            <img
              src='src/assets/images/2.png'
              alt='Menister Image'
              width='170'
              height='170'
              className='object-contain'
            />
          </article>
          <article className='mx-auto mt-30'>
            <img
              src='src/assets/images/5.png'
              alt='Logo Image'
              width='700'
              height='350'
              className='object-contain'
            />
          </article>
        </div>
      </div>
      {/* Right: Login Form */}
      <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 flex flex-col items-center'>
        <h1 className='text-2xl font-semibold text-center mb-10'>
          Se connecter
        </h1>
        <form onSubmit={handleLogin} className='w-full'>
          {/* Email Input */}
          <div className='mb-4'>
            <label htmlFor='Email' className='block text-gray-600 mb-2'>
              E-mail
            </label>
            <input
              type='text'
              id='Email'
              name='Email'
              className='w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-800 border-2'
              autoComplete='off'
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              required
              placeholder='johndoe@gmail.com'
            />
          </div>
          {/* Password Input */}
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-600 mb-2'>
              Mot De passe
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-gray-800 border-2'
              autoComplete='off'
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              required
              placeholder='********'
            />
          </div>
          {/* Forgot Password Link */}
          <div className='mb-6 text-gray-500'>
            <button type='button' className='hover:underline'>
              Forgot Password?
            </button>
          </div>
          {/* Login Button */}
          <button
            type='submit'
            className='bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-md py-2 px-4 w-full'
          >
            Se connecter
          </button>
          {error && (
            <div className='bg-red-500 px-1 text-white py-2 text-center rounded-md mt-4'>
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Login
