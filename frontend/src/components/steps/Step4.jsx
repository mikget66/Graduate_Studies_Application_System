import React from 'react'
import { useTranslation } from 'react-i18next';

const Step4 = ({UserData ,SetUserData ,Images ,SetImages ,Error }) => {

  

  if(UserData.gender === "1" && UserData.level === "2"){
     UserData.length_of_file = 9 ;
  }else if (UserData.gender === "1" || UserData.level === "2"){
     UserData.length_of_file = 8 ;
  }else{
     UserData.length_of_file = 7 ;
  }
  console.log(UserData)
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
      { Error ? (
      <div className='top' style={{marginTop:"2rem" ,color: "red" ,fontWeight: "bolder"}}><h1>  {Error[0] != undefined ? `${Error[0]}` : null}  </h1> </div>) 
      : null
      }
    </>
  )
}

export default Step4