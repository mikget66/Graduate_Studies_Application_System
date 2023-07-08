import React from 'react'
import { BiSolidPrinter } from 'react-icons/bi'
import './show.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { saveAs } from 'file-saver';



const Show = () => {
  const { t } = useTranslation();
  const {id} = useParams();

  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5000/student/studentdetails/'+id, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        if (error.response.data.user === false) {
          // navigate('/login')
        }
      })
  }, [])
  const openImage = (url) => {
    const filename = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.target = '_blank';
    aTag.click();
    aTag.remove();
  }
  const downloadImage = (url) => {
    saveAs(url, 'image.jpg')
  }


  return (
    <>
      <section className="cotainer-data">
        <div className="navv">
          <h2>
            بيانات الطالب
          </h2>
          <button><BiSolidPrinter />طباعه</button>
        </div>
        <div className="data-container">
          <div className='image-con'>
            <img src="/assets/uni-logo.png" alt="" className="imagee" />
            <button className='acc'>قبول</button>
            <button className='ref'>رفض</button>
          </div>
          <table className="data-table">
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>الاسم</td>
              <td> 
                    {user.student_name}
              </td>
            </tr>
            <tr>
              <td>البريد الالكترونى</td>
              <td>
                {user.email}
              </td>
            </tr>
            <tr>
              <td>رقم الهاتف</td>
              <td>
                {user.phonenumber}
              </td>
            </tr>
            <tr>
              <td>القم القومى</td>
              <td>
                {user.national_id}
              </td>
            </tr>
            <tr>
              <td>تاريخ الميلاد</td>
              <td>
                {(user.birthdate)}
              </td>
            </tr>
            <tr>
              <td>النوع</td>
              <td>
                {user.gender == 1 ? 'ذكر' :'انثى'}
              </td>
            </tr>
            
            <tr>
              <td>الكليه</td>
              <td>
                {user.faculty_name}
              </td>
            </tr>
            <tr>
              <td>القسم</td>
              <td>
                {user.department_name}
              </td>
            </tr>
            <tr>
              <td>البرنلمج</td>
              <td>
                {user.program_name}
              </td>
            </tr>
            <tr>
              <td>المرحله</td>
              <td>
                {user.level == 0 ? `دبلومه` : user.level == 1 ? `ماجستير` : `دكتوراه`}
              </td>
            </tr>
            <tr>
              <td>الموقف من التجنيد</td>
              <td>
                {user.military_status == 0 ? `اعفاء نهائى` : user.military_status == 1 ? `اعفاء مؤقت` : `انهى الخمه`}
              </td>
            </tr>
            <tr>
              <td>تاريخ الطلب</td>
              <td>
                {(user.submission_date)}
              </td>
            </tr>
          </table>
        </div>

        <h1>المرفقات</h1>

        <table class="profile-table">

          <tr>
            <th>Attachement</th>
            <th>Buttons</th>
          </tr>


          <tr>
            <td>{t('img-profile-2')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.photo_national_id}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.photo_national_id}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
            </td>
          </tr>


          <tr>
            <td>{t('img-profile-3')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.birth_certificate}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.birth_certificate}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-4')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.academic_qualification}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.academic_qualification}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-5')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.grade_statement}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.grade_statement}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-6')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.good_conduct_form}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.good_conduct_form}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-7')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.approval_from_employer}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.approval_from_employer}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-8')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.position_on_military}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.position_on_military}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-9')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${user.national_id}/${user.masters_photo}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${user.national_id}/${user.masters_photo}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              
              
              </td>
          </tr>


        </table>

      </section>
    </>
  )
}

export default Show