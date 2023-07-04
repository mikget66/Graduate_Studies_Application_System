import React from 'react'

const Step3 = ({Faculties ,UserData ,SetUserData ,Departments ,Programs}) => {



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
            <option value="1">ذكر</option>
            <option value="0">انثى</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select   className='inputIN' >
            <option value="" >اختر المرحلة الدراسية</option>
            <option value="0">ديلومه</option>
            <option value="1">ماجيستير</option>
            <option value="2">دكتوراه</option>
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select value={UserData.faculty}  className='inputIN' onChange={(e)=>{ SetUserData({...UserData , faculty : e.target.value}) }} >
            <option value="" >اختر اسم الكلية</option>
            {Faculties.map((faculty) => (
              <option key={faculty.faculty_id}  value={faculty.faculty_id}>{faculty.faculty_name}</option>
            ))}
          </select>
        </div>
        <div className="input-container">
            <span></span>
          <select value={UserData.department}  className='inputIN' onChange={(e)=>{ SetUserData({...UserData , department : e.target.value})}} >
            <option value="" >اختر اسم القسم</option>
            {Departments.map((department) => (
              (department.faculty_id == UserData.faculty) ? <option key={department.department_id} value={department.department_id}>{department.department_name}</option> : null
            ))}
          </select>
        </div>
        <div className="input-container">
            <span></span>
            <select value={UserData.program}  className='inputIN' onChange={(e)=>{ SetUserData({...UserData , program : e.target.value})}} >
            <option value="" >اختر اسم البرنامج</option>
            {Programs.map((program) => (
              (program.department_id == UserData.department && program.faculty_id == UserData.faculty) ? <option key={program.program_id} value={program.program_id}>{program.program_name}</option> : null
            ))}
          </select>
          
        </div>
      </div>
    </>
  )
}

export default Step3