/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"  
import { getSingleUserRedux } from '../../../Redux/SingleUserReducer'

import { getUserById } from '../../../services/UserService'
import Header from "../../shared/Header"
import Footer from "../../shared/Footer"
const Profile = () => {
  let dispatch = useDispatch();
  let params = useParams();
  let state = useSelector(state=>state.SingleUserReducer);
  let [coinValue, setCoinValue] = useState();
  let [adValue, setAdValue] = useState();
  let getProfileFun = () => {
            getUserById(JSON.stringify(params)).then(result => {
            // console.log(result)
            dispatch(getSingleUserRedux(result));
        })
  }
  useEffect(()=> {
    let check = 2;
    dispatch(getPath(check))
        if(state.length === 0) {
            getProfileFun();

    }
    if(state[0]) {
        let value = state[0].coins / 1000
         setCoinValue(value)
        let advalue = state[0].ad_point / 1000
        if(advalue != undefined) {
            setAdValue(0)
        }else {
setAdValue(advalue)
        }
    }
}, [])
  return (
    <>
    <Header />

{/* <!-- main-area --> */}
<main className="main--area">

    {/* <!-- breadcrumb-area --> */}
    <section className="breadcrumb-area" data-background="/assets/img/bg/breadcrumb_bg03.jpg">
        <div className="container">
            <div className="breadcrumb__wrapper">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="breadcrumb__content">
                            <h2 className="title">My Account</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">My Account</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                        <div className="breadcrumb__img">
                            <img src="/assets/img/others/breadcrumb_img03.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb-area-end --> */}

    {/* <!-- tournament-list-area --> */}
    <section className="tournament__list-area section-pb-120 section-pt-120" data-background="/assets/img/bg/tournament_bg.jpg">
        <div className="container">
            <div className="tournament__wrapper">
                <div className="row align-items-end mb-60">
                    <div className="col-lg-8">
                        <div className="section__title text-center text-lg-start title-shape-none">
                            <h3 className="title2">Financial States</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tournament__list-item-wrapper">
                            <div className="tournament__list-item wow fadeInUp" data-wow-delay=".2s">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                    <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                </svg>
                                <div className="tournament__list-content">
                                    <div className="tournament__list-thumb">
                                        <a href="tournament-details.html"><img src="/assets/img/others/tournament_thumb01.png" alt="thumb" /></a>
                                    </div>
                                    <div className="tournament__list-name">
                                        <h5 className="team-name">Status</h5>
                                        <span className="status">{state[0] ? (state[0].status) : null}</span>
                                    </div>
                                    <div className="tournament__list-prize">
                                        <h6 className="title">Coins</h6>
                                        <i className="fas fa-coins"></i>
                                        <span>{state[0] ? (state[0].coins) : null}</span>
                                    </div>
                                    <div className="tournament__list-time">
                                        <h6 className="title">Money value</h6>
                                        <i className="fas fa-money"></i>
                                        <span>{coinValue}</span>

                                    </div>
                                    <div className="tournament__list-live">
                                        <a href="#">More Finance <i className="far fa-play-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-end mb-60">
                    <div className="col-lg-8">
                        <div className="section__title text-center text-lg-start title-shape-none">
                            <h3 className="title2">Gaming States</h3>
                        </div>
                    </div>
                </div>
                            <div className="tournament__list-item wow fadeInUp" data-wow-delay=".4s">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                    <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                </svg>
                                <div className="tournament__list-content">
                                    <div className="tournament__list-thumb">
                                        <a href="tournament-details.html"><img src="/assets/img/others/tournament_thumb02.png" alt="thumb" /></a>
                                    </div>
                                    <div className="tournament__list-name">
                                        <h5 className="team-name">League</h5>
                                        <span className="status">{state[0] ? (state[0].league) : null}</span>
                                    </div>
                                    <div className="tournament__list-prize">
                                        <h6 className="title">Total Prizes</h6>
                                        <i className="fas fa-trophy"></i>
                                        <span>{state[0] ? (state[0].game_point) : null}</span>
                                    </div>
                                    <div className="tournament__list-time">
                                        <h6 className="title">Rank</h6>
                                        <i className="fas fa-rank"></i>
                                        <span>{state[0] ? (state[0].rank == null ? "None" : (state[0].rank)) : null}</span>
                                    </div>
                                    <div className="tournament__list-live">
                                        <a href="#">More Games <i className="far fa-play-circle"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-end mb-60">
                    <div className="col-lg-8">
                        <div className="section__title text-center text-lg-start title-shape-none">
                            <h3 className="title2">Social States</h3>
                        </div>
                    </div>
                </div>
                            <div className="tournament__list-item wow fadeInUp" data-wow-delay=".6s">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                    <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                </svg>
                                <div className="tournament__list-content">
                                    <div className="tournament__list-thumb">
                                        <a href="tournament-details.html"><img src="/assets/img/others/tournament_thumb03.png" alt="thumb" /></a>
                                    </div>
                                    <div className="tournament__list-name">
                                        <h5 className="team-name">followers</h5>
                                        <span className="status">{state[0] ? (state[0].followers.length) : null}</span>
                                    </div>
                                    <div className="tournament__list-prize">
                                        <h6 className="title">followings</h6>
                                        <i className="fas fa-user"></i>
                                        <span>{state[0] ? (state[0].followings.length) : null}</span>
                                    </div>
                                    <div className="tournament__list-time">
                                        <h6 className="title">Likes</h6>
                                        <i className="fas fa-like"></i>
                                        <span>{state[0] ? (state[0].likes) : null}</span>
                                    </div>
                                    <div className="tournament__list-live">
                                        <NavLink to={`/auth/profile/account/${state[0] ? (state[0]._id) : null}`} >More Profile <i className="far fa-play-circle"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-end mb-60">
                    <div className="col-lg-8">
                        <div className="section__title text-center text-lg-start title-shape-none">
                            <h3 className="title2">Ad States</h3>
                        </div>
                    </div>
                </div>
                            <div className="tournament__list-item wow fadeInUp" data-wow-delay=".6s">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1116.562" height="163.37" viewBox="0 0 1116.562 163.37">
                                    <path className="background-path" d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z" transform="translate(-401.563 -1749.875)" />
                                </svg>
                                <div className="tournament__list-content">
                                    <div className="tournament__list-thumb">
                                        <a href="tournament-details.html"><img src="/assets/img/others/tournament_thumb01.png" alt="thumb" /></a>
                                    </div>
                                    <div className="tournament__list-name">
                                        <h5 className="team-name">Ad Level</h5>
                                        <span className="status">{state[0] ? (state[0].ad_level) : null}</span>
                                    </div>
                                    <div className="tournament__list-prize">
                                        <h6 className="title">Coins</h6>
                                        <i className="fas fa-gem"></i>
                                        <span>{state[0] ? (state[0].ad_point) : null}</span>
                                    </div>
                                    <div className="tournament__list-time">
                                    <h6 className="title">Money value</h6>
                                        <i className="fas fa-money"></i>
                                        <span>{adValue}</span>
                                    </div>
                                    <div className="tournament__list-live">
                                        <NavLink to={`/auth/profile/account/${state[0] ? (state[0]._id) : null}`} >More Profile <i className="far fa-play-circle"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- tournament-list-area-end --> */}

</main>
{/* <!-- main-area-end --> */}


    <Footer />
    </>
  )
}

export default Profile