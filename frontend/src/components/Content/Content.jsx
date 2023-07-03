import React from 'react'
import {HiUserAdd} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import './Content.css'
const Content = () => {
  return (
    <div className='Content'>
          
          <img src="assets/mini-logo.png" alt="" className='mini-logo'/>

          <p>adipisicing elit. In, fugit et corporis beatae nam consectetur!
          </p>
          <div className="icon">
            
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="options">
          <Link to='/form'><button style={{background:"#AD8700"}}>طلب جديد <HiUserAdd/></button></Link>
          <Link><button style={{background:"#003C70"}}>متابعه خاله التقديم <HiUserAdd/></button> </Link>
          </div>
        </div>
  )
}

export default Content