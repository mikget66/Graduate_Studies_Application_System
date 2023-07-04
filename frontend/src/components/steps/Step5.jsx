import React from 'react'

const Step5 = () => {
  return (
    <>
      <div className="top">
        <h2>
          ادخل  المرفقات المطلوبة
        </h2>
      </div>
      <div className="content">

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image7" className='inputIN'>اضافة الصورة الشخصية</label>
          <input type="file" name="image7" id="image7" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image8" className='inputIN'>اضافة البطاقة الشخصية</label>
          <input type="file" name="image8" id="image8" style={{ display: "none" }} />
        </div>
        <h1>*يمكن اضافة المرفقات بصيغة PDF او صور * </h1>
        <div className="top">
        <h2>
          ادخل  كلمة مرور لمتابعة حالة طلبك
        </h2>
      </div>

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

export default Step5