import React from 'react'
import { useTranslation } from 'react-i18next';

const Step4 = ({UserData ,SetUserData ,Images ,SetImages ,Error }) => {

  
  const [t, i18n] =useTranslation();

  return (
    <>
      <div className="top">
        <h2>
          {t('step4-title')} 
        </h2>
      </div>
      <div className="content">
        <div className="input-container">
          <span></span>
          <input
            type="password"
            placeholder={t('password')} 
            className='inputIN' 
            value={UserData.password}
            onChange={(e) => { SetUserData({ ...UserData, password: e.target.value }) }}
          />
        </div>
        <div className="input-container">
          <span></span>
          <input 
            type="password" 
            placeholder={t('r-password')} 
            className='inputIN'
            value={UserData.checkpassword} 
            onChange={(e) => { SetUserData({ ...UserData, checkpassword: e.target.value }) }}
          />
        </div>
      </div>
      <div className='top' style={{marginTop:"2rem" ,color: "#AD8700" ,fontWeight: "bolder" ,fontSize:"1.5em"}}><h1> يرجى العلم بانه يمكنك متابعه الطلب من خلال  تسجيل الدخول على الموقع باستخدام الايميل الذى تم إدخاله في البيانات وكلمة المرور</h1> </div>
      { Error ? (
      <div className='top' style={{marginTop:"2rem" ,color: "red" ,fontWeight: "bolder"}}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>) 
      : null
      }
    </>
  )
}

export default Step4