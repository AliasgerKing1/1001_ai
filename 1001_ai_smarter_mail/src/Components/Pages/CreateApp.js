/* eslint-disable */
import React, { useState } from "react";
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import Sidebar from '../../Shared/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {theme_list, createAppStepSidebar, project_category, memeber_list} from '../../Json/Design_system'
import {addProject, updateProject} from '../../Services/ProjectService'
import  {step_1, step_2} from '../../Redux/CreateAppReducer'
const CreateApp = () => {
  let dispatch = useDispatch() // Corrected line
  let state = useSelector(state=> state.CreateAppReducer)
  let [currentStep, setCurrentStep] = useState(1)
  let [themesSelected, setThemeSelected] = useState(1)
  let [step_2_github_selected, setStep_2_github_selected] = useState(true)
  let [addMemberDropdown, setAddMemberDropdown] = useState(false)
  let [activeOption, setActiveOption] = useState(null);
  let [project_id, setProject_id] = useState('');
  let [selectedOption, setSelectedOption] = useState('');
  let [step_2_data, setStep_2_data] = useState({
p_link : "",
p_name : "",
p_cateogry : "",
p_member : [],
p_description : "",
p_git : true,
});

let [addMemberToProject, setAddMemberToProject] = useState([]);
  let themeFun = (themes) => {
    dispatch(step_1(themes.name))
  }
  const handleSelectMouseDown = (e) => {
    e.preventDefault(); // Prevent the default behavior of the select
    setActiveOption(selectedOption); // Set the active option when the dropdown is clicked
    setAddMemberDropdown(!addMemberDropdown)
  };

  let submitStep_1 = async ()=> {
    let p_id_status = localStorage.getItem('project_id_status');
    if(p_id_status === true) {
      console.log("already made")
    } else {
      let result = await addProject(state)
      if(result.data.status === 200) {
        setProject_id(result.data.p_id)
        setCurrentStep(currentStep + 1);
        localStorage.setItem('project_id_status', true)
      }
    }
  }
  let submitStep_2 = async ()=> {
    setStep_2_data(prevState => ({
      ...prevState,
        p_member: addMemberToProject
    }));
    setStep_2_data(prevState => ({
      ...prevState,
        p_link: `http://localhost:3000/auth/${project_id}`
    }));
    dispatch(step_2(step_2_data))
    console.log(state)
    let result = await updateProject(project_id,state)
    if(result.data.status === 200) {
      setCurrentStep(currentStep + 1);
    }
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
      {currentStep === 1 && (    
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
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 4 ? true : false} onClick={submitStep_1}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>)}
      {/* Property Details */}
      {currentStep === 2 && (    
      <div id="property-details" className="content fv-plugins-bootstrap5 fv-plugins-framework">
        <div className="row g-3">
          <div className="col-12 pb-2">
            <div className="row">
              <div className="col-xl mb-xl-0 mb-2">
                <div className={`form-check custom-option custom-option-icon ${step_2_github_selected === true ? "checked" : ""}`} onClick={()=>{
                  setStep_2_github_selected(true);
                  setStep_2_data(prevState => ({
                    ...prevState,
                      p_git: true
                  }));
              }}>
                  <label className="form-check-label custom-option-content" htmlFor="customRadioSell">
                    <span className="custom-option-body">
                      <img src="/assets/img/icons/brands/git.svg" />
                      <span className="custom-option-title">Create git repository</span>
                      <small>Create a github repository<br /> for this project.</small>
                    </span>
                    <input name="plPropertySaleRent" className="form-check-input" type="radio" defaultValue={1} id="customRadioSell" defaultChecked />
                  </label>
                </div>
              </div>
              <div className="col-xl mb-xl-0 mb-2">
                <div className={`form-check custom-option custom-option-icon ${step_2_github_selected === false ? "checked" : ""}`} onClick={()=>{
                    setStep_2_github_selected(false);
                    setStep_2_data(prevState => ({
                      ...prevState,
                        p_git: false
                    }));
}}>
                  <label className="form-check-label custom-option-content" htmlFor="customRadioRent">
                    <span className="custom-option-body">
                    <img src="/assets/img/icons/brands/cross.svg" />
                      <span className="custom-option-title">Don't create git repository</span>
                      <small>Don't create a github repository<br /> for this project.</small>
                    </span>
                    <input name="plPropertySaleRent" className="form-check-input" type="radio" defaultValue={2} id="customRadioRent" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label" htmlFor="p_name">Project Name</label>
            <input type="text" id="p_name" name="p_name" className="form-control" placeholder="1001_ai" onChange={(e)=> {
              setStep_2_data(prevState => ({
                ...prevState, p_name: e.target.value
              }));
            }} />
          </div>
          <div className="col-sm-6 fv-plugins-icon-container">
            <label className="form-label" htmlFor="p_cateogry">Project Category</label>
            <div className="position-relative">
              <select id="p_cateogry" name="p_cateogry" className="select2 form-select select2-hidden-accessible" data-allow-clear="true" data-select2-id="p_cateogry" tabIndex={-1} aria-hidden="true" onChange={(e)=> {
              setStep_2_data(prevState => ({
                ...prevState,
                  p_cateogry: e.target.value
              }));
            }}>
                <option value data-select2-id={4}>Select Project Category</option>
                {project_category?.sort().map((category, index) =>(
                    <option value={category} key={index}>{category}</option>
                ) )}
              </select></div>
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>
            
          <div className="col-sm-6">
            <a className="cursor-pointer text-primary fw-bold" data-bs-toggle="modal" data-bs-target="#shareProject">Add Member</a>
            </div>
          <div className="col-sm-6">
          <div className="d-flex align-items-center">
  <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
    {addMemberToProject?.slice(0, 3).map((memberSelected, index) => (
       <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xl pull-up" aria-label={memberSelected?.name} data-bs-original-title={memberSelected?.name} key={index}>
       <img className="rounded-circle" src={memberSelected?.image} alt="Avatar" />
     </li>
    ))}

    {addMemberToProject.length > 3 ? ( 
         <li className="avatar avatar-sm">
      <span className="avatar-initial rounded-circle pull-up" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title={`${addMemberToProject.length - 3} more`}>+{addMemberToProject.length - 3}</span>
    </li>) : null}
  </ul>
</div>

          </div>
          <div className="col-lg-12">
            <label className="form-label" htmlFor="p_description">Project Description</label>
            <textarea id="p_description" name="p_description" className="form-control" rows={2} placeholder="Saifee nagar, indore, India" defaultValue={""} onChange={(e)=> {
              setStep_2_data(prevState => ({
                ...prevState,
                  p_description: e.target.value
              }));
            }} />
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 4 ? true : false} onClick={submitStep_2}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>)}
      {/* Property Features */}
      {currentStep === 3 && ( 
      <div id="property-features" className="content fv-plugins-bootstrap5 fv-plugins-framework" >
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
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 4 ? true : false} onClick={()=>setCurrentStep(currentStep + 1)}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>)}
      {/* Property Area */}
      {currentStep === 4 && ( 
      <div id="property-area" className="content fv-plugins-bootstrap5 fv-plugins-framework" >
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
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 4 ? true : false} onClick={()=>setCurrentStep(currentStep + 1)}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>)}
      {/* Price Details */}
      {currentStep === 5 && ( 
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
      </div>)}
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

