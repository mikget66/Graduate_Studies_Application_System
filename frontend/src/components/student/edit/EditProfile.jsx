import React from 'react'
import { BiArrowBack, BiSolidPrinter } from 'react-icons/bi'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';

const EditProfile = () => {
  const [t, i18n] = useTranslation();


  const navigate = useNavigate()
  const [user, setUser] = React.useState({})
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5000/student/studentdetails', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setUser(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        if (error.response.data.user === false) {
          navigate('/login')
        }
      })
  }, [])


  return (
    <>
      <section className="cotainer-data">
        <div className="navv">
          <h2>
            Student Application Report
          </h2>
          <button><BiSolidPrinter />print</button>
        </div>
        <div className="data-container">
          <img src="/assets/uni-logo.png" alt="" className="image" />
          <table className="data-table">
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>{t('name')}</td>
              <td>
                <input
                  className="input-cell"
                  type="text"
                  value={user.student_name}
                  onChange={(e) => setUser({ ...user, student_name: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>{t('email')}</td>
              <td>
                {user.email}
              </td>
            </tr>
            <tr>
              <td>{t('phone')}</td>
              <td>
                {user.phonenumber}
              </td>
            </tr>
            <tr>
              <td>{t('n-id')}</td>
              <td>
                {user.national_id}
              </td>
            </tr>
            <tr>
              <td>{t('dateOfBirth')}</td>
              <td>
                {(user.birthdate)}
              </td>
            </tr>
            <tr>
              <td>{t('gender')}</td>
              <td>
                {user.gender == 1 ? `${t('m')}` : `${t('f')}`}
              </td>
            </tr>
            
            <tr>
              <td>{t('collage')}</td>
              <td>
                {user.faculty_name}
              </td>
            </tr>
            <tr>
              <td>{t('department')}</td>
              <td>
                {user.department_name}
              </td>
            </tr>
            <tr>
              <td>{t('program')}</td>
              <td>
                {user.program_name}
              </td>
            </tr>
            <tr>
              <td>{t('level')}</td>
              <td>
                {user.level == 0 ? `${t('diploma')}` : user.level == 1 ? `${t('Master')}` : `${t('PhD')}`}
              </td>
            </tr>
            <tr>
              <td>{t('melatary')}</td>
              <td>
                {user.military_status == 0 ? `${t('exemption')}` : user.military_status == 1 ? `${t('postponed')}` : `${t('completed')}`}
              </td>
            </tr>
            <tr>
              <td>{t('DateOfSubmission')}</td>
              <td>
                {(user.submission_date)}
              </td>
            </tr>
          </table>
        </div>

        <h1>Attachment</h1>

        <table class="profile-table">

          <tr>
            <th>Attachement</th>
            <th>Buttons</th>
          </tr>

          
          <tr>
            <td>{t('img-2')}</td>
            <td className='att-row'>
              <a href={`http://localhost:5000/${user.national_id}/${user.photo_national_id}`} style={{ background: "#003C70" }} class="atch-btn">Open</a>
              <a  download={`http://localhost:5000/${user.national_id}/${user.photo_national_id}`} style={{ background: "#AD8700" }} class="atch-btn">Download</a>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-3')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-4')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-5')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-6')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-7')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-8')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>{t('img-9')}</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
        </table>
      </section>
    </>
  )
}

export default EditProfile