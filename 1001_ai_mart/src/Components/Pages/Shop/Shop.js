import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import HeaderAuth from '../../Shared/HeaderAuth'
import FooterAuth from '../../Shared/FooterAuth'
const Shop = () => {
  return (
    <>
  {/*preloader start*/}

  {/*preloader end*/}
  {/*main content wrapper start*/}
  <div className="main-wrapper">
    {/*header section start*/}
    <HeaderAuth />
    {/*header section end*/}
    {/*offcanvas menu start*/}
    <div className="offcanvas_menu position-fixed">
      <div className="tt-short-info d-none d-md-none d-lg-none d-xl-block">
        <button className="offcanvas-close"><i className="fa-solid fa-xmark" /></button>
        <a href="#" className="logo-wrapper d-inline-block mb-5"><img src="/assets/img/logo.png" alt="logo" /></a>
        <div className="offcanvas-content">
          <h4 className="mb-4">About Us</h4>
          <p>
            Explain to you how all this mistaken denouncing pleasure and praising pain was born and we will give you
            a complete account of the system, and expound the actual teachings.
          </p>
          <p>
            Mistaken denouncing pleasure and praising pain was born and we will give you complete account of the
            system expound.
          </p>
          <a href="#" className="btn btn-primary mt-4">About Us</a>
        </div>
        <div className="offcanvas-contact mt-5">
          <h5 className="mb-20">Contact Info</h5>
          <address>
            Chicago 12, Melborne City, USA <br />
            <a href="tel:+8801682648101">+8801682648101</a> <br />
            <a href="mailto:info@example.com">info@example.com</a>
          </address>
        </div>
        <div className="social-contact offcanvas_social mt-4">
          <a href="#" className="social-btn"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="social-btn"><i className="fab fa-instagram" /></a>
          <a href="#" className="social-btn"><i className="fab fa-linkedin-in" /></a>
          <a href="#" className="social-btn"><i className="fab fa-twitter" /></a>
          <a href="#" className="social-btn"><i className="fab fa-youtube" /></a>
        </div>
      </div>
      <div className="mobile-menu d-md-block d-lg-block d-xl-none">
        <button className="offcanvas-close"><i className="fa-solid fa-xmark" /></button>
        <a href="#" className="d-inline-block mb-5"><img src="/assets/img/logo.png" alt="logo" /></a>
        <nav className="mobile-menu-wrapper mt-4">
          <ul>
            <li className="has-submenu">
              <a href="javascript:void(0)">Home<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-right" /></span></a>
              <ul>
                <li><a href="index-2.html">Grocery Store</a></li>
                <li><a href="index-3.html">Natural Store</a></li>
                <li><a href="index-4.html">Organic Store</a></li>
                <li><a href="index-5.html">Halal Meat Store</a></li>
                <li><a href="index-6.html">Meat Store</a></li>
                <li><a href="index-7.html">Medicine Store</a></li>
                <li><a href="index-8.html">Furniture Store</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="javascript:void(0)">Products<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-right" /></span></a>
              <ul>
                <li><a href="shop-grid.html">Shop Grid</a></li>
                <li><a href="shop-grid-2.html">Shop Grid V2</a></li>
                <li><a href="product-details.html">Product Details</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="javascript:void(0)">Blog<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-right" /></span></a>
              <ul>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-listing.html">Blog List</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="javascript:void(0)">Pages<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-right" /></span></a>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="service-details.html">Service Details</a></li>
                <li><a href="my-account.html">My Account</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="invoice.html">Invoice</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="signup.html">Sign Up</a></li>
                <li><a href="404.html">404 Page</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="contact-info mt-8">
          <h5 className="mb-20">Contact Info</h5>
          <address>
            Chicago 12, Melborne City, USA <br />
            <a href="tel:+8801682648101">+8801682648101</a> <br />
            <a href="mailto:info@example.com">info@example.com</a>
          </address>
          <div className="social-contact">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
    {/*offcanvas menu end*/}
    {/*breadcrumb section start*/}
    <div className="gstore-breadcrumb position-relative z-1 overflow-hidden mt--50">
      <img src="/assets/img/shapes/bg-shape-6.png" alt="bg-shape" className="position-absolute start-0 z--1 w-100 bg-shape" />
      <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute pata-xs z--1 vector-shape" />
      <img src="/assets/img/shapes/onion.png" alt="onion" className="position-absolute z--1 onion start-0 top-0 vector-shape" />
      <img src="/assets/img/shapes/frame-circle.svg" alt="frame circle" className="position-absolute z--1 frame-circle vector-shape" />
      <img src="/assets/img/shapes/leaf.svg" alt="leaf" className="position-absolute z--1 leaf vector-shape" />
      <img src="/assets/img/shapes/garlic-white.png" alt="garlic" className="position-absolute z--1 garlic vector-shape" />
      <img src="/assets/img/shapes/roll-1.png" alt="roll" className="position-absolute z--1 roll vector-shape" />
      <img src="/assets/img/shapes/roll-2.png" alt="roll" className="position-absolute z--1 roll-2 vector-shape" />
      <img src="/assets/img/shapes/pata-xs.svg" alt="roll" className="position-absolute z--1 pata-xs-2 vector-shape" />
      <img src="/assets/img/shapes/tomato-half.svg" alt="tomato" className="position-absolute z--1 tomato-half vector-shape" />
      <img src="/assets/img/shapes/tomato-slice.svg" alt="tomato" className="position-absolute z--1 tomato-slice vector-shape" />
      <img src="/assets/img/shapes/cauliflower.png" alt="tomato" className="position-absolute z--1 cauliflower vector-shape" />
      <img src="/assets/img/shapes/leaf-gray.png" alt="tomato" className="position-absolute z--1 leaf-gray vector-shape" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="mb-2 text-center">Shop Layout</h2>
              <nav>
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item fw-bold" aria-current="page"><NavLink to="/auth/home">Home</NavLink></li>
                  <li className="breadcrumb-item fw-bold" aria-current="page">Page</li>
                  <li className="breadcrumb-item fw-bold" aria-current="page">Shop Grid</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*breadcrumb section end*/}
    {/*shop grid section start*/}
    <section className="gshop-gshop-grid ptb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-3">
            <div className="gshop-sidebar bg-white rounded-2 overflow-hidden">
              <div className="sidebar-widget search-widget bg-white py-5 px-4">
                <div className="widget-title d-flex">
                  <h6 className="mb-0 flex-shrink-0">Search Now</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <form className="search-form d-flex align-items-center mt-4">
                  <input type="text" placeholder="Search..." />
                  <button type="submit" className="submit-icon-btn-secondary"><i className="fa-solid fa-magnifying-glass" /></button>
                </form>
              </div>
              <div className="sidebar-widget category-widget bg-white py-5 px-4 border-top">
                <div className="widget-title d-flex">
                  <h6 className="mb-0 flex-shrink-0">Categories</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <ul className="widget-nav mt-4">
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Apples<span className="fw-bold fs-xs total-count">08</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Organic Vegetable<span className="fw-bold fs-xs total-count">09</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Avocados<span className="fw-bold fs-xs total-count">06</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Dried Fruits &amp; Nuts<span className="fw-bold fs-xs total-count">10</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Coffee<span className="fw-bold fs-xs total-count">11</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Juice Drinks<span className="fw-bold fs-xs total-count">15</span></a></li>
                  <li><a href="#" className="d-flex justify-content-between align-items-center">Fresh Fish<span className="fw-bold fs-xs total-count">18</span></a></li>
                </ul>
              </div>
              <div className="sidebar-widget price-filter-widget bg-white py-5 px-4 border-top">
                <div className="widget-title d-flex">
                  <h6 className="mb-0 flex-shrink-0">Filter by Price</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <div className="at-pricing-range mt-4">
                  <form className="range-slider-form">
                    <div className="price-filter-range" />
                    <div className="d-flex align-items-center mt-3">
                      <input type="text" oninput="validity.valid||(value='0');" className="min_price price-range-field price-input" />
                      <span className="d-inline-block ms-2 me-2 fw-bold">-</span>
                      <input type="text" oninput="validity.valid||(value='10000');" className="max_price price-range-field price-input" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm mt-3">Filter</button>
                  </form>
                </div>
              </div>
              <div className="sidebar-widget rating-widget py-5 px-4 border-top bg-white">
                <div className="widget-title d-flex">
                  <h6 className="mb-0 flex-shrink-0">Rating</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <ul className="mt-4 sidebar-rating-list">
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="custom-checkbox d-inline-flex">
                      <div className="theme-checkbox flex-shrink-0">
                        <input type="checkbox" />
                        <span className="checkbox-field"><i className="fa-solid fa-check" /></span>
                      </div>
                      <div className="rating-field text-warning fs-xs d-flex align-items-center ms-1">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                    </div>
                    <span className="fw-bold fs-xs total-count">48</span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="custom-checkbox d-inline-flex">
                      <div className="theme-checkbox flex-shrink-0">
                        <input type="checkbox" />
                        <span className="checkbox-field"><i className="fa-solid fa-check" /></span>
                      </div>
                      <div className="rating-field text-warning fs-xs d-flex align-items-center ms-1">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                      </div>
                    </div>
                    <span className="fw-bold fs-xs total-count">14</span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="custom-checkbox d-inline-flex">
                      <div className="theme-checkbox flex-shrink-0">
                        <input type="checkbox" />
                        <span className="checkbox-field"><i className="fa-solid fa-check" /></span>
                      </div>
                      <div className="rating-field text-warning fs-xs d-flex align-items-center ms-1">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                      </div>
                    </div>
                    <span className="fw-bold fs-xs total-count">36</span>
                  </li>
                  <li className="d-flex align-items-center justify-content-between">
                    <div className="custom-checkbox d-inline-flex">
                      <div className="theme-checkbox flex-shrink-0">
                        <input type="checkbox" />
                        <span className="checkbox-field"><i className="fa-solid fa-check" /></span>
                      </div>
                      <div className="rating-field text-warning fs-xs d-flex align-items-center ms-1">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                        <i className="fa-regular fa-star" />
                      </div>
                    </div>
                    <span className="fw-bold fs-xs total-count">24</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget tags-widget py-5 px-4 bg-white">
                <div className="widget-title d-flex">
                  <h6 className="mb-0">Tags.</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <div className="mt-4 d-flex gap-2 flex-wrap">
                  <a href="#" className="btn btn-outline btn-sm">Vegetable</a>
                  <a href="#" className="btn btn-outline btn-sm">Healthy</a>
                  <a href="#" className="btn btn-outline btn-sm">Meat</a>
                  <a href="#" className="btn btn-outline btn-sm">Organic</a>
                  <a href="#" className="btn btn-outline btn-sm">Nature</a>
                  <a href="#" className="btn btn-outline btn-sm">food</a>
                  <a href="#" className="btn btn-outline btn-sm">bd food</a>
                  <a href="#" className="btn btn-outline btn-sm">fish</a>
                  <a href="#" className="btn btn-outline btn-sm">vegetable</a>
                </div>
              </div>
              <div className="sidebar-widget products-widget py-5 px-4 bg-white border-top">
                <div className="widget-title d-flex">
                  <h6 className="mb-0 flex-shrink-0">Best Selling</h6>
                  <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                </div>
                <div className="sidebar-products-list">
                  <div className="horizontal-product-card d-sm-flex align-items-center bg-white rounded-2 mt-4 gap-3 card-md">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="#"><img src="/assets/img/products/p-sm-1.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="product-details.html" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content mt-3 mt-sm-0">
                      <a href="#" className="d-block fs-sm fw-bold text-heading title d-block">Strawberry juice Fruit</a>
                      <div className="pricing mt-0">
                        <span className="fw-bold fs-xxs text-danger">$140.00</span>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap star-rating mt-1">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-product-card d-sm-flex align-items-center bg-white rounded-2 mt-4 gap-3 card-md">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="#"><img src="/assets/img/products/p-sm-2.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="product-details.html" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content mt-3 mt-sm-0">
                      <a href="#" className="d-block fs-sm fw-bold text-heading title d-block">Strawberry juice Fruit</a>
                      <div className="pricing mt-0">
                        <span className="fw-bold fs-xxs text-danger">$140.00</span>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap star-rating mt-1">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-product-card d-sm-flex align-items-center bg-white rounded-2 mt-4 gap-3 card-md">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="#"><img src="/assets/img/products/p-sm-3.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="product-details.html" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content mt-3 mt-sm-0">
                      <a href="#" className="d-block fs-sm fw-bold text-heading title d-block">Strawberry juice Fruit</a>
                      <div className="pricing mt-0">
                        <span className="fw-bold fs-xxs text-danger">$140.00</span>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap star-rating mt-1">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="horizontal-product-card d-sm-flex align-items-center bg-white rounded-2 mt-4 gap-3 card-md">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="#"><img src="/assets/img/products/p-sm-4.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="product-details.html" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content mt-3 mt-sm-0">
                      <a href="#" className="d-block fs-sm fw-bold text-heading title d-block">Strawberry juice Fruit</a>
                      <div className="pricing mt-0">
                        <span className="fw-bold fs-xxs text-danger">$140.00</span>
                      </div>
                      <div className="d-flex align-items-center flex-nowrap star-rating mt-1">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="shop-grid">
              <div className="listing-top d-flex align-items-center justify-content-between flex-wrap gap-3 bg-white rounded-2 px-4 py-5 mb-6">
                <p className="mb-0 fw-bold">Showing 1-12 of 45 results</p>
                <div className="listing-top-right text-end d-inline-flex align-items-center gap-3 flex-wrap">
                  <div className="number-count-filter d-flex align-items-center gap-3">
                    <label className="fw-bold fs-xs text-dark flex-shrink-0">Show:</label>
                    <input type="number" defaultValue={16} />
                  </div>
                  <div className="select-filter d-inline-flex align-items-center gap-3">
                    <label className="fw-bold fs-xs text-dark flex-shrink-0">Sort by:</label>
                    <select className="form-select fs-xxs fw-medium theme-select select-sm">
                      <option>News First</option>
                      <option>Best Selling</option>
                      <option>Best Rated</option>
                    </select>
                  </div>
                  <a href="#" className="grid-btn active">
                    <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.97196 0H1.37831C0.706579 0 0.160156 0.546422 0.160156 1.21815V5.8118C0.160156 6.48353 0.706579 7.02996 1.37831 7.02996H5.97196C6.64369 7.02996 7.19011 6.48353 7.19011 5.8118V1.21815C7.19 0.546422 6.64369 0 5.97196 0Z" fill="#FF7C08" />
                      <path d="M14.9407 0H10.3471C9.67533 0 9.12891 0.546422 9.12891 1.21815V5.8118C9.12891 6.48353 9.67533 7.02996 10.3471 7.02996H14.9407C15.6124 7.02996 16.1589 6.48353 16.1589 5.8118V1.21815C16.1589 0.546422 15.6124 0 14.9407 0Z" fill="#FF7C08" />
                      <path d="M5.97196 8.96973H1.37831C0.706579 8.96973 0.160156 9.51609 0.160156 10.1878V14.7815C0.160156 15.4532 0.706579 15.9996 1.37831 15.9996H5.97196C6.64369 15.9996 7.19011 15.4532 7.19011 14.7815V10.1878C7.19 9.51609 6.64369 8.96973 5.97196 8.96973Z" fill="#FF7C08" />
                      <path d="M14.9407 8.96973H10.3471C9.67533 8.96973 9.12891 9.51615 9.12891 10.1879V14.7815C9.12891 15.4533 9.67533 15.9997 10.3471 15.9997H14.9407C15.6124 15.9996 16.1589 15.4532 16.1589 14.7815V10.1878C16.1589 9.51609 15.6124 8.96973 14.9407 8.96973Z" fill="#FF7C08" />
                    </svg>
                  </a>
                  <a href="#" className="grid-btn">
                    <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.31378 0C1.12426 0 0.160156 0.9641 0.160156 2.15359C0.160156 3.34309 1.12426 4.30722 2.31378 4.30722C3.50328 4.30722 4.46738 3.34312 4.46738 2.15359C4.46738 0.964066 3.50328 0 2.31378 0ZM2.31378 5.74293C1.12426 5.74293 0.160156 6.70706 0.160156 7.89656C0.160156 9.08608 1.12426 10.0502 2.31378 10.0502C3.50328 10.0502 4.46738 9.08608 4.46738 7.89656C4.46738 6.70706 3.50328 5.74293 2.31378 5.74293ZM2.31378 11.4859C1.12426 11.4859 0.160156 12.45 0.160156 13.6395C0.160156 14.829 1.12426 15.7931 2.31378 15.7931C3.50328 15.7931 4.46738 14.829 4.46738 13.6395C4.46738 12.45 3.50328 11.4859 2.31378 11.4859ZM8.05671 3.58933H19.5426C20.3358 3.58933 20.9783 2.94683 20.9783 2.15359C20.9783 1.36036 20.3358 0.717853 19.5426 0.717853H8.05671C7.26348 0.717853 6.62097 1.36036 6.62097 2.15359C6.62097 2.94683 7.26348 3.58933 8.05671 3.58933ZM19.5426 6.46082H8.05671C7.26348 6.46082 6.62097 7.10332 6.62097 7.89656C6.62097 8.68979 7.26348 9.3323 8.05671 9.3323H19.5426C20.3358 9.3323 20.9783 8.68979 20.9783 7.89656C20.9783 7.10332 20.3358 6.46082 19.5426 6.46082ZM19.5426 12.2038H8.05671C7.26348 12.2038 6.62097 12.8463 6.62097 13.6395C6.62097 14.4327 7.26348 15.0752 8.05671 15.0752H19.5426C20.3358 15.0752 20.9783 14.4327 20.9783 13.6395C20.9783 12.8463 20.3358 12.2038 19.5426 12.2038Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/apple.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2 tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps
                        Snacks</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/apple-black.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/orange-slice.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/lemon.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/banana.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/stroberry.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/beef.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/apple.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/apple-black.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/orange-slice.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks Chocolate.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/banana.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="vertical-product-card rounded-2 position-relative border-0 bg-white bg-white">
                    <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
                    <div className="thumbnail position-relative text-center p-4">
                      <img src="/assets/img/products/tomato-slice.png" alt="apple" className="img-fluid" />
                      <div className="product-btns position-absolute d-flex gap-2 flex-column">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={14} height={11} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.705 0.201222C10.4317 0.469526 10.4317 0.904522 10.705 1.17283L11.6101 2.06107H7.70001C6.15364 2.06107 4.90001 3.29144 4.90001 4.80917V5.49619C4.90001 5.87564 5.21341 6.18322 5.60001 6.18322C5.98662 6.18322 6.30001 5.87564 6.30001 5.49619V4.80917C6.30001 4.0503 6.92679 3.43512 7.70001 3.43512H11.6101L10.705 4.32337C10.4317 4.59166 10.4317 5.02668 10.705 5.29496C10.9784 5.56325 11.4216 5.56325 11.695 5.29496L13.795 3.2339C14.0683 2.96559 14.0683 2.5306 13.795 2.26229L11.695 0.201222C11.4216 -0.0670741 10.9784 -0.0670741 10.705 0.201222ZM8.40001 4.80917C8.0134 4.80917 7.70001 5.11675 7.70001 5.49619V6.18322C7.70001 6.9421 7.07323 7.55726 6.30001 7.55726H2.38995L3.29498 6.66901C3.56835 6.40073 3.56835 5.9657 3.29498 5.69742C3.02161 5.42914 2.5784 5.42914 2.30503 5.69742L0.205023 7.75849C-0.0683411 8.02678 -0.0683411 8.4618 0.205023 8.73008L2.30503 10.7912C2.5784 11.0594 3.02161 11.0594 3.29498 10.7912C3.56835 10.5229 3.56835 10.0878 3.29498 9.81957L2.38995 8.93131H6.30001C7.84638 8.93131 9.10001 7.70092 9.10001 6.18322V5.49619C9.10001 5.11675 8.78662 4.80917 8.40001 4.80917Z" fill="#AEB1B9" />
                          </svg>
                        </a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-regular fa-eye" /></a>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="mb-2  tt-category tt-line-clamp tt-clamp-1">
                        <a href="#" className="d-inline-block text-muted fs-xxs">Fresh Organic</a>
                      </div>
                      <a href="#" className="card-title fw-bold d-block mb-2 tt-line-clamp tt-clamp-2">Popped Rice Crisps Snacks.</a>
                      <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <h6 className="price text-danger mb-4">$140.00</h6>
                      <a href="#" className="btn btn-outline-secondary d-block btn-md">Add to Cart</a>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="template-pagination d-flex align-items-center mt-6">
                <li><a href="#" className="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="fas fa-arrow-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*shop grid section end*/}
    {/*footer section start*/}
    <FooterAuth />
    {/*footer section end*/}
    {/*modal box*/}
    <div className="modal fade" id="quickview_modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close" />
            <div className="gstore-product-quick-view bg-white rounded-3 py-6 px-4">
              <div className="row align-items-center g-4">
                <div className="col-xl-6 align-self-end">
                  <div className="quickview-double-slider">
                    <div className="quickview-product-slider swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide text-center">
                          <img src="/assets/img/products/p-lg-1.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide text-center">
                          <img src="/assets/img/products/p-lg-2.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide text-center">
                          <img src="/assets/img/products/p-lg-3.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide text-center">
                          <img src="/assets/img/products/p-lg-4.png" alt="jam" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="product-thumbnail-slider swiper mt-80">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                          <img src="/assets/img/products/thumb-sm-1.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                          <img src="/assets/img/products/thumb-sm-2.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                          <img src="/assets/img/products/thumb-sm-3.png" alt="jam" className="img-fluid" />
                        </div>
                        <div className="swiper-slide product-thumb-single rounded-2 d-flex align-items-center justify-content-center">
                          <img src="/assets/img/products/thumb-sm-4.png" alt="jam" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="product-info">
                    <h4 className="mt-1 mb-3">Three Carrot Vegetables <br /> Peruvian Cuisine</h4>
                    <div className="d-flex align-items-center flex-nowrap star-rating fs-xxs mb-2">
                      <ul className="d-flex align-items-center me-2">
                        <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span className="flex-shrink-0">(5.2k Reviews)</span>
                    </div>
                    <div className="pricing mt-2">
                      <span className="fw-bold fs-xs text-danger">$140.00</span>
                      <span className="fw-bold fs-xs deleted ms-1">$240.00</span>
                    </div>
                    <div className="widget-title d-flex mt-4">
                      <h6 className="mb-1 flex-shrink-0">Description</h6>
                      <span className="hr-line w-100 position-relative d-block align-self-end ms-1" />
                    </div>
                    <p className="mb-3">Clicks-and-mortar "outside the bethinking. Interactively disseminate innovative intellectual relationships. </p>
                    <ul className="d-flex flex-column gap-2">
                      <li><span className="me-2 text-primary"><i className="fa-solid fa-circle-check" /></span>Natural ingredients</li>
                      <li><span className="me-2 text-primary"><i className="fa-solid fa-circle-check" /></span>Tastes better with milk</li>
                      <li><span className="me-2 text-primary"><i className="fa-solid fa-circle-check" /></span>Vitamins B2, B3, B5 and B6</li>
                      <li><span className="me-2 text-primary"><i className="fa-solid fa-circle-check" /></span>Refrigerate for freshness</li>
                    </ul>
                    <h6 className="fs-md mb-2 mt-3">Weight:</h6>
                    <ul className="product-radio-btn mb-4 d-flex align-items-center gap-2">
                      <li>
                        <input type="radio" name="weight" defaultValue="250g" defaultChecked />
                        <label>150g</label>
                      </li>
                      <li>
                        <input type="radio" name="weight" defaultValue="250g" />
                        <label>500g</label>
                      </li>
                      <li>
                        <input type="radio" name="weight" defaultValue="250g" />
                        <label>1kg</label>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center gap-4 flex-wrap">
                      <div className="product-qty d-flex align-items-center">
                        <button className="decrese">-</button>
                        <input type="text" defaultValue={1} />
                        <button className="increase">+</button>
                      </div>
                      <a href="#" className="btn btn-secondary btn-md"><span className="me-2"><i className="fa-solid fa-cart-plus" /></span>Add to Cart</a>
                    </div>
                    <div className="categories mt-4">
                      <a href="#" className="btn btn-outline btn-sm">Vegetable</a>
                      <a href="#" className="btn btn-outline btn-sm">Healthy</a>
                      <a href="#" className="btn btn-outline btn-sm">Organic</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> {/*modal box end*/}
  </div>
  {/*scroll bottom to top button start*/}
  <button className="scroll-top-btn">
    <i className="fa-regular fa-hand-pointer" />
  </button>
  {/*scroll bottom to top button end*/}

    </>
  )
}

export default Shop
