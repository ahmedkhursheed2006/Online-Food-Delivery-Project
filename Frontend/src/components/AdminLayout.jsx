import React from 'react'
import { Outlet } from 'react-router'
import AdminNavbar from '../adminComponents/AdminNavbar'
import Sidebar from '../adminComponents/AdminSidebar'


function RestaurantLayout() {
  return (
    <>
    <AdminNavbar/>
    <div className='flex h-screen'>

    <Sidebar/>
    <main className='flex-1 p-4'>

    <Outlet/>
    </main>
    </div>
    </>
  )
}

export default RestaurantLayout