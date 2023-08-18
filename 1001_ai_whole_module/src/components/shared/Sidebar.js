import React from 'react'

const Sidebar = () => {
  return (
    <>
          {/* Sidebar Start */}
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="index.html" className="text-nowrap logo-img">
            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" className="dark-logo" width={180} alt />
            {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg" className="light-logo" width={180} alt /> */}
          </a>
          <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8 text-muted" />
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
              <span className="hide-menu">Home</span>
            </li>
            {/* =================== */}
            {/* Dashboard */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="index.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu">Modern</span>
              </a>
            </li>
            <li className="sidebar-item">
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
            </li>
            {/* ============================= */}
            {/* Apps */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Apps</span>
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
              <a className="sidebar-link" href="apps-kanban.html" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-kanban" />
                </span>
                <span className="hide-menu">Kanban</span>
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
              <a className="sidebar-link" href="app-contact.html" aria-expanded="false">
                <span>
                  <i className="ti ti-phone" />
                </span>
                <span className="hide-menu">Contact Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="app-contact2.html" aria-expanded="false">
                <span>
                  <i className="ti ti-list-details" />
                </span>
                <span className="hide-menu">Contact List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="app-invoice.html" aria-expanded="false">
                <span>
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Invoice</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="page-user-profile.html" aria-expanded="false">
                <span>
                  <i className="ti ti-user-circle" />
                </span>
                <span className="hide-menu">User Profile</span>
              </a>
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
            <li className="sidebar-item">
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
            </li>
            {/* ============================= */}
            {/* PAGES */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">PAGES</span>
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
                <span className="hide-menu">Account Setting</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/landingpage/index.html" aria-expanded="false">
                <span>
                  <i className="ti ti-app-window" />
                </span>
                <span className="hide-menu">Landing Page</span>
              </a>
            </li>
            <li className="sidebar-item">
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
                <li className="sidebar-item">
                  <a href="widgets-feeds.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Feed Widgets</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="widgets-apps.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Apps Widgets</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="widgets-data.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Data Widgets</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* UI */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI</span>
            </li>
            {/* =================== */}
            {/* UI Elements */}
            {/* =================== */}
            <li className="sidebar-item">
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
                  <a href="ui-link.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Link</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Cards */}
            {/* ============================= */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">Cards</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="ui-cards.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Basic Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="ui-card-customs.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Custom Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="ui-card-weather.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Weather Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="ui-card-draggable.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Draggable Cards</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Component */}
            {/* ============================= */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-components" />
                </span>
                <span className="hide-menu">Component</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="component-sweetalert.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Sweet Alert</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="component-nestable.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Nestable</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="component-noui-slider.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Noui slider</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="component-rating.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Rating</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="component-toastr.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Toastr</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Forms */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Forms</span>
            </li>
            {/* =================== */}
            {/* Form Elements */}
            {/* =================== */}
            <li className="sidebar-item">
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
            </li>
            {/* =================== */}
            {/* Form Addons */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-qrcode" />
                </span>
                <span className="hide-menu">Form Addons</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="form-paginator.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Paginator</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-img-cropper.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Image Cropper</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-dropzone.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Dropzone</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-mask.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Form Mask</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-typeahead.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Form Typehead</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Validation */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Form Validation</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="form-bootstrap-validation.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Validation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-custom-validation.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Custom Validation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Pickers */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-pencil" />
                </span>
                <span className="hide-menu">Form Pickers</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="form-picker-colorpicker.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Colorpicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-picker-datetimepicker.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Datetimepicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-picker-bootstrap-rangepicker.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Rangepicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-picker-bootstrap-datepicker.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Datepicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-picker-material-datepicker.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Material Datepicker</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Editor */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-dna" />
                </span>
                <span className="hide-menu">Form Editor</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="form-editor-ckeditor.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Ck Editor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-editor-quill.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Quill Editor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-editor-summernote.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Summernote Editor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="form-editor-tinymce.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Tinymce Edtor</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Input */}
            {/* =================== */}
            <li className="sidebar-item">
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
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="form-striped-row.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-analytics" />
                </span>
                <span className="hide-menu">Striped Rows</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="form-floating-input.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-dots" />
                </span>
                <span className="hide-menu">Form Floating Input</span>
              </a>
            </li>
            {/* =================== */}
            {/* Form Wizard */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="form-wizard.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-files" />
                </span>
                <span className="hide-menu">Form Wizard</span>
              </a>
            </li>
            {/* =================== */}
            {/* Form Repeater */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="form-repeater.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-topology-star-3" />
                </span>
                <span className="hide-menu">Form Repeater</span>
              </a>
            </li>
            {/* ============================= */}
            {/* Tables */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Tables</span>
            </li>
            {/* =================== */}
            {/* Bootstrap Table */}
            {/* =================== */}
            <li className="sidebar-item">
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
            </li>
            {/* =================== */}
            {/* Datatable */}
            {/* =================== */}
            <li className="sidebar-item">
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
            </li>
            {/* =================== */}
            {/* Table Jsgrid */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="table-jsgrid.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-border-top" />
                </span>
                <span className="hide-menu">Table Jsgrid</span>
              </a>
            </li>
            {/* =================== */}
            {/* Table Responsive */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="table-responsive.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-border-style" />
                </span>
                <span className="hide-menu">Table Responsive</span>
              </a>
            </li>
            {/* =================== */}
            {/* Table Footable */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="table-footable.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-border-none" />
                </span>
                <span className="hide-menu">Table Footable</span>
              </a>
            </li>
            {/* =================== */}
            {/* Table Editable */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="table-editable.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-table-filled" />
                </span>
                <span className="hide-menu">Table Editable</span>
              </a>
            </li>
            {/* =================== */}
            {/* Table Bootstrap */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link" href="table-bootstrap.html" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-border-outer" />
                </span>
                <span className="hide-menu">Table Bootstrap</span>
              </a>
            </li>
            {/* ============================= */}
            {/* Charts */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Charts</span>
            </li>
            {/* =================== */}
            {/* Apex Chart */}
            {/* =================== */}
            <li className="sidebar-item">
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
            </li>
            {/* ============================= */}
            {/* Sample Pages */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Sample Pages</span>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file" />
                </span>
                <span className="hide-menu">Sample Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="pages-animation.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Animation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-search-result.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Search Result</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-gallery.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Gallery</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-treeview.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Treeview</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="pages-block-ui.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Block-Ui</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="pages-session-timeout.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Session Timeout</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Icons */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Icons</span>
            </li>
            {/* =================== */}
            {/* Tabler Icon */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="icon-tabler.html" aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Tabler Icon</span>
              </a>
            </li>
            {/* =================== */}
            {/* AUTH */}
            {/* =================== */}
            <li className="nav-small-cap">
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
            </li>
            {/* ============================= */}
            {/* OTHER */}
            {/* ============================= */}
            <li className="nav-small-cap">
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
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative my-7 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Unlimited Access</h6>
                <button className="btn btn-primary fs-2 fw-semibold lh-sm">Signup</button>
              </div>
              <div className="unlimited-access-img">
                <img src="../../dist/images/backgrounds/rocket.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
          <div className="hstack gap-3">
            <div className="john-img">
              <img src="../../dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt />
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
    {/*  Sidebar End */}
    </>
  )
}

export default Sidebar
