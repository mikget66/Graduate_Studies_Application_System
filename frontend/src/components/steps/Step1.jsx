import React from 'react'
import { useTranslation } from 'react-i18next';

const Step1 = () => {
  const [t, i18n] =useTranslation();
  return (
    <>
        <div className="top">
            <h2> {t('step1-title')} </h2>
        </div>
        <div className="content">
          <ol style={{direction: "rtl"}}>
            <li>{t('gi-1')} </li>
            <li>{t('gi-2')} </li>
            <li>{t('gi-3')} </li>
            <li>{t('gi-4')} </li>
            <li>{t('gi-5')} </li>
            <li>{t('gi-6')} </li>
            
          </ol>
        </div>
    </>
  )
}

export default Step1