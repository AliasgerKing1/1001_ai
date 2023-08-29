/* eslint-disable */
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import ErrorAlert from '../../shared/Alerts/ErrorAlert'
import SuccessAlert from '../../shared/Alerts/SuccessAlert'
import { DeleteAllImage, addImage } from '../../../Services/ImageService'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
const Home = () => {
  let [toType, setToType] = useState(null)
  let [alert, setAlert] = useState(false)
  let [successAlertState, setSuccessAlertState] = useState(false)
  let [msg, setMsg] = useState('')
  let [successMsg, setSuccessMsg] = useState('')
  let [image, setImage] = useState()
  const handleDivClick = () => {
      const fileInput = document.getElementById('fileInput');
      if (fileInput) {
        fileInput.click();
      }
    };
    let saveFile = async (event) => {
      try {
        if(toType !== null) {
          let inputImageType = event.target.files[0].type;
          let onlyType = inputImageType.split('/')[1]
          onlyType = onlyType.toUpperCase();
          if(onlyType == 'JPG' || onlyType == 'JPEG' || onlyType == 'PNG' || onlyType == 'SVG+XML') {
            if(toType !== onlyType) {
              setAlert(false)
              // setSuccessAlertState(true)
              // setTimeout(() =>{
              //   setSuccessAlertState(false)
              // } , 5000)
              // setSuccessMsg('Image Upload SuccessFully')
              setImage(event.target.files[0])
              //send request
            }
            else {
              setAlert(true)
              setSuccessAlertState(false)
              setMsg('Select diffrent image format to convert')
              setTimeout(() => {
                setAlert(false);
              }, 5000);            
              //send error
            }
          } else {
            setAlert(true)
            setSuccessAlertState(false)
            setMsg('Invalid Image Format')
            setTimeout(() => {
              setAlert(false);
            }, 5000);          
  
          }
          } else {
            setAlert(true)
            setSuccessAlertState(false)
            setMsg('Select Image Format')
            setTimeout(() => {
              setAlert(false);
            }, 5000);        
          }
        } catch (error) {
          console.log(error)
          setAlert(true)
            setSuccessAlertState(false)
            setMsg('Internal server error')
            setTimeout(() => {
              setAlert(false);
            }, 5000);   
        }
    }

    let submitImage = async (e) => {
      e.preventDefault();
      const formData = new FormData()
      formData.append('type', toType)
      formData.append('image', image)
      let result = await addImage(formData);
      console.log(result.data)
    }
  return (
    <>
    <div>
  {/* beautify ignore:start */}
  {/* Layout wrapper */}
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <Sidebar />
      {/* Layout container */}
      <div className="layout-page">
        <Header />
        {/* Content wrapper */}
        <div className="content-wrapper">
          {/* Content */}
          <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4">
              <span className="text-muted fw-light"></span> Image Converter
            </h4>
            <div className="row">
              {/* Basic  */}
              <div className="col-6 offset-3">
  <div className="card mb-4">
    {/* <h5 className="card-header">Image Converter</h5> */}
    <div className="card-body">
    <div className="col-md-6">
    <div className="mb-3">
  <select className="form-select pointer" id="exampleFormControlSelect1" aria-label="Default select example" onChange={(e)=>setToType(e.target.value)}>
    <option value={null}>Select Image Format for Conversion</option>
    <option value={'JPG'}>JPG</option>
    <option value={'PNG'}>PNG</option>
    <option value={'SVG'}>SVG</option>
  </select>
</div>

        </div>
      <input type='file' id='fileInput' onChange={(e)=>saveFile(e)} style={{display : 'none'}} />
      <form className="dropzone needsclick dz-clickable" onClick={handleDivClick}>
        <div className="dz-message needsclick">
          Drop files here or click to upload
          <span className="note needsclick">(For improved accuracy, please select a <span className='fw-medium'>higher-quality</span>  image.)</span>
        </div>
      </form>
        <button type="submit" className="btn btn-outline-primary waves-effect mt-3 fl-right" onClick={submitImage}>Convert</button>
    </div>
  </div>
  {successAlertState ? (<SuccessAlert msg={successMsg} />) : null}

{alert ? (<ErrorAlert msg={msg} />) : null}
</div>
              {/* /Basic  */}
            </div>
          </div>

          {/* / Content */}
          {/* Footer */}
          <Footer />
          {/* / Footer */}
          <div className="content-backdrop fade" />
        </div>
        {/* Content wrapper */}
      </div>
      {/* / Layout page */}
    </div>
    {/* Overlay */}
    <div className="layout-overlay layout-menu-toggle" />
    {/* Drag Target Area To SlideIn Menu On Small Screens */}
    <div className="drag-target" />
  </div>
  {/* / Layout wrapper */}
  {/* beautify ignore:end */}
</div>
    </>
  )
}

export default Home
