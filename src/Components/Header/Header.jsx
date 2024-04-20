import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div>this is header page</div>
            <div className='flex gap-4'>
                <Link to="/login" className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Login Page</Link>
                <Link to="/home" className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Home Page</Link>
                <Link to="/" className='bg-slate-400 m-2 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-slate-700'>Main</Link>
            </div>
        </>
    )
}

export default Header