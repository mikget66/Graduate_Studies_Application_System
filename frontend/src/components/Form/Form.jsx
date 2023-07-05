import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './form.css'
import './steps.css'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'

import axios from 'axios'


const Form = () => {

  const [t, i18n] =useTranslation();

  const [check, setCheck]= useState([])
  const [faculties, setFaculties] = useState([])
  const [departments, setDepartments] = useState([])
  const [programs, setPrograms] = useState([])
  const [flag, setFlag] = useState(true)
  const [error, setError] = useState([])
  const [error2, setError2] = useState([])
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
    length_of_file: '7',
    

  })
  const [images, setImages] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    image7: '',
    image8: '',
    image9: '',
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
    } catch (error) {
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
        return <Step2 Error ={error} SetError = {setError} Faculties={faculties} Departments={departments} Programs={programs} UserData={userData} SetUserData={setUserData} />
      case 2:
        return <Step3 UserData={userData} SetUserData={setUserData} Images={images} SetImages={setImages} />
      case 3:
        return <Step4 Error ={error2} UserData={userData} SetUserData={setUserData} Images={images} SetImages={setImages}/>

      default:
        break;
    }
  }



  function handlePage(action) {

    switch (action) {
      case "increment":

        if (page < 3) {
          if (page === 1) {
            const { name, email } = userData
            if (true) {
              try {
                 axios.post('http://localhost:5000/checkpages/checkpage1', userData)
                  .then((res) => {
                    console.log(res)
                    setFlag(true);
                    setPage(2)
                    
                  }).catch(async (error) => {
                    // console.log(error.response.data.errors.msg)
                    setFlag(true);
                    setPage(1)
                    setError(error.response.data.errors.msg)
                    
                  }
                  )
              }
              catch (error) {
                console.log(error)
                setFlag(false);
              }
              

            } else {
              setFlag(false)
            }
          }
            if (flag && page !== 1) {
              setPage((currPage) => currPage + 1)
              console.log(userData)
            }

          

          


        }
        break;
      case "decrment":
        if (page > 0) {
          setPage((currPage) => currPage - 1)
        } else {
          setPage(0)
          window.location.href = '/'

        }
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', userData.name)
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    formData.append('checkpassword', userData.checkpassword)
    formData.append('phone', userData.phone)
    formData.append('national_id', userData.national_id)
    formData.append('dateOfBirth', userData.dateOfBirth)
    formData.append('gender', userData.gender)
    formData.append('military_status', userData.military_status)
    formData.append('level', userData.level)
    formData.append('faculty', userData.faculty)
    formData.append('department', userData.department)
    formData.append('program', userData.program)
    formData.append('length_of_file', userData.length_of_file)
    formData.append('image1', images.image1)
    formData.append('image2', images.image2)
    formData.append('image3', images.image3)
    formData.append('image4', images.image4)
    formData.append('image5', images.image5)
    formData.append('image6', images.image6)
    formData.append('image7', images.image7)
    formData.append('image8', images.image8)
    formData.append('image9', images.image9)
    try {
      axios.post('http://localhost:5000/newapp/signup',formData )
        .then((res) => {
          console.log(res)
          console.log(userData.length_of_file)
          let su = "تم ارسال الطلب بنجاح"
          if(!alert(su)){
            window.location.href = '/'
          }

        }).catch((error) => {
          console.log(error.response.data)
          setError2(error.response.data.errors.msg)

        }
        )
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <section className='subCon'>

        <img src="assets/mini-logo.png" alt="" className='mini-logo' />

        <div className="body">
          {returnStep(page)}
        </div>
        <button onClick={()=>i18n.changeLanguage('ar')}>Arabic</button>
        <div className="nav">
          <button className="prev" onClick={() => { handlePage("decrment") }}>{t('prev')}</button>
          <div className='page-n'> {`${page + 1} from 4`}</div>
          {+page === 3 ? <button className="next" onClick={handleSubmit} >{t('submit')} </button> : <button className="next" onClick={() => { handlePage("increment") }} >{t('next')}</button>}
        </div>
      </section>
    </>
  )
}

export default Form