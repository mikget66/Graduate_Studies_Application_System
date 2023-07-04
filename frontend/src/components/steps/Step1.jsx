import React from 'react'

const Step1 = () => {
  return (
    <>
        <div className="top">
            <h2>دليل مستخدم التقديم</h2>
        </div>
        <div className="content">
          <ol style={{direction: "rtl"}}>
            <li>يمكنك التقديم مرة واحدة في الفصل الدراسي</li>
            <li>يجب عليك ملء الاستمارة   </li>
            <li>كل الحقول لديها هذه العلامة  مطلوبة</li>
            <li> يمكنك اختيار برنامج واحد فقط من الأقسام داخل كليتك</li>
            <li>الحجم الأقصى لمرفقات الإستمارة 20 ميجا</li>
          </ol>
        </div>
    </>
  )
}

export default Step1