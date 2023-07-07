import React from 'react'
import { BiArrowBack, BiSolidPrinter } from 'react-icons/bi'
import './editprofie.css'

const EditProfile = () => {
  return (
    <>
      <section className="cotainer-data">
        <div className="navv">
          <h2>
            Student Application Report
          </h2>
          <button><BiSolidPrinter />print</button>
        </div>
        <div className="data-container">
          <img src="/assets/uni-logo.png" alt="" className="image" />
          <table className="data-table">
            <tr>
              <th>Application Basic Information</th>
              <th>Application Data</th>
            </tr>

            <tr>
              <td>Code</td>
              <td>66</td>
            </tr>
            <tr>
              <td>English Name</td>
              <td>Mohamed Anwer Ismail</td>
            </tr>
            <tr>
              <td>Arabic Name</td>
              <td>محمد انور اسماعيل محمد</td>
            </tr>
            <tr>
              <td>National ID</td>
              <td>30208220105747</td>
            </tr>

            <tr>
              <td>Deoartment</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>تاريخ الميلاد</td>
              <td>22/8/2002</td>
            </tr>
            <tr>
              <td>Major</td>
              <td>Not Approved yet</td>
            </tr>
            <tr>
              <td>Program</td>
              <td>Not Approved yet</td>
            </tr>
            <tr>
              <td>Level</td>
              <td>Deploma</td>
            </tr>
            <tr>
              <td>تاريخ الميلاد</td>
              <td>22/8/2002</td>
            </tr>
            <tr>
              <td>تاريخ الميلاد</td>
              <td>22/8/2002</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>moaz29837@gmail.com</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>01157479753</td>
            </tr>
            <tr>
              <td>Home Number</td>
              <td>01157479753</td>
            </tr>
            <tr>
              <td>Nationality</td>
              <td>Egyption</td>
            </tr>
            <tr>
              <td>Governorate</td>
              <td>Giza</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>6 October city</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Malitary status</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Application Date</td>
              <td>2023-01-02</td>
            </tr>
            <tr>
              <td>Jop Title</td>
              <td>لأ اعمل</td>
            </tr>
            <tr>
              <td>Work Place</td>
              <td>لا اعمل</td>
            </tr>
            <tr>
              <td>work Address</td>
              <td>لا اعمل</td>
            </tr>
            <tr>
              <td>Work Mobile</td>
              <td>0000</td>
            </tr>
            <tr>
              <td>Vice president Approval Date</td>
              <td>Not Approved yet</td>
            </tr>
            <tr>
              <td>Date Of Registration</td>
              <td></td>
            </tr>
          </table>
        </div>

        <h1>Attachment</h1>

        <table class="profile-table">

          <tr>
            <th>Attachement</th>
            <th>Buttons</th>
          </tr>

          <tr>
            <td>Codexxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">edit</button>
            </td>
          </tr>
          <tr>
            <td>Code</td>
            <td  className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
            </td>
          </tr>
          <tr>
            <td>Code</td>
            <td  className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
            </td>
          </tr>
          <tr>
            <td>Code</td>
            <td  className='att-row'>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
              <button style={{ background: "#AD8700" }} class="atch-btn">Download</button>
              <button style={{ background: "#003C70" }} class="atch-btn">Open</button>
            </td>
          </tr>
        </table>
      </section>
    </>
  )
}

export default EditProfile