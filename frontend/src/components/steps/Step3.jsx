import React, { useEffect } from 'react'

const Step3 = ({UserData ,SetUserData ,Images ,SetImages}) => {

  Object.values(Images).map((image)=>{
    image ===  "" ? console.log("no") : UserData.length_of_file = +UserData.length_of_file + 1
  })

  console.log(UserData)
  return (
    <>
      <div className="top">
        <h2>
          ادخل  المرفقات المطلوبة
        </h2>
      </div>
      <div className="content superContianer">

        <div className="input-img-container gridChange">
          <span className='labelChooes'> اختر ملف</span>
          <label htmlFor="image1" className='inputIN'>
            {
              Images.image1?`${Images.image1.name}`:" اضافة الصورة الشخصية "
            }
          </label>
          <input  type="file" name="image1" id="image1" onChange={(e)=>{SetImages({...Images, image1: e.target.files[0]})}} style={{ display: "none" }}  required/>
        </div>
        {/* length_of_file: +UserData.length_of_file + 1 */}
        <div className="input-img-container gridChange ">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image2" className='inputIN'>
            {
              Images.image2?`${Images.image2.name}`:" اضافة البطاقة الشخصية "
            }
          </label>
         
          <input type="file" name="image2" id="image2" style={{ display: "none" }}
             onChange={(e)=>{SetImages({...Images, image2: e.target.files[0] })}}
          />
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image3" className='inputIN'>
            {
              Images.image3?`${Images.image3.name}`:" اضافة شهادة الميلاد "
            }
          </label>
          
          <input type="file" name="image3" id="image3" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image3: e.target.files[0] })}}
          />
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image4" className='inputIN'>
            {
              Images.image4?`${Images.image4.name}`:" اضافة المؤهل  "
            }
          </label>
          <input type="file" name="image4" id="image4" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image4: e.target.files[0] })}}
          />
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image5" className='inputIN'>
            {
              Images.image5?`${Images.image5.name}`:" اضافة بيان الدرجات "
            }
          </label>
          <input type="file" name="image5" id="image5" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image5: e.target.files[0] })}}
          />
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image6" className='inputIN'>
            {
              Images.image6?`${Images.image6.name}`:" اضافة استمارة حسن سير وسلوك"
            }
          </label>
        
          <input type="file" name="image6" id="image6" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image6: e.target.files[0]})}}
          />
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>اختر ملف</span>
          <label htmlFor="image7" className='inputIN'>
            {
              Images.image7?`${Images.image7.name}`:" اضافة موافقة جهة العمل "
            }
          </label>
          <input type="file" name="image7" id="image7" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image7: e.target.files[0]})}}
          />
        </div>
        {
          +UserData.gender === 1 ?(
            <div className="input-img-container gridChange">
            <span className='labelChooes'>اختر ملف</span>
            <label htmlFor="image8" className='inputIN'>
            {
              Images.image8?`${Images.image8.name}`:" اضافة الموقف من التجنيد "
            }
          </label>
            <input type="file" name="image8" id="image8" style={{ display: "none" }} 
               onChange={(e)=>{SetImages({...Images, image8: e.target.files[0] })}}
            />
          </div>
          ):null
        }
        

        {+UserData.level === 2 ?(
            <div className="input-img-container gridChange">
            <span className='labelChooes'>اختر ملف</span>
            <label htmlFor="image9" className='inputIN'>
            {
              Images.image9?`${Images.image9.name}`:" اضافة صوره الماجستير  "
            }
          </label>
            <input type="file" name="image9" id="image9" style={{ display: "none" }} 
               onChange={(e)=>{SetImages({...Images, image9: e.target.files[0] })}}
            />
          </div>
        ): null
        }
        
        
      </div>
      <div className='top' style={{marginTop:"2rem"}}><h1>***  اضافة المرفقات صور فقط *** </h1> </div>
    </>
  )
}

export default Step3