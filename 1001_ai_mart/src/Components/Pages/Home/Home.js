/* eslint-disable */
import React from 'react'

const Home = () => {
  return (
    <>
<div>
  {/*preloader start*/}
  {/* <div id="preloader">
    <img src="/assets/img/preloader.gif" alt="preloader" width={450} className="img-fluid" />
  </div> */}
  {/*preloader end*/}
  {/*main content wrapper start*/}
  <div className="main-wrapper">
    {/*header section start*/}
    <header className="gheader position-relative z-2 header-sticky">
      <div className="ghead-topbar bg-primary d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-3">
              <div className="topbar-info d-none d-xl-block">
                <p className="text-white fs-sm fw-medium mb-0">Welcome to our Organic store</p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <ul className="d-flex align-items-center justify-content-center justify-content-xl-end topbar-info-right">
                <li className="nav-item">
                  <a href="mailto:groshop@support.com">
                    <span className="me-1">
                      <svg width={16} height={14} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2422 0H1.75781C0.790547 0 0 0.783572 0 1.75V12.25C0 13.2168 0.791055 14 1.75781 14H18.2422C19.2095 14 20 13.2164 20 12.25V1.75C20 0.783339 19.2091 0 18.2422 0ZM17.9723 1.16667C17.4039 1.73433 10.7283 8.40194 10.4541 8.67588C10.225 8.90462 9.77512 8.90478 9.54594 8.67588L2.02773 1.16667H17.9723ZM1.17188 12.0355V1.96447L6.21348 7L1.17188 12.0355ZM2.02773 12.8333L7.04078 7.82631L8.71598 9.49951C9.40246 10.1852 10.5978 10.1849 11.2841 9.49951L12.9593 7.82635L17.9723 12.8333H2.02773ZM18.8281 12.0355L13.7865 7L18.8281 1.96447V12.0355Z" fill="white" />
                      </svg>
                    </span>
                    groshop@support.com
                  </a>
                </li>
                <li className="nav-item">
                  <span className="me-1">
                    <svg width={12} height={17} viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.00011 8.16427C7.44543 8.16427 8.62131 6.98781 8.62131 5.54175C8.62131 4.09569 7.44543 2.91925 6.00011 2.91925C4.55478 2.91925 3.37891 4.09569 3.37891 5.54175C3.37891 6.98781 4.55478 8.16427 6.00011 8.16427ZM6.00011 3.85662C6.92883 3.85662 7.68441 4.61259 7.68441 5.54175C7.68441 6.47093 6.92886 7.2269 6.00011 7.2269C5.07136 7.2269 4.31581 6.47093 4.31581 5.54175C4.31581 4.61259 5.07139 3.85662 6.00011 3.85662Z" fill="white" stroke="white" strokeWidth="0.3" />
                      <path d="M3.14593 10.2541C3.85594 11.2159 3.57069 10.8418 5.61579 13.7635C5.80167 14.0301 6.19695 14.0314 6.38389 13.7639C8.43824 10.8284 8.15557 11.2002 8.85403 10.254C9.56155 9.29555 10.2932 8.30443 10.6941 7.14299C11.2744 5.46171 11.0236 3.79818 9.9879 2.45881C9.98787 2.45881 9.98787 2.45878 9.98784 2.45878C9.03913 1.23225 7.54834 0.5 5.99998 0.5C4.45163 0.5 2.96083 1.23225 2.01209 2.45884C0.976407 3.79821 0.725568 5.46177 1.30588 7.14305C1.70675 8.30446 2.43841 9.29558 3.14593 10.2541ZM2.75305 3.03246C3.52562 2.03369 4.73944 1.43737 5.99998 1.43737C7.26052 1.43737 8.47434 2.03369 9.24691 3.03246L9.24684 3.03243C10.0828 4.11343 10.2822 5.46462 9.80852 6.83705C9.4544 7.86293 8.76606 8.79539 8.10039 9.69717C7.5821 10.3993 7.73721 10.1845 5.99998 12.6763C4.26456 10.187 4.41771 10.399 3.89957 9.69717C3.2339 8.79539 2.54556 7.86289 2.19144 6.83705C1.71775 5.46459 1.91718 4.11343 2.75305 3.03246Z" fill="white" stroke="white" strokeWidth="0.3" />
                      <path d="M3.53116 12.2865C3.393 12.0677 3.10369 12.0023 2.88495 12.1405L1.55299 12.9823C1.26243 13.1659 1.26214 13.591 1.55299 13.7748L5.75031 16.4276C5.90312 16.5242 6.09787 16.5241 6.25065 16.4276L10.448 13.7748C10.7386 13.5912 10.7388 13.1661 10.448 12.9823L9.116 12.1405C8.8972 12.0023 8.60792 12.0677 8.46979 12.2865C8.3316 12.5053 8.39693 12.7948 8.61567 12.933L9.32065 13.3786L6.00046 15.4769L2.6803 13.3786L3.38529 12.933C3.60402 12.7948 3.66933 12.5053 3.53116 12.2865Z" fill="white" stroke="white" strokeWidth="0.3" />
                    </svg>
                  </span>
                  Washington, New York, USA - 254230
                </li>
                <li className="nav-item dropdown tt-language-dropdown">
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img src="/assets/img/flags/usd.svg" alt="country" className="img-fluid me-1" />
                    English
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" data-popper-placement="bottom-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/assets/img/flags/usd.svg" alt="country" className="img-fluid me-1" />
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/assets/img/flags/bdt.svg" alt="country" className="img-fluid me-1" />
                        Bangla
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="/assets/img/flags/inr.svg" alt="country" className="img-fluid me-1" />
                        Hindi
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown tt-curency-dropdown">
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">$ USD</a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item fs-xs" href="#">
                        $ USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-xs" href="#">
                        ৳ BDT
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-xs" href="#">
                        ₹ INR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fs-xs" href="#">
                        € EUR
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="javascript:void(0)" className="btn btn-link p-0 tt-theme-toggle fw-normal">
                    <div className="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Dark">Dark <i className="fas fa-moon fs-lg ms-1" /></div>
                    <div className="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Light">Light <i className="fas fa-sun fs-lg ms-1" /></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gshop-navbar bg-white rounded ps-lg-5 position-relative">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-3 col-md-3 col-5">
              <a href="index-2.html" className="logo"><img src="/assets/img/logo.png" alt="logo" className="img-fluid" /></a>
            </div>
            <div className="col-xxl-10 col-xl-9 col-md-9 col-7">
              <div className="gshop-navbar-right d-flex align-items-center justify-content-end position-relative">
                <div className="category-dropdown position-relative d-none d-md-inline-block">
                  <a href="javascript:void(0)" className="category-dropdown-btn fw-bold d-none d-sm-inline-block">Browse Category<span className="ms-1"><i className="fa-solid fa-angle-down" /></span></a>
                  <a href="javascript:void(0)" className="category-dropdown-btn fw-bold d-sm-none">Categories
                    <span className="ms-1"><i className="fa-solid fa-angle-down" /></span></a>
                  <div className="category-dropdown-box scrollbar">
                    <ul className="category-dropdown-menu">
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/baby-care.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Baby Care</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/cleaning.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Cleaning</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/bakery-biscuits.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Bakery &amp; Biscuits</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/coffee-drinks.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Coffee &amp; Drinks</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/beauty-health.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Beauty &amp; Health</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/breakfast.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Breakfast</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/cold-drinks.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Cold Drinks</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/fresh-fruits.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Fresh Fruits</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/honey.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Honey</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/fresh-organic.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Fresh &amp; Organic</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/jam-jelly.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Jam &amp; Jelly</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/sports-fitness.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Sports &amp; Fitness</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/sea-fish.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Sea Fish</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/pet-care.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Pet Care</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="d-flex align-items-center">
                          <div className="me-2 avatar-icon">
                            <img src="/assets/img/category/meat.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                          </div>
                          <span>Meat</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="gshop-navmenu ms-3 d-none d-xl-block">
                  <ul className="d-flex align-itmes-center justify-content-end">
                    <li className="has-submenu">
                      <a href="javascript:void(0)">Home<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-down" /></span></a>
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
                      <a href="javascript:void(0)">Products<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-down" /></span></a>
                      <ul>
                        <li><a href="shop-grid.html">Shop Grid</a></li>
                        <li><a href="shop-grid-2.html">Shop Grid V2</a></li>
                        <li><a href="product-details.html">Product Details</a></li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)">Blog<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-down" /></span></a>
                      <ul>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-listing.html">Blog List</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)">Pages<span className="ms-1 fs-xs float-end"><i className="fa-solid fa-angle-down" /></span></a>
                      <ul className="submenu-double-line">
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
                        <li><a href="500.html">500 Error Page</a></li>
                        <li><a href="campaigns.html">All Campaigns</a></li>
                        <li><a href="campaign-single.html">Campaigns Details</a></li>
                        <li><a href="coupons.html">All Coupons</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="gshop-header-icons d-none d-md-inline-flex align-items-center justify-content-end ms-3">
                  <div className="gshop-header-search dropdown">
                    <button type="button" className="header-icon" data-bs-toggle="dropdown">
                      <svg width={18} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.68859 0.5C4.34645 0.5 0 4.84646 0 10.1886C0 15.5311 4.34645 19.8772 9.68859 19.8772C15.031 19.8772 19.3772 15.5311 19.3772 10.1886C19.3772 4.84646 15.031 0.5 9.68859 0.5ZM9.68859 18.0886C5.33261 18.0886 1.78866 14.5447 1.78866 10.1887C1.78866 5.83266 5.33261 2.28867 9.68859 2.28867C14.0446 2.28867 17.5885 5.83262 17.5885 10.1886C17.5885 14.5446 14.0446 18.0886 9.68859 18.0886Z" fill="#5D6374" />
                        <path d="M21.7406 20.9824L16.6436 15.8853C16.2962 15.538 15.7338 15.538 15.3865 15.8853C15.0391 16.2323 15.0391 16.7954 15.3865 17.1424L20.4835 22.2395C20.6571 22.4131 20.8845 22.5 21.1121 22.5C21.3393 22.5 21.5669 22.4131 21.7406 22.2395C22.0879 21.8925 22.0879 21.3294 21.7406 20.9824Z" fill="#5D6374" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end border-0">
                      <form className="search-form d-flex align-items-center" action="#">
                        <input type="text" placeholder="Search products..." className="w-100" />
                        <button type="submit" className="submit-icon-btn-secondary"><i className="fa-solid fa-magnifying-glass" /></button>
                      </form>
                    </div>
                  </div>
                  <div className="gshop-header-user position-relative">
                    <button type="button" className="header-icon">
                      <svg width={18} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.092 11.9546C12.6656 11.9546 14.0281 11.3902 15.1416 10.2766C16.2547 9.16322 16.8193 7.80093 16.8193 6.2271C16.8193 4.65382 16.2549 3.29134 15.1414 2.1776C14.0279 1.0644 12.6654 0.5 11.092 0.5C9.51825 0.5 8.156 1.0644 7.04266 2.17778C5.92931 3.29116 5.36475 4.65363 5.36475 6.2271C5.36475 7.80093 5.92931 9.1634 7.04266 10.2768C8.15636 11.39 9.51879 11.9546 11.092 11.9546ZM8.0281 3.16308C8.88239 2.30877 9.88453 1.89349 11.092 1.89349C12.2993 1.89349 13.3017 2.30877 14.1561 3.16308C15.0104 4.01757 15.4259 5.01992 15.4259 6.2271C15.4259 7.43464 15.0104 8.43681 14.1561 9.2913C13.3017 10.1458 12.2993 10.5611 11.092 10.5611C9.88489 10.5611 8.88275 10.1456 8.0281 9.2913C7.17364 8.43699 6.7582 7.43464 6.7582 6.2271C6.7582 5.01992 7.17364 4.01757 8.0281 3.16308Z" fill="#5D6374" stroke="#5D6374" strokeWidth="0.2" />
                        <path d="M21.1339 18.893C21.1012 18.4201 21.0352 17.9043 20.9379 17.3596C20.8397 16.8108 20.7133 16.292 20.562 15.8178C20.4055 15.3277 20.1931 14.8438 19.9301 14.38C19.6575 13.8986 19.3371 13.4794 18.9776 13.1345C18.6016 12.7736 18.1414 12.4835 17.6091 12.2719C17.0787 12.0614 16.4909 11.9547 15.8621 11.9547C15.6152 11.9547 15.3763 12.0564 14.9151 12.3576C14.6313 12.5433 14.2993 12.7581 13.9287 12.9956C13.6118 13.1982 13.1825 13.3879 12.6523 13.5598C12.135 13.7277 11.6098 13.8129 11.0912 13.8129C10.5729 13.8129 10.0477 13.7277 9.53001 13.5598C9.00034 13.3881 8.57088 13.1984 8.25455 12.9958C7.88747 12.7605 7.55527 12.5457 7.26718 12.3574C6.80634 12.0562 6.56753 11.9545 6.32059 11.9545C5.69163 11.9545 5.10401 12.0614 4.57378 12.2721C4.04189 12.4833 3.58143 12.7734 3.20512 13.1347C2.84561 13.4798 2.52522 13.8988 2.25281 14.38C1.99019 14.8438 1.77758 15.3276 1.62108 15.818C1.46993 16.2922 1.34351 16.8108 1.24533 17.3596C1.14788 17.9035 1.082 18.4195 1.04933 18.8935C1.01722 19.3569 1.00098 19.8393 1.00098 20.3266C1.00098 21.5934 1.40238 22.6189 2.19394 23.3752C2.97572 24.1216 4.00996 24.5 5.26808 24.5H16.9157C18.1735 24.5 19.2077 24.1216 19.9897 23.3752C20.7814 22.6194 21.1828 21.5935 21.1828 20.3264C21.1826 19.8374 21.1662 19.3551 21.1339 18.893ZM19.0123 22.3449C18.4957 22.8381 17.8099 23.0779 16.9155 23.0779H5.26808C4.37354 23.0779 3.68773 22.8381 3.17135 22.3451C2.66474 21.8613 2.41854 21.2008 2.41854 20.3266C2.41854 19.8718 2.43349 19.4229 2.46339 18.9918C2.49255 18.569 2.55216 18.1044 2.64056 17.6108C2.72786 17.1233 2.83896 16.6658 2.9711 16.2516C3.09789 15.8545 3.27082 15.4612 3.48527 15.0824C3.68995 14.7214 3.92544 14.4116 4.18529 14.1621C4.42835 13.9286 4.73471 13.7375 5.0957 13.5942C5.42956 13.4616 5.80476 13.3891 6.21208 13.3781C6.26172 13.4046 6.35012 13.4552 6.49334 13.5488C6.78475 13.7394 7.12064 13.9567 7.49197 14.1946C7.91054 14.4624 8.44981 14.7042 9.09409 14.9128C9.75277 15.1265 10.4245 15.235 11.0913 15.235C11.7581 15.235 12.4301 15.1265 13.0884 14.913C13.7333 14.704 14.2723 14.4624 14.6915 14.1943C15.0715 13.9506 15.3979 13.7395 15.6894 13.5488C15.8326 13.4553 15.921 13.4046 15.9706 13.3781C16.3781 13.3891 16.7533 13.4616 17.0874 13.5942C17.4482 13.7375 17.7545 13.9288 17.9976 14.1621C18.2574 14.4114 18.4929 14.7212 18.6976 15.0826C18.9122 15.4612 19.0854 15.8547 19.212 16.2515C19.3443 16.6662 19.4556 17.1235 19.5427 17.6106C19.6309 18.1052 19.6907 18.5699 19.7199 18.992V18.9924C19.7499 19.4218 19.7651 19.8705 19.7653 20.3266C19.7651 21.201 19.5189 21.8613 19.0123 22.3449Z" fill="#5D6374" stroke="#5D6374" strokeWidth="0.2" />
                      </svg>
                    </button>
                    <div className="user-menu-wrapper">
                      <ul className="user-menu">
                        <li><a href="my-account.html"><span className="me-2"><i className="fa-solid fa-user" /></span>My Account</a></li>
                        <li><a href="cart.html"><span className="me-2"><i className="fa-solid fa-tags" /></span>My Cart</a></li>
                        <li><a href="wishlist.html"><span className="me-2"><i className="fa-solid fa-heart" /></span>My Wishlist</a></li>
                        <li><a href="#"><span className="me-2"><i className="fa-solid fa-arrow-right-from-bracket" /></span>Sign
                            Out</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="gshop-header-cart position-relative">
                    <button type="button" className="header-icon">
                      <svg width={18} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1704 23.9559L19.6264 7.01422C19.5843 6.55156 19.1908 6.19718 18.7194 6.19718H15.5355V4.78227C15.5355 2.14533 13.3583 0 10.6823 0C8.00628 0 5.82937 2.14533 5.82937 4.78227V6.19718H2.6433C2.17192 6.19718 1.77839 6.55156 1.73625 7.01422L0.186259 24.0225C0.163431 24.2735 0.248671 24.5223 0.421216 24.7082C0.593761 24.8941 0.837705 25 1.0933 25H20.2695C20.2702 25 20.2712 25 20.2719 25C20.775 25 21.1826 24.5982 21.1826 24.1027C21.1825 24.0528 21.1784 24.0036 21.1704 23.9559ZM7.65075 4.78227C7.65075 3.1349 9.01071 1.79465 10.6824 1.79465C12.3542 1.79465 13.7142 3.1349 13.7142 4.78227V6.19718H7.65075V4.78227ZM2.08948 23.2055L3.47591 7.99183H5.82937V9.59649C5.82937 10.0921 6.237 10.4938 6.74006 10.4938C7.24313 10.4938 7.65075 10.0921 7.65075 9.59649V7.99183H13.7142V9.59649C13.7142 10.0921 14.1219 10.4938 14.6249 10.4938C15.128 10.4938 15.5356 10.0921 15.5356 9.59649V7.99183H17.8869L19.2733 23.2055H2.08948Z" fill="#5D6374" />
                      </svg>
                    </button>
                    <div className="cart-box-wrapper">
                      <div className="apt_cart_box theme-scrollbar">
                        <ul className="at_scrollbar scrollbar">
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-1.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">European Lemon Zest...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-2.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">Popped Rice Crisps...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-3.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">Dried Onion Men...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-4.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">European Lemon Zest...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-1.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">Popped Rice Crisps...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="thumb-wrapper">
                              <a href="#"><img src="/assets/img/products/thumb-sm-2.png" alt="products" className="img-fluid" /></a>
                            </div>
                            <div className="items-content ms-3">
                              <a href="product-details.html">
                                <h6 className="mb-1">Dried Onion Kinh Men...</h6>
                              </a>
                              <div className="products_meta d-flex align-items-center">
                                <div>
                                  <span className="price text-primary fw-semibold">$17.00</span>
                                  <span className="count">x 1</span>
                                </div>
                                <button className="remove_cart_btn"><i className="fa-solid fa-trash-can" /></button>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <h6 className="mb-0">Subtotal:</h6>
                          <span className="fw-semibold text-primary">$1,247.00</span>
                        </div>
                        <a href="checkout.html" className="btn btn-primary btn-md d-block mt-4"><span className="me-2"><i className="fa-solid fa-wallet" /></span>Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gshop-header-contact ms-7 position-relative d-none d-lg-flex d-xl-none d-xxl-flex">
                  <a href="tel:+801570584567" className="d-flex align-items-center">
                    <span className="icon d-inline-flex rounded-circle justify-content-center align-items-center bg-secondary-light">
                      <svg width={20} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.98193 3.44444C1.98193 2.09441 2.97352 1 4.19672 1H7.82812C8.30477 1 8.72795 1.33664 8.87867 1.83572L10.5373 7.3277C10.7116 7.90472 10.475 8.53538 9.98206 8.8074L7.48236 10.1868C8.70297 13.1748 10.884 15.5821 13.5913 16.9292L14.8411 14.1703C15.0876 13.6263 15.659 13.3651 16.1818 13.5575L21.1577 15.3881C21.61 15.5545 21.915 16.0215 21.915 16.5476V20.5556C21.915 21.9056 20.9234 23 19.7002 23H18.5928C9.41887 23 1.98193 14.7919 1.98193 4.66667V3.44444Z" stroke="#FF7C08" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="ms-3">
                      <span className="text-muted fs-xs">Phone &amp; Telephone</span>
                      <h6 className="mb-0 mt-1 fs-sm">+80 157 058 4567</h6>
                    </div>
                  </a>
                </div>
                <button className="gshop-offcanvas-btn offcanvas-toggle ms-3">
                  <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5892 0C1.66061 0 0.0917969 1.56893 0.0917969 3.4974C0.0917969 5.42588 1.65997 6.9947 3.5892 6.9947C5.51844 6.9947 7.08661 5.42588 7.08661 3.4974C7.08661 1.56893 5.51768 0 3.5892 0Z" fill="white" />
                    <path d="M14.909 0C12.9805 0 11.4116 1.56893 11.4116 3.4974C11.4116 5.42588 12.9805 6.9947 14.909 6.9947C16.8376 6.9947 18.4068 5.42588 18.4068 3.4974C18.4068 1.56893 16.8383 0 14.909 0Z" fill="white" />
                    <path d="M26.411 6.99481C28.3391 6.99481 29.9084 5.42599 29.9084 3.49751C29.9084 1.56903 28.3404 0 26.411 0C24.4815 0 22.9136 1.56893 22.9136 3.4974C22.9136 5.42588 24.4827 6.99481 26.411 6.99481Z" fill="white" />
                    <path d="M3.49805 18.2016C5.42653 18.2016 6.99578 16.6331 6.99578 14.7043C6.99578 12.7754 5.42653 11.2066 3.49805 11.2066C1.56958 11.2066 0 12.7755 0 14.7043C0 16.6331 1.56958 18.2016 3.49805 18.2016Z" fill="white" />
                    <path d="M14.8172 18.2016C16.7454 18.2016 18.3146 16.6331 18.3146 14.7043C18.3146 12.7754 16.7467 11.2066 14.8172 11.2066C12.8881 11.2066 11.3198 12.7754 11.3198 14.7043C11.3198 16.6331 12.8888 18.2016 14.8172 18.2016Z" fill="white" />
                    <path d="M26.3205 18.2016C28.2494 18.2016 29.8179 16.6331 29.8179 14.7043C29.8179 12.7754 28.2494 11.2066 26.3205 11.2066C24.3916 11.2066 22.8218 12.7754 22.8218 14.7043C22.8218 16.6331 24.391 18.2016 26.3205 18.2016Z" fill="white" />
                    <path d="M3.57813 22.3786C1.64965 22.3786 0.0800781 23.9471 0.0800781 25.876C0.0800781 27.8041 1.64965 29.3733 3.57813 29.3733C5.50661 29.3733 7.07543 27.8049 7.07543 25.876C7.07543 23.9471 5.50661 22.3786 3.57813 22.3786Z" fill="white" />
                    <path d="M14.898 22.3786C12.9694 22.3786 11.3999 23.9471 11.3999 25.876C11.3999 27.8041 12.9688 29.3733 14.898 29.3733C16.8261 29.3733 18.3953 27.8049 18.3953 25.876C18.3953 23.9471 16.8261 22.3786 14.898 22.3786Z" fill="white" />
                    <path d="M26.4002 22.3786C24.4721 22.3786 22.9028 23.9471 22.9028 25.876C22.9028 27.8041 24.4721 29.3733 26.4002 29.3733C28.3291 29.3733 29.8976 27.8049 29.8976 25.876C29.8976 23.9471 28.3284 22.3786 26.4002 22.3786Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> {/*header section end*/}
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
    {/*hero section start*/}
    <section className="gshop-hero pt-120 bg-white position-relative z-1 overflow-hidden">
      <img src="/assets/img/shapes/leaf-shadow.png" alt="leaf" className="position-absolute leaf-shape z--1 rounded-circle" />
      <img src="/assets/img/shapes/mango.png" alt="mango" className="position-absolute mango z--1" data-parallax="{&quot;y&quot;: -120}" />
      <img src="/assets/img/shapes/hero-circle-sm.png" alt="circle" className="position-absolute hero-circle circle-sm z--1" />
      <div className="container">
        <div className="gshop-hero-slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide gshop-hero-single">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-8">
                  <div className="hero-left-content">
                    <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                    <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                    <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                    <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                      <a href="shop-grid.html" className="btn btn-secondary">Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                      <a href="about.html" className="btn btn-primary">About Us<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                    <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                    <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                    <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                    <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                    <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide gshop-hero-single">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-8">
                  <div className="hero-left-content">
                    <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                    <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                    <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                    <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                      <a href="shop-grid.html" className="btn btn-secondary">Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                      <a href="about.html" className="btn btn-primary">About Us<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                    <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                    <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                    <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                    <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                    <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide gshop-hero-single">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-8">
                  <div className="hero-left-content">
                    <span className="gshop-subtitle fs-5 text-secondary mb-2 d-block">Genuine 100% Organic Products</span>
                    <h1 className="display-4 mb-3">Online Fresh <br />Grocery <mark className="p-0 bg-transparent text-secondary">Products</mark></h1>
                    <p className="mb-7 fs-6">Assertively target market-driven intellectual capital with worldwide human capital holistic.</p>
                    <div className="hero-btns d-flex align-items-center gap-3 gap-sm-5 flex-wrap">
                      <a href="shop-grid.html" className="btn btn-secondary">Shop Now<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                      <a href="about.html" className="btn btn-primary">About Us<span className="ms-2"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-right text-center position-relative z-1 mt-8 mt-xl-0">
                    <img src="/assets/img/home1/fruits.png" alt="fruits" className="img-fluid position-absolute end-0 top-50 hero-img" />
                    <img src="/assets/img/shapes/tree.png" alt="tree" className="img-fluid position-absolute tree z-1" />
                    <img src="/assets/img/shapes/orange-1.png" alt="orange" className="position-absolute orange-1 z-1" />
                    <img src="/assets/img/shapes/orange-2.png" alt="orange" className="position-absolute orange-2 z-1" />
                    <img src="/assets/img/shapes/hero-circle-lg.png" alt="circle shape" className="img-fluid hero-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="at-header-social d-none d-sm-flex align-items-center position-absolute">
        <span className="title fw-medium">Follow on</span>
        <ul className="social-list ms-3">
          <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><i className="fab fa-twitter" /></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
          <li><a href="#"><i className="fab fa-youtube" /></a></li>
        </ul>
      </div>
      <div className="gshop-hero-slider-pagination theme-slider-control position-absolute top-50 translate-middle-y z-5" />
    </section> {/*hero section end*/}
    {/*category section start*/}
    <section className="gshop-category-section bg-white pt-120 position-relative z-1 overflow-hidden">
      <img src="/assets/img/shapes/bg-shape.png" alt="bg shape" className="position-absolute bottom-0 start-0 w-100 z--1" />
      <div className="container">
        <div className="gshop-category-box border-secondary rounded-3 bg-white">
          <div className="text-center section-title">
            <h4 className="d-inline-block px-2 bg-white mb-4">Our Top Category</h4>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/vegetable.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Vegetable</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden color-2">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/fresh-fruits.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Fresh Fruits</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden color-3">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/milk.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Milk &amp; Dairy</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden color-4">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/coffee-drinks.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Coffee &amp; Drinks</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden color-5">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/meat.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Meat</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="gshop-animated-iconbox py-5 px-4 text-center border rounded-3 position-relative overflow-hidden color-3">
                <div className="animated-icon d-inline-flex align-items-center justify-content-center rounded-circle position-relative">
                  <img src="/assets/img/category/cleaning.png" alt="flower" className="img-fluid" />
                </div>
                <a href="shop-grid.html" className="text-dark fs-sm fw-bold d-block mt-3">Cleaning Essential</a>
                <span className="total-count position-relative ps-3 fs-sm fw-medium doted-primary">25 Items</span>
                <a href="shop-grid.html" className="explore-btn position-absolute"><i className="fa-solid fa-arrow-up" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/*category section end*/}
    {/*featured products start*/}
    <section className="featured-products pt-120 pb-200 bg-shade position-relative overflow-hidden z-1">
      <img src="/assets/img/shapes/roll-1.png" alt="roll" className="position-absolute roll-1 z--1" data-parallax="{&quot;y&quot;: -120}" />
      <img src="/assets/img/shapes/roll-2.png" alt="roll" className="position-absolute roll-2 z--1" data-parallax="{&quot;y&quot;: 120}" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-4">
              <h3 className="mb-2">Featured Brand Products</h3>
              <p className="mb-0">Platform mindshare through effective infomediaries Dynamically implement.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-lg-6">
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-1.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Strawberry Fruit</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$230.00</span>
                  <span className="fw-bold h4 text-danger">$180.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-2.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Fresh Tomato</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$120.00</span>
                  <span className="fw-bold h4 text-danger">$100.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-3.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">European Lemon</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$30.00</span>
                  <span className="fw-bold h4 text-danger">$20.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-5.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Broylar Checken</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$550.00</span>
                  <span className="fw-bold h4 text-danger">$420.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 order-3 order-xxl-2">
            <div className="product-card-lg bg-white rounded-2 d-flex flex-coloumn h-100">
              <div>
                <div className="card-content position-relative z-2">
                  <span className="fs-xs gshop-subtitle text-secondary">100% Organic Products</span>
                  <h4 className="mb-0">Fresh Fruits</h4>
                  <h3 className="mb-3">Healthy Juice</h3>
                  <p className="mb-4">Get 50% Off on Selected Organic Items</p>
                  <a href="product-details.html" className="btn btn-secondary">Shop Now <span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
                </div>
                <div className="thumbnail position-relative z-1">
                  <img src="/assets/img/products/pago.png" alt="pago" className="img-fluid p-4" />
                  <img src="/assets/img/shapes/circle-md.png" alt="circle" className="position-absolute end-0 bottom-0 z--1 d-none d-sm-block" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 order-2 order-xxl-3">
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-2.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Fresh Tomato</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$120.00</span>
                  <span className="fw-bold h4 text-danger">$100.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-4.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Cow Meat</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$750.00</span>
                  <span className="fw-bold h4 text-danger">$650.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-5.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Broylar Checken</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$550.00</span>
                  <span className="fw-bold h4 text-danger">$420.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 gap-4 mt-4">
              <div className="thumbnail position-relative rounded-2">
                <a href="product-details.html"><img src="/assets/img/products/p-sm-6.png" alt="product" className="img-fluid" /></a>
                <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                  <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                  <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                  <a href="#" className="rounded-btn">
                    <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="card-content mt-4 mt-sm-0">
                <div className="d-flex align-items-center flex-nowrap star-rating">
                  <ul className="d-flex align-items-center me-2">
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    <li className="text-warning"><i className="fa-solid fa-star" /></li>
                  </ul>
                  <span className="flex-shrink-0">(5.2k Reviews)</span>
                </div>
                <a href="product-details.html" className="fw-bold text-heading title d-block">Strawberry</a>
                <div className="pricing mt-2">
                  <span className="fw-bold h4 deleted me-1 text-muted">$80.00</span>
                  <span className="fw-bold h4 text-danger">$60.00</span>
                </div>
                <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/shapes/bg-shape-2.png" alt="bg shape" className="position-absolute start-0 bottom-0 w-100 z--1" />
    </section> {/*featured products end*/}
    {/*trending products start*/}
    <section className="pt-8 pb-100 bg-white position-relative overflow-hidden z-1 trending-products-area">
      <img src="/assets/img/shapes/garlic.png" alt="garlic" className="position-absolute garlic z--1" data-parallax="{&quot;y&quot;: 100}" />
      <img src="/assets/img/shapes/carrot.png" alt="carrot" className="position-absolute carrot z--1" data-parallax="{&quot;y&quot;: -100}" />
      <img src="/assets/img/shapes/mashrom.png" alt="mashrom" className="position-absolute mashrom z--1" data-parallax="{&quot;x&quot;: 100}" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="section-title text-center text-xl-start">
              <h3 className="mb-0">Top Trending Products</h3>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="filter-btns gshop-filter-btn-group text-center text-xl-end mt-4 mt-xl-0">
              <button className="active" data-filter="*">All Products</button>
              <button data-filter=".sea_food">Sea Food</button>
              <button data-filter=".vegetables">Vegetables</button>
              <button data-filter=".beans_peas">Beans &amp; Peas</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4 mt-5 filter_group">
          <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item">
            <div className="vertical-product-card rounded-2 position-relative">
              <div className="thumbnail position-relative text-center p-4">
                <a href="product-details.html"><img src="/assets/img/products/apple.png" alt="apple" className="img-fluid" /></a>
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
                <a href="shop-grid.html" className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">Fresh Organic</a>
                <a href="product-details.html" className="card-title fw-bold d-block mb-2">Popped Rice Crisps Snacks Chocolate.</a>
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
                <h6 className="price text-danger mb-3">$140.00</h6>
                <div className="card-progressbar mb-2 rounded-pill">
                  <span className="card-progress bg-primary" data-progress="60%" />
                </div>
                <p className="mb-0 fw-semibold">Available: <span className="fw-bold text-secondary">40/100</span></p>
              </div>
              <div className="card-btn bg-white">
                <a href="#" className="btn btn-secondary d-block btn-md rounded-1">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item sea_food">
            <div className="vertical-product-card rounded-2 position-relative">
              <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
              <div className="thumbnail position-relative text-center p-4">
                <a href="product-details.html"><img src="/assets/img/products/apple-black.png" alt="apple" className="img-fluid" /></a>
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
                <a href="shop-grid.html" className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">Fresh Organic</a>
                <a href="product-details.html" className="card-title fw-bold d-block mb-2">Popped Rice Crisps Snacks Chocolate.</a>
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
                <h6 className="price text-danger mb-3">$140.00</h6>
                <div className="card-progressbar mb-2 rounded-pill">
                  <span className="card-progress bg-primary" data-progress="60%" />
                </div>
                <p className="mb-0 fw-semibold">Available: <span className="fw-bold text-secondary">40/100</span></p>
              </div>
              <div className="card-btn bg-white">
                <a href="#" className="btn btn-secondary d-block btn-md rounded-1">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item vegetables">
            <div className="vertical-product-card rounded-2 position-relative">
              <div className="thumbnail position-relative text-center p-4">
                <a href="product-details.html"><img src="/assets/img/products/pinut.png" alt="apple" className="img-fluid" /></a>
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
                <a href="shop-grid.html" className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">Fresh Organic</a>
                <a href="product-details.html" className="card-title fw-bold d-block mb-2">Popped Rice Crisps Snacks Chocolate.</a>
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
                <h6 className="price text-danger mb-3">$140.00</h6>
                <div className="card-progressbar mb-2 rounded-pill">
                  <span className="card-progress bg-primary" data-progress="60%" />
                </div>
                <p className="mb-0 fw-semibold">Available: <span className="fw-bold text-secondary">40/100</span></p>
              </div>
              <div className="card-btn bg-white">
                <a href="#" className="btn btn-secondary d-block btn-md rounded-1">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item beans_peas">
            <div className="vertical-product-card rounded-2 position-relative">
              <span className="offer-badge text-white fw-bold fs-xxs bg-danger position-absolute start-0 top-0">-12% OFF</span>
              <div className="thumbnail position-relative text-center p-4">
                <a href="product-details.html"><img src="/assets/img/products/stroberry.png" alt="apple" className="img-fluid" /></a>
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
                <a href="shop-grid.html" className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">Fresh Organic</a>
                <a href="product-details.html" className="card-title fw-bold d-block mb-2">Popped Rice Crisps Snacks Chocolate.</a>
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
                <h6 className="price text-danger mb-3">$140.00</h6>
                <div className="card-progressbar mb-2 rounded-pill">
                  <span className="card-progress bg-primary" data-progress="60%" />
                </div>
                <p className="mb-0 fw-semibold">Available: <span className="fw-bold text-secondary">40/100</span></p>
              </div>
              <div className="card-btn bg-white">
                <a href="#" className="btn btn-secondary d-block btn-md rounded-1">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/*trending products end*/}
    {/*banner section start*/}
    <section className="banner-section position-relative z-1 overflow-hidden bg-white pt-2">
      <img src="/assets/img/shapes/bg-shape-3.png" alt="bg shape" className="position-absolute start-0 bottom-0 z--1 w-100" />
      <div className="container">
        <div className="row align-items-center g-4 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="banner-box background-banner rounded-2 overflow-hidden" data-background="/assets/img/banner/banner-1.jpg">
              <span className="gshop-subtitle fs-xxs mb-1 text-dark d-inline-block">100% Pur Products</span>
              <h6 className="mb-0">Fresh Fruits</h6>
              <h4 className="mb-6">Healthy Juice</h4>
              <a href="product-details.html" className="explore-btn fw-bold text-dark">Shop Now<span className="ms-1"><i className="fas fa-arrow-right" /></span></a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="banner-box rounded-2 overflow-hidden position-relative banner-color-green z-1">
              <img src="/assets/img/products/capsicum.png" alt="capsicum" className="banner-img" />
              <span className="gshop-subtitle fs-xxs mb-1 text-dark d-inline-block">Weekly Best Seller</span>
              <h6 className="mb-0">Fresh Fruits</h6>
              <h4 className="mb-6">Healthy Juice</h4>
              <a href="product-details.html" className="explore-btn fw-bold text-dark">Shop Now<span className="ms-1"><i className="fas fa-arrow-right" /></span></a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="banner-box rounded-2 overflow-hidden position-relative z-1 banner-color-secondary">
              <img src="/assets/img/products/lychee.png" alt="lychee" className="banner-img" />
              <span className="badge bg-danger gshop-subtitle mb-1">Top Offer</span>
              <h6 className="mb-0">Fresh Fruits</h6>
              <h4 className="mb-6">Healthy Juice</h4>
              <a href="product-details.html" className="explore-btn fw-bold text-dark">Shop Now<span className="ms-1"><i className="fas fa-arrow-right" /></span></a>
            </div>
          </div>
        </div>
      </div>
    </section> {/*banner section end*/}
    {/*best deals start*/}
    <section className="pb-120 position-relative z-1 pt-120">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">
          <div className="col-xxl-4 col-xl-5 order-2 order-xxl-1">
            <div className="banner-box banner-color-green position-relative overflow-hidden z-1 rounded-2 pe-0 pb-0">
              <span className="gshop-subtitle text-secondary mb-1">100% Organic Vegetable</span>
              <h6 className="mb-0">Vegetable</h6>
              <h4 className="mb-2">Fresh &amp; Healthy</h4>
              <p className="fw-medium mb-5">Get 50% Off on Selected Organic Items</p>
              <a href="product-details.html" className="btn btn-primary btn-md">Show Now<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              <div className="banner-img-wrapper text-end mt--40">
                <img src="/assets/img/banner/vegetables.png" alt="vegetables" className />
              </div>
            </div>
          </div>
          <div className="col-xxl-8 order-1 order-xxl-2">
            <div className="timing-box d-flex align-items-center justify-content-center justify-content-sm-between rounded-3 flex-wrap gap-3">
              <h4 className="mb-0">Weekly Best Deals</h4>
              <ul className="timing-countdown countdown-timer d-flex align-items-center gap-2" data-date="06/30/2023 23:59:59">
                <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                  <h5 className="mb-0 days">00</h5>
                  <span className="gshop-subtitle fs-xxs d-block">Days</span>
                </li>
                <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                  <h5 className="mb-0 hours">00</h5>
                  <span className="gshop-subtitle fs-xxs d-block">Days</span>
                </li>
                <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                  <h5 className="mb-0 minutes">00</h5>
                  <span className="gshop-subtitle fs-xxs d-block">Days</span>
                </li>
                <li className="position-relative z-1 d-flex align-items-center justify-content-center flex-column rounded-2">
                  <h5 className="mb-0 seconds">00</h5>
                  <span className="gshop-subtitle fs-xxs d-block">Days</span>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 shadow gap-4">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="product-details.html"><img src="/assets/img/products/p-sm-1.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-content mt-4 mt-sm-0">
                      <div className="d-flex align-items-center flex-nowrap star-rating">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <a href="product-details.html" className="fw-bold text-heading title d-block">European Lemon Zest</a>
                      <div className="pricing mt-2">
                        <span className="fw-bold h4 deleted me-1">$240.00</span>
                        <span className="fw-bold h4 text-danger">$140.00</span>
                      </div>
                      <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 shadow gap-4">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="product-details.html"><img src="/assets/img/products/p-sm-2.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-content mt-4 mt-sm-0">
                      <div className="d-flex align-items-center flex-nowrap star-rating">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <a href="product-details.html" className="fw-bold text-heading title d-block">European Lemon Zest</a>
                      <div className="pricing mt-2">
                        <span className="fw-bold h4 deleted me-1">$240.00</span>
                        <span className="fw-bold h4 text-danger">$140.00</span>
                      </div>
                      <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 shadow gap-4">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="product-details.html"><img src="/assets/img/products/p-sm-3.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-content mt-4 mt-sm-0">
                      <div className="d-flex align-items-center flex-nowrap star-rating">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <a href="product-details.html" className="fw-bold text-heading title d-block">European Lemon Zest</a>
                      <div className="pricing mt-2">
                        <span className="fw-bold h4 deleted me-1">$240.00</span>
                        <span className="fw-bold h4 text-danger">$140.00</span>
                      </div>
                      <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 shadow gap-4">
                    <div className="thumbnail position-relative rounded-2">
                      <a href="product-details.html"><img src="/assets/img/products/p-sm-4.png" alt="product" className="img-fluid" /></a>
                      <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
                        <a href="#" className="rounded-btn"><i className="fa-regular fa-heart" /></a>
                        <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn"><i className="fa-solid fa-eye" /></a>
                        <a href="#" className="rounded-btn">
                          <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-content mt-4 mt-sm-0">
                      <div className="d-flex align-items-center flex-nowrap star-rating">
                        <ul className="d-flex align-items-center me-2">
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                          <li className="text-warning"><i className="fa-solid fa-star" /></li>
                        </ul>
                        <span className="flex-shrink-0">(5.2k Reviews)</span>
                      </div>
                      <a href="product-details.html" className="fw-bold text-heading title d-block">European Lemon Zest</a>
                      <div className="pricing mt-2">
                        <span className="fw-bold h4 deleted me-1">$240.00</span>
                        <span className="fw-bold h4 text-danger">$140.00</span>
                      </div>
                      <a href="product-details.html" className="fs-xs fw-bold mt-3 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/*best deals end*/}
    {/*banner section start*/}
    <section className="banner-section position-relative z-1 overflow-hidden">
      <img src="/assets/img/shapes/bg-shape-4.png" alt="bg shape" className="position-absolute start-0 bottom-0 w-100 z--1" />
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="banner-box background-banner rounded-2 banner-lg" data-background="/assets/img/banner/banner-2.jpg">
              <span className="badge bg-danger mb-2">Top Offer</span>
              <h3 className="mb-6 text-white gshop-title">Fresh &amp; Natural Healthy<br className="d-none d-sm-block" /> Food <mark className="position-relative text-secondary position-relative bg-transparent">Special Offer<img src="/assets/img/shapes/border-line.png" className="position-absolute start-0 border-line w-100" alt="border line" /></mark></h3>
              <a href="product-details.html" className="btn btn-secondary btn-md">Shop Now<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="banner-img rounded-3 overflow-hidden">
              <img src="/assets/img/banner/banner-3.png" alt="banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section> {/*banner section end*/}
    {/*feedback section start*/}
    <section className="ptb-120 bg-shade position-relative overflow-hidden z-1 feedback-section">
      <img src="/assets/img/shapes/bg-shape-5.png" alt="bg shape" className="position-absolute start-0 bottom-0 z--1 w-100" />
      <img src="/assets/img/shapes/map-bg.png" alt="map" className="position-absolute start-50 top-50 translate-middle z--1" />
      <img src="/assets/img/shapes/fd-1.png" alt="shape" className="position-absolute z--1 fd-1" />
      <img src="/assets/img/shapes/fd-2.png" alt="shape" className="position-absolute z--1 fd-2" />
      <img src="/assets/img/shapes/fd-3.png" alt="shape" className="position-absolute z--1 fd-3" />
      <img src="/assets/img/shapes/fd-4.png" alt="shape" className="position-absolute z--1 fd-4" />
      <img src="/assets/img/shapes/fd-5.png" alt="shape" className="position-absolute z--1 fd-5" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <h2 className="mb-6">What Our Clients Say</h2>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="gshop-feedback-slider-wrapper">
              <div className="swiper gshop-feedback-thumb-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide control-thumb">
                    <img src="/assets/img/authors/client-1.png" alt="clients" className="img-fluid rounded-circle" />
                  </div>
                  <div className="swiper-slide control-thumb">
                    <img src="/assets/img/authors/client-2.png" alt="clients" className="img-fluid rounded-circle" />
                  </div>
                  <div className="swiper-slide control-thumb">
                    <img src="/assets/img/authors/client-3.png" alt="clients" className="img-fluid rounded-circle" />
                  </div>
                  <div className="swiper-slide control-thumb">
                    <img src="/assets/img/authors/client-4.png" alt="clients" className="img-fluid rounded-circle" />
                  </div>
                  <div className="swiper-slide control-thumb">
                    <img src="/assets/img/authors/client-5.png" alt="clients" className="img-fluid rounded-circle" />
                  </div>
                </div>
              </div>
              <div className="swiper gshop-feedback-slider mt-4">
                <div className="swiper-wrapper">
                  <div className="swiper-slide feedback-single text-center">
                    <p className="mb-5">“Distinctively unleash business technologies without backend metrics. Conveniently network distributed core competencies. Continually integrate backward-compatible information and backward-compatible” </p>
                    <span className="clients_name text-dark fw-bold d-block mb-1">Rasmus Geisler</span>
                    <ul className="star-rating fs-sm d-inline-flex align-items-center text-warning">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                  <div className="swiper-slide feedback-single text-center">
                    <p className="mb-5">“Distinctively unleash business technologies without backend metrics. Conveniently network distributed core competencies. Continually integrate backward-compatible information and backward-compatible” </p>
                    <span className="clients_name text-dark fw-bold d-block mb-1">Rasmus Geisler</span>
                    <ul className="star-rating fs-sm d-inline-flex align-items-center text-warning">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                  <div className="swiper-slide feedback-single text-center">
                    <p className="mb-5">“Distinctively unleash business technologies without backend metrics. Conveniently network distributed core competencies. Continually integrate backward-compatible information and backward-compatible” </p>
                    <span className="clients_name text-dark fw-bold d-block mb-1">Rasmus Geisler</span>
                    <ul className="star-rating fs-sm d-inline-flex align-items-center text-warning">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                  <div className="swiper-slide feedback-single text-center">
                    <p className="mb-5">“Distinctively unleash business technologies without backend metrics. Conveniently network distributed core competencies. Continually integrate backward-compatible information and backward-compatible” </p>
                    <span className="clients_name text-dark fw-bold d-block mb-1">Rasmus Geisler</span>
                    <ul className="star-rating fs-sm d-inline-flex align-items-center text-warning">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                  <div className="swiper-slide feedback-single text-center">
                    <p className="mb-5">“Distinctively unleash business technologies without backend metrics. Conveniently network distributed core competencies. Continually integrate backward-compatible information and backward-compatible” </p>
                    <span className="clients_name text-dark fw-bold d-block mb-1">Rasmus Geisler</span>
                    <ul className="star-rating fs-sm d-inline-flex align-items-center text-warning">
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                      <li><i className="fas fa-star" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/*feedback section end*/}
    {/*products listing start*/}
    <section className="pt-80 pb-120">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-xxl-4 col-lg-6">
            <div className="product-listing-box bg-white">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-5 flex-wrap">
                <h4 className="mb-0">New Products</h4>
                <a href="shop-grid.html" className="explore-btn text-secondary fw-bold">View More<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-1.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-2.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-3.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-listing-box bg-white">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-5 flex-wrap">
                <h4 className="mb-0">Organic Bestseller</h4>
                <a href="#" className="explore-btn text-secondary fw-bold">View More<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-4.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-5.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
              <div className="horizontal-product-card d-sm-flex align-items-center p-3 bg-white rounded-2 mt-3 border card-md gap-4">
                <div className="thumbnail position-relative rounded-2">
                  <a href="product-details.html"><img src="/assets/img/products/p-sm-6.png" alt="product" className="img-fluid" /></a>
                  <div className="product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-1 rounded-2">
                    <a href="#" className="rounded-btn fs-xs"><i className="fa-regular fa-heart" /></a>
                    <a href="#quickview_modal" data-bs-toggle="modal" className="rounded-btn fs-xs"><i className="fa-solid fa-eye" /></a>
                    <a href="#" className="rounded-btn fs-xs">
                      <svg width={13} height={10} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.86193 0.189422C9.62476 0.422214 9.62476 0.799637 9.86193 1.03243L10.6472 1.80311H7.25462C5.91292 1.80311 4.82521 2.87064 4.82521 4.18749V4.78359C4.82521 5.11281 5.09713 5.37968 5.43256 5.37968C5.768 5.37968 6.03991 5.11281 6.03991 4.78359V4.18749C6.03991 3.52906 6.58374 2.9953 7.25462 2.9953H10.6472L9.86193 3.76599C9.62476 3.99877 9.62476 4.37622 9.86193 4.60899C10.0991 4.84177 10.4837 4.84177 10.7208 4.60899L12.5429 2.82071C12.7801 2.58792 12.7801 2.2105 12.5429 1.9777L10.7208 0.189422C10.4837 -0.0433652 10.0991 -0.0433652 9.86193 0.189422ZM7.86197 4.18749C7.52653 4.18749 7.25462 4.45436 7.25462 4.78359V5.37968C7.25462 6.03813 6.7108 6.57187 6.03991 6.57187H2.64736L3.43261 5.80118C3.66979 5.5684 3.66979 5.19096 3.43261 4.95818C3.19542 4.72541 2.81087 4.72541 2.57368 4.95818L0.751618 6.74647C0.514435 6.97924 0.514435 7.35669 0.751618 7.58946L2.57368 9.37775C2.81087 9.61052 3.19542 9.61052 3.43261 9.37775C3.66979 9.14497 3.66979 8.76752 3.43261 8.53475L2.64736 7.76406H6.03991C7.38162 7.76406 8.46933 6.69651 8.46933 5.37968V4.78359C8.46933 4.45436 8.19742 4.18749 7.86197 4.18749Z" fill="#5D6374" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-content mt-4 mt-sm-0">
                  <div className="d-flex align-items-center flex-nowrap star-rating">
                    <ul className="d-flex align-items-center me-2">
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                      <li className="text-warning"><i className="fa-solid fa-star" /></li>
                    </ul>
                    <span className="flex-shrink-0">(5.2k Reviews)</span>
                  </div>
                  <a href="product-details.html" className="fw-bold text-heading title d-block fs-sm">European Lemon Zest</a>
                  <div className="pricing mt-2">
                    <span className="fw-bold h4 deleted me-1">$240.00</span>
                    <span className="fw-bold h4 text-danger">$140.00</span>
                  </div>
                  <a href="product-details.html" className="fs-xs fw-bold mt-10 d-inline-block explore-btn">Shop Now<span className="ms-1"><i className="fa-solid fa-arrow-right" /></span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10">
            <div className="vertical-banner text-center bg-white rounded-2" data-background="/assets/img/banner/banner-4.jpg">
              <h5 className="mb-1">Fresh &amp; Organic Spice</h5>
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="hot-badge bg-danger fw-bold fs-xs position-relative text-white">HOT</span>
                <span className="offer-title text-danger fw-bold">30% Off</span>
              </div>
              <a href="product-details.html" className="explore-btn text-primary fw-bold">Shop Now<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
            </div>
            <div className="counter-box bg-white rounded-2 mt-4">
              <div className="horizontal-counter d-flex align-items-center gap-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-2 bg-glimpse-pink flex-shrink-0">
                  <img src="/assets/img/icons/letter-box.svg" alt="icon" className="img-fluid" />
                </span>
                <div className="numbers">
                  <h3 className="mb-1"><span className="counter">456</span>k+</h3>
                  <h6 className="mb-0 text-gray fs-sm">Total Products</h6>
                </div>
              </div>
              <span className="gradient-spacer-2 d-block my-4" />
              <div className="horizontal-counter d-flex align-items-center gap-3">
                <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-2 bg-azure-mist flex-shrink-0">
                  <img src="/assets/img/icons/thumbs-up.svg" alt="icon" className="img-fluid" />
                </span>
                <div className="numbers">
                  <h3 className="mb-1"><span className="counter">16</span>M+</h3>
                  <h6 className="mb-0 text-gray fs-sm">Customer Satisfaction</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/*products listing end*/}
    {/*blog section start*/}
    <section className="blog-section pb-120 position-relative overflow-hidden z-1">
      <img src="/assets/img/shapes/dal.png" alt="shape" className="position-absolute dal-shape z--1" />
      <img src="/assets/img/shapes/frame-circle.svg" alt="frame circle" className="position-absolute frame-circle z--1 d-none d-md-block" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-md-8">
            <div className="section-title text-center">
              <h2 className="mb-3">Browse Recent Post</h2>
              <p className="mb-0">Interactivel product distinctive paradigms whereas one-to-one intellectual capital. resource sucking services.</p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center mt-3">
          <div className="col-xl-4 col-md-6">
            <article className="blog-card rounded-2 overflow-hidden bg-white">
              <div className="thumbnail overflow-hidden">
                <a href="blog-details.html"><img src="/assets/img/blog/blog-thumb-1.jpg" alt="blog thumb" className="img-fluid" /></a>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta d-flex align-items-center gap-3 mb-1">
                  <span className="fs-xs fw-medium"><i className="fa-solid fa-tags me-1" />Organic Vegetable</span>
                  <span className="fs-xs fw-medium"><i className="fa-regular fa-clock me-1" />May 24, 2022</span>
                </div>
                <a href="blog-details.html">
                  <h4 className="mb-3">Holiday Home Delivery We have Recently Ordered</h4>
                </a>
                <p className="mb-0 mb-5">Holisticly exploit equity invested growth strategies whereas enterpris</p>
                <a href="blog-details.html" className="btn btn-primary-light btn-md">Explore More<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-md-6">
            <article className="blog-card rounded-2 overflow-hidden bg-white">
              <div className="thumbnail overflow-hidden">
                <a href="blog-details.html"><img src="/assets/img/blog/blog-thumb-2.jpg" alt="blog thumb" className="img-fluid" /></a>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta d-flex align-items-center gap-3 mb-1">
                  <span className="fs-xs fw-medium"><i className="fa-solid fa-tags me-1" />Organic Vegetable</span>
                  <span className="fs-xs fw-medium"><i className="fa-regular fa-clock me-1" />May 24, 2022</span>
                </div>
                <a href="blog-details.html">
                  <h4 className="mb-3">Holiday Home Delivery We have Recently Ordered</h4>
                </a>
                <p className="mb-0 mb-5">Holisticly exploit equity invested growth strategies whereas enterpris</p>
                <a href="blog-details.html" className="btn btn-primary-light btn-md">Explore More<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              </div>
            </article>
          </div>
          <div className="col-xl-4 col-md-6">
            <article className="blog-card rounded-2 overflow-hidden bg-white">
              <div className="thumbnail overflow-hidden">
                <a href="blog-details.html"><img src="/assets/img/blog/blog-thumb-3.jpg" alt="blog thumb" className="img-fluid" /></a>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta d-flex align-items-center gap-3 mb-1">
                  <span className="fs-xs fw-medium"><i className="fa-solid fa-tags me-1" />Organic Vegetable</span>
                  <span className="fs-xs fw-medium"><i className="fa-regular fa-clock me-1" />May 24, 2022</span>
                </div>
                <a href="blog-details.html">
                  <h4 className="mb-3">Holiday Home Delivery We have Recently Ordered</h4>
                </a>
                <p className="mb-0 mb-5">Holisticly exploit equity invested growth strategies whereas enterpris</p>
                <a href="blog-details.html" className="btn btn-primary-light btn-md">Explore More<span className="ms-2"><i className="fas fa-arrow-right" /></span></a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section> {/*blog section end*/}
    {/*footer section start*/}
    <div className="footer-curve position-relative overflow-hidden">
      <span className="position-absolute section-curve-wrapper top-0 h-100" data-background="/assets/img/shapes/section-curve.png" />
    </div>
    <footer className="gshop-footer position-relative pt-8 bg-dark z-1 overflow-hidden">
      <img src="/assets/img/shapes/tomato.svg" alt="tomato" className="position-absolute z--1 tomato vector-shape" />
      <img src="/assets/img/shapes/pata-lg.svg" alt="pata" className="position-absolute z--1 pata-lg vector-shape" />
      <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute z--1 pata-xs vector-shape" />
      <img src="/assets/img/shapes/frame-circle.svg" alt="frame" className="position-absolute z--1 frame-circle vector-shape" />
      <img src="/assets/img/shapes/leaf.svg" alt="leaf" className="position-absolute z--1 leaf vector-shape" />
      {/*shape right */}
      <img src="/assets/img/shapes/leaf.svg" alt="pata" className="position-absolute leaf-2 z--1 vector-shape" />
      <img src="/assets/img/shapes/pata-xs.svg" alt="pata" className="position-absolute pata-xs-2 z--1 vector-shape" />
      <img src="/assets/img/shapes/tomato-slice.svg" alt="tomato slice" className="position-absolute tomato-slice vector-shape z--1" />
      <img src="/assets/img/shapes/tomato-half.svg" alt="tomato" className="position-absolute tomato-half z--1 vector-shape" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="gshop_subscribe_form text-center">
              <h4 className="text-white gshop-title">Subscribe to the G-Shop <mark className="p-0 position-relative text-secondary bg-transparent">New Arrivals <img src="/assets/img/shapes/border-line.svg" alt="border line" className="position-absolute border-line" /></mark><br className="d-none d-sm-block" />&amp; Other Information.</h4>
              <form className="mt-5 d-flex align-items-center bg-white rounded subscribe_form">
                <input type="email" className="form-control" placeholder="Enter Email Address" />
                <button type="submit" className="btn btn-primary flex-shrink-0">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
        <span className="gradient-spacer my-8 d-block" />
        <div className="row g-5">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Category</h5>
              <ul className="footer-nav">
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Location &amp; Working Hours</a></li>
                <li><a href="#">Our Guarantee</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">Help Page</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Quick Links</h5>
              <ul className="footer-nav">
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns &amp; Exchanges</a></li>
                <li><a href="#">Return Center</a></li>
                <li><a href="#">Purchase History</a></li>
                <li><a href="#">Latest News Blog</a></li>
                <li><a href="#">Shipping &amp; Delivery</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Contact Us</h5>
              <ul className="footer-nav">
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Location &amp; Working Hours</a></li>
                <li><a href="#">Our Guarantee</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">Help Page</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="footer-widget">
              <h5 className="text-white mb-4">Customer Support</h5>
              <ul className="footer-nav">
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns &amp; Exchanges</a></li>
                <li><a href="#">Return Center</a></li>
                <li><a href="#">Purchase History</a></li>
                <li><a href="#">Latest News Blog</a></li>
                <li><a href="#">Shipping &amp; Delivery</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright pt-120 pb-3">
        <span className="gradient-spacer d-block mb-3" />
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-4">
              <div className="copyright-text">
                <p className="mb-0 text-white">© All rights reserved Made by <a href="#" className="text-secondary">ThemeTags</a></p>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="logo-wrapper text-center">
                <a href="index-2.html" className="logo"><img src="/assets/img/logo-white.png" alt="logo" className="img-fluid" /></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-payments-info d-flex align-items-center justify-content-lg-end gap-2">
                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                  <img src="/assets/img/brands/visa.png" alt="visa" className="img-fluid" />
                </div>
                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                  <img src="/assets/img/brands/mastercard.png" alt="visa" className="img-fluid" />
                </div>
                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                  <img src="/assets/img/brands/payoneer.png" alt="visa" className="img-fluid" />
                </div>
                <div className="supported-payment-box rounded-1 bg-dark-light d-inline-flex align-items-center justify-content-center p-2 flex-shrink-0">
                  <img src="/assets/img/brands/paypal.png" alt="visa" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="mobile-toolbar d-block d-md-none d-lg-none">
      <div className="d-table table-layout-fixed w-100">
        <a className="d-table-cell mobile-toolbar-item mobile-menu-toggle" href="#">
          <span className="mobile-toolbar-icon"><i className="fas fa-bars" /></span><span className="mobile-toolbar-label">Category
          </span>
        </a>
        <div className="gshop-header-search dropdown d-table-cell mobile-toolbar-item">
          <button className="header-icon" type="button" data-bs-toggle="dropdown">
            <span className="mobile-toolbar-icon">
              <svg width={18} height={23} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.68859 0.5C4.34645 0.5 0 4.84646 0 10.1886C0 15.5311 4.34645 19.8772 9.68859 19.8772C15.031 19.8772 19.3772 15.5311 19.3772 10.1886C19.3772 4.84646 15.031 0.5 9.68859 0.5ZM9.68859 18.0886C5.33261 18.0886 1.78866 14.5447 1.78866 10.1887C1.78866 5.83266 5.33261 2.28867 9.68859 2.28867C14.0446 2.28867 17.5885 5.83262 17.5885 10.1886C17.5885 14.5446 14.0446 18.0886 9.68859 18.0886Z" fill="#5D6374" />
                <path d="M21.7406 20.9824L16.6436 15.8853C16.2962 15.538 15.7338 15.538 15.3865 15.8853C15.0391 16.2323 15.0391 16.7954 15.3865 17.1424L20.4835 22.2395C20.6571 22.4131 20.8845 22.5 21.1121 22.5C21.3393 22.5 21.5669 22.4131 21.7406 22.2395C22.0879 21.8925 22.0879 21.3294 21.7406 20.9824Z" fill="#5D6374" />
              </svg>
            </span>
            <span className="mobile-toolbar-label">Search</span>
          </button>
          <div className="dropdown-menu dropdown-menu-start border-0">
            <form className="search-form d-flex align-items-center" action="#">
              <input type="text" placeholder="Search products..." className="w-100" />
              <button type="submit" className="submit-icon-btn-secondary"><i className="fa-solid fa-magnifying-glass" /></button>
            </form>
          </div>
        </div>
        <a className="d-table-cell mobile-toolbar-item" href="my-account.html">
          <span className="mobile-toolbar-icon">
            <svg width={18} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.092 11.9546C12.6656 11.9546 14.0281 11.3902 15.1416 10.2766C16.2547 9.16322 16.8193 7.80093 16.8193 6.2271C16.8193 4.65382 16.2549 3.29134 15.1414 2.1776C14.0279 1.0644 12.6654 0.5 11.092 0.5C9.51825 0.5 8.156 1.0644 7.04266 2.17778C5.92931 3.29116 5.36475 4.65363 5.36475 6.2271C5.36475 7.80093 5.92931 9.1634 7.04266 10.2768C8.15636 11.39 9.51879 11.9546 11.092 11.9546ZM8.0281 3.16308C8.88239 2.30877 9.88453 1.89349 11.092 1.89349C12.2993 1.89349 13.3017 2.30877 14.1561 3.16308C15.0104 4.01757 15.4259 5.01992 15.4259 6.2271C15.4259 7.43464 15.0104 8.43681 14.1561 9.2913C13.3017 10.1458 12.2993 10.5611 11.092 10.5611C9.88489 10.5611 8.88275 10.1456 8.0281 9.2913C7.17364 8.43699 6.7582 7.43464 6.7582 6.2271C6.7582 5.01992 7.17364 4.01757 8.0281 3.16308Z" fill="#5D6374" stroke="#5D6374" strokeWidth="0.2" />
              <path d="M21.1339 18.893C21.1012 18.4201 21.0352 17.9043 20.9379 17.3596C20.8397 16.8108 20.7133 16.292 20.562 15.8178C20.4055 15.3277 20.1931 14.8438 19.9301 14.38C19.6575 13.8986 19.3371 13.4794 18.9776 13.1345C18.6016 12.7736 18.1414 12.4835 17.6091 12.2719C17.0787 12.0614 16.4909 11.9547 15.8621 11.9547C15.6152 11.9547 15.3763 12.0564 14.9151 12.3576C14.6313 12.5433 14.2993 12.7581 13.9287 12.9956C13.6118 13.1982 13.1825 13.3879 12.6523 13.5598C12.135 13.7277 11.6098 13.8129 11.0912 13.8129C10.5729 13.8129 10.0477 13.7277 9.53001 13.5598C9.00034 13.3881 8.57088 13.1984 8.25455 12.9958C7.88747 12.7605 7.55527 12.5457 7.26718 12.3574C6.80634 12.0562 6.56753 11.9545 6.32059 11.9545C5.69163 11.9545 5.10401 12.0614 4.57378 12.2721C4.04189 12.4833 3.58143 12.7734 3.20512 13.1347C2.84561 13.4798 2.52522 13.8988 2.25281 14.38C1.99019 14.8438 1.77758 15.3276 1.62108 15.818C1.46993 16.2922 1.34351 16.8108 1.24533 17.3596C1.14788 17.9035 1.082 18.4195 1.04933 18.8935C1.01722 19.3569 1.00098 19.8393 1.00098 20.3266C1.00098 21.5934 1.40238 22.6189 2.19394 23.3752C2.97572 24.1216 4.00996 24.5 5.26808 24.5H16.9157C18.1735 24.5 19.2077 24.1216 19.9897 23.3752C20.7814 22.6194 21.1828 21.5935 21.1828 20.3264C21.1826 19.8374 21.1662 19.3551 21.1339 18.893ZM19.0123 22.3449C18.4957 22.8381 17.8099 23.0779 16.9155 23.0779H5.26808C4.37354 23.0779 3.68773 22.8381 3.17135 22.3451C2.66474 21.8613 2.41854 21.2008 2.41854 20.3266C2.41854 19.8718 2.43349 19.4229 2.46339 18.9918C2.49255 18.569 2.55216 18.1044 2.64056 17.6108C2.72786 17.1233 2.83896 16.6658 2.9711 16.2516C3.09789 15.8545 3.27082 15.4612 3.48527 15.0824C3.68995 14.7214 3.92544 14.4116 4.18529 14.1621C4.42835 13.9286 4.73471 13.7375 5.0957 13.5942C5.42956 13.4616 5.80476 13.3891 6.21208 13.3781C6.26172 13.4046 6.35012 13.4552 6.49334 13.5488C6.78475 13.7394 7.12064 13.9567 7.49197 14.1946C7.91054 14.4624 8.44981 14.7042 9.09409 14.9128C9.75277 15.1265 10.4245 15.235 11.0913 15.235C11.7581 15.235 12.4301 15.1265 13.0884 14.913C13.7333 14.704 14.2723 14.4624 14.6915 14.1943C15.0715 13.9506 15.3979 13.7395 15.6894 13.5488C15.8326 13.4553 15.921 13.4046 15.9706 13.3781C16.3781 13.3891 16.7533 13.4616 17.0874 13.5942C17.4482 13.7375 17.7545 13.9288 17.9976 14.1621C18.2574 14.4114 18.4929 14.7212 18.6976 15.0826C18.9122 15.4612 19.0854 15.8547 19.212 16.2515C19.3443 16.6662 19.4556 17.1235 19.5427 17.6106C19.6309 18.1052 19.6907 18.5699 19.7199 18.992V18.9924C19.7499 19.4218 19.7651 19.8705 19.7653 20.3266C19.7651 21.201 19.5189 21.8613 19.0123 22.3449Z" fill="#5D6374" stroke="#5D6374" strokeWidth="0.2" />
            </svg>
          </span>
          <span className="mobile-toolbar-label">Account</span>
        </a>
        <a className="d-table-cell mobile-toolbar-item" href="checkout.html">
          <span className="mobile-toolbar-icon mobile-cart-icon">
            <svg width={18} height={25} viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.1704 23.9559L19.6264 7.01422C19.5843 6.55156 19.1908 6.19718 18.7194 6.19718H15.5355V4.78227C15.5355 2.14533 13.3583 0 10.6823 0C8.00628 0 5.82937 2.14533 5.82937 4.78227V6.19718H2.6433C2.17192 6.19718 1.77839 6.55156 1.73625 7.01422L0.186259 24.0225C0.163431 24.2735 0.248671 24.5223 0.421216 24.7082C0.593761 24.8941 0.837705 25 1.0933 25H20.2695C20.2702 25 20.2712 25 20.2719 25C20.775 25 21.1826 24.5982 21.1826 24.1027C21.1825 24.0528 21.1784 24.0036 21.1704 23.9559ZM7.65075 4.78227C7.65075 3.1349 9.01071 1.79465 10.6824 1.79465C12.3542 1.79465 13.7142 3.1349 13.7142 4.78227V6.19718H7.65075V4.78227ZM2.08948 23.2055L3.47591 7.99183H5.82937V9.59649C5.82937 10.0921 6.237 10.4938 6.74006 10.4938C7.24313 10.4938 7.65075 10.0921 7.65075 9.59649V7.99183H13.7142V9.59649C13.7142 10.0921 14.1219 10.4938 14.6249 10.4938C15.128 10.4938 15.5356 10.0921 15.5356 9.59649V7.99183H17.8869L19.2733 23.2055H2.08948Z" fill="#5D6374" />
            </svg>
            <small className="badge bg-primary">12</small>
          </span>
          <span className="mobile-toolbar-label">$265</span>
        </a>
      </div>
    </div>
    <div className="offcanvas-left-menu position-fixed">
      <div className="mobile-menu">
        <button className="offcanvas-close"><i className="fa-solid fa-xmark" /></button>
        <a href="#" className="d-inline-block mb-5"><img src="/assets/img/logo.png" alt="logo" /></a>
        <nav className="mobile-menu-wrapper scrollbar">
          <ul>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/baby-care.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Baby Care</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/cleaning.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Cleaning</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/bakery-biscuits.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Bakery &amp; Biscuits</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/coffee-drinks.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Coffee &amp; Drinks</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/beauty-health.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Beauty &amp; Health</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/breakfast.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Breakfast</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/cold-drinks.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Cold Drinks</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/fresh-fruits.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Fresh Fruits</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/honey.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Honey</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/fresh-organic.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Fresh &amp; Organic</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/jam-jelly.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Jam &amp; Jelly</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/sports-fitness.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Sports &amp; Fitness</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/sea-fish.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Sea Fish</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/pet-care.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Pet Care</span>
              </a>
            </li>
            <li>
              <a href="shop-grid.html" className="d-flex align-items-center">
                <div className="me-2 avatar-icon">
                  <img src="/assets/img/category/meat.png" alt="vegetables" className="w-100 h-100 rounded-circle" />
                </div>
                <span>Meat</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div> {/*footer section end*/}
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
</div>

    </>
  )
}

export default Home
