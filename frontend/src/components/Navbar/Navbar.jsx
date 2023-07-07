import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {

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
          <Link to='/profile/contact' >تواصل معنا</Link>
        </li>
        <li>
        {user.status !== 3 ? (
          <span style={{ color: "gray" ,fontWeight : "600" ,fontSize:"17px"}}>تعديل البيانات</span>
        ) : (
          <Link to='/profile/edit'> تعديل البيانات  </Link>
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