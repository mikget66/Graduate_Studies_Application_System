import React, { useState } from 'react'
import './form.css'
const Form = () => {
  const [page, setPage] =useState(0)
  return (  
    <>
      <section className='subCon'>
      
          <img src="assets/mini-logo.png" alt="" className='mini-logo'/>
        
        <div className="body">

        </div>
        <div className="nav">
          <button className="prev">previous</button>
        <div className='page-n'> {`${page} from 6`}</div>
          <button className="next">next</button>
        </div>
      </section>
    </>
  )
}

export default Form