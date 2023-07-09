import React, {useState} from 'react'
import SuccessOutlinedAlert from './SuccessOutlinedAlert';
import ErrorOutlinedAlert from "../shared/ErrorOutlinedAlert"
const PasswordGeneratorModal = () => {
  let [clipboardSuccess, setClipBoardSuccess] = useState(false)
  let [clipBoardError, setClipBoardError] = useState(false)
  let [clipboardSuccessMsg, setClipBoardSuccessMsg] = useState(false)
  let [clipBoardErrorMsg, setClipBoardErrorMsg] = useState(false)
  let copyCode = () => {
    let codeString = document.getElementById("code").innerHTML;
 // Copy the code string to the clipboard
 navigator.clipboard.writeText(codeString)
 .then(() => {
  setClipBoardSuccess(true)
  setClipBoardError(false)
   setClipBoardSuccessMsg('Code copied to clipboard Successfully!');
 })
 .catch((error) => {
  setClipBoardSuccess(false)
  setClipBoardError(true)
   setClipBoardErrorMsg('Failed to copy code!');
 });
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
        </div>
        <h4>Generate New Password</h4>
        <h2 className="text-center mb-4 mt-4" id="code">H F D 4 F 3 E 5 7 9</h2>
        <button type="button" onClick={copyCode} class="btn mb-1 waves-effect waves-light btn-light-primary text-primary me-2">
                      Copy
                    </button>
                    <button type="button" class="btn mb-1 waves-effect waves-light btn-light-secondary text-secondary">
                      Generate New
                    </button>

      </div>
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>
{/* /.modal */}
{clipboardSuccess == true ? (<SuccessOutlinedAlert msg={clipboardSuccessMsg} />) : null}
{clipBoardError == true ? (<ErrorOutlinedAlert msg={clipBoardErrorMsg} />) : null}

    </>
  )
}

export default PasswordGeneratorModal
