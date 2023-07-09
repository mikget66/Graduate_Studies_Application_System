import React, { useEffect, useState } from 'react'
import './login.css'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

const ManagerLogin = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        password: '',
        manager_email: '',
    })

    
    axios.defaults.withCredentials = true

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/adminlog/login', loginData, { withCredentials: true })
                .then((res) => {
                    console.log(res)
                    navigate('/admin')
                }).catch((error) => { 
                    console.log(error); 
                    alert('يجب ان تكون مديرا لتسجيل الدخول')
                    navigate('/adminLogin')
                })

        } catch (error) {
            console.log(error)
        }
       
    }


    return (
        <>
            <div className="home">
                <div className="uni-logo">
                </div>


                <section className='subCon'>

                    <img src="assets/mini-logo.png" alt="" className='mini-logo' />

                    <div className="body">
                        <div className="top">
                            <h2>
                                تسجيل الدخول
                            </h2>
                        </div>
                        <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <BsFillPersonVcardFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="text"
                                    placeholder='اسم البريد الالكتروني'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.manager_email} onChange={(e) => { setLoginData({ ...loginData, manager_email: e.target.value }) }}
                                />
                            </div>
                            <div className="input-container" style={{ gap: "2rem", }}>
                                <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                                <input
                                    type="password"
                                    placeholder='كلمه المرور'
                                    className='inputIN'
                                    style={{ cursor: "text", height: "4rem" }}
                                    value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                                />
                            </div>
                            <div className="actions">
                                <button onClick={handleLogin}> تسجيل الدخول </button>
                    
                            </div>
                        </div>

                    </div>
                    


                </section>
            </div>
        </>
    )
}

export default ManagerLogin