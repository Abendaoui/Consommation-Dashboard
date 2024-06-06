import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Header } from '../../components/admin'
const AdminLayout = () => {
  return (
    <section className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-black'>
      <Header />
      <NavBar />
      <main className='h-full ml-14 mt-24 mb-10 md:ml-64 px-10'>
        <Outlet />
      </main>
    </section>
  )
}

export default AdminLayout
