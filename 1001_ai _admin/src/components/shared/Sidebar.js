import React from 'react'
import { NavLink } from "react-router-dom"
const Sidebar = () => {
  return (
    <>
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <NavLink to="/auth/home" className="text-nowrap logo-img">
              <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" width={180} alt />
            </NavLink>
            <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
              {/* ============================= */}
              {/* Home */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Dashboard</span>
              </li>
              {/* =================== */}
              {/* Dashboard */}
              {/* =================== */}
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/auth/home" aria-expanded="false">
                  <span>
                    <i className="ti ti-aperture" />
                  </span>
                  <span className="hide-menu">Main Dashboard</span>
                </NavLink>
              </li>
              {/* <li className="sidebar-item">
                <a className="sidebar-link" href="index2.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-shopping-cart" />
                  </span>
                  <span className="hide-menu">eCommerce</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index3.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-currency-dollar" />
                  </span>
                  <span className="hide-menu">NFT</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index4.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-cpu" />
                  </span>
                  <span className="hide-menu">Crypto</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index5.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-activity-heartbeat" />
                  </span>
                  <span className="hide-menu">General</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="index6.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-playlist" />
                  </span>
                  <span className="hide-menu">Music</span>
                </a>
              </li> */}
              {/* ============================= */}
              {/* Apps */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/auth/crm/table" aria-expanded="false">
                  <span>
                  <i class="ti ti-user-check"></i>
                  </span>
                  <span className="hide-menu">Assign Roles</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="app-calendar.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-calendar" />
                  </span>
                  <span className="hide-menu">Calendar</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="app-chat.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-message-dots" />
                  </span>
                  <span className="hide-menu">Chat</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="app-email.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-mail" />
                  </span>
                  <span className="hide-menu">Email</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="app-notes.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-notes" />
                  </span>
                  <span className="hide-menu">Notes</span>
                </a>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/auth/data/list" aria-expanded="false">
                  <span>
                    <i className="ti ti-list-details" />
                  </span>
                  <span className="hide-menu">Website List</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/auth/crm/roles" aria-expanded="false">
                  <span>
                    <i className="ti ti-file-text" />
                  </span>
                  <span className="hide-menu">Roles Table</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/auth/crm/add/member" aria-expanded="false">
                  <span>
                    <i className="ti ti-user-circle" />
                  </span>
                  <span className="hide-menu">Add Member</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-chart-donut-3" />
                  </span>
                  <span className="hide-menu">Blog</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="blog-posts.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Posts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="blog-detail.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Details</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-basket" />
                  </span>
                  <span className="hide-menu">Ecommerce</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="eco-shop.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Shop</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-shop-detail.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Details</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-product-list.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">List</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="eco-checkout.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Checkout</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================= */}
              {/* PAGES */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Extra pages</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="page-pricing.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-currency-dollar" />
                  </span>
                  <span className="hide-menu">Pricing</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="page-faq.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-help" />
                  </span>
                  <span className="hide-menu">FAQ</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="page-account-settings.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-user-circle" />
                  </span>
                  <span className="hide-menu">Account Security</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/landingpage/index.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-app-window" />
                  </span>
                  <span className="hide-menu">landing Page</span>
                </a>
              </li>
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-layout" />
                  </span>
                  <span className="hide-menu">Widgets</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="widgets-cards.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Cards</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="widgets-banners.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Banner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="widgets-charts.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Charts</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================= */}
              {/* UI */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">UI</span>
              </li> */}
              {/* =================== */}
              {/* UI Elements */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-layout-grid" />
                  </span>
                  <span className="hide-menu">UI Elements</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="ui-accordian.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Accordian</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-badge.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Badge</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-buttons.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Buttons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-dropdowns.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Dropdowns</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-modals.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Modals</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-tab.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Tab</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-tooltip-popover.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Tooltip &amp; Popover</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-notification.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Notification</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-progressbar.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Progressbar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-pagination.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Pagination</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-typography.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Typography</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-bootstrap-ui.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Bootstrap UI</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-breadcrumb.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Breadcrumb</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-offcanvas.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Offcanvas</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-lists.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Lists</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-grid.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-carousel.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Carousel</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-scrollspy.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Scrollspy</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="ui-spinner.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Spinner</span>
                    </a>
                  </li>
                  <li className="sidebar-item mb-3">
                    <a href="ui-toasts.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Toasts</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================= */}
              {/* Forms */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Forms</span>
              </li> */}
              {/* =================== */}
              {/* Form Elements */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-file-text" />
                  </span>
                  <span className="hide-menu">Form Elements</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="form-inputs.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Forms Input</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-input-groups.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Input Groups</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-input-grid.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Input Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-checkbox-radio.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Checkbox &amp; Radios</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-bootstrap-touchspin.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Bootstrap Touchspin</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-bootstrap-switch.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Bootstrap Switch</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-select2.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Select2</span>
                    </a>
                  </li>
                  <li className="sidebar-item mb-3">
                    <a href="form-dual-listbox.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Dual Listbox</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* =================== */}
              {/* Form Input */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link" href="form-basic.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Basic Form</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-vertical.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-box-align-left" />
                  </span>
                  <span className="hide-menu">Form Vertical</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-horizontal.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-box-align-bottom" />
                  </span>
                  <span className="hide-menu">Form Horizontal</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-actions.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-file-export" />
                  </span>
                  <span className="hide-menu">Form Actions</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-row-separator.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-separator-horizontal" />
                  </span>
                  <span className="hide-menu">Row Separator</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-bordered.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-border-outer" />
                  </span>
                  <span className="hide-menu">Form Bordered</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="form-detail.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-file-description" />
                  </span>
                  <span className="hide-menu">Form Detail</span>
                </a>
              </li> */}
              {/* =================== */}
              {/* Form Wizard */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link" href="form-wizard.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-files" />
                  </span>
                  <span className="hide-menu">Form Wizard</span>
                </a>
              </li> */}
              {/* =================== */}
              {/* Quill Editor */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link" href="form-editor-quill.html" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-edit" />
                  </span>
                  <span className="hide-menu">Quill Editor</span>
                </a>
              </li> */}
              {/* ============================= */}
              {/* Tables */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Tables</span>
              </li> */}
              {/* =================== */}
              {/* Bootstrap Table */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-layout-sidebar" />
                  </span>
                  <span className="hide-menu">Bootstrap Table</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="table-basic.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-dark-basic.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Dark Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-sizing.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Sizing Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item mb-3">
                    <a href="table-layout-coloured.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Coloured Table</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* =================== */}
              {/* Datatable */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-air-conditioning-disabled" />
                  </span>
                  <span className="hide-menu">Datatables</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="table-datatable-basic.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Basic Initialisation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-datatable-api.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">API</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="table-datatable-advanced.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Advanced Initialisation</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================= */}
              {/* Charts */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Charts</span>
              </li> */}
              {/* =================== */}
              {/* Apex Chart */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-chart-pie" />
                  </span>
                  <span className="hide-menu">Apex Charts</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="chart-apex-line.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Line Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-apex-area.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Area Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-apex-bar.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Bar Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-apex-pie.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Pie Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="chart-apex-radial.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Radial Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item mb-3">
                    <a href="chart-apex-radar.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Radar Chart</span>
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* ============================= */}
              {/* Icons */}
              {/* ============================= */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Icons</span>
              </li> */}
              {/* =================== */}
              {/* Tabler Icon */}
              {/* =================== */}
              {/* <li className="sidebar-item">
                <a className="sidebar-link sidebar-link" href="icon-tabler.html" aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Tabler Icon</span>
                </a>
              </li> */}
              {/* =================== */}
              {/* AUTH */}
              {/* =================== */}
              {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">AUTH</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link" href="authentication-error.html" aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-alert-circle" />
                  </span>
                  <span className="hide-menu">Error</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-login" />
                  </span>
                  <span className="hide-menu">Login</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="authentication-login.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Side Login</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="authentication-login2.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Boxed Login</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-user-plus" />
                  </span>
                  <span className="hide-menu">Register</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="authentication-register.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Side Register</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="authentication-register2.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Boxed Register</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-rotate" />
                  </span>
                  <span className="hide-menu">Forgot Password</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="authentication-forgot-password.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Side Forgot Password</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="authentication-forgot-password2.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Boxed Forgot Password</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-zoom-code" />
                  </span>
                  <span className="hide-menu">Two Steps</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="authentication-two-steps.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Side Two Steps</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="authentication-two-steps2.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Boxed Two Steps</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link" href="authentication-maintenance.html" aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-settings" />
                  </span>
                  <span className="hide-menu">Maintenance</span>
                </a>
              </li> */}
              {/* ============================= */}
              {/* OTHER */}
              {/* ============================= */}
               {/* <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">OTHER</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-box-multiple" />
                  </span>
                  <span className="hide-menu">Menu Level</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="chart-apex-line.html" className="sidebar-link">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Level 1</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                      <div className="round-16 d-flex align-items-center justify-content-center">
                        <i className="ti ti-circle" />
                      </div>
                      <span className="hide-menu">Level 1.1</span>
                    </a>
                    <ul aria-expanded="false" className="collapse two-level">
                      <li className="sidebar-item">
                        <a href="chart-apex-line.html" className="sidebar-link">
                          <div className="round-16 d-flex align-items-center justify-content-center">
                            <i className="ti ti-circle" />
                          </div>
                          <span className="hide-menu">Level 2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                          <div className="round-16 d-flex align-items-center justify-content-center">
                            <i className="ti ti-circle" />
                          </div>
                          <span className="hide-menu">Level 2.1</span>
                        </a>
                        <ul aria-expanded="false" className="collapse three-level">
                          <li className="sidebar-item">
                            <a href="chart-apex-line.html" className="sidebar-link">
                              <div className="round-16 d-flex align-items-center justify-content-center">
                                <i className="ti ti-circle" />
                              </div>
                              <span className="hide-menu">Level 3</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            <a href="chart-apex-area.html" className="sidebar-link">
                              <div className="round-16 d-flex align-items-center justify-content-center">
                                <i className="ti ti-circle" />
                              </div>
                              <span className="hide-menu">Level 3.1</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link link-disabled" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-ban" />
                  </span>
                  <span className="hide-menu">Disabled</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-star" />
                  </span>
                  <div className="lh-base">
                    <span className="hide-menu">SubCaption</span>
                    <span className="hide-menu fs-2">This is the sutitle</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link justify-content-between" href="#" aria-expanded="false">
                  <div className="d-flex align-items-center gap-3">
                    <span className="d-flex">
                      <i className="ti ti-award" />
                    </span>
                    <span className="hide-menu">Chip</span>
                  </div>
                  <div className="hide-menu">
                    <span className="badge rounded-circle bg-primary d-flex align-items-center justify-content-center round-20 p-0">9</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link justify-content-between" href="#" aria-expanded="false">
                  <div className="d-flex align-items-center gap-3">
                    <span className="d-flex">
                      <i className="ti ti-mood-smile" />
                    </span>
                    <span className="hide-menu">Outlined</span>
                  </div>
                  <span className="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">Outline</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="https://google.com/" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-star" />
                  </span>
                  <span className="hide-menu">External Link</span>
                </a>
              </li> */}
            </ul> 
            <div className="unlimited-access hide-menu bg-light-primary position-relative my-7 rounded">
              <div className="d-flex">
                <div className="unlimited-access-title">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Unlimited Access</h6>
                  <button className="btn btn-primary fs-2 fw-semibold lh-sm">Signup</button>
                </div>
                <div className="unlimited-access-img">
                  <img src="/assets/dist/images/backgrounds/rocket.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
          </nav>
          <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
            <div className="hstack gap-3">
              <div className="john-img">
                <img src="/assets/dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt />
              </div>
              <div className="john-title">
                <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                <span className="fs-2 text-dark">Designer</span>
              </div>
              <button className="border-0 bg-transparent text-primary ms-auto" tabIndex={0} type="button" aria-label="logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="logout">
                <i className="ti ti-power fs-6" />
              </button>
            </div>
          </div>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  )
}

export default Sidebar