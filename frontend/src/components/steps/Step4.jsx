import React from 'react'

const Step4 = () => {
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
          <label htmlFor="image1" className='inputIN'>اضافة الصورة الشخصية</label>
          <input type="file" name="image1" id="image1" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image2" className='inputIN'>اضافة البطاقة الشخصية</label>
          <input type="file" name="image2" id="image2" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image3" className='inputIN'>اضافة شهادة الميلاد</label>
          <input type="file" name="image3" id="image3" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image4" className='inputIN'>اضافة المؤهل</label>
          <input type="file" name="image4" id="image4" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image5" className='inputIN'>اضافة بيان الدرجات</label>
          <input type="file" name="image5" id="image5" style={{ display: "none" }} />
        </div>
        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image6" className='inputIN'>اضافة استمارة حسن سير وسلوك</label>
          <input type="file" name="image6" id="image6" style={{ display: "none" }} />
        </div>
        <h1>*يمكن اضافة المرفقات بصيغة PDF او صور * </h1>
      </div>
    </>
  )
}

export default Step4