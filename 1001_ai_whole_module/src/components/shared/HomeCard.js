import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const HomeCard = (props) => {
let state = useSelector(state => state?.UserReducer)
let [showModal, setShowModal] = useState(false)
  return (
    <>
<div className="col-lg-4 col-md-6">
  {/* Card */}
  <div className="card">
    <div className="card-img-overlay" onClick={()=>setShowModal(true)} style={{display : props?.locked ? '' : 'none'}}>
      {/* SVG Lock Icon */}
      <img src='/assets/dist/images/overlay/lock.svg' alt='not work' />
    </div>
    <img className="card-img-top img-responsive" src={props?.data?.image} alt={props?.data?.name} />
    <div className="card-body">
      <h4 className="card-title">{props?.data?.name}</h4>
      <p className="card-text">
        {props?.data?.description}
      </p>
      <NavLink to={props?.data?.redirect_to} className="btn btn-primary">Use Tool</NavLink>
    </div>
  </div>
  {/* Card */}
</div>

<div className={`modal fade ${showModal ? "show" : ''}`} id="al-info-alert" tabIndex={-1} aria-labelledby="vertical-center-modal" style={{display: showModal ? "block" : 'none'}} aria-modal=
{showModal ? "false" : 'true'} role={showModal ? 'dialog' : ''}>
  <div className="modal-dialog modal-sm" style={{
            transition: 'transform 0.3s ease-out',
            transform: showModal ? 'translate(0,0)' : 'translate(0,-50px)',
          }}>
    <div className="modal-content modal-filled bg-light-info">
      <div className="modal-body p-4">
        <div className="text-center text-info">
          <i className="ti ti-info-circle fs-7" />
          <h4 className="mt-2">Annoucment!</h4>
          <p className="mt-3">
          You cannot access this feature as it is part of our premium offering. Please refer to the feature unlock list in the price table for more information. Thank you.
          </p>
          <button type="button" className="btn btn-light my-2" onClick={()=>setShowModal(false)}>
            Okay
          </button>
        </div>
      </div>
    </div>
    {/* /.modal-content */}
  </div>
</div>

    </>
  )
}

export default HomeCard
// #A1ABBA
// #2A3547