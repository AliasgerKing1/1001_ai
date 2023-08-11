import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import PersonalFeedContent from '../../shared/MainContent/PersonalFeedContent';
import Footer from '../../shared/Footer';
import ImageDetails from "../../shared/ImageDetails"
const PersonalFeed = () => {
  let state = useSelector(state => state.SignInUserReducer)
  let [emptyfeed, setEmptyFeed] = useState(false)

  useEffect(()=> {
    if(state.my_gen_images.length > 0) {
      setEmptyFeed(false)
    }
    else {
      setEmptyFeed(true)
    }
  }, [])
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
          <img src="/assets/svg/search.svg" alt className="fn__svg search__icon" />
          <a className="search__closer" href="#"><img src="/assets/svg/close.svg" alt className="fn__svg" /></a>
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
      <div className="techwave_fn_content">
      {emptyfeed ? (            <div className="change_log">
              <div className="container small">
                {/* Changelog*/}
                <div className="techwave_fn_changelog">
                  {/* #1 changelog item */}
                  <div className="changelog__item">
                    <div className="item__header">
                      <div className="item__ver">Basic Account</div>
                      <div className="item__date">{state.join_date}</div>
                    </div>
                    <div className="item__content">
                      <div className="item__group">
                        <div className="item__title"><span>Personal Feed</span></div>
                        <ul className="item__list">
                          <li>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 383.3 383.3" className="fn__svg2 light_mode" style={{enableBackground: 'new 0 0 383.3 383.3'}} xmlSpace="preserve">
  <g>
    <path d="M15,383.3c-1.1-0.5-2.2-1-3.3-1.4C0.2,377.1-3.6,362.9,4,353.1c1.1-1.5,2.5-2.8,3.8-4.1c51.3-51.3,102.7-102.7,154-154
		c1-1,2.4-1.7,3.9-2.7c-1.8-1.9-2.8-3-3.8-4C110.1,136.6,58.5,84.9,6.8,33.3c-5.2-5.2-7.9-11.2-6.3-18.5C3.7,0.7,20.2-4.7,31.1,4.7
		c1.2,1.1,2.3,2.2,3.5,3.4C85.7,59.3,136.9,110.4,188,161.6c1.1,1.1,2,2.3,3.2,3.8c1.4-1.3,2.5-2.3,3.5-3.3
		C246.4,110.3,298.1,58.7,349.8,7c6-6,12.7-8.6,21-5.8c6.7,2.2,10.2,7.5,12.5,13.9c0,2.5,0,5,0,7.5c-1.8,5.6-5.6,9.8-9.7,13.8
		C322.8,87,272.1,137.7,221.3,188.4c-1,1-2,2.1-3.4,3.5c1.4,1.2,2.6,2.1,3.7,3.2c50.5,50.5,101.1,101.1,151.7,151.6
		c4.2,4.2,8.1,8.4,10,14.1c0,2.5,0,5,0,7.5c-2.4,7.6-7.4,12.6-15,15c-2.5,0-5,0-7.5,0c-5.6-1.8-9.7-5.7-13.8-9.7
		c-50.7-50.8-101.4-101.5-152.1-152.2c-1-1-2.1-2-3.7-3.5c-1.2,1.5-2,2.8-3,3.8C137.5,272.2,86.9,322.9,36.3,373.5
		c-4.1,4.1-8.2,7.9-13.8,9.7C20,383.3,17.5,383.3,15,383.3z" />
  </g>
</svg>

                          </li>
                          <li>No Image generate Yet</li>
                          <li>
                            <a href="/auth/image/generation" className="decor-none">Generate Now</a>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* !#1 changelog item */}
                </div>
                {/* !Changelog*/}
              </div>
            </div>) : (<>
                  {/* CONTENT */}
        {/* PAGE (all pages go inside this div) */}
<PersonalFeedContent />
        {/* !PAGE (all pages go inside this div) */}
        {/* FOOTER (inside the content) */}
{/* <Footer /> */}
        {/* !FOOTER (inside the content) */}
            </>
              )}
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
