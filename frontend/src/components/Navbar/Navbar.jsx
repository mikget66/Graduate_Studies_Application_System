import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
        <button className="btn"> 
          <Link to='/profile/contact' style={{color:"white", textDecoration:"none"}}> تسجيل الخروج</Link>
        </button>

      <ul>
        <li>
          <Link to='/profile/contact' >تواصل معنا</Link>
        </li>
        <li>
          <Link to='/profile/Edit'>تعديل البيانات</Link>
        </li>
        <li>
          <Link to='/profile' >حاله بيانات التسجيل</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar