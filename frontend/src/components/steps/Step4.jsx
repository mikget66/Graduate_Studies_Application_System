import React from 'react'

const Step4 = ({UserData ,SetUserData }) => {
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
          <input
            type="password"
            placeholder='كلمة المرور'
            className='inputIN' 
            value={UserData.password}
            onChange={(e) => { SetUserData({ ...UserData, password: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <span></span>
          <input 
            type="password" 
            placeholder='تاكيد كلمة المرور' 
            className='inputIN'
            value={UserData.checkpassword} 
            onChange={(e) => { SetUserData({ ...UserData, checkpassword: e.target.value }) }}
          />
        </div>
      </div>
    </>
  )
}

export default Step4