import React, { useEffect } from 'react'
import './studentlist.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const StudentListadmin = () => {
  const navigate = useNavigate()
  const [student, setStudent] = React.useState({})
  useEffect(() => {
    try {
      axios.defaults.withCredentials = true
      axios.get('http://localhost:5000/manager/allaaplication', { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          setStudent(res.data)
        }).catch((error) => {
          console.log(error.response)
          navigate('/managerLogin')
        })
    } catch (error) {
      console.log(error)
    }

  }, [])

  const [filter, setFilter] = useState(4);
  console.log(student[0])

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <>
      <section className='cotainer-stu'>
        <div className="navv">
          <h2>
            الطلاب
          </h2>
          <select
            onChange={(e) => {
              setFilter(parseInt(e.target.value))
            }}
            className='filter' name="" id="" placeholder=''>
            <option value="">فلتره</option>
            <option value="5">مرفوض</option>
            <option value="4">مقبول</option>
            <option value="1">موفقه كليه</option>
          </select>
        </div>
        <div className="student-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>اسم الطالب</th>
                <th>رقم الهوية الوطنية</th>
                <th>القسم</th>
                <th>البرنامج</th>
                <th>المرحله</th>
                <th> حاله الطلب</th>
                <th>تاريخ التقديم</th>
                <th>التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              {filter === 4 ? Object.values(student).map((user) => (
                user.status === 4 ?
                  <tr key={user.student_id}>
                    <td>{user.student_name}</td>
                    <td>{user.national_id}</td>
                    <td>{user.department_name}</td>
                    <td>{user.program_name}</td>
                    {user.level === 0 ? <td>دبلومه</td> : user.level === 1 ? <td>ماجستير</td> : <td>دكتوراه</td>}
                    {user.status === 1 ? <td>موفقه كليه</td> : user.status === 4 ? <td>مقبول</td> : user.status === 5 ? <td> مرفوض</td> : <td>قيد التعديل</td>}
                    <td>{(user.submission_date).slice(0, 10)}</td>
                  <td><button className='moreinfo'><Link to={`/manager/show/${user.student_id} `}style={{ textDecoration: "none" }}> مزيد من التفاصيل </Link></button></td>
                  </tr> : null
              )) : filter === 5 ? Object.values(student).map((user) => (
                user.status === 5 ?
                  <tr key={user.student_id}>
                    <td>{user.student_name}</td>
                    <td>{user.national_id}</td>
                    <td>{user.department_name}</td>
                    <td>{user.program_name}</td>
                    {user.level === 0 ? <td>دبلومه</td> : user.level === 1 ? <td>ماجستير</td> : <td>دكتوراه</td>}
                    {user.status === 1 ? <td>موفقه كليه</td> : user.status === 4 ? <td>مقبول</td> : user.status === 5 ? <td> مرفوض</td> : <td>قيد التعديل</td>}
                    <td>{(user.submission_date).slice(0, 10)}</td>
                  <td><button className='moreinfo'><Link to={`/manager/show/${user.student_id} `}style={{ textDecoration: "none" }}> مزيد من التفاصيل </Link></button></td>
                  </tr> : null
              )) : filter === 1 ? Object.values(student).map((user) => (
                user.status === 1 ?
                  <tr key={user.student_id}>
                    <td>{user.student_name}</td>
                    <td>{user.national_id}</td>
                    <td>{user.department_name}</td>
                    <td>{user.program_name}</td>
                    {user.level === 0 ? <td>دبلومه</td> : user.level === 1 ? <td>ماجستير</td> : <td>دكتوراه</td>}
                    {user.status === 1 ? <td>موفقه كليه</td> : user.status === 4 ? <td>مقبول</td> : user.status === 5 ? <td> مرفوض</td> : <td>قيد التعديل</td>}
                    <td>{(user.submission_date).slice(0, 10)}</td>
                  <td><button className='moreinfo'><Link to={`/manager/show/${user.student_id} `}style={{ textDecoration: "none" }}> مزيد من التفاصيل </Link></button></td>
                  </tr> : null
              )) : Object.values(student).map((user) => (
                <tr key={user.student_id}>
                  <td>{user.student_name}</td>
                  <td>{user.national_id}</td>
                  <td>{user.department_name}</td>
                  <td>{user.program_name}</td>
                  {user.level === 0 ? <td>دبلومه</td> : user.level === 1 ? <td>ماجستير</td> : <td>دكتوراه</td>}
                  {user.status === 1 ? <td>موفقه كليه</td> : user.status === 4 ? <td>مقبول</td> : user.status === 5 ? <td> مرفوض</td> : <td>قيد التعديل</td>}
                  <td>{(user.submission_date).slice(0, 10)}</td>
                  <td><button className='moreinfo'><Link to={`/manager/show/${user.student_id} `}style={{ textDecoration: "none" }}> مزيد من التفاصيل </Link></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default StudentListadmin;