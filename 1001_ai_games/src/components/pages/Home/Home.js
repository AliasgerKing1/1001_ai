/*eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {getPath} from "../../../Redux/PathReducer"
import {getUserRedux} from "../../../Redux/UserReducer"


import Header from "../../shared/Header"
import Footer from '../../shared/Footer'
import { getUser } from '../../../services/UserService'

const Home = () => {
    let dispatch = useDispatch();
    let state = useSelector(state=>state.UserReducer);
    let state2 = useSelector(state2=>state2.SingleUserReducer)
    let [firstLoad, setFirstLoad] = useState(true);
    let getUserFun = async() => {
        let result = await getUser();
        dispatch(getUserRedux(result.data));
    }
    useEffect(()=> {
        let check = 1;
        dispatch(getPath(check))
    }, [])
    useEffect(()=> {
if(firstLoad == true) {
    setFirstLoad(false)
    return
}
        if(state.length == 0) {
            getUserFun();
        }
    }, [firstLoad])
  return (
    <>
  <Header />


    {/* <!-- main-area --> */}
    <main className="main--area" id='top'>

        {/* <!-- slider-area --> */}
        <section className="slider__area slider__bg" data-background="/assets/img/slider/slider_bg.jpg">
            <div className="slider-activee">
                <div className="single-slider">
                    <div className="container custom-container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                                    <div className="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                        <NavLink to="/auth/users" className="tg-btn-1"><span>View Games</span></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6">
                                <div className="slider__img text-center">
                                    <img src="/assets/img/slider/slider_img01.png" data-magnetic alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider__shapes">
                <img src="/assets/img/slider/slider_shape01.png" alt="shape" />
                <img src="/assets/img/slider/slider_shape02.png" alt="shape" />
                <img src="/assets/img/slider/slider_shape03.png" alt="shape" />
                <img src="/assets/img/slider/slider_shape04.png" alt="shape" />
            </div>
            <div className="slider__brand-wrap">
                <div className="container custom-container">
                    <ul className="slider__brand-list list-wrap">
                        <li><a style={{cursor : "pointer"}}><img src="/assets/img/brand/brand_logo01.png" alt="brand" /></a></li>
                        <li><a style={{cursor : "pointer"}}><img src="/assets/img/brand/brand_logo02.png" alt="brand" /></a></li>
                        <li><a style={{cursor : "pointer"}}><img src="/assets/img/brand/brand_logo03.png" alt="brand" /></a></li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- slider-area-end --> */}

        {/* <!-- NFT-item-area --> */}
        <section className="nft-item__area">
            <div className="container custom-container">
                <div className="row justify-content-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div className="nft-item__box">
                            <div className="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img01.jpg" alt="img" /></a>
                            </div>
                            <div className="nft-item__content">
                                <h4 className="title"><a href="shop-details.html">Memory Card</a></h4>
                                <div className="nft-item__avatar">
                                    <div className="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                                    </div>
                                    <div className="avatar-name">
                                        <h5 className="name"><a href="shop-details.html">Card game</a></h5>
                                        <span className="designation">Casual</span>
                                    </div>
                                </div>
                                <div className="nft-item__bid">
                                    <div className="nft-item__price">
                                        <p>Free
                                            {/* <span className="currency">Eth</span> */}
                                            </p>
                                        <NavLink to="/auth/game/memory/card" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div className="nft-item__box">
                            <div className="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img02.jpg" alt="img" /></a>
                            </div>
                            <div className="nft-item__content">
                                <h4 className="title"><a href="shop-details.html">Typing Speed Test</a></h4>
                                <div className="nft-item__avatar">
                                    <div className="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                                    </div>
                                    <div className="avatar-name">
                                        <h5 className="name"><a href="shop-details.html">Typing Test</a></h5>
                                        <span className="designation">Writing</span>
                                    </div>
                                </div>
                                <div className="nft-item__bid">
                                    <div className="nft-item__price">
                                    <p>Free
                                            {/* <span className="currency">Eth</span> */}
                                            </p>
                                        <NavLink to="/auth/game/typing/test" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div className="nft-item__box">
                            <div className="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img03.jpg" alt="img" /></a>
                            </div>
                            <div className="nft-item__content">
                                <h4 className="title"><a href="shop-details.html">Save the Hang Man</a></h4>
                                <div className="nft-item__avatar">
                                    <div className="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                                    </div>
                                    <div className="avatar-name">
                                        <h5 className="name"><a href="shop-details.html">Guess the word</a></h5>
                                        <span className="designation">thinking</span>
                                    </div>
                                </div>
                                <div className="nft-item__bid">
                                    <div className="nft-item__price">
                                    <p>Free
                                            {/* <span className="currency">Eth</span> */}
                                            </p>
                                        <NavLink to="/auth/game/save/man" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div className="nft-item__box">
                            <div className="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img01.jpg" alt="img" /></a>
                            </div>
                            <div className="nft-item__content">
                                <h4 className="title"><a href="shop-details.html">Typing Speed Test</a></h4>
                                <div className="nft-item__avatar">
                                    <div className="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                                    </div>
                                    <div className="avatar-name">
                                        <h5 className="name"><a href="shop-details.html">Typing Test</a></h5>
                                        <span className="designation">Writing</span>
                                    </div>
                                </div>
                                <div className="nft-item__bid">
                                    <div className="nft-item__price">
                                    <p>Free
                                            {/* <span className="currency">Eth</span> */}
                                            </p>
                                        <NavLink to="/auth/game/typing/test" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- NFT-item-area-end --> */}

        {/* <!-- area-background-start --> */}
        <div className="area-background" data-background="/assets/img/bg/area_bg01.jpg">

        {/* <!-- about-area --> */}
        <section className="about__area section-pt-130 section-pb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            <span className="sub-title tg__animate-text">know about us</span>
                            <h3 className="title">top Quality Items</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="about__tab-wrap">
                            <div className="about__buttons">
                                <NavLink to="/auth/shop" className="tg-btn-2">buy Products</NavLink>
                                <NavLink to="/auth/shop"  className="tg-btn-2 -secondary">buy Assets</NavLink>
                            </div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="about01-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout01" type="button" role="tab" aria-controls="about01" aria-selected="true"><span className="img-shape"></span><img src="/assets/img/others/about_tab01.png" alt="img" /></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about02-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout02" type="button" role="tab" aria-controls="about02" aria-selected="false"><span className="img-shape"></span><img src="/assets/img/others/about_tab02.png" alt="img" /></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about03-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout03" type="button" role="tab" aria-controls="about03" aria-selected="false"><span className="img-shape"></span><img src="/assets/img/others/about_tab03.png" alt="img" /></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about04-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout04" type="button" role="tab" aria-controls="about04" aria-selected="false"><span className="img-shape"></span><img src="/assets/img/others/about_tab04.png" alt="img" /></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about05-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout05" type="button" role="tab" aria-controls="about05" aria-selected="false"><span className="img-shape"></span><img src="/assets/img/others/about_tab05.png" alt="img" /></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about06-tab" data-bs-toggle="tab" data-bs-target="/auth/homeabout06" type="button" role="tab" aria-controls="about06" aria-selected="false"><span className="img-shape"></span><img src="/assets/img/others/about_tab06.png" alt="img" /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img01.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">human game</h4>
                                            <span className="rate">rate 50%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="about02" role="tabpanel" aria-labelledby="about02-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img02.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">Axie Infinity</h4>
                                            <span className="rate">rate 60%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="about03" role="tabpanel" aria-labelledby="about03-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img03.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">The Walking Dead</h4>
                                            <span className="rate">rate 75%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="about04" role="tabpanel" aria-labelledby="about04-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img04.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">The Dogami</h4>
                                            <span className="rate">rate 65%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="about05" role="tabpanel" aria-labelledby="about05-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img05.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">The Sandbox</h4>
                                            <span className="rate">rate 75%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="about06" role="tabpanel" aria-labelledby="about06-tab">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-10">
                                <div className="about__img">
                                    <img src="/assets/img/others/about_img06.jpg" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-10">
                                <div className="about__flex-wrap">
                                    <div className="about__content-wrap">
                                        <div className="about__content">
                                            <h4 className="title">Pegaxy Horses</h4>
                                            <span className="rate">rate 85%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div className="about__content-list">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img" /> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img" /> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img" /> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="about__btn-wrap">
                                        <ul className="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- about-area-end --> */}

        {/* <!-- gallery-area --> */}
        <section className="gallery__area fix section-pb-130">
            <div className="gallery__slider">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10 col-md-11">
                            <div className="swiper-container gallery-active swiper-slider-0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                                <div className="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-946px, 0px, 0px)'}} id="swiper-wrapper-3857ed6e100114223" aria-live="polite"><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="4" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="Dota 2 tournament"><img src="/assets/img/gallery/gallery05.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">Dota 2 tournament</h3>
                                                <span className="rate">rate 85%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="PUBG Tournament"><img src="/assets/img/gallery/gallery01.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">pubg tournament</h3>
                                                <span className="rate">rate 50%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery02.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="Assassin's Creed"><img src="/assets/img/gallery/gallery02.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">Assassin's Creed</h3>
                                                <span className="rate">rate 65%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="2" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery03.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="World of Warcraft"><img src="/assets/img/gallery/gallery03.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">World of Warcraft</h3>
                                                <span className="rate">rate 60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="3" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery04.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="The Chant 2"><img src="/assets/img/gallery/gallery04.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">The Chant s.2</h3>
                                                <span className="rate">rate 70%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="4" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="Dota 2 tournament"><img src="/assets/img/gallery/gallery05.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">Dota 2 tournament</h3>
                                                <span className="rate">rate 85%</span>
                                            </div>
                                        </div>
                                    </div>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{width: '945px', marginRight: '1px'}}>
                                        <div className="gallery__item">
                                            <div className="gallery__thumb">
                                                <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" className="popup-image" title="PUBG Tournament"><img src="/assets/img/gallery/gallery01.jpg" alt="img" /></a>
                                            </div>
                                            <div className="gallery__content">
                                                <h3 className="title">pubg tournament</h3>
                                                <span className="rate">rate 50%</span>
                                            </div>
                                        </div>
                                    </div></div>
                                {/* <!-- scrollbar --> */}
                                <div className="swiper-scrollbar"><div className="swiper-scrollbar-drag" style={{transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)', width: '200px'}}></div></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- gallery-area-end --> */}

        </div>
        {/* <!-- area-background-end --> */}

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

        {/* <!-- video-area --> */}
        <section className="video__area video-bg tg-jarallax" data-background="assets/img/bg/video_bg.jpg" style={{backgroundImage: 'none'}} data-jarallax-original-styles={{backgroundImage: 'url("assets/img/bg/video_bg.jpg")'}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8 col-md-11">
        <div className="video__content text-center">
          <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" className="popup-video"><i className="flaticon-play"></i></a>
          <h2 className="title">JOIN THE <span>COMMUNITY</span></h2>
          <p>Join our Discord community and choosec onsteur</p>
          <a href="https://discord.com/" target="_blank" className="video__btn tg-btn-1"><span>join discord</span></a>
        </div>
      </div>
    </div>
  </div>
  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -100, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} id="jarallax-container-0">
    <div style={{backgroundPosition: '50% 50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url("https://themedox.com/demo/mykd/assets/img/bg/video_bg.jpg")', position: 'absolute', top: 0, left: 0, width: 1903, height: 644.2, overflow: 'hidden', pointerEvents: 'none', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', marginTop: 9.9, transform: 'translate3d(0, -52.4733px, 0)'}}></div>
  </div>
</section>

        {/* <!-- video-area-end --> */}

        {/* <!-- roadMap-area --> */}
        <section className="roadMap__area roadMap-bg section-pt-150 section-pb-150" data-background="/assets/img/bg/roadmap_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="roadMap__inner">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="roadMap__content">
                                        <h2 className="title">a look into roadmaps seasons</h2>
                                        <p>With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>
                                        <a href="contact.html" className="tg-btn-1 -btn-yellow"><span>roadmap</span></a>
                                    </div>
                                    <div className="roadMap__img">
                                        <img src="/assets/img/others/roadmap.png" className="tg-parallax" data-scale="1.5" data-orientation="down" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="roadMap__steps-wrap">
                                        <div className="roadMap__steps-item active">
                                            <h3 className="title">season 1</h3>
                                            <ul className="roadMap__list list-wrap">
                                                <li className="active tg__animate-text style2">Battle Practice Mode</li>
                                                <li className="active tg__animate-text style2">Android Mobile</li>
                                                <li className="active tg__animate-text style2">iOS Open Beta</li>
                                                <li className="active tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                        </div>
                                        <div className="roadMap__steps-item">
                                            <h3 className="title">season 2</h3>
                                            <ul className="roadMap__list list-wrap">
                                                <li className="active tg__animate-text style2">Land Creation & Building</li>
                                                <li className="active tg__animate-text style2">Android Mobile</li>
                                                <li className="tg__animate-text style2">iOS Open Beta</li>
                                                <li className="tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                        </div>
                                        <div className="roadMap__steps-item">
                                            <h3 className="title">season 3</h3>
                                            <ul className="roadMap__list list-wrap">
                                                <li className="tg__animate-text style2">Switch to 3D gameplay</li>
                                                <li className="tg__animate-text style2">Android Mobile</li>
                                                <li className="tg__animate-text style2">iOS Open Beta</li>
                                                <li className="tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" className="roadMap__steps-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* // <!-- roadMap-area-end --> */}

        {/* // <!-- trending-nft-area --> */}
        <section className="trendingNft-area section-pt-120 section-pb-90">
            <div className="container">
                <div className="trendingNft__title-wrap">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="trendingNft__title">
                                <h2 className="title">top Trending <img src="/assets/img/icons/fire.png" alt="icon" width="35" /></h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="trendingNft__nav">
                                <button className="slider-button-prev" tabIndex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-1b3baf13db49fd9a"><i className="fas fa-angle-left"></i></button>
                                <button className="slider-button-next" tabIndex="0" aria-label="Next slide" aria-controls="swiper-wrapper-1b3baf13db49fd9a"><i className="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-container trendingNft-active swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
                    <div className="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-1300px, 0px, 0px)'}} id="swiper-wrapper-1b3baf13db49fd9a" aria-live="polite"><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Black Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img06.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Luck Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img07.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="4" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">King Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img08.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar01.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Crypto Max</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img04.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.002 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Golden Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img05.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.004 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="2" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Black Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img06.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" data-swiper-slide-index="3" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Luck Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img07.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="4" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">King Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img08.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar01.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Crypto Max</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="#"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img04.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.002 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Golden Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img05.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.004 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" style={{width: '403.333px', marginRight: '30px'}}>
                            <div className="trendingNft__item">
                                <div className="trendingNft__item-top">
                                    <div className="trendingNft__item-avatar">
                                        <div className="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Black Crypto</h6>
                                            <a href="shop-details.html" className="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div className="trendingNft__item-wish">
                                        <a href="shop-details.html"><i className="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img06.jpg" alt="img" /></a>
                                </div>
                                <div className="trendingNft__item-bottom">
                                    <div className="trendingNft__item-price">
                                        <span className="bid">Last Bid</span>
                                        <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </section>
        {/* <!-- trending-nft-end --> */}

    </main>
    {/* <!-- main-area-end --> */}


<Footer />
</>
  )
}

export default Home