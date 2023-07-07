import React from 'react'
import './student.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Logo from '../../images/mini-logo.png'

const Profile = () => {
    return (
        <>
            <Navbar />
            
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <Outlet />
        </>
    )
}

export default Profile