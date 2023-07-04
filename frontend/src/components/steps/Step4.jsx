import React from 'react'

const Step4 = () => {
  return (
    <>
      <div className="top">
        <h2>
        ادخل  كلمة مرور لمتابعة حالة طلبك

        </h2>
      </div>
      <div className="content">
        <div className="input-container">
          <span></span>
          <input type="password" placeholder='كلمة المرور' className='inputIN' />
        </div>
        <div className="input-container">
          <span></span>
          <input type="password" placeholder='تاكيد كلمة المرور' className='inputIN' />
        </div>
      </div>
    </>
  )
}

export default Step4