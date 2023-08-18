import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signupToastStatusRed } from '../../../Redux/SignupToastReducer'


const DangerToasts = () => {
    const dispatch = useDispatch()
const [progressWidth, setProgressWidth] = useState(100); // Initial width is 100%
let state = useSelector(state=>state.SignupToastReducer)
useEffect(() => {
  const progressBarInterval = setInterval(() => {
    // Decrease the progress width at a specific interval
    setProgressWidth(prevWidth => prevWidth - 1);

    if (progressWidth <= 0) {
      clearInterval(progressBarInterval); // Clear the interval when progress is complete
      dispatch(signupToastStatusRed(false))
    }
  }, 100); // Adjust the interval based on your desired animation speed

  return () => {
    clearInterval(progressBarInterval); // Clear the interval on component unmount
  };
}, [progressWidth]);

  return (
    <>
<div id="toast-container" className="toast-container toast-top-right"><div className="toast toast-error" aria-live="assertive" style={{display: 'block', opacity: '1'}}><div className="toast-progress" style={{width: `${progressWidth}%`}} /><div className="toast-title">Error</div><div className="toast-message">{state.msg}</div></div></div>


    </>
  )
}

export default DangerToasts
