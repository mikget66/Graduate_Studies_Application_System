import React from 'react'
import './profilestatus.css'
const ProfileStatus = () => {
  return (
    <section className="cotainer">
      <div className="info">
        <h2>حاله بيانات التسجيل</h2>
        <div className='info-con'>
        <div className="sub-info">
          <span className='title'>اسم الطالب</span>
          <span className='inner'>محمد انور اسماعيل محمد</span>
        </div>
        <div className="sub-info">
          <span className='title'>حاله الطلب</span>
          <span className='inner'>تم الموافقه</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileStatus