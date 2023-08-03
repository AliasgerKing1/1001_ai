import React from 'react'
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import PersonalFeedContent from '../../shared/MainContent/PersonalFeedContent';
import Footer from '../../shared/Footer';
import ImageDetails from "../../shared/ImageDetails"
const PersonalFeed = () => {
  return (
    <>
<div>
  {/* Moving Submenu */}
  <div className="techwave_fn_fixedsub">
    <ul />
  </div>
  {/* !Moving Submenu */}
  {/* Preloader */}
  {/* <div className="techwave_fn_preloader">
    <svg>
      <circle className="first_circle" cx="50%" cy="50%" r={110} />
      <circle className="second_circle" cx="50%" cy="50%" r={110} />
    </svg>
  </div> */}
  {/* !Preloader */}
  {/* Report */}
  <div className="techwave_fn_report">
    <a href="#" className="fn__closer fn__icon_button">
      <img src="svg/close.svg" alt className="fn__svg" />
    </a>
    <div className="report__closer" />
    <div className="report__content">
      <h3 className="title">Report Item</h3>
      <h3 className="subtitle">What is the main reason for your report?</h3>
      <input className="reason_field" type="text" placeholder="Type here..." />
      <div className="btns">
        <a href="#" className="report techwave_fn_button">
          <span>Report</span>
        </a>
        <a href="#" className="cancel techwave_fn_button">
          <span>Cancel</span>
        </a>
      </div>
    </div>
  </div>
  {/* !Report */}
  {/* Image Lightbox */}
<ImageDetails />
  {/* !Image Lightbox */}
  {/* MAIN WRAPPER */}
  <div className="techwave_fn_wrapper">
    <div className="techwave_fn_wrap">
      {/* Searchbar */}
      <div className="techwave_fn_searchbar">
        <div className="search__bar">
          <input className="search__input" type="text" placeholder="Search here..." />
          <img src="svg/search.svg" alt className="fn__svg search__icon" />
          <a className="search__closer" href="#"><img src="svg/close.svg" alt className="fn__svg" /></a>
        </div>
        <div className="search__results">
          {/* Results will come here (via ajax after the integration you made after purchase as it doesn't work in HTML) */}
          <div className="results__title">Results</div>
          <div className="results__list">
            <ul>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Learn about the impact of AI on the financial industry</a></li>
              <li><a href="#">Delve into the realm of AI-driven manufacturing</a></li>
              <li><a href="#">Understand the ethical implications surrounding AI</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* !Searchbar */}
      {/* HEADER */}
<Header />
      {/* !HEADER */}
      {/* LEFT PANEL */}
<Sidebar />
      {/* !LEFT PANEL */}
      {/* CONTENT */}
      <div className="techwave_fn_content">
        {/* PAGE (all pages go inside this div) */}
<PersonalFeedContent />
        {/* !PAGE (all pages go inside this div) */}
        {/* FOOTER (inside the content) */}
<Footer />
        {/* !FOOTER (inside the content) */}
      </div>
      {/* !CONTENT */}
    </div>
  </div>
  {/* !MAIN WRAPPER */}
</div>


    </>
  )
}

export default PersonalFeed