{/* Share Project Modal */}
<div className="modal fade" id="shareProject" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-lg modal-simple modal-enable-otp modal-dialog-centered">
    <div className="modal-content p-3 p-md-5">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="text-center">
          <h3 className="mb-2">Share Project</h3>
          <p>Share project with a team member</p>
        </div>
      </div>
      <div className="mb-4 pb-2">
        <label htmlFor="select2Basic" className="form-label">Add Members</label>
        <select id="select2Basic" className="form-select form-select-lg share-project-select cursor-pointer" data-allow-clear="true" onMouseDown={handleSelectMouseDown}>
          <option data-name={activeOption ? activeOption : "Select Memeber"}>{activeOption ? activeOption : "Select Memeber"}</option>
        </select>
        {addMemberDropdown && 
        <ul className="dropdown-menu dropdown-menu-end show" style={{width : '88%'}}>
                <li>
                  <a className="dropdown-item cursor-pointer" onClick={() => setSelectedOption('Select Memeber')}>Select Memeber</a>
                </li>
                {
      memeber_list.map((member, index) => (
        <div key={index}>
                  <li>
                    <a className={`dropdown-item cursor-pointer ${
            member === activeOption ? "active" : ""
          }`} onClick={() => {
                      setActiveOption(member.name); // Set the active option when a list item is clicked
                      setSelectedOption(member.name)
                      setAddMemberDropdown(false);
                      setAddMemberToProject([...addMemberToProject, member])
                      setStep_2_data(prevState => ({
                        ...prevState,
                        step_2: {
                          ...prevState.step_2,
                          p_member: member
                        }
                      }));
                      }}>
        {member?.name}
        </a>
      </li>
        </div>
      ))}
              </ul> }
      </div>
      <h4 className="mb-4 pb-2">{addMemberToProject.length} Members</h4>
      <ul className="p-0 m-0">
        {addMemberToProject?.map((memberSelected, index) => (
           <li className="d-flex flex-wrap mb-3" key={index}>
           <div className="avatar me-3">
             <img src={memberSelected?.image} alt="avatar" className="rounded-circle" />
           </div>
           <div className="d-flex justify-content-between flex-grow-1">
             <div className="me-2">
               <p className="mb-0">{memberSelected?.name}</p>
               <p className="mb-0 text-muted">{memberSelected?.email}</p>
             </div>
             <div className="dropdown">
               <button type="button" className="btn dropdown-toggle p-2" data-bs-toggle="dropdown" aria-expanded="false"><span className="text-muted fw-normal me-2 d-none d-sm-inline-block">Can Edit</span></button>
               <ul className="dropdown-menu dropdown-menu-end">
                 <li>
                   <a className="dropdown-item" href="javascript:void(0);">Owner</a>
                 </li>
                 <li>
                   <a className="dropdown-item" href="javascript:void(0);">Can Edit</a>
                 </li>
                 <li>
                   <a className="dropdown-item" href="javascript:void(0);">Can Comment</a>
                 </li>
                 <li>
                   <a className="dropdown-item" href="javascript:void(0);">Can View</a>
                 </li>
               </ul>
             </div>
           </div>
         </li>
        ))}
      </ul>
      <div className="d-flex align-items-start mt-4 align-items-sm-center">
        <i className="ti ti-users me-2" />
        <div className="d-flex justify-content-between flex-grow-1 align-items-center flex-wrap gap-2">
          <h6 className="mb-0">Public to {step_2_data?.step_2?.p_name} - 1001_ai</h6>
          <button className="btn btn-primary">Copy Project Link</button>
        </div>
      </div>
    </div>
  </div>
</div>
{/*/ Share Project Modal */}





    </>
  );
};

export default CreateApp;
