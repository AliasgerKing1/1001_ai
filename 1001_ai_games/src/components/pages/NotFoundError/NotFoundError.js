/*eslint-disable */
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"


import Header from '../../shared/Header'
import ScrollTop from '../../shared/ScrollTop'


const NotFoundError = () => {
    let dispatch = useDispatch();
    useEffect(()=> {
        let check = 1;
        dispatch(getPath(check))
    }, [])
  return (
    <>
<Header />


    {/* <!-- main-area --> */}
    <main className="main--area" id='top'>
        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area breadcrumb__hide-img" data-background="/assets/img/bg/breadcrumb_bg01.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">404 Error</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">404 Error</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-11">
                        <div className="video__content text-center pt-5">
                            <NavLink to="/auth/home" className="video__btn tg-btn-1"><span>Back to Home</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}



    </main>
    {/* <!-- main-area-end --> */}

    </>
  )
}

export default NotFoundError