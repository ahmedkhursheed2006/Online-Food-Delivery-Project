import React from 'react'
import { Outlet } from 'react-router'
import RestaurantNavbar from '../restaurantComponents/RestaurantNavbar'
import Sidebar from '../restaurantComponents/Sidebar'


function RestaurantLayout() {
  return (
    <>
    <RestaurantNavbar/>
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