/* eslint-disable */
import React, { useState } from "react";
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import Sidebar from '../../Shared/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {theme_list, createAppStepSidebar} from '../../Json/Design_system'

import  {step_1} from '../../Redux/CreateAppReducer'
const CreateApp = () => {
  let dispatch = useDispatch() // Corrected line
  let state = useSelector(state=> state.CreateAppReducer)
  let [currentStep, setCurrentStep] = useState(1)
  let [themesSelected, setThemeSelected] = useState(1)

  let themeFun = (themes) => {
    dispatch(step_1(themes.name))
  }
  return (
    <>
 {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
<Sidebar />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
<Header />
      {/* / Navbar */}
      {/* Content wrapper */}
    <div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="py-3 mb-4 fw-bold">
      <span className="text-muted fw-light fw-600">Create /</span> Apps
    </h4>
    {/* Create App Wizard */}
    <div id="wizard-property-listing" class="bs-stepper vertical linear">
  <div className="bs-stepper-header" style={{borderRight: '1px solid #dbdade', borderBottom: 'none', minWidth: '18rem',   padding : '1.5rem', flexDirection: 'column',
  alignItems: 'stretch',
  margin: '0'
}}>
  {createAppStepSidebar?.map((create_app_sidebar, index) => (
        <div key={index} className={`step ${create_app_sidebar?.state === currentStep ? "active" : ""}`} data-target="#personal-details">
          <a className="step-trigger cursor-pointer" aria-selected="true" onClick={()=>setCurrentStep(create_app_sidebar?.state)}>
            <span className={`bs-stepper-circle ${currentStep === create_app_sidebar?.state ? "active-create-app" : ""}`}><i className={`ti ${create_app_sidebar?.icon} ti-sm ${currentStep === create_app_sidebar?.state ? "" : "op-70"}`} /></span>
            <span className={`bs-stepper-label ${currentStep === create_app_sidebar?.state ? "" : "op-70"}`}>
              <span className="bs-stepper-title fw-600">{create_app_sidebar?.heading}</span>
              <span className="bs-stepper-subtitle fw-600">{create_app_sidebar?.subheading}</span>
            </span>
          </a>
        </div>
      ))}

  </div>
  <div className="bs-stepper-content">
    <form id="wizard-property-listing-form">
      {/* Personal Details */}
      <div id="personal-details" className="content active dstepper-block fv-plugins-bootstrap5 fv-plugins-framework">
        <div className="row g-5">
          {theme_list?.map((themes, index) => (
                      <div className="col-md-4" key={index}>
                      <div class="image-container">
                      <a href="#">
                      <img class="card-img card-img-left" src={themes.src} alt="Card image" />
                      </a>
                      <div class="overlay cursor-pointer" onClick={()=>{
                        themeFun(themes)
                        setThemeSelected(index + 1)
                      }
                      }>
                      <button type="button" className="btn btn-secondary waves-effect waves-light centered-button">
                          Details
                        </button>
                      </div>
                      {themesSelected === index + 1 ? (                     
                         <div class="overlay2 cursor-pointer" onClick={()=>{
                        themeFun(themes)
                        setThemeSelected(index + 1)
                      }
                      }>
                      <button type="button" className="btn btn-secondary waves-effect waves-light centered-button">
                          Details
                        </button>
                      </div>) : null}
                      </div>
                      </div>
          ))}
          <div className="col-12 d-flex justify-content-between mt-4">
            <button className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 6 ? true : false}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>
      {/* Property Details */}
      <div id="property-details" className="content fv-plugins-bootstrap5 fv-plugins-framework" style={{display : 'none'}}>
        <div className="row g-3">
          <div className="col-12 pb-2">
            <div className="row">
              <div className="col-xl mb-xl-0 mb-2">
                <div className="form-check custom-option custom-option-icon checked">
                  <label className="form-check-label custom-option-content" htmlFor="customRadioSell">
                    <span className="custom-option-body">
                      <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.25 33.75V23.75H16.75V33.75H6.75002V18.0469C6.7491 17.8733 6.78481 17.7015 6.85482 17.5426C6.92482 17.3838 7.02754 17.2415 7.15627 17.125L19.6563 5.76562C19.8841 5.5559 20.1825 5.43948 20.4922 5.43948C20.8019 5.43948 21.1003 5.5559 21.3281 5.76562L33.8438 17.125C33.9696 17.2438 34.0703 17.3866 34.1401 17.5449C34.2098 17.7032 34.2472 17.8739 34.25 18.0469V33.75H24.25Z" fill="currentColor" opacity="0.2" />
                        <path d="M33.25 33.75C33.25 34.3023 33.6977 34.75 34.25 34.75C34.8023 34.75 35.25 34.3023 35.25 33.75H33.25ZM34.25 18.0469H35.25C35.25 18.0415 35.25 18.0361 35.2499 18.0307L34.25 18.0469ZM33.8437 17.125L34.5304 16.398C34.5256 16.3934 34.5207 16.389 34.5158 16.3845L33.8437 17.125ZM21.3281 5.76562L20.6509 6.50143L20.656 6.50611L21.3281 5.76562ZM19.6562 5.76562L20.3288 6.5057L20.3335 6.50141L19.6562 5.76562ZM7.15625 17.125L7.82712 17.8666L7.82878 17.8651L7.15625 17.125ZM6.75 18.0469H7.75001L7.74999 18.0416L6.75 18.0469ZM5.75 33.75C5.75 34.3023 6.19772 34.75 6.75 34.75C7.30228 34.75 7.75 34.3023 7.75 33.75H5.75ZM3 32.75C2.44772 32.75 2 33.1977 2 33.75C2 34.3023 2.44772 34.75 3 34.75V32.75ZM38 34.75C38.5523 34.75 39 34.3023 39 33.75C39 33.1977 38.5523 32.75 38 32.75V34.75ZM23.25 33.75C23.25 34.3023 23.6977 34.75 24.25 34.75C24.8023 34.75 25.25 34.3023 25.25 33.75H23.25ZM15.75 33.75C15.75 34.3023 16.1977 34.75 16.75 34.75C17.3023 34.75 17.75 34.3023 17.75 33.75H15.75ZM35.25 33.75V18.0469H33.25V33.75H35.25ZM35.2499 18.0307C35.2449 17.7243 35.1787 17.422 35.0551 17.1416L33.225 17.9481C33.2409 17.9844 33.2495 18.0235 33.2501 18.0631L35.2499 18.0307ZM35.0551 17.1416C34.9316 16.8612 34.7531 16.6084 34.5304 16.398L33.1571 17.852C33.1859 17.8792 33.209 17.9119 33.225 17.9481L35.0551 17.1416ZM34.5158 16.3845L22.0002 5.02514L20.656 6.50611L33.1717 17.8655L34.5158 16.3845ZM22.0053 5.02984C21.5929 4.6502 21.0528 4.43948 20.4922 4.43948V6.43948C20.551 6.43948 20.6076 6.46159 20.6509 6.50141L22.0053 5.02984ZM20.4922 4.43948C19.9316 4.43948 19.3915 4.6502 18.979 5.02984L20.3335 6.50141C20.3767 6.46159 20.4334 6.43948 20.4922 6.43948V4.43948ZM18.9837 5.02556L6.48371 16.3849L7.82878 17.8651L20.3288 6.50569L18.9837 5.02556ZM6.48538 16.3834C6.25236 16.5942 6.06642 16.8518 5.93971 17.1393L7.76988 17.9459C7.78318 17.9157 7.80268 17.8887 7.82712 17.8666L6.48538 16.3834ZM5.93971 17.1393C5.813 17.4269 5.74836 17.7379 5.75001 18.0521L7.74999 18.0416C7.74981 18.0087 7.75659 17.976 7.76988 17.9459L5.93971 17.1393ZM5.75 18.0469V33.75H7.75V18.0469H5.75ZM3 34.75H38V32.75H3V34.75ZM25.25 33.75V25H23.25V33.75H25.25ZM25.25 25C25.25 24.4033 25.013 23.831 24.591 23.409L23.1768 24.8232C23.2237 24.8701 23.25 24.9337 23.25 25H25.25ZM24.591 23.409C24.169 22.987 23.5967 22.75 23 22.75V24.75C23.0663 24.75 23.1299 24.7763 23.1768 24.8232L24.591 23.409ZM23 22.75H18V24.75H23V22.75ZM18 22.75C17.4033 22.75 16.831 22.9871 16.409 23.409L17.8232 24.8232C17.8701 24.7763 17.9337 24.75 18 24.75V22.75ZM16.409 23.409C15.9871 23.831 15.75 24.4033 15.75 25H17.75C17.75 24.9337 17.7763 24.8701 17.8232 24.8232L16.409 23.409ZM15.75 25V33.75H17.75V25H15.75Z" fill="currentColor" />
                      </svg>
                      <span className="custom-option-title">Sale the property</span>
                      <small>Post your property for sale.<br /> Unlimited free listing.</small>
                    </span>
                    <input name="plPropertySaleRent" className="form-check-input" type="radio" defaultValue={1} id="customRadioSell" defaultChecked />
                  </label>
                </div>
              </div>
              <div className="col-xl mb-xl-0 mb-2">
                <div className="form-check custom-option custom-option-icon">
                  <label className="form-check-label custom-option-content" htmlFor="customRadioRent">
                    <span className="custom-option-body">
                      <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 30C6.5 30.663 6.76339 31.2989 7.23223 31.7678C7.70107 32.2366 8.33696 32.5 9 32.5H34C34.3315 32.5 34.6495 32.3683 34.8839 32.1339C35.1183 31.8995 35.25 31.5815 35.25 31.25V13.75C35.25 13.4185 35.1183 13.1005 34.8839 12.8661C34.6495 12.6317 34.3315 12.5 34 12.5H9C8.33696 12.5 7.70107 12.2366 7.23223 11.7678C6.76339 11.2989 6.5 10.663 6.5 10V30Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M6.5 10V30C6.5 30.663 6.76339 31.2989 7.23223 31.7678C7.70107 32.2366 8.33696 32.5 9 32.5H34C34.3315 32.5 34.6495 32.3683 34.8839 32.1339C35.1183 31.8995 35.25 31.5815 35.25 31.25V13.75C35.25 13.4185 35.1183 13.1005 34.8839 12.8661C34.6495 12.6317 34.3315 12.5 34 12.5H9C8.33696 12.5 7.70107 12.2366 7.23223 11.7678C6.76339 11.2989 6.5 10.663 6.5 10ZM6.5 10C6.5 9.33696 6.76339 8.70107 7.23223 8.23223C7.70107 7.76339 8.33696 7.5 9 7.5H30.25" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.375 24.375C29.4105 24.375 30.25 23.5355 30.25 22.5C30.25 21.4645 29.4105 20.625 28.375 20.625C27.3395 20.625 26.5 21.4645 26.5 22.5C26.5 23.5355 27.3395 24.375 28.375 24.375Z" fill="currentColor" />
                      </svg>
                      <span className="custom-option-title">Rent the property</span>
                      <small>Post your property for rent.<br /> Unlimited free listing.</small>
                    </span>
                    <input name="plPropertySaleRent" className="form-check-input" type="radio" defaultValue={2} id="customRadioRent" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 fv-plugins-icon-container">
            <label className="form-label" htmlFor="plPropertyType">Property Type</label>
            <div className="position-relative"><select id="plPropertyType" name="plPropertyType" className="select2 form-select select2-hidden-accessible" data-allow-clear="true" data-select2-id="plPropertyType" tabIndex={-1} aria-hidden="true">
                <option value data-select2-id={4}>Select Property Type</option>
                <option value={10002}>Flat/ Apartment</option>
                <option value={10001}>Residential House</option>
                <option value={10017}>Villa</option>
                <option value={10003}>Builder Floor Apartment</option>
                <option value={10000}>Residential Land/ Plot</option>
                <option value={10021}>Penthouse</option>
                <option value={10022}>Studio Apartment</option>
              </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={3} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-plPropertyType-container"><span className="select2-selection__rendered" id="select2-plPropertyType-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select property type</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span></div>
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
          <div className="col-sm-6 fv-plugins-icon-container">
            <label className="form-label" htmlFor="plZipCode">Zip Code</label>
            <input type="number" id="plZipCode" name="plZipCode" className="form-control" placeholder={99950} />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plCountry">Country</label>
            <div className="position-relative"><select id="plCountry" name="plCountry" className="select2 form-select select2-hidden-accessible" data-allow-clear="true" data-select2-id="plCountry" tabIndex={-1} aria-hidden="true">
                <option value data-select2-id={2}>Select</option>
                <option value="Australia">Australia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Belarus">Belarus</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Mexico">Mexico</option>
                <option value="Philippines">Philippines</option>
                <option value="Russia">Russian Federation</option>
                <option value="South Africa">South Africa</option>
                <option value="Thailand">Thailand</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={1} style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-plCountry-container"><span className="select2-selection__rendered" id="select2-plCountry-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select country</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span></div>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plState">State</label>
            <input type="text" id="plState" name="plState" className="form-control" placeholder="California" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plCity">City</label>
            <input type="text" id="plCity" name="plCity" className="form-control" placeholder="Los Angeles" />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plLandmark">Landmark</label>
            <input type="text" id="plLandmark" name="plLandmark" className="form-control" placeholder="Nr. Hard Rock Cafe" />
          </div>
          <div className="col-lg-12">
            <label className="form-label" htmlFor="plAddress">Address</label>
            <textarea id="plAddress" name="plAddress" className="form-control" rows={2} placeholder="12, Business Park" defaultValue={""} />
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button className="btn btn-label-secondary btn-prev waves-effect"> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" /> <span className="align-middle d-sm-inline-block d-none">Previous</span> </button>
            <button className="btn btn-primary btn-next waves-effect waves-light"> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>
      {/* Property Features */}
      <div id="property-features" className="content fv-plugins-bootstrap5 fv-plugins-framework" style={{display : 'none'}}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plBedrooms">Bedrooms</label>
            <input type="number" id="plBedrooms" name="plBedrooms" className="form-control" placeholder={3} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plFloorNo">Floor No</label>
            <input type="number" id="plFloorNo" name="plFloorNo" className="form-control" placeholder={12} />
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plBathrooms">Bathrooms</label>
            <input type="number" id="plBathrooms" name="plBathrooms" className="form-control" placeholder={4} />
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plFurnishedStatus">Furnished Status</label>
            <select id="plFurnishedStatus" name="plFurnishedStatus" className="form-select">
              <option selected disabled value>Select furnished status </option>
              <option value={1}>Fully furnished</option>
              <option value={2}>Furnished</option>
              <option value={3}>Semi furnished</option>
              <option value={4}>Unfurnished</option>
            </select>
          </div>
          <div className="col-lg-12">
            <label className="form-label" htmlFor="plFurnishingDetails">Furnishing Details</label>
            <tags className="tagify  form-control" tabIndex={-1}>
              <tag title="Fridge" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="Fridge"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">Fridge</span></div></tag><tag title="AC" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="AC"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">AC</span></div></tag><tag title="TV" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="TV"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">TV</span></div></tag><tag title="WiFi" contentEditable="false" spellCheck="false" tabIndex={-1} className="tagify__tag tagify--noAnim" value="WiFi"><x title className="tagify__tag__removeBtn" role="button" aria-label="remove tag" /><div><span className="tagify__tag-text">WiFi</span></div></tag><span contentEditable tabIndex={0} data-placeholder="select options" aria-placeholder="select options" className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />
              ​
            </tags><input id="plFurnishingDetails" name="plFurnishingDetails" className="form-control" placeholder="select options" defaultValue="Fridge, AC, TV, WiFi" tabIndex={-1} />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Is there any common area?</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plCommonAreaRadio" id="plCommonAreaRadioYes" defaultChecked />
              <label className="form-check-label" htmlFor="plCommonAreaRadioYes">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plCommonAreaRadio" id="plCommonAreaRadioNo" />
              <label className="form-check-label" htmlFor="plCommonAreaRadioNo">No</label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Is there any attached balcony?</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plAttachedBalconyRadio" id="plAttachedBalconyRadioYes" defaultChecked />
              <label className="form-check-label" htmlFor="plAttachedBalconyRadioYes">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plAttachedBalconyRadio" id="plAttachedBalconyRadioNo" />
              <label className="form-check-label" htmlFor="plAttachedBalconyRadioNo">No</label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button className="btn btn-label-secondary btn-prev waves-effect"> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" /> <span className="align-middle d-sm-inline-block d-none">Previous</span> </button>
            <button className="btn btn-primary btn-next waves-effect waves-light"> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>
      {/* Property Area */}
      <div id="property-area" className="content fv-plugins-bootstrap5 fv-plugins-framework" style={{display : 'none'}}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plTotalArea">Total Area</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plTotalArea" name="plTotalArea" placeholder={1000} aria-describedby="pl-total-area" />
              <span className="input-group-text" id="pl-total-area">sq-ft</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plCarpetArea">Carpet Area</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plCarpetArea" name="plCarpetArea" placeholder={800} aria-describedby="pl-carpet-area" />
              <span className="input-group-text" id="pl-carpet-area">sq-ft</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plPlotArea">Plot Area</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plPlotArea" name="plPlotArea" placeholder={800} aria-describedby="pl-plot-area" />
              <span className="input-group-text" id="pl-plot-area">sq-yd</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plAvailableFrom">Available From</label>
            <input type="text" id="plAvailableFrom" name="plAvailableFrom" className="form-control flatpickr flatpickr-input" placeholder="YYYY-MM-DD" readOnly="readonly" />
          </div>
          <div className="col-sm-6">
            <label className="form-label">Possession Status</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plPossessionStatus" id="plUnderConstruction" defaultChecked />
              <label className="form-check-label" htmlFor="plUnderConstruction">Under Construction</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plPossessionStatus" id="plReadyToMoveRadio" />
              <label className="form-check-label" htmlFor="plReadyToMoveRadio">Ready to Move</label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Transaction Type</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plTransectionType" id="plNewProperty" defaultChecked />
              <label className="form-check-label" htmlFor="plNewProperty">New Property</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plTransectionType" id="plResaleProperty" />
              <label className="form-check-label" htmlFor="plResaleProperty">Resale</label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Is Property Facing Main Road?</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plRoadFacingRadio" id="plRoadFacingRadioYes" defaultChecked />
              <label className="form-check-label" htmlFor="plRoadFacingRadioYes">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plRoadFacingRadio" id="plRoadFacingRadioNo" />
              <label className="form-check-label" htmlFor="plRoadFacingRadioNo">No</label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Gated Colony?</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plGatedColonyRadio" id="plGatedColonyRadioYes" defaultChecked />
              <label className="form-check-label" htmlFor="plGatedColonyRadioYes">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plGatedColonyRadio" id="plGatedColonyRadioNo" />
              <label className="form-check-label" htmlFor="plGatedColonyRadioNo">No</label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button className="btn btn-label-secondary btn-prev waves-effect"> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" /> <span className="align-middle d-sm-inline-block d-none">Previous</span> </button>
            <button className="btn btn-primary btn-next waves-effect waves-light"> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>
      {/* Price Details */}
      <div id="price-details" className="content fv-plugins-bootstrap5 fv-plugins-framework" style={{display : 'none'}}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plExpeactedPrice">Expected Price</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plExpeactedPrice" name="plExpeactedPrice" placeholder="25,000" aria-describedby="pl-expeacted-price" />
              <span className="input-group-text" id="pl-expeacted-price">$</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plPriceSqft">Price per Sqft</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plPriceSqft" name="plPriceSqft" placeholder={500} aria-describedby="pl-price-sqft" />
              <span className="input-group-text" id="pl-price-sqft">$</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plMaintenenceCharge">Maintenance Charge</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plMaintenenceCharge" name="plMaintenenceCharge" placeholder={50} aria-describedby="pl-mentenence-charge" />
              <span className="input-group-text" id="pl-mentenence-charge">$</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="plMaintenencePer">Maintenance</label>
            <select id="plMaintenencePer" name="plMaintenencePer" className="form-select">
              <option value={1} selected>Monthly</option>
              <option value={2}>Quarterly</option>
              <option value={3}>Yearly</option>
              <option value={3}>One-time</option>
              <option value={3}>Per sqft. Monthly</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plBookingAmount">Booking/Token Amount</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plBookingAmount" name="plBookingAmount" placeholder={250} aria-describedby="pl-booking-amount" />
              <span className="input-group-text" id="pl-booking-amount">$</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label d-block" htmlFor="plOtherAmount">Other Amount</label>
            <div className="input-group input-group-merge">
              <input type="number" className="form-control" id="plOtherAmount" name="plOtherAmount" placeholder={500} aria-describedby="pl-other-amount" />
              <span className="input-group-text" id="pl-other-amount">$</span>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Show Price as</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="plShowPriceRadio" id="plNagotiablePrice" defaultChecked />
              <label className="form-check-label" htmlFor="plNagotiablePrice">Negotiable</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="plShowPriceRadio" id="plCallForPrice" />
              <label className="form-check-label" htmlFor="plCallForPrice">Call for Price</label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Price includes</label>
            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" name="plCarParking" id="plCarParking" />
              <label className="form-check-label" htmlFor="plCarParking">Car Parking</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="plClubMembership" id="plClubMembership" />
              <label className="form-check-label" htmlFor="plClubMembership">Club Membership</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="plOtherCharges" id="plOtherCharges" />
              <label className="form-check-label" htmlFor="plOtherCharges">Stamp Duty &amp; Registration charges excluded.</label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button className="btn btn-label-secondary btn-prev waves-effect"> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" /> <span className="align-middle d-sm-inline-block d-none">Previous</span> </button>
            <button className="btn btn-success btn-submit btn-next waves-effect waves-light"><span className="align-middle d-sm-inline-block d-none me-sm-1">Submit</span><i className="ti ti-check ti-xs" /></button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    {/*/ Create App Wizard */}
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
  <div className="drag-target" style={{touchAction: 'pan-y', userSelect: 'none'}} />
</div>

{/* / Layout wrapper */}

    </>
  );
};

export default CreateApp;
