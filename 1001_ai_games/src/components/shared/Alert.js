/*eslint-disable */
import React from 'react'

const AlertDanger = (props) => {
  return (
    <>
<div className="alert alert-danger mt-5" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertSuccess = (props) => {
  return (
    <>
<div className="alert alert-success mt-5" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertInfo = (props) => {
  return (
    <>
<div className="alert alert-info mt-5" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}
const AlertWarning = (props) => {
  return (
    <>
<div className="alert alert-warning mt-5" role="alert">
<strong>
{props.msg}
</strong>
</div>
    </>
  )
}


export {AlertDanger, AlertInfo, AlertSuccess, AlertWarning}
