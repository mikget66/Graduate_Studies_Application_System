import React from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
import { FaPhone } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { PiGenderMaleFill } from 'react-icons/pi'
const Step2 = ({ UserData, SetUserData }) => {

  return (
    <>
      <div className="top">
        <h2>
          ادخل معلوماتك الشخصية
        </h2>
      </div>
      <div className="content">
        <div className="input-container">
          <BiSolidUser className='Icon' />
          <input type="text" placeholder='الاسم الرباعي' className='inputIN' value={UserData.name} onChange={(e) => { SetUserData({ ...UserData, name: e.target.value }) }} />
        </div>
        <div className="input-container">
          <GrMail className='Icon' />
          <input type="text" placeholder='البريد الالكتروني' className='inputIN' value={UserData.email} onChange={(e) => { SetUserData({ ...UserData, email: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <BsFillPersonVcardFill className='Icon' />
          <input type="text" placeholder='الرقم القومي' className='inputIN'
            value={UserData.national_id} onChange={(e) => { SetUserData({ ...UserData, national_id: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <FaPhone className='Icon' />
          <input type="text" placeholder='رقم التليفون' className='inputIN' 
             value={UserData.phone} onChange={(e)=>{SetUserData({...UserData, phone: e.target.value})}}
          />
        </div>
        <div className="input-container">
          <BsFillCalendar2DateFill className='Icon' />
          <input type="date" className='inputIN' 
           value={UserData.dateOfBirth} onChange={(e)=>{SetUserData({...UserData, dateOfBirth: e.target.value})}}
          
          />
        </div>
        <div className="input-container">
          <PiGenderMaleFill className='Icon' />
          <select className='inputIN' 
           value={UserData.gender} onChange={(e)=>{SetUserData({...UserData, gender: e.target.value})}}
          >
            <option value="" >النوع</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Step2