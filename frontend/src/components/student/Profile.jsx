import React from 'react'
import './student.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaPhoneVolume} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'

const Profile = () => {
  return (
    <>
            <div>
      <nav>
        <div className="btn">
          <button>
            <a href="#">تسجيل الخروج</a>
          </button>
        </div>
        <ul>
          <li>
            <a href="index.html">تواصل معنا</a>
          </li>
          <li>
            <a href="index2.html">تعديل البيانات</a>
          </li>
          <li>
            <a href="index3.html">حاله بيانات التسجيل</a>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src="assets/mini-logo.png" alt="" />
      </div>
      <section className="one">
        <div className="image">
          <img src="contact_us.jpg" alt="" />
        </div>
        <div className="two">
          <h1>تواصل معنا</h1>
          <div className="contact" id="#ContactUs">
            <h5>
              {' '}
              <HiOutlineMail/> جامعة حلوان - الادارة العامة لرعاية الشباب - مكتب الاتصال{' '}
            </h5>
            <h5>
              {' '}
              <FaPhoneVolume  style={{ transform: 'rotate(320deg)' }}/> 28162061-28162062{' '}
            </h5>
            <h5>
              {' '}
              <BsPhone/> 01150087466
            </h5>
            <h5>
              {' '}
              <i className="fa-sharp fa-regular fa-phone-intercom"></i> 16282
            </h5>
            <h5>helwan10@yahoo.com</h5>
            <h5>الصفحة الرسمية للأسبوع شباب الجامعات الثالث عشر</h5>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Profile