import React from 'react'
import { MdAdd } from 'react-icons/md'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProgramAndDepartment = () => {
  const [t, i18n] = useTranslation();


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
      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              الاقسام
            </h2>
            <div className="add-department">
              <input type="text" placeholder='اسم القسم'/>
              <button className="add"> <MdAdd />  اضافه القسم</button>
            </div>
            
          </div>
          <div className="student-container">

            <table className="data-table">
              <tr>
                <th>رقم القسم </th>
                <th>اسم القسم</th>
              </tr>

              <tr>
                <td>name</td>
                <td>sdd</td>
              </tr>


            </table>
          </div>
        </section>


      </div>
      <div className="program-data">
      <section className='cotainer-stu'>


<div className="navv">
  <h2>
    البرامج
  </h2>
  <div className="add-department">
              <input type="text" placeholder='اسم البرنامج'/>
              <select>
                <option > المرحله </option>
                <option> دبلومه </option>
                <option> ماجستير </option>
                <option> دكتوراه </option>
                <option> دكتوراه و ماجستير </option>
                <option> دبلومه و ماجستير و دكتوراه </option>
              </select>
              <select>
                <option > القسم </option>
                
              </select>
              <button className="add"> <MdAdd />  اضافه البرنامج</button>
            </div>
</div>
<div className="student-container">

  <table className="data-table">
    <tr>
      <th>رقم البرنامج </th>
      <th>اسم البرنامج</th>
      <th>اسم القسم</th>
      <th> المرحله</th>
    </tr>

    <tr>
      <td>name</td>
      <td>sdd</td>
      <td>sdd</td>
      <td>sdd</td>
    </tr>


  </table>
</div>
</section>
      </div>
    </>
  )
}

export default ProgramAndDepartment