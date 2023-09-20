/* eslint-disable */
import React, { useState } from 'react'

const Switch = ({text, className, modal_toggle, modal_target, ch, onClick}) => {
  return (
    <>
                  <div className="col-sm-3 p-4">
            <label className={`switch ${className}`}>
  <input type="checkbox" className="switch-input" onClick={onClick} checked={ch}  />
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

export default Switch