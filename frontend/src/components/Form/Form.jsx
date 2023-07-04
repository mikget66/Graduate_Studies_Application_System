import React, { useEffect, useState } from 'react'
import './form.css'
import './steps.css'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'

import axios from 'axios'


const Form = () => {

  const [faculties, setFaculties] = useState([])
  const [departments, setDepartments] = useState([])
  const [programs, setPrograms] = useState([])

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    checkpassword: '',
    phone: '',
    national_id: '',
    dateOfBirth: '',
    gender: '',
    military_status: '',
    level: '',
    faculty: '',
    department: '',
    program: '',
    length_of_file: '',
    images: {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      image7: '',
      image8: '',
      image9: '',
    }
  })

  useEffect(() => {
    try {
     axios.get('http://localhost:5000/getfaculty')
      .then((res) => {
        setFaculties(res.data)
      })
    } catch (error) {
      console.log(error)
      
    }

    try {
      axios.get('http://localhost:5000/getdepartment')
        .then((res) => {
          setDepartments(res.data)
        }
        )
    } catch (error) {
      console.log(error)
    }

    try {
      axios.get('http://localhost:5000/getprogram')
        .then((res) => {
          setPrograms(res.data)
        }
        )
    }catch (error) {
      console.log(error)
    }

  }

  
  , [])


  


  const [page, setPage] = useState(0)
  const returnStep = (page) => {
    switch (page) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 Faculties={faculties} Departments={departments} Programs={programs} UserData={userData} SetUserData={setUserData} />
      case 2:
        return <Step3 Faculties={faculties} Departments={departments} Programs={programs} UserData={userData} SetUserData={setUserData}  />
      case 3:
        return <Step4 />
      
      default:
        break;
    }
  }



  function handlePage(action) {
    switch (action) {
      case "increment":
        if (page < 3) {
          setPage((currPage) => currPage + 1)
          console.log(userData)
        }
        break;
      case "decrment":
        if (page > 0) {
          setPage((currPage) => currPage - 1)
        }
        break;

      default:
        break;
    }
  }

  const handleSubmit = async () => {
    console.log(userData)
    // try {
    //   const res = await axios.post('http://localhost:5000/newapp/signup', userData)
    //   .then((res) => {
    //     console.log(res)
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <>
      <section className='subCon'>

        <img src="assets/mini-logo.png" alt="" className='mini-logo' />

        <div className="body">
          {returnStep(page)}
        </div>
        <div className="nav">
          <button className="prev" onClick={() => { handlePage("decrment") }}>previous</button>
          <div className='page-n'> {`${page + 1} from 4`}</div>
          {page == 3 ?<button className="next" onClick={handleSubmit} >Submit</button> :<button className="next" onClick={() => { handlePage("increment") }} >Next</button>}
        </div>
      </section>
    </>
  )
}

export default Form