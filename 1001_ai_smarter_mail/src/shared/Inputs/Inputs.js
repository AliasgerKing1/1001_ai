import React from 'react'

const Input_Email_Username = ({placeholder, id, name, type,className}) => {
  return (
    <>
      <input type={type} className={className} id={id} name={name} placeholder={placeholder} autofocus />
    </>
  )
}
const Input_Password = ({placeholder, id, name, type,className}) => {
  return (
    <>
      <input type={type} className={className} id={id} name={name} placeholder={placeholder} aria-describedby="password" />
    </>
  )
}

export {Input_Email_Username, Input_Password}
