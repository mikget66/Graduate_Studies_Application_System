import React from 'react'

const Step3 = ({UserData ,SetUserData }) => {
  return (
    <>
      <div className="top">
        <h2>
          ادخل  المرفقات المطلوبة
        </h2>
      </div>
      <div className="content superContianer">

        <div className="input-container gridChange">
          <span className='labelChooes'> اختر ملف</span>
          <label htmlFor="image1" className='inputIN'>
            {
              UserData.image1?`${UserData.image1.name}`:" اضافة الصورة الشخصية "
            }
          </label>
          <input type="file" name="image1" id="image1" onChange={(e)=>{SetUserData({...UserData, image1: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}} style={{ display: "none" }} />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image2" className='inputIN'>
            {
              UserData.image2?`${UserData.image2.name}`:" اضافة البطاقة الشخصية "
            }
          </label>
         
          <input type="file" name="image2" id="image2" style={{ display: "none" }}
             onChange={(e)=>{SetUserData({...UserData, image2: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image3" className='inputIN'>
            {
              UserData.image3?`${UserData.image3.name}`:" اضافة شهادة الميلاد "
            }
          </label>
          
          <input type="file" name="image3" id="image3" style={{ display: "none" }} 
             onChange={(e)=>{SetUserData({...UserData, image3: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image4" className='inputIN'>
            {
              UserData.image4?`${UserData.image4.name}`:" اضافة المؤهل  "
            }
          </label>
          <input type="file" name="image4" id="image4" style={{ display: "none" }} 
             onChange={(e)=>{SetUserData({...UserData, image4: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image5" className='inputIN'>
            {
              UserData.image5?`${UserData.image5.name}`:" اضافة بيان الدرجات "
            }
          </label>
          <input type="file" name="image5" id="image5" style={{ display: "none" }} 
             onChange={(e)=>{SetUserData({...UserData, image5: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image6" className='inputIN'>
            {
              UserData.image6?`${UserData.image6.name}`:" اضافة استمارة حسن سير وسلوك"
            }
          </label>
        
          <input type="file" name="image6" id="image6" style={{ display: "none" }} 
             onChange={(e)=>{SetUserData({...UserData, image6: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>

        <div className="input-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image7" className='inputIN'>
            {
              UserData.image7?`${UserData.image7.name}`:" اضافة موافقة جهة العمل "
            }
          </label>
          <input type="file" name="image7" id="image7" style={{ display: "none" }} 
             onChange={(e)=>{SetUserData({...UserData, image7: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
          />
        </div>
        {
          +UserData.gender === 1 ?(
            <div className="input-container gridChange">
            <span className='labelChooes'>اختر ملف</span>
            <label htmlFor="image8" className='inputIN'>
            {
              UserData.image8?`${UserData.image8.name}`:" اضافة الموقف من التجنيد "
            }
          </label>
            <input type="file" name="image8" id="image8" style={{ display: "none" }} 
               onChange={(e)=>{SetUserData({...UserData, image8: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
            />
          </div>
          ):null
        }
        

        {+UserData.level === 2 ?(
            <div className="input-container gridChange">
            <span className='labelChooes'>اختر ملف</span>
            <label htmlFor="image9" className='inputIN'>
            {
              UserData.image9?`${UserData.image9.name}`:" اضافة صوره الماجستير  "
            }
          </label>
            <input type="file" name="image9" id="image9" style={{ display: "none" }} 
               onChange={(e)=>{SetUserData({...UserData, image9: e.target.files[0], length_of_file: +UserData.length_of_file + 1})}}
            />
          </div>
        ):null
        }
        
        
      </div>
      <div className='top' style={{marginTop:"2rem"}}><h1>***  اضافة المرفقات صور فقط *** </h1> </div>
    </>
  )
}

export default Step3