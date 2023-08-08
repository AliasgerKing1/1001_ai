import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../../../Services/AuthService"
import {SignInUserRed} from "../../../Redux/SignInUserReducer"
const SettingContent = () => {
  let dispatch = useDispatch()
  let [approvedCheckBox, setApprovedCheckBox ] = useState(false)
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
              <div className="techwave_fn_page">
          {/* User Settings Page */}
          <div className="techwave_fn_user_settings_page">
            {/* Page Title */}
            <div className="techwave_fn_pagetitle">
              <h2 className="title">Settings</h2>
            </div>
            {/* !Page Title */}
            <div className="container small">
              <div className="techwave_fn_user_settings">
                <form>
                  <div className="user__settings">
                    <div className="settings_left">
                      {/* Upload Shortcode */}
                      <label className="fn__upload">
                        <span className="upload_content">
                          <img src="/assets/svg/upload.svg" alt className="fn__svg" />
                          <span className="title">Drag &amp; Drop a Image</span>
                          <span className="fn__lined_text">
                            <span className="line" />
                            <span className="text">Or</span>
                            <span className="line" />
                          </span>
                          <span className="title">Browse</span>
                          <span className="desc">Supports JPG, JPEG, and PNG</span>
                        </span>
                        <span className="upload_preview">
                          <a href="#" className="fn__closer fn__icon_button">
                            <img src="/assets/svg/close.svg" alt className="fn__svg" />
                          </a>
                          <img src="#" alt className="preview_img" />
                        </span>
                        <input type="file" accept="image/*" />
                      </label>
                      {/* !Upload Shortcode */}
                    </div>
                    <div className="settings_right">
                      <div className="item">
                        <label className="input_label" htmlFor="name">Name</label>
                        <div className="input_item">
                          <input className="input" type="text" id="name" placeholder='Name' defaultValue={state.name} />
                        </div>
                      </div>
                      <div className="item">
                        <label className="input_label" htmlFor="username">Username</label>
                        <div className="input_item">
                          <span className="email">@</span>
                          <input className="input" type="text" id="username" placeholder='Username' defaultValue={state.username} />
                        </div>
                      </div>
                      <div className="item">
                        <label className="input_label" htmlFor="email">Email Address</label>
                        <div className="input_item">
                          <input className="input" type="text" placeholder='Email' id="email" defaultValue={state.email} />
                        </div>
                      </div>
                      <div className="item">
                        <label className="input_label" htmlFor="password">Password</label>
                        <div className="input_item">
                          <input className="input" type="password" id="password" defaultValue="" placeholder='Password' />
                        </div>
                      </div>
                      <div className="item">
                        <label className="fn__checkbox">
                          <input type="checkbox" onClick={()=>setApprovedCheckBox(!approvedCheckBox)} />I approve all changes
                          <span className="checkmark" />
                          <img src="/assets/svg/check.svg" alt className="fn__svg" />
                        </label>
                      </div>
                      <div className="item">
                        <label className="fn__submit">
                          <input type="submit" value="Save Changes" style={{opacity : approvedCheckBox ? '100%' : '50%', pointerEvents : approvedCheckBox ? 'all' : 'none'}} />
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* !User Settings Page */}
        </div>
    </>
  )
}

export default SettingContent
