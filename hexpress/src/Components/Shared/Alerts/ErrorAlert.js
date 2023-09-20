import React from 'react'

const ErrorAlert = ({msg}) => {
  return (
    <>
      <div className="alert alert-danger d-flex align-items-center" role="alert">
  <span className="alert-icon text-danger me-2">
    <i className="ti ti-ban ti-xs" />
  </span>
  {msg}
</div>
    </>
  )
}

export default ErrorAlert
