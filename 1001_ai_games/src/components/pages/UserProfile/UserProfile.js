/*eslint-disable */
import React, { useEffect, useState } from 'react'


import { useParams } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'
import { getOtherUserRedux } from '../../../Redux/OtherUserRedux'
import { getSingleUserRedux } from '../../../Redux/SingleUserReducer'
import {getFollowingsRedux} from "../../../Redux/FollowingsReducer"

import { getUserByDirectId, updateUserById, updateOtherUserById, unFriendUser, unFriendOtherUser, fetchCurrentProfileOpen } from '../../../services/UserService'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'


const UserProfile = () => {
    let params = useParams();
    let dispatch = useDispatch();
    let [followings, setFollowings] = useState(false)
    let state = useSelector(state=> state.otherUserReducer)
    let state2 = useSelector(state2=>state2.SingleUserReducer)
    // let state3 = useSelector(state3=>state3.FollowersReducer)
    let state4 = useSelector(state4=>state4.FollowingsReducer)

    let otherUserProfileFun = async () => {
        let result = await getUserByDirectId (params.id);
        dispatch(getOtherUserRedux(result.data))
    }
    
    useEffect(()=> {
        if (state && state._id !== params) {
            otherUserProfileFun();
        }
        if (state && state[0] && state[0].followers[0] && state[0].followers[0].friend &&
            state2 && state2[0] && state2[0].followings[0] && state2[0].followings[0].friend) {
            dispatch(getFollowingsRedux({follow : true, receiver_id : state[0]._id}))
        }

    }, [state, state2]);
let follow = async () => {
let follow_obj = {
    sender_id : state2[0] ? (state2[0]._id) : null,
    receiver_id : state[0] ? (state[0]._id) : null,
    friend : true
}
let result = await updateUserById(state2[0] ? (state2[0]._id) : null, follow_obj)
let result2 = await updateOtherUserById(state[0] ? (state[0]._id) : null, follow_obj)
dispatch(getSingleUserRedux(result.data))
dispatch(getOtherUserRedux(result2.data))
if(result.data.length != 0 && result2.data.length != 0) {
    setFollowings(true)
    dispatch(getFollowingsRedux({follow : true}))
}

}
let unFollow = async () => {
    let obj = {
            sender_id : state2[0] ? (state2[0]._id) : null,
            receiver_id : state[0] ? (state[0]._id) : null,
        friend : false
    }
    let result = await unFriendUser(obj)
    let result2 = await unFriendOtherUser(obj)
    setFollowings(false)
    dispatch(getFollowingsRedux({follow : false}))
dispatch(getSingleUserRedux(result.data))
dispatch(getOtherUserRedux(result2.data))
}
  return (
    <>
<Header />


    {/* <!-- main-area --> */}
    <main className="main--area">
        {/* <!-- breadcrumb-area --> */}
        <section className="breadcrumb-area" data-background="/assets/img/bg/breadcrumb_bg01.jpg">
            <div className="container">
                <div className="breadcrumb__wrapper">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="breadcrumb__content">
                                <h2 className="title">{state[0] ? (state[0].name) : null}</h2>
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Team Details</li>
                                    </ol>
                                </nav> */}
    
                            </div>
                            <div className="team__info-list mt-5">
                                <ul className="list-wrap">
                                <li>
                                        <div className="team__info-item">
                                            <div className="team__info-content">
                                                { followings == true || (state4.follow == true && state4.receiver_id === state[0]._id) ? (<div className='contact__form-wrap'>
                                                    <button className="submit-btn"  onClick={unFollow}>UnFollow</button>
                                                        </div>) : (<div className='contact__form-wrap'>
                                                    <button className="submit-btn"  onClick={follow}>Follow</button>
                                                        </div>)}
                                            </div>
                                        </div>
                                    </li>
                                {/* <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <i className="flaticon-diamond"></i>
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">Game Points</span>
                                                <h5 className="title">{state[0] ? (state[0].game_point) : null}</h5>
                                            </div>
                                        </div>
                                    </li> */}
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">followers</span>
                                                <h5 className="title">{state[0] ? (state[0].followers.length) : null}</h5>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="team__info-item">
                                            <div className="team__info-icon">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="team__info-content">
                                                <span className="sub">followings</span>
                                                <h5 className="title">{state[0] ? (state[0].followings.length) : null}</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
                            <div className="breadcrumb__img">
                                <img src="/assets/img/team/breadcrumb_team.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                                    {/* <a href='#' onClick={follow} className="video__btn tg-btn-1"><span>Follow</span></a> */}
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- team-details-area --> */}
        <section className="team__details-area section-pt-120 section-pb-120" data-background="/assets/img/bg/team_details_bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="team__details-img">
                            <img src="/assets/img/team/team_details.jpg" alt="img" />
                            <svg width="145" height="66" viewBox="0 0 145 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.95">
                                    <path d="M11.94 56.1H0V65.38H11.94V56.1Z" fill="currentcolor"/>
                                    <path d="M30.81 56.1H18.87V65.38H30.81V56.1Z" fill="currentcolor"/>
                                    <path d="M49.37 56.1H37.47V65.38H49.37V56.1Z" fill="currentcolor"/>
                                    <path d="M68.25 56.1H56.34V65.38H68.25V56.1Z" fill="currentcolor"/>
                                    <path d="M87.81 56.1H75.91V65.38H87.81V56.1Z" fill="currentcolor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.12 56.1H107.03V65.3799H95.12V56.1Z" fill="currentcolor"/>
                                    <path d="M125.94 56.1H114V65.38H125.94V56.1Z" fill="currentcolor"/>
                                    <path d="M144.5 56.1H132.56V65.38H144.5V56.1Z" fill="currentcolor"/>
                                    <path d="M11.94 37.1H0V46.38H11.94V37.1Z" fill="currentcolor"/>
                                    <path d="M30.81 37.1H18.87V46.38H30.81V37.1Z" fill="currentcolor"/>
                                    <path d="M49.37 37.1H37.47V46.38H49.37V37.1Z" fill="currentcolor"/>
                                    <path d="M68.25 37.1H56.34V46.38H68.25V37.1Z" fill="currentcolor"/>
                                    <path d="M87.81 37.1H75.91V46.38H87.81V37.1Z" fill="currentcolor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.12 37.1H107.03V46.3799H95.12V37.1Z" fill="currentcolor"/>
                                    <path d="M125.94 37.1H114V46.38H125.94V37.1Z" fill="currentcolor"/>
                                    <path d="M144.5 37.1H132.56V46.38H144.5V37.1Z" fill="currentcolor"/>
                                    <path d="M11.94 18.53H0V27.85H11.94V18.53Z" fill="currentcolor"/>
                                    <path d="M30.81 18.53H18.87V27.85H30.81V18.53Z" fill="currentcolor"/>
                                    <path d="M49.37 18.53H37.47V27.85H49.37V18.53Z" fill="currentcolor"/>
                                    <path d="M68.25 18.53H56.34V27.85H68.25V18.53Z" fill="currentcolor"/>
                                    <path d="M87.81 18.53H75.91V27.85H87.81V18.53Z" fill="currentcolor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.12 18.53H107.03V27.85H95.12V18.53Z" fill="currentcolor"/>
                                    <path d="M125.94 18.53H114V27.85H125.94V18.53Z" fill="currentcolor"/>
                                    <path d="M144.5 18.53H132.56V27.85H144.5V18.53Z" fill="currentcolor"/>
                                    <path d="M11.94 0H0V9.28H11.94V0Z" fill="currentcolor"/>
                                    <path d="M30.81 0H18.87V9.28H30.81V0Z" fill="currentcolor"/>
                                    <path d="M49.37 0H37.47V9.28H49.37V0Z" fill="currentcolor"/>
                                    <path d="M68.25 0H56.34V9.28H68.25V0Z" fill="currentcolor"/>
                                    <path d="M86.81 0H74.91V9.28H86.81V0Z" fill="currentcolor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M94.12 6.10352e-05H106.03V9.27997H94.12V6.10352e-05Z" fill="currentcolor"/>
                                </g>
                            </svg>
                        </div>
                        <div className="team__details-content">
                            <span className="sub-title">our team member</span>
                            <h2 className="title">Online Games for Everyone Find the Best MMOs FOR YOU.</h2>
                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages.</p>
                            <blockquote className="team__details-quote">
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euimods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry.</p>
                                <cite>SHAKH DANIAL</cite>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <div className="team__details-inner-wrap">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="team__details-inner-img">
                                            <img src="/assets/img/team/team_details01.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="team__details-inner-img">
                                            <img src="/assets/img/team/team_details02.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team-details-area-end --> */}

        {/* <!-- video-area --> */}
        <section className="video__area video-bg tg-jarallax" data-background="/assets/img/bg/video_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-11">
                        <div className="video__content text-center">
                            <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video"><i className="flaticon-play"></i></a>
                            <h2 className="title">JOIN THE <span>COMMUNITY</span></h2>
                            <p>Join our Discord community and choosec onsteur</p>
                            <a href="#" className="video__btn tg-btn-1"><span>join discord</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- video-area-end --> */}

        {/* <!-- team-area --> */}
        <section className="team__area team-bg section-pt-130 section-pb-100" data-background="/assets/img/bg/team_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            <span className="sub-title tg__animate-text">our team member</span>
                            <h3 className="title">ACTIVE TEAM MEMBERS</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team01.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">killer master</a></h4>
                                <span className="designation">Blockchain Expert</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team02.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">tanu mark</a></h4>
                                <span className="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team03.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Thompson Scot</a></h4>
                                <span className="designation">Art Director</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team__item">
                            <div className="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team04.png" alt="img" /></a>
                            </div>
                            <div className="team__content">
                                <h4 className="name"><a href="team-details.html">Shakh Danial</a></h4>
                                <span className="designation">Crypto Advisor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team-area-end --> */}

    </main>
    {/* <!-- main-area-end --> */}


   <Footer />
   </>
  )
}

export default UserProfile
