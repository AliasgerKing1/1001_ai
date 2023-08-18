import React from 'react'


const HomeCard = (props) => {

  return (
    <>
              <div className="col-lg-4 col-md-6">
  {/* Card */}
  <div className="card">
    <img className="card-img-top img-responsive" src={props.data.image} alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">{props.data.name}</h4>
      <p className="card-text">
      {props.data.description}
      </p>
      <a href="javascript:void(0)" className="btn btn-primary">Use Tool</a>
    </div>
  </div>
  {/* Card */}
</div>
    </>
  )
}

export default HomeCard
