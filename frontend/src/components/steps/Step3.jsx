import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Upload } from 'antd';

const Step3 = ({ UserData, SetUserData, Images, SetImages }) => {




  const [t, i18n] = useTranslation();
  let counter = 0;

  useEffect(() => {
    SetUserData(prevUserData => ({
      ...prevUserData,
      length_of_file: counter
    }));
  }, [counter, SetUserData]);



  return (
    <>
      <div className="top">
        <h2>
          {t('step3-title')}
        </h2>
      </div>
      <div className="content superContianer">


        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-1')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image1: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-2')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image2: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-3')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image3: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-4')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image4: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-5')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image5: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-6')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image6: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-7')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image7: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-8')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image8: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-9')} </span>
          <div>
            <Upload.Dragger
              listType='picture'
              action={"https://localhost:5000/checklogin"}
              maxCount={1}
              showUploadList={{ showRemoveIcon: false }}
              accept='.jpg,.png,.jpeg , .webp , .pdf'
              beforeUpload={(file) => {
                console.log(file)
                return false;
              }
              }
              onChange={(e) => {
                SetImages({ ...Images, image9: e.fileList[0].originFileObj })
              }}
            >
              Drag file here or
              <button> {t('choose-file')} </button>
            </Upload.Dragger>
          </div>
          <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div>
        {/* <label htmlFor="image1" className='inputIN'>
            {
              Images.image1?`${Images.image1.name}`: `${t('choose-file')} `
            }
          </label>
          <input  type="file" name="image1" id="image1" onChange={(e)=>{SetImages({...Images, image1: e.target.files[0]})}} style={{ display: "none" }}  required/> */}
        {/* <div style={{ display: "none" }}>
            {counter = counter + 1}
          </div>
        </div> */}


        {/* <div className="input-img-container gridChange ">
          <span className='labelChooes'>{t('img-2')} </span>
          <label htmlFor="image2" className='inputIN'>
            {
              Images.image2?`${Images.image2.name}`:  `${t('choose-file')} `
            }
          </label>
         
          <input type="file" name="image2" id="image2" style={{ display: "none" }}
             onChange={(e)=>{SetImages({...Images, image2: e.target.files[0] })}}
          />
          <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'> {t('img-3')} </span>
          <label htmlFor="image3" className='inputIN'>
            {
              Images.image3?`${Images.image3.name}`:  `${t('choose-file')} `
            }
          </label>
          
          <input type="file" name="image3" id="image3" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image3: e.target.files[0] })}}
          />
          <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-4')} </span>
          <label htmlFor="image4" className='inputIN'>
            {
              Images.image4?`${Images.image4.name}`: `${t('choose-file')} `
            }
          </label>
          <input type="file" name="image4" id="image4" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image4: e.target.files[0] })}}
          />
          <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'>{t('img-5')} </span>
          <label htmlFor="image5" className='inputIN'>
            {
              Images.image5?`${Images.image5.name}`: `${t('choose-file')} `
            }
          </label>
          <input type="file" name="image5" id="image5" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image5: e.target.files[0] })}}
          />
          <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
        </div>

        <div className="input-img-container gridChange">
          <span className='labelChooes'> {t('img-6')} </span>
          <label htmlFor="image6" className='inputIN'>
            {
              Images.image6?`${Images.image6.name}`: `${t('choose-file')} `
            }
          </label>
        
          <input type="file" name="image6" id="image6" style={{ display: "none" }} 
             onChange={(e)=>{SetImages({...Images, image6: e.target.files[0]})}}
          />
          <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
        </div>

        {+UserData.employment === 1 ?(
            <div className="input-img-container gridChange">
            <span className='labelChooes'>{t('img-7')} </span>
            <label htmlFor="image7" className='inputIN'>
            {
              Images.image7?`${Images.image7.name}`: `${t('choose-file')} `
            }
          </label>
            <input type="file" name="image7" id="image7" style={{ display: "none" }} 
               onChange={(e)=>{SetImages({...Images, image7: e.target.files[0] })}}
            />
            <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
          </div>
        ): null
        }
        {
          +UserData.gender === 1 ?(
            <div className="input-img-container gridChange">
            <span className='labelChooes'>{t('img-8')} </span>
            <label htmlFor="image8" className='inputIN'>
            {
              Images.image8?`${Images.image8.name}`: `${t('choose-file')} `
            }
          </label>
            <input type="file" name="image8" id="image8" style={{ display: "none" }} 
               onChange={(e)=>{SetImages({...Images, image8: e.target.files[0] })}}
            />
            <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
          </div>
          ):null
        }
        

        {+UserData.level === 2 ?(
            
            <div className="input-img-container gridChange">
            <span className='labelChooes'>{t('img-9')} </span>
            <label htmlFor="image9" className='inputIN'>
            {
              Images.image9?`${Images.image9.name}`: `${t('choose-file')} `
            }
          </label>
            <input type="file" name="image9" id="image9" style={{ display: "none" }} 
               onChange={(e)=>{SetImages({...Images, image9: e.target.files[0] })}}
            />
            <div style={{display:"none"}}>
              {counter = counter + 1} 
            </div>
            
          </div>
        ): null
        }
                 */}
      </div>
      <div className='top' style={{ marginTop: "2rem" }}><h1>*** {t('add-media')} *** </h1> </div>

    </>

  )
}

export default Step3