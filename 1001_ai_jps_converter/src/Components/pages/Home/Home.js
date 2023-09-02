/* eslint-disable */
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import ErrorAlert from '../../shared/Alerts/ErrorAlert'
import SuccessAlert from '../../shared/Alerts/SuccessAlert'
import { addImage } from '../../../Services/ImageService'
import {UserDataRed} from '../../../Redux/UserReducer'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import Sidebar from '../../shared/Sidebar'
import { getUser } from '../../../Services/UserSerivice'
import { conversion_option,conversion_option_starter, conversion_option_professional, conversion_option_entrepreneur } from '../../../json/bin'
import {selectToggleRed} from '../../../Redux/SelectToggleReducer'

const Home = () => {
  let dispatch = useDispatch()

  let state = useSelector(state => state.userReducer)
  let state2 = useSelector(state => state.selectToggleReducer)
  let [toType, setToType] = useState(null)
  let [selectedOption, setSelectedOption] = useState('');
  let [alert, setAlert] = useState(false)
  let [successAlertState, setSuccessAlertState] = useState(false)
  let [planFormat, setPlanFormat] = useState(0)
  let [msg, setMsg] = useState('')
  let [successMsg, setSuccessMsg] = useState('')
  let [image, setImage] = useState()
  let [activeOption, setActiveOption] = useState(null);


  let getUserDataFun = async () => {
    let token = localStorage.getItem('token')
    let result = await getUser(token);
    dispatch(UserDataRed(result.data[0]))

  }
  useEffect(() => {
    if(state.length == 0) {
      getUserDataFun();
    }
  }, [])

  useEffect(() => {
    switch (state.plan) {
      case "free":
        setPlanFormat(0);
        break;
      case "starter":
        setPlanFormat(1);
        break;
      case "professional":
        setPlanFormat(2);
        break;
      case "entrepreneur":
        setPlanFormat(3);
        break;
      default:
        setPlanFormat(-1); // Handle unexpected values here
        break;
    }    
  }, [state.plan]);
  
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

      // Now you can access the selected option using 'selectedOption'
    if (selectedOption === 'Select Image Format for Conversion') {
      setAlert(true)
      setSuccessAlertState(false)
      setMsg('Select format to convert')
      setTimeout(() => {
        setAlert(false);
      }, 5000);            
    } else {
      // User has selected an option, do something with 'selectedOption'
      // console.log('Selected Option:', selectedOption);
  
      // The rest of your submitImage function...
    }
      const formData = new FormData()
      formData.append('type', toType)
      formData.append('image', image)

     if(image == undefined) {
      setAlert(true)
      setSuccessAlertState(false)
      setMsg('Select Image to convert')
      setTimeout(() => {
        setAlert(false);
      }, 5000);           
     }
      let result = await addImage(formData);
      console.log(result.data)

    }

    const handleSelectMouseDown = (e) => {
      e.preventDefault(); // Prevent the default behavior of the select
      setActiveOption(selectedOption); // Set the active option when the dropdown is clicked
      dispatch(selectToggleRed(!state2)); // Close the sidebar
    };
    
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
            <h4 className="py-3 mb-4" onClick={()=>dispatch(selectToggleRed(false))}>
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
  <select className="form-select pointer" id="exampleFormControlSelect1" aria-label="Default select example" onMouseDown={handleSelectMouseDown}>
    <option>{activeOption ? activeOption : "Select Image Format for Conversion"}</option>
  </select>
  {state2 &&   <ul className="dropdown-menu dropdown-menu-end show">
                  <li>
                    <a className="dropdown-item cursor-pointer" onClick={() => setSelectedOption('Select Image Format for Conversion')}>
                    Select Image Format for Conversion
                    </a>
                  </li>
                    {planFormat === 0 &&
      conversion_option.map((format, index) => (
        <div key={index}>
                  <li>
                    <a className={`dropdown-item cursor-pointer ${
            format === activeOption ? "active" : ""
          }`} onClick={() => {
                      setSelectedOption(format)
                      setToType(format)
                      setActiveOption(format); // Set the active option when a list item is clicked
                      dispatch(selectToggleRed(false))
                      }}>
        {format}
        </a>
      </li>
        </div>
      ))}
                  {planFormat === 1 &&
      conversion_option_starter.map((format, index) => (
        <div key={index}>
        <li>
        <a className={`dropdown-item cursor-pointer ${
            format === activeOption ? "active" : ""
          }`} onClick={() => {
          setSelectedOption(format)
          setToType(format)
          setActiveOption(format); // Set the active option when a list item is clicked
          dispatch(selectToggleRed(false))
          }}>
        {format}
        </a>
                  </li>
        </div>
      ))}
                  {planFormat === 2 &&
      conversion_option_professional.map((format, index) => (
        <div key={index}>
        <li>
        <a className={`dropdown-item cursor-pointer ${
            format === activeOption ? "active" : ""
          }`} onClick={() => {
          setSelectedOption(format)
          setToType(format)
          setActiveOption(format); // Set the active option when a list item is clicked
          dispatch(selectToggleRed(false))
          }}>
 {format}
 {index === conversion_option_entrepreneur.length - 1 && (
                 <span class="badge rounded-pill bg-warning text-white badge-notifications ms-3 p-1 ps-2 pe-2">New</span>
                 )}
 </a>
                  </li>
        </div>
      ))}
                  {planFormat === 3 &&
      conversion_option_entrepreneur.map((format, index) => (
        <div key={index}>
        <li>
        <a className={`dropdown-item cursor-pointer ${
            format === activeOption ? "active" : ""
          }`} onClick={() => {
          setSelectedOption(format)
          setToType(format)
          setActiveOption(format); // Set the active option when a list item is clicked
          dispatch(selectToggleRed(false))
          }}>
          {format}
          {index === conversion_option_entrepreneur.length - 1 && (
                 <span class="badge rounded-pill bg-warning text-white badge-notifications ms-3 p-1 ps-2 pe-2">New</span>
      )}
      </a>
                  </li>
      </div>
      ))}
                </ul>}
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
