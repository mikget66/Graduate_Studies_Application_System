import React, { useEffect, useState } from 'react'
import'./login.css'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'

import axios from 'axios'



const Login = () => {

    const [loginData, setLoginData] =useState({
        password: '',
        national_id: '',
    })

    const handleLogin =(e)=>{
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/login',loginData)
            .then((res) => {
              alert("A7A")
              console.log(res)
            }).catch((error)=>{console.log(error);})
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>

            <section className='subCon'>

                <img src="assets/mini-logo.png" alt="" className='mini-logo' />

                <div className="body">
                    <div className="top">
                        <h2>
                            ادخل  كلمة مرور لمتابعة حالة طلبك

                        </h2>
                    </div>
                    <div className="content"  style={{marginTop:"6rem",gap:"3rem"}}>
                        <div className="input-container"style={{gap:"2rem",}}>
                        <BsFillPersonVcardFill className='Icon' style={{fontSize:"3.5rem"}}/>
                            <input
                                type="text"
                                placeholder=' الرقم القومي '
                                className='inputIN'
                                style={{ cursor: "text", height:"4rem"}}
                                value={loginData.national_id} onChange={(e) => { setLoginData({ ...loginData, national_id: e.target.value }) }}
                            />
                        </div>
                        <div className="input-container"style={{gap:"2rem",}}>
                        <RiLockPasswordFill className='Icon' style={{fontSize:"3.5rem"}}/>
                            <input
                                type="password"
                                placeholder='كلمة المرور'
                                className='inputIN'
                                style={{ cursor: "text", height:"4rem"}}
                                value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                            />
                        </div>
                        <div className="actions">
                        <button onClick={handleLogin}>تسجيل الدخول</button>
                        <a href='#'>متقدم جديد</a>
                    </div>
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export default Login 