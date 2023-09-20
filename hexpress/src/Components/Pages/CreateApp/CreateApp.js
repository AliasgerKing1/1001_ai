/* eslint-disable */
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import Sidebar from '../../Shared/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {theme_list, createAppStepSidebar, project_category, memeber_list, selectFeatures, selectRestfulAPI} from '../../../Json/Design_system'
import {addProject, updateProject} from '../../../Services/ProjectService'
import  {step_1, step_2, step_3, step_4} from '../../../Redux/CreateAppReducer'
import Switch from "../../Shared/Small_Components/Switch";
import Switch2 from "../../Shared/Small_Components/Switch2";
const CreateApp = () => {
  let dispatch = useDispatch() // Corrected line
  let navigate = useNavigate()
  let state = useSelector(state=> state.CreateAppReducer)
  let [currentStep, setCurrentStep] = useState(1)
  let [themesSelected, setThemeSelected] = useState(1)
  let [step_2_github_selected, setStep_2_github_selected] = useState(true)
  let [addMemberDropdown, setAddMemberDropdown] = useState(false)
  let [addCategoryDropdown, setAddCategoryDropdown] = useState(false)
  let [activeOption, setActiveOption] = useState(null);
  let [activeOption2, setActiveOption2] = useState(null);
  let [project_id, setProject_id] = useState('');
  let [selectedOption, setSelectedOption] = useState('');
  let [selectedOption2, setSelectedOption2] = useState('');
  let [selectedTheme,setSelectedTheme] = useState('Vuexy')
  let [memberList,setMemberList] = useState(memeber_list)

  let [step_2_data, setStep_2_data] = useState({
p_link : "",
p_name : "",
p_cateogry : "",
p_member : [],
p_description : "",
p_git : true,
});
  let [step_4_data, setStep_4_data] = useState({
redux : true,
login_auth : true,
routing : true,
auth_antiauth : true,
file_uplaod : true,
pages_shared : true,
seo_optimised : true,
infinite_scroll : true,
pagination : false,
admin_dashboard : true,
restful_api : {
  user : true,
  admin : true,
  product : false,
  category : false,
  client : false,
  post : false,
  cources : false,
  faculties : false,
  student : false,
  video : false,
  image : false,
  question : false,
  feedback : false,
},

});

let [addMemberToProject, setAddMemberToProject] = useState([]);
let [addPages, setAddPages] = useState(['HOME', 'HELP', 'ABOUT'])
  let themeFun = (themes) => {
    setSelectedTheme(themes.name )
    dispatch(step_1(themes.name))
  }
  const handleSelectMouseDown = (e) => {
    e.preventDefault(); // Prevent the default behavior of the select
    setActiveOption(selectedOption); // Set the active option when the dropdown is clicked
    setAddMemberDropdown(!addMemberDropdown)
  };
  const handleSelectMouseDown2 = (e) => {
    e.preventDefault(); // Prevent the default behavior of the select
    setActiveOption2(selectedOption2); // Set the active option when the dropdown is clicked
    setAddCategoryDropdown(!addCategoryDropdown)
  };

  let submitStep_1 = async ()=> {
    let p_id_status = localStorage.getItem('project_id_status');
    if(p_id_status === true) {
      console.log("already made")
    } else {
      // let result = await addProject(state)
      // if(result.data.status === 200) {
      //   setProject_id(result.data.p_id)
      //   localStorage.setItem('project_id_status', true)
      //   setCurrentStep(currentStep + 1);
      // }
    }
  }
  let submitStep_2 = async ()=> {
    setStep_2_data(prevState => ({
      ...prevState,
      p_member: addMemberToProject,
    }));
// Wait for next render to ensure state has been updated
  dispatch(step_2(step_2_data))
  // console.log(state)
  let bothStepData = {
    theme_name : selectedTheme,
    step_2 : step_2_data
  }
  // let result = await updateProject(project_id,bothStepData)
  // if(result.data.status === 200) {
  //   setCurrentStep(currentStep + 1);
  // }
  }

  let checkSelectedMember = (name, email) => {
  memberList = memberList.filter(member => !(member?.name === name && member?.email === email));
  setMemberList(memberList)
  }
  let removeFromInvite = (name, email) => {
    let memberToRemove = addMemberToProject.filter(member => member?.name === name && member?.email === email);
    addMemberToProject = addMemberToProject.filter(member => !(member?.name === name && member?.email === email));
    setAddMemberToProject(addMemberToProject)
    setMemberList([...memberList, memberToRemove[0]])
  }

  let copyProjectLink = () => {
    let link = `http://localhost:3000/auth/project/${project_id}`
    navigator.clipboard.writeText(link)
  }

  useEffect(() => {
    window.addEventListener('message', handleTagEvent);
    return () => {
      window.removeEventListener('message', handleTagEvent);
    };
  }, []);

  const handleTagEvent = (event) => {
    if (event.data.event === 'tagAdded') {
      // Ensure that the new tag is not already in the array
    if (!addPages.includes(event.data.value)) {
      setAddPages(prevAddPages => [...prevAddPages, event.data.value]);
    }
      // Handle the new tag value in your React component
    } else if (event.data.event === 'tagRemoved') {
      setAddPages(prevAddPages => {
        const newAddPages = prevAddPages.filter(data => data !== event.data.value);
        return newAddPages;
      });
      // Handle the removed tag value in your React component
    }
  }

  let submitStep_3= async ()=> {
// Wait for next render to ensure state has been updated
  dispatch(step_3(addPages))
  let ThreeStepData = {
    theme_name : selectedTheme,
    step_2 : step_2_data,
    step_3 : addPages
  }
  // let result = await updateProject(project_id,ThreeStepData)
  // if(result.data.status === 200) {
  //   setCurrentStep(currentStep + 1);
  // }
}
  let submitStep_4= async ()=> {
// Wait for next render to ensure state has been updated
  dispatch(step_4(step_4_data))
  let allStepData = {
    theme_name : selectedTheme,
    step_2 : step_2_data,
    step_3 : addPages,
    step_4 : step_4_data
  }
  //   // Now you can proceed with your form submission
  //   let result = await updateProject(project_id, allStepData);
  //   if (result.data.status === 200) {
  //     navigate('/auth/home');
  //   }
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
              <select id="p_cateogry" name="p_cateogry" className="select2 form-select select2-hidden-accessible cursor-pointer" data-allow-clear="true" onMouseDown={handleSelectMouseDown2} data-select2-id="p_cateogry" tabIndex={-1} aria-hidden="true">
                    <option data-name={activeOption2 ? activeOption2 : "Select Project Category"}>{activeOption2 ? activeOption2 : "Select Project Category"}</option>
              </select>
              {addCategoryDropdown && (              
              <ul className="dropdown-menu dropdown-menu-end show" style={{width : '100%'}}>
                <li>
                  <a className="dropdown-item cursor-pointer" onClick={() => setSelectedOption2('Select Memeber')}>Select Memeber</a>
                </li>
                {
      project_category?.sort().map((category, index) =>(
        <div key={index}>
                  <li>
                    <a className={`dropdown-item cursor-pointer ${
            category === activeOption2 ? "active" : ""
          }`} onClick={() => {
                      setActiveOption2(category); // Set the active option when a list item is clicked
                      setSelectedOption2(category)
                      setAddCategoryDropdown(false);
                      setStep_2_data(prevState => ({
                        ...prevState,
                          p_cateogry: category
                      }));
                      }}>
        {category}
        </a>
      </li>
        </div>
      ))}
              </ul>)}
              </div>
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
          <div style={{ position: 'relative', width: '700px', height: '400px', overflow: 'hidden' }}>
            <iframe src="https://1001-ai-development-system.vercel.app/" frameborder="0" style={{
       position: 'absolute',
       top: '0',
       left: '0',
       width: '700px',
       height: '400px',
       border: 'none',
   }}></iframe>
          </div>
          </div>
          <div className="col-12 d-flex justify-content-between mt-4">
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" disabled={currentStep === 4 ? true : false} onClick={submitStep_3}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span> <i className="ti ti-arrow-right ti-xs" /></button>
          </div>
        </div>
      </div>
      )}
      {/* Property Area */}
      {currentStep === 4 && ( 
      <div id="property-area" className="content fv-plugins-bootstrap5 fv-plugins-framework" >
        <div className="row g-3">
          <div className="col-sm-12">
            <div className="row">
              {selectFeatures?.map((feature, index) => {
             const toggleSwitch = () => {
              setStep_4_data((prevState) => ({
                ...prevState,
                [feature.id]: !prevState[feature.id],
              }));
            };
              return(
                <>{feature.id === 'restful_api' ? ( <Switch2 text={feature?.text} className={feature.className} modal_toggle={feature?.modal_toggle ? (feature.modal_toggle) : "" } modal_target={feature?.modal_target ? (feature.modal_target) : ""}  key={index} ch={feature.id !== 'restful_api' ? step_4_data.hasOwnProperty(feature.id) ? step_4_data[feature.id] : null : null} onClick={()=>feature.id !== 'restful_api' ? toggleSwitch : null} />) : ( <Switch text={feature?.text} className={feature.className} key={index} ch={step_4_data.hasOwnProperty(feature.id) ? step_4_data[feature.id] : null} onClick={toggleSwitch} />)}
</>
              )})}
            </div>
          </div>
                   <div className="col-12 d-flex justify-content-between mt-4">
            <button type='button' className="btn btn-label-secondary btn-prev waves-effect" disabled={currentStep === 1 ? true : false} onClick={()=>setCurrentStep(currentStep - 1)}> <i className="ti ti-arrow-left ti-xs me-sm-1 me-0" />
              <span className="align-middle d-sm-inline-block d-none">Previous</span>
            </button>
            <button type='button' className="btn btn-primary btn-next waves-effect waves-light" onClick={submitStep_4}> <span className="align-middle d-sm-inline-block d-none me-sm-1">Create</span> <i className="ti ti-arrow-right ti-xs" /></button>
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
      memberList.map((member, index) => (
        <div key={index}>
                  <li>
                    <a className={`dropdown-item cursor-pointer ${
            member === activeOption ? "active" : ""
          }`} onClick={() => {
                      setActiveOption(member?.name); // Set the active option when a list item is clicked
                      setSelectedOption(member?.name)
                      setAddMemberDropdown(false);
                      setAddMemberToProject([...addMemberToProject, member])
                      checkSelectedMember(member?.name, member?.email)
                      setStep_2_data(prevState => ({
                        ...prevState,
                        p_member: [...prevState.p_member, member]
                      }));
                      }}>
                        <div className="d-flex flex-wrap">
                        <div className="avatar me-3">
        <img alt="avatar" className="rounded-circle" src={member?.image} />
        </div>
        <span className="fw-bold pt-2">{member?.name}</span>
        </div>
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
               <p className="mb-0 fw-600">{memberSelected?.name}</p>
               <p className="mb-0 text-muted fw-500">{memberSelected?.email}</p>
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
                 <li>
                   <a className="dropdown-item text-danger cursor-pointer" onClick={()=>removeFromInvite(memberSelected?.name, memberSelected?.email)}>Remove</a>
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
          <button className="btn btn-primary" onClick={copyProjectLink}>Copy Project Link</button>
        </div>
      </div>
    </div>
  </div>
</div>
{/*/ Share Project Modal */}


{/* Refer & Earn Modal */}
<div className="modal fade" id="restfulApi" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-lg modal-simple modal-refer-and-earn">
    <div className="modal-content p-3 p-md-5">
      <div className="modal-body">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="text-center mb-4">
          <h3 className="mb-2">Select Restful API</h3>
          <p className="text-muted text-center mb-5 w-75 m-auto">Please choose the CRUD (Create, Read, Update, Delete) operation for the respective entity.</p>
        </div>
              <div className="row">
              {selectRestfulAPI?.map((feature, index) =>{
               const toggleSwitch = () => {
                setStep_4_data((prevState) => ({
                  ...prevState,
                  restful_api: {
                    ...prevState.restful_api,
                    [feature.id]: !prevState.restful_api[feature.id],
                  },
                }));
              };
                return (
              <Switch text={feature?.text} className={feature.className} key={index} ch={step_4_data.restful_api.hasOwnProperty(feature.id) ? step_4_data.restful_api[feature.id] : null } onClick={toggleSwitch} />
              )})}
            </div>
      </div>
    </div>
  </div>
</div>
{/*/ Refer & Earn Modal */}



    </>
  );
};

export default CreateApp;
