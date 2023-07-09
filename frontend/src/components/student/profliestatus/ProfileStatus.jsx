import React, { useEffect } from 'react'
import './profilestatus.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const ProfileStatus = () => {
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
    <section className="cotainer">
      <div className="info">
        <h2>حاله بيانات التسجيل</h2>
        <div className='info-con'>
          <div className="sub-info">
            <span className='title'>اسم الطالب</span>
            <span className='inner'>{user.student_name}   </span>
          </div>
          <div className="sub-info">
            <span className='title'>حاله الطلب</span>
            <span className='inner'>
              {user.status == 0 ? "تم رفض الطلب" : user.status == 1 ? "تم قبول طلبك" : user.status == 2 ? "لم يتم النظر في طلبك بعد" : "يجب عليك تعديل بياناتك"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileStatus