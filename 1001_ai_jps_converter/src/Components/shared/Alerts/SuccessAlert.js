import React from 'react'

const SuccessAlert = ({msg}) => {
  console.log(msg)
  return (
    <>
      <div className="alert alert-success d-flex align-items-center" role="alert">
  <span className="alert-icon text-success me-2">
    <i className="ti ti-check ti-xs" />
  </span>
  {msg}
</div>
    </>
  )
}

export default SuccessAlert

