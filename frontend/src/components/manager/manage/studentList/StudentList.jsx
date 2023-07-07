import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const StudentList = () => {
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
    <>
    <section className='cotainer-stu'>

    
      <div className="navv">
        <h2>
          الطلاب
        </h2>
       <select className='filter' name="" id="" placeholder=''>
        <option value="">فلتره</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
       </select>
      </div>
      <div className="student-container">
    
        <table className="data-table">
          <tr>
            <th>الاسم</th>
            <th>الرقم القومي</th>
            <th>تاريخ الميلاد</th>
            <th>التليفون</th>
            <th>النوع</th>
            <th>النشاط</th>
            <th>المسابقه</th>
            <th>الاجراءات</th>
          </tr>

          <tr>
            <td>name</td>
            <td>sdd</td>
            <td>sdd</td>
            <td>sdd</td>
            <td>sdd</td>
            <td>sdd</td>
            <td>sdd</td>
            <td><button className='moreinfo'><Link to="/manager/show" style={{textDecoration:"none"}}> مزيد من التفاصيل </Link></button></td>
          </tr>


        </table>
      </div>
      </section>


  </>
  )
}

export default StudentList