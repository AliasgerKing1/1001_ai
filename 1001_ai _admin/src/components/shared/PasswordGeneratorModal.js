import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { successRedFun, errorRedFun, successMsgRedFun, errorMsgRedFun } from "../../Redux/copyAlertReducer"
import { getCode } from "../../services/PassowrdService"
import { codeRed } from "../../Redux/PasswordcodeReducer"
const PasswordGeneratorModal = () => {
  let dispatch = useDispatch()
  let state = useSelector(state => state.PasswordCodeReducer)
  let copyCode = () => {
    let codeString = document.getElementById("code").innerHTML;
    // Copy the code string to the clipboard
    navigator.clipboard.writeText(codeString)
      .then(() => {
        dispatch(successRedFun(true))
        dispatch(errorRedFun(false))
        dispatch(successMsgRedFun('Code copied to clipboard Successfully!'))
        setTimeout(() => {
          dispatch(successRedFun(false))
          dispatch(errorRedFun(false))
        }, 3000)
        const dismissButton = document.getElementById("dismiss");
        if (dismissButton) {
          dismissButton.click();
        }
      })
      .catch((error) => {
        dispatch(successRedFun(false))
        dispatch(errorRedFun(true))
        dispatch(errorMsgRedFun('Failed to copy code!'))
        setTimeout(() => {
          dispatch(successRedFun(false))
          dispatch(errorRedFun(false))
        }, 3000)
      });
  }
  let newCode = async () => {
    let admin_token = localStorage.getItem("admin_token")
    let result = await getCode(admin_token)

    dispatch(codeRed(result.data))
  }
  return (
    <>
      {/* SignIn modal content */}
      <div id="password-generator-modal" className="modal fade" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <a href="index.html" className="text-success">
                  <span><img src="/assets/dist/images/logos/favicon.png" className="me-3" width={80} alt />
                  </span>
                </a>
                <button type="button" id="dismiss" className="btn-close me-2" data-bs-dismiss="modal" aria-label="Close" style={{ float: "right" }} />

              </div>
              <h4>Generate New Password</h4>
              <h1 className="text-center mb-4 mt-4"><b id="code">{state}</b></h1>
              <button type="button" onClick={copyCode} class="btn mb-1 waves-effect waves-light btn-light-primary text-primary me-2">
                Copy
              </button>
              <button type="button" onClick={newCode} class="btn mb-1 waves-effect waves-light btn-light-secondary text-secondary">
                Generate New
              </button>

            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </>
  )
}

export default PasswordGeneratorModal
