import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneVolume } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import Image from '../../../images/contact_us.jpg'

const Contact = () => {
  return (
    <>
      <section className="G-cotainer">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="content">
        </div>
      </section>
    </>
  )
}

export default Contact