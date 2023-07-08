import React from 'react'

const Coustomizer = () => {
  return (
    <>
            {/* Customizer */}
            <button className="btn btn-primary p-3 rounded-circle d-flex align-items-center justify-content-center customizer-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i className="ti ti-settings fs-7" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Settings" />
        </button>
        <div className="offcanvas offcanvas-end customizer" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-simplebar>
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            <h4 className="offcanvas-title fw-semibold" id="offcanvasExampleLabel">Settings</h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body p-4">
            <div className="theme-option pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Theme Option</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <a href="index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-brightness-up fs-7 text-primary" />
                  <span className="text-dark">Light</span>
                </a>
                <a href="index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-moon fs-7 text-dark" />
                  <span className="text-dark">Dark</span>
                </a>
              </div>
            </div>
            <div className="theme-direction pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Theme Direction</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <a href="index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-text-direction-ltr fs-6 text-primary" />
                  <span className="text-dark">LTR</span>
                </a>
                <a href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/rtl/index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-text-direction-rtl fs-6 text-dark" />
                  <span className="text-dark">RTL</span>
                </a>
              </div>
            </div>
            <div className="theme-colors pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Theme Colors</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <ul className="list-unstyled mb-0 d-flex gap-3 flex-wrap">
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin1-bluetheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="BLUE_THEME" />
                  </li>
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin2-aquatheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="AQUA_THEME" />
                  </li>
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin3-purpletheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="PURPLE_THEME" />
                  </li>
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin4-greentheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="GREEN_THEME" />
                  </li>
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin5-cyantheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="CYAN_THEME" />
                  </li>
                  <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                    <a href="javascript:void(0)" className="rounded-circle position-relative d-block customizer-bgcolor skin6-orangetheme-primary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ORANGE_THEME" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="layout-type pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Layout Type</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <a href="index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-sidebar fs-6 text-primary" />
                  <span className="text-dark">Vertical</span>
                </a>
                <a href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/horizontal/index.html" className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-navbar fs-6 text-dark" />
                  <span className="text-dark">Horizontal</span>
                </a>
              </div>
            </div>
            <div className="container-option pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Container Option</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-distribute-vertical fs-7 text-primary" />
                  <span className="text-dark">Boxed</span>
                </div>
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-distribute-horizontal fs-7 text-dark" />
                  <span className="text-dark">Full</span>
                </div>
              </div>
            </div>
            <div className="sidebar-type pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Sidebar Type</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-sidebar-right fs-7 text-primary" />
                  <span className="text-dark">Full</span>
                </div>
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-layout-sidebar fs-7 text-dark" />
                  <span className="text-dark">mini</span>
                </div>
              </div>
            </div>
            <div className="card-with pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Card With</h6>
              <div className="d-flex align-items-center gap-3 my-3">
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-border-outer fs-7 text-dark" />
                  <span className="text-dark">Border</span>
                </div>
                <div className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2">
                  <i className="ti ti-border-none fs-7 text-primary" />
                  <span className="text-dark">Shadow</span>
                </div>
              </div>
            </div>
            <div className="theme-border-radius pb-4">
              <h6 className="fw-semibold fs-4 mb-1">Theme Border Radius</h6>
              <input className="w-100" id="ex1" data-id="ex1RangePicker" type="range" data-min={0} data-max={24} data-step={1} data-value={24} style={{ height: 2 }} />
            </div>
          </div>
        </div>
        {/* Customizer */}
    </>
  )
}

export default Coustomizer