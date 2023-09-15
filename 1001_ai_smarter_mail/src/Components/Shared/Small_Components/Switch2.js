import React, { useState } from 'react'

const Switch2 = ({text, className, modal_toggle, modal_target, ch, onClick}) => {
    let [isChecked, setIsChecked] = useState(false)
  return (
    <>
                  <div className="col-sm-3 p-4">
            <label className={`switch ${className}`} data-bs-toggle={isChecked === true ? "" : modal_toggle} data-bs-target={isChecked === true ? "" : modal_target}>
  <input type="checkbox" className="switch-input" onClick={()=> {
    onClick()
    setIsChecked(!isChecked)
  }} checked={ch}  />
  {/* checked={isChecked}  */}
  {/* setIsChecked(!isChecked) */}
  <span className="switch-toggle-slider">
    <span className="switch-on"><i className="ti ti-check" /></span>
    <span className="switch-off"><i className="ti ti-x" /></span>
  </span>
  <span className="switch-label">{text}</span>
</label>
        </div>
    </>
  )
}

export default Switch2