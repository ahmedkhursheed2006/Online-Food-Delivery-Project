import React from 'react'

import {Outlet} from 'react-router'
import Navbar from './Navbar'
function CustomerLayout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default CustomerLayout
