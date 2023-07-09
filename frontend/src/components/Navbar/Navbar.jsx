import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { t } from 'i18next';


const Navbar = ({ User }) => {
  const [user, setUser] = React.useState({})

  const navigate = useNavigate()
  console.log(User)

  const logout = () => {
    try {
      axios.defaults.withCredentials = true
      axios.get('http://localhost:5000/logout', { withCredentials: true })
        .then((res) => {
          navigate('/login')
        }).catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav >
      <button
        onClick={logout}
        className="btn"> تسجيل الخروج
      </button>

      <ul>
        <li>
          <Link to='/profile/contact' >تواصل معنا</Link>
        </li>
        <li>
          {User.status === 3 ? (
            <Link to='/profile/edit'> تعديل البيانات  </Link>
          ) : (
            <span style={{ color: "gray", fontWeight: "600", fontSize: "17px", cursor: "not-allowed" }}>تعديل البيانات</span>

          )}
        </li>
        <li>
          <Link to='/profile' >حاله بيانات التسجيل</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar