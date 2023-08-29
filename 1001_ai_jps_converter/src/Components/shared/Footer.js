import React from 'react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
                <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
              <div className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
                <div>
                  © 
                  , made with ❤️ by <a href="#" className="fw-medium">1001_ai</a>
                </div>
                <div className="d-none d-lg-inline-block">
                  <NavLink to="/signin" className="footer-link me-4" target="_blank">Login</NavLink>
                  <NavLink to="/signup" target="_blank" className="footer-link me-4">Signup</NavLink>
                  <a href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
                  <a href="h#" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
                </div>
              </div>
            </div>
          </footer>
    </>
  )
}

export default Footer
