import React from 'react'

import { useTranslation } from 'react-i18next';
import { BiSolidUser } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { FaPhone } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
const Step2 = ({ Faculties, UserData, SetUserData, Departments, Programs, Error }) => {

  const [t, i18n] = useTranslation();

  const [program_level, setProgram_level] = React.useState(0)
  return (
    <>
      <div className="top">
        <h2>
          {t('step2-title')}
        </h2>
      </div>
      <div className="superContianer">


        <div className="input-container">
          <BiSolidUser style={UserData.name == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.name == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('name')} </h1>}
            <input
              type="text"
              placeholder={t('name')}
              className='inputIN'
              value={UserData.name}
              style={{ cursor: "text" }}
              onChange={(e) => { SetUserData({ ...UserData, name: e.target.value }) }}
            />
          </div>
        </div>

        <div className="input-container">
          <BsFillPersonVcardFill style={UserData.national_id == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.national_id == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('n-id')} </h1>}
            <input
              type="text"
              placeholder={t('n-id')}
              className='inputIN'
              style={{ cursor: "text" }}
              value={UserData.national_id} onChange={(e) => { SetUserData({ ...UserData, national_id: e.target.value }) }}
            />
          </div>
        </div>

        <div className="input-container">
          <GrMail style={UserData.email == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.email == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('email')} </h1>}
            <input
              type="text"
              placeholder={t('email')}
              className='inputIN'
              value={UserData.email}
              style={{ cursor: "text" }}
              onChange={(e) => { SetUserData({ ...UserData, email: e.target.value }) }}
            />
          </div>
        </div>


        <div className="input-container">
          <FaPhone style={UserData.phone == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.phone == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('phone')} </h1>}
            <input
              type="text"
              placeholder={t('phone')}
              className='inputIN'
              style={{ cursor: "text" }}
              value={UserData.phone} onChange={(e) => { SetUserData({ ...UserData, phone: e.target.value }) }}
            />
          </div>
        </div>


        <div className="input-container">
          <BsFillCalendar2DateFill style={UserData.dateOfBirth == "" ? null : { marginTop: '1.5rem' }} className='Icon' />
          <div className='edit-input' style={localStorage.getItem('i18nextLng') == "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
            {UserData.dateOfBirth == "" ? null : <h1 style={{ color: "#AD8700" }}>{t('dateOfBirth')} </h1>}
            <input
              type="date"
              className='inputIN'
              value={UserData.dateOfBirth}
              onChange={(e) => { SetUserData({ ...UserData, dateOfBirth: e.target.value }) }}

            />
          </div>
        </div>

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
          <span></span>
          <select
            className='inputIN'
            value={UserData.employment}
            onChange={(e) => { SetUserData({ ...UserData, employment: e.target.value }) }}
          >
            <option value="" >{t('employment')} </option>
            <option value="1">{t('have')} </option>
            <option value="0">{t('dont-have')} </option>
          </select>
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


        {UserData.faculty !== "" ? (
        <div className="input-container">
          <span></span>
          <select value={UserData.department} className='inputIN' onChange={(e) => { SetUserData({ ...UserData, department: e.target.value }) }} >
            <option value="" >{t('department')} </option>
            {Departments.map((department) => (
              (`${department.faculty_id}` === `${UserData.faculty}`) ? <option key={department.department_id} value={department.department_id}>{department.department_name}</option> : null
            ))}
          </select>
        </div>
        ) : null
        }


        {UserData.department !== "" ? (
        <div className="input-container">
          <span></span>
          <select
            value={UserData.program}
            className='inputIN'
            onChange={(e) => { 
              let level
              e.target.value != "" ?  level = Programs.filter((program) => (`${program.program_id}` === `${e.target.value}`))[0].level : level = 0
              setProgram_level(level)
              SetUserData({ ...UserData, program: e.target.value }) }}
          >
            <option value="" >{t('program')} </option>
            {Programs.map((program) => {
              if (`${program.department_id}` === `${UserData.department}`) {
                return (
                  <option key={program.program_id} value={program.program_id} > {program.program_name} </option>
                )
              }
            })
            }

          </select>
        </div>
        ) : null
        }

        {UserData.program !== "" ? (
        <div className="input-container">
          <span></span>
          <select
            className='inputIN'
            value={UserData.level}
            onChange={(e) => { SetUserData({ ...UserData, level: e.target.value }) }}
          >
            <option value="">{t('level')}</option>
            {program_level == 0 ? (
              <option value="0">{t('diploma')}</option>
            ) : program_level == 1 ? (
              <option value="1">{t('Master')}</option>
            ) : program_level == 2 ? (
              <option value="2">{t('PhD')}</option>
            ) : program_level == 3 ? (
              <>
                <option value="1">{t('Master')}</option>
                <option value="2">{t('PhD')}</option>
              </>
            ) : program_level == 4 ? (
              <>
                <option value="0">{t('diploma')}</option>
                <option value="1">{t('Master')}</option>
              </>
            ) : program_level == 5 ? (
              <>
                <option value="0">{t('diploma')}</option>
                <option value="1">{t('Master')}</option>
                <option value="2">{t('PhD')}</option>
              </>
            ) : null}
          </select>
        </div>
        ) : null
        }











        {+UserData.gender === 1 ? (
          <div className="input-container">
            <span></span>
            <select
              value={UserData.military_status}
              onChange={(e) => { SetUserData({ ...UserData, military_status: e.target.value }) }}
              className='inputIN'
            >
              <option value="" >{t('melatary')} </option>
              <option value="0">{t('exemption')}</option>
              <option value="1">{t('postponed')}</option>
              <option value="2">{t('completed')}</option>
            </select>
          </div>
        ) : null
        }
      </div>
      {Error ? (
        <div className='top' style={{ marginTop: "2rem", color: "red", fontWeight: "bolder" }}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>)
        : null
      }
    </>
  )
}

export default Step2