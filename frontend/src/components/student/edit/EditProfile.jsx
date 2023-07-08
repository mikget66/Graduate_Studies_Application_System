import React from 'react'
import { BiArrowBack, BiSolidPrinter } from 'react-icons/bi'
import './editprofie.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';
import { saveAs } from 'file-saver'

const EditProfile = () => {
  const [t, i18n] = useTranslation();


  const navigate = useNavigate()
  const [data, setData] = React.useState({})
  const [user, setUser] = React.useState({
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    image6: '',
    image7: '',
    image8: '',
    image9: '',
  })
  const [images, setImages] = React.useState({
    image11: '',
    image22: '',
    image33: '',
    image44: '',
    image55: '',
    image66: '',
    image77: '',
    image88: '',
    image99: '',
  })
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:5000/student/studentdetails', { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      }).catch((error) => {
        console.log(error.response.data.user)
        if (error.response.data.user === false) {
          navigate('/login')
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

  
  const changeimage = (index1 , index2) => {
    const inputTag = document.createElement('input');
    inputTag.type = 'file';
    inputTag.accept = 'image/*';
    inputTag.click();
    inputTag.addEventListener('change', (e) => {
      const file = e.target.files[0];
      setUser({ ...user, [index1]: file })
      setImages({ ...images, [index2]: file.name })
    })
    inputTag.remove();
  }

  const confirmData = () => {
    const formData = new FormData()
    formData.append('image2', user.image2)
    formData.append('image3', user.image3)
    formData.append('image4', user.image4)
    formData.append('image5', user.image5)
    formData.append('image6', user.image6)
    formData.append('image7', user.image7)
    formData.append('image8', user.image8)
    formData.append('image9', user.image9)

    
    axios.put('http://localhost:5000/student/studentupdate', formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        navigate('/profile')
      }).catch((error) => {
        console.log(error.response.data.user)
      })
  }

    







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
          <img src={`http://localhost:5000/${data.national_id}/${data.img}`} alt="" className="image" />
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
                  value={data.student_name}
                  onChange={(e) => setUser({ ...user, student_name: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td>{t('email')}</td>
              <td>
                {data.email}
              </td>
            </tr>
            <tr>
              <td>{t('phone')}</td>
              <td>
                {data.phonenumber}
              </td>
            </tr>
            <tr>
              <td>{t('n-id')}</td>
              <td>
                {data.national_id}
              </td>
            </tr>
            <tr>
              <td>{t('dateOfBirth')}</td>
              <td>
                {(data.birthdate)}
              </td>
            </tr>
            <tr>
              <td>{t('gender')}</td>
              <td>
                {data.gender == 1 ? `${t('m')}` : `${t('f')}`}
              </td>
            </tr>

            <tr>
              <td>{t('collage')}</td>
              <td>
                {data.faculty_name}
              </td>
            </tr>
            <tr>
              <td>{t('department')}</td>
              <td>
                {data.department_name}
              </td>
            </tr>
            <tr>
              <td>{t('program')}</td>
              <td>
                {data.program_name}
              </td>
            </tr>
            <tr>
              <td>{t('level')}</td>
              <td>
                {data.level == 0 ? `${t('diploma')}` : data.level == 1 ? `${t('Master')}` : `${t('PhD')}`}
              </td>
            </tr>
            <tr>
              <td>{t('melatary')}</td>
              <td>
                {data.military_status == 0 ? `${t('exemption')}` : data.military_status == 1 ? `${t('postponed')}` : `${t('completed')}`}
              </td>
            </tr>
            <tr>
              <td>{t('DateOfSubmission')}</td>
              <td>
                {(data.submission_date)}
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
            <td>{t('img-profile-2')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.photo_national_id}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.photo_national_id}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image2' , 'image22')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image22 != "" ? images.image22 : ""}</p>
            </td>
          </tr>


          <tr>
            <td>{t('img-profile-3')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.birth_certificate}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.birth_certificate}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image3' , 'image33')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image33 != "" ? images.image33 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-4')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.academic_qualification}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.academic_qualification}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image4' , 'image44')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image44 != "" ? images.image44 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-5')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.grade_statement}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.grade_statement}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image5' , 'image55')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image55 != "" ? images.image55 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-6')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.good_conduct_form}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.good_conduct_form}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image6' , 'image66')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image66 != "" ? images.image66 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-7')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.approval_from_employer}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.approval_from_employer}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image7' , 'image77')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image77 != "" ? images.image77 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-8')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.position_on_military}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.position_on_military}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage('image8' , 'image88')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image88 != "" ? images.image88 : ""}</p>
              </td>
          </tr>


          <tr>
            <td>{t('img-profile-9')}</td>
            <td className='att-row'>
              <button
                onClick={() => { openImage(`http://localhost:5000/${data.national_id}/${data.masters_photo}`) }}
                style={{ background: "#003C70" }} class="atch-btn">Open
              </button>
              <button
                onClick={() => { downloadImage(`http://localhost:5000/${data.national_id}/${data.masters_photo}`) }}
                style={{ background: "#AD8700" }} class="atch-btn">Download
              </button>
              <button
                onClick={() =>{changeimage("image9" , 'image99')}}
                style={{ background: "#003C70" }} class="atch-btn">Change
              </button>
              <p id='change-1'>{images.image99 != "" ? images.image99 : ""}</p>
              </td>
          </tr>


        </table>

        <button
          onClick={confirmData}
          className='confirm-btn'>Confirm
        </button>
      </section>
    </>
  )
}

export default EditProfile