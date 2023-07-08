import React, { useState } from 'react'
const WebsiteSetting = () => {
  let [webSetting, setWebSetting] = useState({
    Website_Clonning_Ai: true,
    Asign_Role: true,
    Image_Generation_Ai: true,
    Copy_Writing_Ai: true,
    Analytics: true,
    Presentation_Maker: true,
    Automate_It: true,
    Frontend_Hosting: true,
    Backend_Hosting: true,
    Enacc: true,
    VImate: true,
    Task_Manager: true,
  })
  return (
    <>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h4 class="card-title mb-0">Settings for Website</h4>
            </div>
            <ul class="list-group" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Website Clonning Ai
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Asign_Role == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Website_Clonning_Ai == true ? ("checked") : null} />
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings ms-auto text-white pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          </svg> */}
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Asign Role
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Website_Clonning_Ai == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Website_Clonning_Ai == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Image Generation Ai
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Image_Generation_Ai == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Image_Generation_Ai == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Copy Writing Ai
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Copy_Writing_Ai == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Copy_Writing_Ai == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Analytics
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Analytics == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Analytics == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Presentation Maker
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Presentation_Maker == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Presentation_Maker == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Automate It
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Automate_It == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Automate_It == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Frontend Hosting
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Frontend_Hosting == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Frontend_Hosting == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Backend Hosting
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Backend_Hosting == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Backend_Hosting == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                ENACC
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Enacc == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Enacc == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                VImate
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.VImate == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.VImate == true ? ("checked") : null} />
                </div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <i data-feather="box" class="text-primary feather-sm me-2"></i>
                Task Manager
                {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                <div class="form-check form-check-inline ms-auto">
                  <input class="form-check-input success pointer" type="checkbox" id="success2-check" value="option1" onClick={() => { webSetting.Task_Manager == true ? setWebSetting(false) : setWebSetting(true) }} checked={webSetting.Task_Manager == true ? ("checked") : null} />
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebsiteSetting
