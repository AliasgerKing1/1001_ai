import React from 'react'

const ErrorOutlinedAlert = ({msg}) => {
  return (
    <>
      <div className="toast show mb-2 align-items-center text-bg-light-danger text-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body">
      {msg}
    </div>
    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
  </div>
</div>

    </>
  )
}

export default ErrorOutlinedAlert
