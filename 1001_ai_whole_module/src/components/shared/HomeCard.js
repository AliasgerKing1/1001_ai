import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const HomeCard = (props) => {
let state = useSelector(state => state?.UserReducer)
  return (
    <>
<div className="col-lg-4 col-md-6">
  {/* Card */}
  <div className="card">
    <div className="card-img-overlay" style={{display : props?.locked ? '' : 'none'}}>
      {/* SVG Lock Icon */}
      <img src='/assets/dist/images/overlay/lock.svg' alt='not work' />
    </div>
    <img className="card-img-top img-responsive" src={props?.data?.image} alt="Card image cap" />
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


    </>
  )
}

export default HomeCard
// #A1ABBA
// #2A3547