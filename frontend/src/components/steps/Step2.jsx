import React from 'react'

import { useTranslation } from 'react-i18next';
import { BiSolidUser } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { FaPhone } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
const Step2 = ({ Faculties, UserData, SetUserData, Departments, Programs ,Error }) => {

  const [t, i18n] =useTranslation();

  return (
    <>
      <div className="top">
        <h2>
        {t('step2-title')} 
        </h2>
      </div>
      <div className="superContianer">
        <div className="input-container">
          <span></span>
          <select
            className='inputIN'
            value={UserData.gender}
            onChange={(e) => { SetUserData({ ...UserData, gender: e.target.value }) }}
          >
            <option value="" >{t('gender')} </option>
            <option value="1">{t('m')} </option>
            <option value="0">{t('f')} </option>
          </select>
        </div>


        <div className="input-container">
          <BiSolidUser className='Icon' />
          <input 
            type="text"
            placeholder={t('name')} 
            className='inputIN'
            value={UserData.name}
            style={{ cursor: "text"}}
            onChange={(e) => { SetUserData({ ...UserData, name: e.target.value }) }} 
          />
        </div>


        <div className="input-container">
          <span></span>
          <select
            className='inputIN'
            value={UserData.level}
            onChange={(e) => { SetUserData({ ...UserData, level: e.target.value }) }}
           >
            <option value="" >{t('level')} </option>
            <option value="0">ديلومه</option>
            <option value="1">ماجيستير</option>
            <option value="2">دكتوراه</option>
          </select>
        </div>
        <div className="input-container">
          <GrMail className='Icon' />
          <input 
            type="text" 
            placeholder={t('email')} 
            className='inputIN' 
            value={UserData.email}
            style={{ cursor: "text"}}
             onChange={(e) => { SetUserData({ ...UserData, email: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <span></span>
          <select value={UserData.faculty} className='inputIN' onChange={(e) => { SetUserData({ ...UserData, faculty: e.target.value }) }} >
            <option value="" >{t('collage')} </option>
            {Faculties.map((faculty) => (
              <option key={faculty.faculty_id} value={faculty.faculty_id}>{faculty.faculty_name}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <BsFillPersonVcardFill className='Icon' />
          <input 
            type="text" 
            placeholder={t('n-id')} 
            className='inputIN'
            style={{ cursor: "text"}}
            value={UserData.national_id} onChange={(e) => { SetUserData({ ...UserData, national_id: e.target.value }) }}
          />
        </div>


        <div className="input-container">
          <span></span>
          <select value={UserData.department} className='inputIN' onChange={(e) => { SetUserData({ ...UserData, department: e.target.value }) }} >
            <option value="" >{t('department')} </option>
            {Departments.map((department) => (
              (`${department.faculty_id}` ===`${ UserData.faculty}`) ? <option key={department.department_id} value={department.department_id}>{department.department_name}</option> : null
            ))}
          </select>
        </div>
        <div className="input-container">
          <FaPhone className='Icon' />
          <input 
            type="text" 
            placeholder={t('phone')}  
            className='inputIN'
            style={{ cursor: "text"}}
            value={UserData.phone} onChange={(e) => { SetUserData({ ...UserData, phone: e.target.value }) }}
          />
        </div>


        <div className="input-container">
          <span></span>
          <select 
            value={UserData.program}
            className='inputIN'
            onChange={(e) => { SetUserData({ ...UserData, program: e.target.value }) }}
          >
            <option value="" >{t('program')} </option>
            {Programs.map((program) => (
              (`${program.department_id}` === `${UserData.department}` && `${program.faculty_id }`=== `${UserData.faculty}`) ? <option key={program.program_id} value={program.program_id}>{program.program_name}</option> : null
            ))}
          </select>
        </div>


        <div className="input-container">
          <BsFillCalendar2DateFill className='Icon' />
          <input 
            type="date"
            className='inputIN'
            value={UserData.dateOfBirth}
            onChange={(e) => { SetUserData({ ...UserData, dateOfBirth: e.target.value }) }}
          />
        </div>


        {+UserData.gender === 1 ? (
          <div className="input-container">
            <span></span>
            <select 
              value={UserData.military_status}
              onChange={(e) => { SetUserData({ ...UserData, military_status: e.target.value }) }}
              className='inputIN'
            >
              <option value="" >اختر الموقف من التجنيد</option>
              <option value="0">اعفاء</option>
              <option value="1">تأجيل</option>
              <option value="2">انهيت التجنيد</option>
            </select>
          </div>
        ) : null
        }
      </div>
      { Error ? (
      <div className='top' style={{marginTop:"2rem" ,color: "red" ,fontWeight: "bolder"}}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>) 
      : null
      }
    </>
  )
}

export default Step2