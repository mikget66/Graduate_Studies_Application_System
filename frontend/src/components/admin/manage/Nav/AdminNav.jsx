import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminNav = () => {

  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5000/student/studentdetails', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        if (error.response.data.user === false) {
          navigate('/login')
        }
      })
  }, [])
  return (
    <nav >
      <button className="btn">
        <Link to='/profile/contact' style={{ color: "white", textDecoration: "none" }}> تسجيل الخروج</Link>
      </button>

      <ul>

        <li>
          <Link to='/admin' > عرض جميع الطلاب</Link>
        </li>

      </ul>
    </nav>

  )
}

export default AdminNav