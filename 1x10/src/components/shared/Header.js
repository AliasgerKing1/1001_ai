import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../../Services/AuthService"
import {SignInUserRed} from "../../Redux/SignInUserReducer"
import {NavLink} from "react-router-dom"
const Header = () => {
  let [lightMode, setLightMode] = useState(false)
  let dispatch = useDispatch()
  let fetchUserFun = async () => {
    let token = localStorage.getItem("token")
    let result = await fetchUser(token);
    dispatch(SignInUserRed(result.data[0]))

}
useEffect(()=> {
    fetchUserFun();
}, [])

let state = useSelector(state => state.SignInUserReducer)
  return (
    <>
            <header className="techwave_fn_header">
        {/* Header left: token information */}
        <div className="header__left">
          <div className="fn__token_info">
            <span className="token_summary">
              <span className="count" style={{cursor : "pointer"}}>120</span>
              <span className="text" style={{cursor : "pointer"}}>Tokens<br />Remain</span>
            </span>
            <a href="/auth/pricing" className="token_upgrade techwave_fn_button"><span>Upgrade</span></a>
            <div className="token__popup">
              Resets in <span>19 hours.</span><br />
              Daily limit is <span>200 tokens</span>
            </div>
          </div>
        </div>
        {/* /Header left: token information */}
        {/* Header right: navigation bar */}
        <div className="header__right">
          <div className="fn__nav_bar">
            {/* Search (bar item) */}
            <div className="bar__item bar__item_search">
              <a href="#" className="item_opener fn__tooltip" title="Search">
                <svg version={1.0} xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" className={`fn__svg ${ lightMode ==true ? "dark_mode" : "light_mode"}`}>
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M1935 4683 c-775 -100 -1378 -689 -1491 -1455 -22 -154 -15 -419 15
-572 134 -665 647 -1189 1306 -1335 441 -97 895 -18 1280 224 50 31 99 65 110
76 19 19 24 14 615 -575 648 -647 619 -622 730 -614 105 8 180 83 188 188 8
111 33 82 -613 730 l-593 595 35 45 c59 76 145 230 190 340 83 205 120 372
130 585 40 870 -596 1636 -1462 1760 -91 13 -362 18 -440 8z m327 -424 c194
-21 385 -85 540 -182 98 -61 138 -93 235 -189 144 -142 249 -312 312 -504 89
-272 80 -603 -23 -862 -131 -330 -407 -605 -736 -732 -191 -73 -457 -99 -661
-65 -270 45 -508 167 -697 358 -132 134 -206 241 -274 398 -191 444 -115 955
197 1327 237 283 583 449 962 461 23 0 89 -4 145 -10z" />
                  </g>
                </svg>
              </a>
              <div className="item_popup" data-position="right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
            {/* !Search (bar item) */}
            {/* Notification (bar item) */}
            <div className="bar__item bar__item_notification has_notification">
              <a href="#" className="item_opener fn__tooltip" title="Notifications">
                {/*?xml version="1.0" encoding="utf-8"?*/}
                {/* Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 302.3 335.7" className={`fn__svg ${ lightMode ==true ? "dark_mode" : "light_mode"}`} style={{enableBackground: 'new 0 0 302.3 335.7'}} xmlSpace="preserve">
                  <g>
                    <path d="M210.1,287.7c-7.6,32-34.3,47.8-58.4,48c-24.1,0.2-51.6-15.2-59.5-48c-1.3,0-2.6,0-4,0c-21,0-42,0-63,0
		c-10.2,0-18-4.2-22.5-13.4c-4.5-9.3-3-18,3.2-26.3c7.4-10,14.4-20.4,21.4-30.7c2.9-4.2,3.9-9.1,3.8-14.2
		c-0.1-27.7-0.6-55.4,0.1-83.1c1.4-51.4,25.6-88.8,72.5-109.9c67.7-30.5,148.1,10.4,164.3,82.9c2.1,9.3,2.9,19,3.1,28.5
		c0.4,26.9,0.2,53.9,0.1,80.8c0,6.4,1.6,12,5.3,17.2c7.1,9.9,14.1,20,21.1,30c5.5,7.8,6.3,16.3,2,24.8c-4.2,8.5-11.5,13.1-21.1,13.2
		c-21.4,0.2-42.8,0.1-64.1,0.1C213,287.7,211.6,287.7,210.1,287.7z M277.8,263.6c-7.3-10.4-14.1-20.5-21.2-30.4
		c-6.5-9.2-9.6-19.3-9.5-30.5c0.1-26.8,0.1-53.6,0-80.5c0-4.1-0.2-8.2-0.6-12.3c-6-58.5-64-98-120.8-82.2
		c-41.7,11.6-70.4,48.8-70.6,92c-0.2,27.7-0.1,55.4,0,83.1c0,11.2-3.1,21.3-9.6,30.5c-6.4,9-12.6,18-18.8,27c-0.7,1-1.4,2-2.3,3.3
		C109,263.6,193.1,263.6,277.8,263.6z M184.5,288c-22.3,0-44.5,0-66.8,0c4.1,13.9,18.8,24,34.3,23.7
		C166.7,311.4,181.3,300.8,184.5,288z" />
                  </g>
                </svg>
              </a>
              <div className="item_popup" data-position="right">
                <div className="ntfc_header">
                  <h2 className="ntfc_title">Notifications</h2>
                  <a href="notifications.html">View All</a>
                </div>
                <div className="ntfc_list">
                  <ul>
                    <li>
                      <p><a href="notification-single.html">Version 4.1.2 has been launched</a></p>
                      <span>34 Min Ago</span>
                    </li>
                    <li>
                      <p><a href="notification-single.html">Video Generation has been released</a></p>
                      <span>12 Apr</span>
                    </li>
                    <li>
                      <p><a href="notification-single.html">Terms has been updated</a></p>
                      <span>12 Apr</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* !Notification (bar item) */}
            {/* Full Screen (bar item) */}
            <div className="bar__item bar__item_fullscreen">
              <a href="#" className="item_opener fn__tooltip" title="Full Screen">
                <svg version="1.1" id="Layer_1" className="fn__svg f_screen light_mode" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 383.4 383.4" style={{enableBackground: 'new 0 0 383.4 383.4'}} xmlSpace="preserve">
                  <g>
                    <path d="M383.4,109.4c-9,0-17.9,0-27.2,0c0-27.2,0-54.2,0-81.7c-27.4,0-54.5,0-81.9,0c0-9.4,0-18.3,0-27.6c1.5,0,2.9,0,4.4,0
		c29,0,58.1,0.2,87.1-0.1c8.5-0.1,14.5,2.5,17.6,10.6C383.4,43.6,383.4,76.5,383.4,109.4z" />
                    <path d="M10.6,383.4c-8.1-3.2-10.7-9.2-10.6-17.6c0.3-29,0.1-58.1,0.1-87.1c0-1.4,0-2.7,0-4.4c9.1,0,18,0,27.3,0c0,27,0,54,0,81.5
		c27.4,0,54.5,0,82,0c0,9.5,0,18.6,0,27.6C76.5,383.4,43.6,383.4,10.6,383.4z" />
                    <path d="M274.1,383.4c0-9,0-17.9,0-27.4c27.2,0,54.3,0,81.8,0c0-27.5,0-54.5,0-81.9c9.4,0,18.5,0,27.5,0c0,32.9,0,65.9,0,98.8
		c-2,5-5.5,8.5-10.5,10.5C340,383.4,307,383.4,274.1,383.4z" />
                    <path d="M109.3,27.6c-27.3,0-54.2,0-81.6,0c0,27.4,0,54.5,0,81.8c-9.3,0-18.1,0-27.5,0c0-1.3,0-2.6,0-3.9c0-29.9,0-59.9,0-89.8
		C0.2,5.5,5.5,0.2,15.6,0.2c30.1,0,60.1,0,90.2,0c1.1,0,2.2,0,3.6,0C109.3,9.3,109.3,18.2,109.3,27.6z" />
                  </g>
                </svg>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 383.4 383.4" className="fn__svg s_screen light_mode" style={{enableBackground: 'new 0 0 383.4 383.4'}} xmlSpace="preserve">
                  <path d="M0.1,81.8c27.3,0,54.2,0,81.6,0c0-27.4,0-54.5,0-81.8c9.3,0,18.1,0,27.5,0c0,1.3,0,2.6,0,3.9c0,29.9,0,59.9,0,89.8
	c0,10.2-5.3,15.5-15.4,15.5c-30.1,0-60.1,0-90.2,0c-1.1,0-2.2,0-3.6,0C0.1,100.1,0.1,91.2,0.1,81.8z" />
                  <path d="M383.3,301.6c-27.3,0-54.2,0-81.6,0c0,27.4,0,54.5,0,81.8c-9.3,0-18.1,0-27.5,0c0-1.3,0-2.6,0-3.9c0-29.9,0-59.9,0-89.8
	c0-10.2,5.3-15.5,15.4-15.5c30.1,0,60.1,0,90.2,0c1.1,0,2.2,0,3.6,0C383.3,283.3,383.3,292.2,383.3,301.6z" />
                  <path d="M301.6,0.1c0,27.3,0,54.2,0,81.6c27.4,0,54.5,0,81.8,0c0,9.3,0,18.1,0,27.5c-1.3,0-2.6,0-3.9,0c-29.9,0-59.9,0-89.8,0
	c-10.2,0-15.5-5.3-15.5-15.4c0-30.1,0-60.1,0-90.2c0-1.1,0-2.2,0-3.6C283.3,0.1,292.2,0.1,301.6,0.1z" />
                  <path d="M81.8,383.3c0-27.3,0-54.2,0-81.6c-27.4,0-54.5,0-81.8,0c0-9.3,0-18.1,0-27.5c1.3,0,2.6,0,3.9,0c29.9,0,59.9,0,89.8,0
	c10.2,0,15.5,5.3,15.5,15.4c0,30.1,0,60.1,0,90.2c0,1.1,0,2.2,0,3.6C100.1,383.3,91.2,383.3,81.8,383.3z" />
                </svg>
              </a>
            </div>
            {/* !Full Screen (bar item) */}
            {/* Language (bar item) */}
            <div className="bar__item bar__item_language">
              <a href="#" className="item_opener fn__tooltip" title="Language">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 272 320.2" className="fn__svg s_screen light_mode" style={{enableBackground: 'new 0 0 272 320.2'}} xmlSpace="preserve">
                  <path d="M102.6,183.4c6,3.7,11.9,7.2,17.7,10.8c5.6,3.5,8.3,8.7,7.7,15.2c-0.7,6.8-4.5,11.5-11.1,13.7c-4.4,1.5-8.7,1-12.7-1.3
	c-6.7-3.9-13.3-8-19.3-11.6c-10.1,10.4-20.1,21-30.4,31.4c-3.7,3.7-7.8,7.1-11.8,10.4c-7.2,5.9-16.7,5.1-22.5-1.5
	c-5.9-6.8-5.4-16.6,1.8-22.7c13.4-11.4,25.8-23.6,36.7-37.4c0.8-1,1.5-2,1.6-2.1c-6.6-11.2-13.4-21.7-19-32.8
	c-3.6-7-5.9-14.8-8.2-22.5c-2.7-9,2.1-17.7,10.7-20.2c8.8-2.5,17.5,2.4,20,11.6c3.2,11.5,7.9,22.3,14.5,32.3
	c0.4,0.6,0.9,1.1,1.7,2.1c16.8-29.7,26.9-61.1,30.9-95c-1.9,0-3.4,0-4.8,0c-29.8,0-59.5,0-89.3,0C5,63.9-2.8,53.2,0.9,42.6
	c2.3-6.7,8.4-10.7,16.4-10.7c19.3,0,38.5,0,57.8,0c1.5,0,3,0,5.1,0c0-5.6-0.1-10.9,0-16.2C80.4,6.3,87.5-0.3,96.8,0
	c8.1,0.3,14.8,6.6,15.1,14.7c0.2,5.5,0,11,0,16.9c1.8,0.1,3.2,0.2,4.6,0.2c19.3,0,38.5,0,57.8,0c5.1,0,9.7,1.2,13.3,5
	c4.5,4.9,5.9,10.7,3.3,17c-2.6,6.4-7.6,9.9-14.5,10c-9.6,0.2-19.3,0.1-28.9,0.1c-1.4,0-2.7,0-4.5,0
	C138.5,106.5,125.3,146.1,102.6,183.4z" />
                  <path d="M171.1,256c-3.6,16.1-7.1,31.8-10.6,47.5c-0.4,1.6-0.7,3.2-1.1,4.7c-2.4,8.4-10.1,13.3-18.3,11.8c-8.6-1.6-14.3-9-12.9-17.7
	c1.3-8.4,3.5-16.6,5.3-24.9c7.2-32.2,14.2-64.3,21.5-96.4c5.1-22.4,23.2-36.9,45.3-36.8c21.9,0.1,39.8,14.9,44.8,37
	c8.8,39.3,17.5,78.7,26.2,118c1.9,8.4-1.2,15.6-8.1,19.1c-6.5,3.3-14.4,2-19.1-3.8c-2-2.4-3.3-5.6-4-8.7c-3.7-15.7-7-31.4-10.7-47.1
	c-0.2-1.1-1.7-2.6-2.6-2.6C208.5,255.9,190,256,171.1,256z M178.4,223.6c14.7,0,28.9,0,43.6,0c-3-13-5.6-25.6-8.8-38.2
	c-1.5-6-7.4-9.7-13.3-9.6c-6,0.1-11.3,4.1-13,10c-1.1,3.7-1.8,7.5-2.7,11.3C182.3,205.9,180.3,214.6,178.4,223.6z" />
                </svg>
              </a>
              <div className="item_popup" data-position="right">
                <ul>
                  <li>
                    <span className="active">English</span>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* !Language (bar item) */}
            {/* Site Skin (bar item) */}
            <div className="bar__item bar__item_skin">
              <a href="#" className="item_opener fn__tooltip" title="Dark/Light" id='switcher'>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 319.2 319.2" className="fn__svg light_mode" style={{enableBackground: 'new 0 0 319.2 319.2'}} xmlSpace="preserve">
                  <path d="M63.8,159.4c0.1-52.9,43.3-95.8,96.2-95.6c52.7,0.2,95.5,43.2,95.4,96c-0.1,52.9-43.3,95.8-96.2,95.6
	C106.5,255.2,63.7,212.2,63.8,159.4z M223.4,159.6c0-35.3-28.3-63.7-63.6-63.8c-35.4-0.1-64,28.4-63.9,63.8
	c0,35.3,28.4,63.7,63.6,63.8C194.9,223.5,223.4,195,223.4,159.6z" />
                  <path d="M41.9,59.8c0.3-8.3,3.2-13.3,9.1-16.1c5.9-2.9,11.8-2.4,16.8,1.9c4.9,4.2,9.5,8.8,13.7,13.7c5.5,6.3,4.8,15.5-1.1,21.3
	c-5.8,5.7-14.8,6.4-21,1.1c-5-4.3-9.7-9-13.9-14C43.4,65.1,42.7,61.5,41.9,59.8z" />
                  <path d="M277.1,57.9c0,4.3-1.5,8.1-4.5,11.1c-3.8,3.9-7.6,7.9-11.6,11.6c-6.7,6.2-16.3,6.1-22.5-0.2c-6.1-6.2-6.2-15.7-0.1-22.2
	c3.9-4.2,7.9-8.3,12.2-12.1c5-4.5,10.8-5.3,17-2.6C273.5,46,277.1,51.6,277.1,57.9z" />
                  <path d="M59.8,277.3c-8.3-0.4-13.2-3.2-16.1-8.9c-2.9-5.8-2.6-11.8,1.6-16.8c4.2-5,9-9.7,13.9-14c6.3-5.5,15.5-4.7,21.3,1.2
	c5.7,5.8,6.3,14.9,0.9,21.1c-4.2,4.9-8.8,9.5-13.8,13.7C65.2,275.7,61.5,276.5,59.8,277.3z" />
                  <path d="M277.3,259.4c-0.4,8.4-3.3,13.4-9.2,16.2c-5.9,2.8-11.8,2.3-16.8-2c-4.9-4.2-9.5-8.8-13.7-13.7c-5.4-6.2-4.7-15.3,1-21
	c5.8-5.9,15-6.7,21.3-1.2c4.9,4.2,9.5,8.8,13.6,13.8C275.7,254,276.5,257.7,277.3,259.4z" />
                  <path d="M175.5,24c0,2.9,0.1,5.7,0,8.6c-0.4,8.6-7.3,15.2-15.8,15.3c-8.5,0-15.6-6.6-15.9-15.1c-0.2-6-0.2-12,0-17.9
	C144.1,6.4,151.1,0,159.5,0c8.5,0,15.4,6.3,15.9,14.7C175.6,17.8,175.4,20.9,175.5,24C175.4,24,175.4,24,175.5,24z" />
                  <path d="M23.8,175.5c-2.9,0-5.7,0.1-8.6,0C6.5,175.1,0,168.3,0,159.7c0-8.6,6.4-15.6,15-15.9c6-0.2,12-0.2,17.9,0
	c8.3,0.3,14.9,7.4,14.9,15.7c0.1,8.3-6.4,15.4-14.7,15.9C30,175.6,26.9,175.4,23.8,175.5C23.8,175.4,23.8,175.5,23.8,175.5z" />
                  <path d="M295.4,143.7c3,0,6-0.1,9,0c8.4,0.4,14.8,7.3,14.8,15.7c0,8.5-6.3,15.5-14.7,15.9c-6.1,0.3-12.2,0.3-18.3,0
	c-8.3-0.3-14.8-7.4-14.9-15.7c-0.1-8.5,6.6-15.5,15.1-15.9C289.5,143.6,292.4,143.7,295.4,143.7z" />
                  <path d="M175.4,295.4c0,3,0.1,6,0,9c-0.4,8.4-7.3,14.8-15.7,14.8c-8.5,0-15.5-6.3-15.9-14.7c-0.3-6.1-0.3-12.2,0-18.3
	c0.3-8.3,7.4-14.8,15.7-14.9c8.3-0.1,15.4,6.5,15.9,14.8C175.6,289.2,175.4,292.3,175.4,295.4z" />
                </svg>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 249.9 248.9" className="fn__svg dark_mode" style={{enableBackground: 'new 0 0 249.9 248.9'}} xmlSpace="preserve">
                  <path d="M249.9,150.7c-2.2,6.7-4.1,13.5-6.8,20c-7.1,17.7-17.9,32.9-32.2,45.6c-14.9,13.3-32.1,22.7-51.3,28
	c-13.9,3.8-28.1,5.2-42.5,4.1C86.5,246.1,60,234.2,38,212.7C18.7,193.9,6.7,171,2,144.4c-4.4-24.9-1.4-49.1,8.6-72.3
	c8.7-20.2,22-36.9,39.5-50.2C62.9,12.1,77.1,5,92.5,0.5c4.2-1.2,8.1-0.2,10.3,2.9c2.3,3.2,2.2,6.8-0.8,10.5
	C90.6,28,84.4,44.2,82.6,62.1c-2,20,2,38.8,12,56.3c10.3,18,25.1,31.2,44.1,39.4c15.9,6.9,32.6,9.2,49.9,6.9
	c17.4-2.3,32.8-9.3,46.6-20.2c1.6-1.3,3.6-2.4,5.5-2.8c4.2-0.9,7,1,9.2,5.7C249.9,148.5,249.9,149.6,249.9,150.7z M225.8,171.1
	c-46.3,19.2-89.6,15.1-126-20.4C63.4,115.3,57.9,72.1,75.8,25.4C40.8,42.8,11.8,84.8,18.2,135.8c6.1,49,45,89,95.4,95.2
	C162.1,237.1,205.8,210.5,225.8,171.1z" />
                </svg>
              </a>
            </div>
            {/* !Site Skin (bar item) */}
            {/* User (bar item) */}
            <div className="bar__item bar__item_user">
              <a style={{cursor : "pointer"}} className="user_opener fn__tooltip" title="User Profile">
                <img src="/assets/img/user/user.jpg" alt />
              </a>
              <div className="item_popup" data-position="right">
                <div className="user_profile">
                  <div className="user_img">
                    <img src="/assets/img/user/user.jpg" alt />
                  </div>
                  <div className="user_info">
                    <h2 className="user_name">{state.name}<span>Free</span></h2>
                    <p><a href={`mailto:${state.email}`} className="user_email">{state.email}</a></p>
                  </div>
                </div>
                <div className="user_nav">
                  <ul>
                    <li>
                      <a href="/auth/user/1/profile">
                        <span className="icon"><img src="/assets/svg/person.svg" alt className="fn__svg" /></span>
                        <span className="text">Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="/auth/user/1/setting">
                        <span className="icon"><img src="/assets/svg/setting.svg" alt className="fn__svg" /></span>
                        <span className="text">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/auth/bill">
                        <span className="icon"><img src="/assets/svg/billing.svg" alt className="fn__svg" /></span>
                        <span className="text">Billing</span>
                      </a>
                    </li>
                    <li>
                    <a href="/auth/personal">
                        <span className="icon"><img src="/assets/svg/my-generation.svg" alt className="fn__svg" /></span>
                        <span className="text">My Generation</span>
                      </a>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* !User (bar item) */}
          </div>
        </div>
        {/* !Header right: navigation bar */}
      </header>
    </>
  )
}

export default Header
