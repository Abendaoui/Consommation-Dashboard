import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../components/customer'
const CustomerLayout = () => {
  return (
    <section className='bg-gray-100 h-[110vh]'>
      <Header />
      <Outlet />
    </section>
  )
}

export default CustomerLayout
