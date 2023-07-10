import React from 'react'
import { useDispatch } from 'react-redux'
import { successRedFun } from '../../Redux/copyAlertReducer'

const ErrorOutlinedAlert = ({msg}) => {
  let dispatch = useDispatch()
  let changeAlert = () => {
    dispatch(successRedFun(false))
  }
  return (
    <>
      <div className="toast show mb-2 align-items-center text-bg-light-danger text-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body">
      {msg}
    </div>
    <button type="button" onClick={changeAlert} className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
  </div>
</div>

    </>
  )
}

export default ErrorOutlinedAlert
