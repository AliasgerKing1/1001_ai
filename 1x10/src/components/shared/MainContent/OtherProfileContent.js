import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../../../Services/AuthService"
import {SignInUserRed} from "../../../Redux/SignInUserReducer"
const ProfileContent = () => {
    let dispatch = useDispatch()
    let [copied, setCopied] = useState(false)
    let fetchUserFun = async () => {
      let token = localStorage.getItem("token")
      let result = await fetchUser(token);
      dispatch(SignInUserRed(result.data[0]))
  
  }
  useEffect(()=> {
      fetchUserFun();
  }, [])
  
let state = useSelector(state => state.SignInUserReducer)

let copyRef = () => {
  let code = document.getElementById("refCode").innerHTML;
     // Copy the code string to the clipboard
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(()=>
    {
       setCopied(false)
    }, 3000)
}
  return (
    <>
              <div className="techwave_fn_page">
          {/* User Profile Page */}
          <div className="techwave_fn_user_profile_page">
            {/* Page Title */}
            <div className="techwave_fn_pagetitle">
              <h2 className="title">My Account</h2>
            </div>
            {/* !Page Title */}
            <div className="container small">
              <div className="techwave_fn_user_profile">
                <div className="user__profile">
                  <div className="user_avatar">
                    <img src="/assets/img/user/user.jpg" alt />
                  </div>
                  <div className="user_details">
                    <ul>
                      <li>
                        <div className="item">
                          <h4 className="subtitle">Name</h4>
                          <h3 className="title">{state.name}</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4 className="subtitle">Username</h4>
                          <h3 className="title">@{state.username}</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4 className="subtitle">Email Address</h4>
                          <h3 className="title">{state.email}</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href={`/auth/user/setting/${state._id}`} className="user_edit fn__icon_button">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 437.4 458.5" className="fn__svg light_mode" style={{enableBackground: 'new 0 0 437.4 458.5'}} xmlSpace="preserve">
  <g>
    <path d="M218.8,457.5c-10.7,0-21.5,0.8-32.1-0.2c-28.2-2.6-50.2-25.9-50.8-54.3c-0.3-16.4-14.8-21.5-26.3-15.2
		c-26.8,14.7-59.8,5-75.5-21.2c-9.2-15.3-18.1-30.8-26.8-46.4c-14.8-26.7-6.2-59.8,19.4-76.2c13.3-8.5,13.4-21.2,0.1-29.7
		C0.9,197.8-7.6,164.7,7.4,137.8C16,122.4,24.8,107,33.9,91.9c15.8-26.4,48.9-36.1,75.9-21.2c10.9,6,25.6,1.4,26-15.2
		c0.7-29.4,23-52.7,53.1-54.6c20.9-1.3,41.9-1.1,62.8,0.4c26.7,1.8,48.6,25.9,49.9,52.6c0.1,1.3,0.1,2.6,0.2,3.9
		c1,13,12.6,19.5,24.2,13.4c10.9-5.8,22.4-8.4,34.7-6.9c18.2,2.3,32.5,11.1,42.1,26.7c9.6,15.6,18.7,31.5,27.5,47.6
		c14.6,26.6,6,59.3-19.7,75.7c-4.7,3-8.7,6.4-9.6,12.2c-1.1,7.6,2.2,13.1,8.6,17.1c14.6,9,23.6,22,26.7,38.9
		c2.3,12.9,0.7,25.3-5.7,36.8c-9.1,16.3-18.2,32.6-28,48.5c-15.8,25.7-48.6,34.2-75.6,20c-6.5-3.4-12.6-4.1-18.8,0.2
		c-5,3.5-6.3,8.7-6.6,14.5c-1.2,27.3-19.6,49.6-46.5,54.3c-11.9,2.1-24.3,1.3-36.4,1.8C218.8,458.2,218.8,457.8,218.8,457.5z
		 M395.9,294.1c-0.4-8.4-4.1-12.8-9.7-16.3c-36.2-23-36-74.2,0.2-97.3c10.2-6.5,12-14.2,5.9-24.8c-7.6-13.2-15.2-26.4-22.8-39.6
		c-6.4-11.1-13.9-13.4-25.2-7.5c-12.4,6.5-25.5,8.4-39.2,5.3c-25.7-5.9-43.6-27.5-44.7-53.9c-0.5-12-6.4-17.8-18.4-17.8
		c-15.9,0-31.8,0-47.8,0c-10.5,0-16.6,5.9-17.3,16.3c-0.2,2.9-0.2,5.9-0.7,8.7c-7.1,39.5-48.3,59.5-84.1,41
		c-9.9-5.1-18-2.9-23.5,6.7c-8.1,13.9-16.1,27.8-24.1,41.7c-5.5,9.6-3.4,17.7,6,23.7c36.8,23.5,36.9,74.4,0.2,97.8
		c-9.9,6.3-11.7,14.2-5.8,24.5c7.7,13.4,15.4,26.7,23.1,40.1c6.2,10.8,13.6,12.5,24.9,7.6c7.4-3.3,15.6-6.2,23.6-6.6
		c33.2-1.8,58.7,22.3,60.4,55.8c0.6,11.1,6.7,17.1,17.6,17.1c16.1,0,32.2,0,48.2,0c10.8,0,16.9-5.9,17.6-16.6
		c0.3-4.5,0.6-9.1,1.7-13.5c9.1-35.9,49.2-53.5,82.4-36.3c10.8,5.6,18.5,3.5,24.5-7c7.9-13.6,15.8-27.2,23.6-40.9
		C394.3,299.2,395.2,295.8,395.9,294.1z" />
    <path d="M215.6,333.1c-58.3-2.7-103.4-50.7-100.8-107.3c2.6-57.9,50.7-103.1,107-100.6c58.1,2.5,103.5,50.8,100.8,107.3
		C320,290.5,271.8,335.7,215.6,333.1z M156.3,228.8c-0.1,34.4,27.6,62.6,61.9,62.8c34.4,0.2,62.7-27.6,62.9-61.8
		c0.2-34.7-27.6-62.9-62.1-63C184.5,166.7,156.5,194.5,156.3,228.8z" />
  </g>
</svg>

                  </a>
                </div>
                <div className="user__plan">
                  <div className="plan_left">
                    <h4 className="subtitle">Your Plan</h4>
                    <p className="info"><span>Personal Plan</span> - You will have {state.tokens} tokens left now</p>
                  </div>
                  <div className="plan_right">
                    <a href="/auth/pricing" className="token_upgrade techwave_fn_button"><span>Upgrade</span></a>
                  </div>
                </div>
                <div className="user__plan">
                  <div className="plan_left">
                    <h4 className="subtitle">Referal</h4>
                    <p className="info"><span>My Referal Code</span> - <span id='refCode'>{state.refcode}</span></p>
                  </div>
                  <div className="plan_right">
                    <a style={{cursor : "pointer", background : copied == false ? "" : "#AB0CDF", color : copied == false ? "" : "#FFF"}} className="token_upgrade techwave_fn_button" onClick={copyRef}><span>{copied == false ? "Copy" : "Copied"}</span></a>
                  </div>
                </div>
                <div className="user__interests">
                  <h4 className="title">What are your interests?</h4>
                  <div className="fn__options_list">
                    <ul>
                      <li>
                        <a href="#" className="techwave_fn_button small__border enabled">
                          <span>Advertising</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Architecture</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Art</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Education</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Fashion</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Film TV</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Interior</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border enabled">
                          <span>Marketing</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Graphics</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Games</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Stock Images</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="techwave_fn_button small__border disabled">
                          <span>Other</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* !User Profile Page */}
        </div>
    </>
  )
}

export default ProfileContent
