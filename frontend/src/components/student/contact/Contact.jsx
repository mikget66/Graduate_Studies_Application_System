import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneVolume } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import Image from '../../../images/contact_us.jpg'

const Contact = () => {
  return (
    <>
      <section className="cotainer">
        <div className="sub-container">
          <div className="image">
            <img src={Image} alt="" />
          </div>
          <div className="content">
            <h2>تواصل معنا</h2>
            <div className="contacts" id="#ContactUs">
              <h4> <HiOutlineMail />      جامعة حلوان - الادارة العامة لرعاية الشباب - مكتب الاتصال </h4>
              <h4 > <FaPhoneVolume /> 28162061-28162062 </h4>
              <h4>   <BsPhone /> 01150087466</h4>
              <h4>  <i className="fa-sharp fa-regular fa-phone-intercom"></i> 16282</h4>
              <h4>helwan10@yahoo.com</h4>
              <h4>الصفحة الرسمية للأسبوع شباب الجامعات الثالث عشر</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact