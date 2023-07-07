import React, { useEffect, useState } from 'react'
import './login.css'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
axios.defaults.withCredentials = true

const Login = () => {
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        password: '',
        national_id: '',
    })

    const [t, i18n] = useTranslation();
    const [toggle, setToggle] = React.useState(true);

    const handleClick = () => {
        i18n.changeLanguage(toggle ? 'ar' : 'en')
        setToggle(!toggle);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:5000/login',{ withCredentials: true }, loginData)
                .then((res) => {
                    console.log(res)
                    navigate('/profile')
                }).catch((error) => { console.log(error); })

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
                        {t('login')}
                        </h2>
                    </div>
                    <div className="content" style={{ marginTop: "6rem", gap: "3rem" }}>
                        <div className="input-container" style={{ gap: "2rem", }}>
                            <BsFillPersonVcardFill className='Icon' style={{ fontSize: "3.5rem" }} />
                            <input
                                type="text"
                                placeholder={t('n-id')}
                                className='inputIN'
                                style={{ cursor: "text", height: "4rem" }}
                                value={loginData.national_id} onChange={(e) => { setLoginData({ ...loginData, national_id: e.target.value }) }}
                            />
                        </div>
                        <div className="input-container" style={{ gap: "2rem", }}>
                            <RiLockPasswordFill className='Icon' style={{ fontSize: "3.5rem" }} />
                            <input
                                type="password"
                                placeholder={t('password')}
                                className='inputIN'
                                style={{ cursor: "text", height: "4rem" }}
                                value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                            />
                        </div>
                        <div className="actions">
                            <button onClick={handleLogin}> {t('login')}</button>
                            <a href='/' style={{ color: "#003C70", marginTop: "1rem" }}>{t('new-app-question')}  </a>
                        </div>
                    </div>

                </div>
                <button onClick={handleClick} className='lan-btn'>{localStorage.getItem('i18nextLng') == "en" ? ("عربي") : ("Englesh")}</button>


            </section>
            </div>
        </>
    )
}

export default Login 