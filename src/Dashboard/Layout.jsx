import React from 'react'
import DbHeader from './MainDashboard/header/DbHeader'
import Footer from './Signup_Login/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from './MainDashboard/db_components/Sidebar'
import './MainDashboard/db_components/sidebar.css'
import ModelSidebarList from './MainDashboard/db_components/ModelSidebarList'

const Layout = () => {
    return (
        <div className='main_dashboard_wrapper bg-black-20 text-white grid content-between min-h-screen'>
            <div>
                <DbHeader />
                <div className='dashboard_body flex flex-wrap items-start min-h-screen mt-5'>
                    <div className='sidebar_wrapper flex justify-end w-1/5 bg-dark-black rounded-r-2xl p-6 py-8'>
                        <Sidebar />
                    </div>
                    <div className='w-3/5 px-5'>
                        <Outlet />
                    </div>
                    <div className='flex justify-start w-1/5 bg-dark-black rounded-l-2xl p-6 py-8'>
                        <ModelSidebarList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout