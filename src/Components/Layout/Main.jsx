import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Main = () => {
    return (
        <div>
            <Outlet />
            <Header />
        </div>
    )
}

export default Main