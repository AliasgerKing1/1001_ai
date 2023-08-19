import React, { useEffect, useState } from 'react'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import HomeCard from '../../shared/HomeCard'
import { getFeatureList } from '../../../Services/FeatureListService'
import {getUser} from '../../../Services/UserService'
import { useDispatch, useSelector } from 'react-redux'
import {UserDataRed} from '../../../Redux/UserReducer'
import { LanguageRed, NotificationsRed, ProfileRed } from '../../../Redux/OffHeaderItemsReducer'
const Home = () => {
  let dispatch = useDispatch()
  let state = useSelector(state=>state.UserReducer)
let [featureList, setFeatureList] = useState()
  let getFeaturesListFun = async () => {
    const result = await getFeatureList();
    setFeatureList(result.data)
  }
  let userDataFun = async () => {
    let token = localStorage.getItem('whole_token');
    let result = await getUser(token)
    dispatch(UserDataRed(result.data[0]))
  }
  useEffect(()=>{
    getFeaturesListFun()
    if(state.length === undefined) {
      userDataFun()
    }
  }, [])

  let offHeaderItems = () => {
    dispatch(LanguageRed(false))
    dispatch(NotificationsRed(false))
    dispatch(ProfileRed(false))
  }
  return (
    <>
<div>
  {/*  Body Wrapper */}
  <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <Sidebar />
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <Header />
      <div className="container-fluid" onClick={offHeaderItems}>
        {/*  Row 1 */}
        <div className="row">
          {featureList?.map((feature, index)=> (<HomeCard key={index} data={feature} /> ) )}
        </div>
      </div>
    </div>
    <div className="dark-transparent sidebartoggler" />
    <div className="dark-transparent sidebartoggler" />
  </div>
  {/*  Shopping Cart */}
  <div className="offcanvas offcanvas-end shopping-cart" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header py-4">
      <h5 className="offcanvas-title fs-5 fw-semibold" id="offcanvasRightLabel">Shopping Cart</h5>
      <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">5 new</span>
    </div>
    <div className="offcanvas-body h-100 px-4 pt-0" data-simplebar>
      <ul className="mb-0">
        <li className="pb-7">
          <div className="d-flex align-items-center">
            <img src="../../dist/images/products/product-1.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
            <div>
              <h6 className="mb-1">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                <div className="input-group input-group-sm w-50">
                  <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add1"> - </button>
                  <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add1" defaultValue={1} />
                  <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addo2"> + </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="pb-7">
          <div className="d-flex align-items-center">
            <img src="../../dist/images/products/product-2.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
            <div>
              <h6 className="mb-1">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                <div className="input-group input-group-sm w-50">
                  <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add2"> - </button>
                  <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add2" defaultValue={1} />
                  <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addon34"> + </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="pb-7">
          <div className="d-flex align-items-center">
            <img src="../../dist/images/products/product-3.jpg" width={95} height={75} className="rounded-1 me-9 flex-shrink-0" alt />
            <div>
              <h6 className="mb-1">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                <div className="input-group input-group-sm w-50">
                  <button className="btn border-0 round-20 minus p-0 bg-light-success text-success " type="button" id="add3"> - </button>
                  <input type="text" className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add3" defaultValue={1} />
                  <button className="btn text-success bg-light-success  p-0 round-20 border-0 add" type="button" id="addon3"> + </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="align-bottom">
        <div className="d-flex align-items-center pb-7">
          <span className="text-dark fs-3">Sub Total</span>
          <div className="ms-auto">
            <span className="text-dark fw-semibold fs-3">$2530</span>
          </div>
        </div>
        <div className="d-flex align-items-center pb-7">
          <span className="text-dark fs-3">Total</span>
          <div className="ms-auto">
            <span className="text-dark fw-semibold fs-3">$6830</span>
          </div>
        </div>
        <a href="eco-checkout.html" className="btn btn-outline-primary w-100">Go to shopping cart</a>
      </div>
    </div>
  </div>
  {/*  Mobilenavbar */}
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="mobilenavbar" aria-labelledby="offcanvasWithBothOptionsLabel">
    <nav className="sidebar-nav scroll-sidebar">
      <div className="offcanvas-header justify-content-between">
        <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico" alt className="img-fluid" />
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body profile-dropdown mobile-navbar" data-simplebar>
        <ul id="sidebarnav">
          <li className="sidebar-item">
            <a className="sidebar-link has-arrow" href="javascript:void(0)" aria-expanded="false">
              <span>
                <i className="ti ti-apps" />
              </span>
              <span className="hide-menu">Apps</span>
            </a>
            <ul aria-expanded="false" className="collapse first-level my-3">
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-chat.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Chat Application</h6>
                    <span className="fs-2 d-block fw-normal text-muted">New messages arrived</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-invoice.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Invoice App</h6>
                    <span className="fs-2 d-block fw-normal text-muted">Get latest invoice</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-mobile.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Contact Application</h6>
                    <span className="fs-2 d-block fw-normal text-muted">2 Unsaved Contacts</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-message-box.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Email App</h6>
                    <span className="fs-2 d-block fw-normal text-muted">Get new emails</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-cart.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">User Profile</h6>
                    <span className="fs-2 d-block fw-normal text-muted">learn more information</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-date.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Calendar App</h6>
                    <span className="fs-2 d-block fw-normal text-muted">Get dates</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-lifebuoy.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Contact List Table</h6>
                    <span className="fs-2 d-block fw-normal text-muted">Add new contact</span>
                  </div>
                </a>
              </li>
              <li className="sidebar-item py-2">
                <a href="#" className="d-flex align-items-center">
                  <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                    <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-application.svg" alt className="img-fluid" width={24} height={24} />
                  </div>
                  <div className="d-inline-block">
                    <h6 className="mb-1 bg-hover-primary">Notes Application</h6>
                    <span className="fs-2 d-block fw-normal text-muted">To-do and Daily tasks</span>
                  </div>
                </a>
              </li>
              <ul className="px-8 mt-7 mb-4">
                <li className="sidebar-item mb-3">
                  <h5 className="fs-5 fw-semibold">Quick Links</h5>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">Pricing Page</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">Authentication Design</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">Register Now</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">404 Error Page</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">Notes App</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">User Application</a>
                </li>
                <li className="sidebar-item py-2">
                  <a className="fw-semibold text-dark" href="#">Account Settings</a>
                </li>
              </ul>
            </ul>
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
            <a className="sidebar-link" href="app-calendar.html" aria-expanded="false">
              <span>
                <i className="ti ti-calendar" />
              </span>
              <span className="hide-menu">Calendar</span>
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
        </ul>
      </div>
    </nav>
  </div>
  {/*  Search Bar */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-lg">
      <div className="modal-content rounded-1">
        <div className="modal-header border-bottom">
          <input type="search" className="form-control fs-3" placeholder="Search here" id="search" />
          <span data-bs-dismiss="modal" className="lh-1 cursor-pointer">
            <i className="ti ti-x fs-5 ms-3" />
          </span>
        </div>
        <div className="modal-body message-body" data-simplebar>
          <h5 className="mb-0 fs-5 p-1">Quick Page Links</h5>
          <ul className="list mb-0 py-2">
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Modern</span>
                <span className="fs-3 text-muted d-block">/dashboards/dashboard1</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Dashboard</span>
                <span className="fs-3 text-muted d-block">/dashboards/dashboard2</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Contacts</span>
                <span className="fs-3 text-muted d-block">/apps/contacts</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Posts</span>
                <span className="fs-3 text-muted d-block">/apps/blog/posts</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Detail</span>
                <span className="fs-3 text-muted d-block">/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Shop</span>
                <span className="fs-3 text-muted d-block">/apps/ecommerce/shop</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Modern</span>
                <span className="fs-3 text-muted d-block">/dashboards/dashboard1</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Dashboard</span>
                <span className="fs-3 text-muted d-block">/dashboards/dashboard2</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Contacts</span>
                <span className="fs-3 text-muted d-block">/apps/contacts</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Posts</span>
                <span className="fs-3 text-muted d-block">/apps/blog/posts</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Detail</span>
                <span className="fs-3 text-muted d-block">/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow</span>
              </a>
            </li>
            <li className="p-1 mb-1 bg-hover-light-black">
              <a href="#">
                <span className="fs-3 text-black fw-normal d-block">Shop</span>
                <span className="fs-3 text-muted d-block">/apps/ecommerce/shop</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Home
