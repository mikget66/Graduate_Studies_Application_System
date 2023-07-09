import React from 'react'
import { MdAdd } from 'react-icons/md'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProgramAndDepartment = () => {

  const navigate = useNavigate()
  const [department, setDepartment] = React.useState([])
  const [adddDepartment, setAdddDepartment] = React.useState({
    department_name: ''
  })
  const [error ,setErroe] = React.useState("");

  const [program, setProgram] = React.useState([])
  const [addProgram, setAddProgram] = React.useState({
    program_name: '',
    level: '',
    department_id: ''
  })
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5000/manager/alldepartment', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setDepartment(res.data)
      }).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/managerLogin')
        }

      })

    axios.get('http://localhost:5000/manager/allprogram', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setProgram(res.data)
      }
      ).catch((error) => {
        console.log(error.response.data.manager)
        if (error.response.data.manager === false) {
          navigate('/managerLogin')
        }
      }
      )
  }, [])

  const addDepartment = () => {
    if (document.querySelector('.add-department input').value !== '') {
      let con = window.confirm('هل انت متاكد من اضافه القسم')
      if (con) {
        console.log(adddDepartment)
        axios.post('http://localhost:5000/manager/adddepartment', adddDepartment, { withCredentials: true })
          .then((res) => {
            console.log(res.data)
            window.location.reload()
          }).catch((error) => {
            console.log(error.response.data.errors.msg)
          })
      }
    } else {
      alert('ادخل اسم القسم')
    }
  }

  const addpro = () => {
    if (document.querySelector('.add-p input').value !== '' && document.querySelector('.add-p select').value !== '') {
      let con = window.confirm('هل انت متاكد من اضافه البرنامج')
      if (con) {
        console.log(addProgram)
        axios.post('http://localhost:5000/manager/addprogram', addProgram, { withCredentials: true })
          .then((res) => {
            console.log(res.data)
            alert('تم اضافه البرنامج')
            window.location.reload()
          }).catch((error) => {
            console.log(error.response.data.errors.msg)
            setErroe(error.response.data.errors.msg)

            
          })
      }
    } else {
      alert('ادخل بيانات  البرنامج')
    }
  }


  return (
    <>
      <div className="program-data">
        <section className='cotainer-stu'>


          <div className="navv">
            <h2>
              الاقسام
            </h2>


          </div>
          <div className="student-container nm">
            <div className="add-department">
              <input id='add-department'
                onChange={(e) => { setAdddDepartment({ ...adddDepartment, department_name: e.target.value }) }}
                type="text" placeholder='اسم القسم' />
              <button
                onClick={addDepartment}
                className="add"> <MdAdd />  اضافه القسم</button>
            </div>

            <table className="data-table">
              <tr>
                <th>رقم القسم </th>
                <th>اسم القسم</th>
                {/* <th>التعديلات</th> */}
              </tr>

              {department.map((item, index) => {

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.department_name}</td>
                    {/* <td  >
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>   تعديل </Link></button>
                      <button className='moreinfo'><Link style={{ textDecoration: "none" }}>  حذف  </Link></button>
                    </td> */}
                  </tr>
                )
              }
              )}


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

          </div>
          <div className="student-container nm">
            <div className="add-department add-p">
              <h3 style={{ fontSize: "1.5rem" }}>اضافه برنامج</h3>
              <input
                id='add-p'
                onChange={(e) => { setAddProgram({ ...addProgram, program_name: e.target.value }) }}
                type="text"
                placeholder='اسم البرنامج' />
              <select onChange={(e) => { setAddProgram({ ...addProgram, level: e.target.value }) }}>
                <option value=""> المرحله </option>
                <option value="0"> دبلومه </option>
                <option value="1"> ماجستير </option>
                <option value="2"> دكتوراه </option>
                <option value="3"> دكتوراه و ماجستير </option>
                <option value="4"> دبلومه و ماجستير </option>
                <option value="5"> دبلومه و ماجستير و دكتوراه </option>
              </select>
              <select onChange={(e) => { setAddProgram({ ...addProgram, department_id: e.target.value }) }}>
                <option id='sel2' value="" > القسم </option>
                {department.map((item) => {
                  return (
                    <option value={item.department_id}>{item.department_name}</option>
                  )
                })}


              </select>
              {error? <p > يرجى ادخال اسم القسم</p> : null}
              <button
                onClick={addpro}
                className="add"> <MdAdd />  اضافه البرنامج</button>

            </div>

            <table className="data-table">
              <tr>
                <th>رقم البرنامج </th>
                <th>اسم البرنامج</th>
                <th>اسم القسم</th>
                <th> المرحله</th>
              </tr>

              {program.map((item, index) => {

                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.program_name}</td>
                    <td>{item.department_name}</td>
                    {item.level === 0 ? <td>دبلومه</td> : item.level === 1 ? <td>ماجستير</td> : item.level === 2 ? <td>دكتوراه</td> : item.level === 3 ? <td>دكتوراه و ماجستير</td> : item.level === 4 ? <td>دبلومه و ماجستير</td> : item.level === 5 ? <td>دبلومه و ماجستير و دكتوراه</td> : <td> </td>}
                  </tr>
                )
              }
              )}


            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProgramAndDepartment;