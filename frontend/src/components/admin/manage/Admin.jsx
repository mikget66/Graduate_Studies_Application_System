import React from 'react'
import './student.css'
import Nav from './Nav/AdminNav'
import { Outlet } from 'react-router-dom'
import Logo from '../../../images/mini-logo.png'

const Admin = () => {
    return (
        <>
            <Nav/>
            <div className="g-container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Admin