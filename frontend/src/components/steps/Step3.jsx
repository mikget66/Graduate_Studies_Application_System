import React from 'react'

const Step3 = () => {
  return (
    <>
              <div className="top">
        <h2>
        ادخل معلوماتك الشخصية
        </h2>
      </div>
      <div className="content">
        
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر الموقف من التجنيد</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر المرحلة الدراسية</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر اسم الكلية</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر اسم القسم</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر اسم البرنامج</option>
            <option value="male">ذكر</option>
            <option value="female">انثى</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Step3