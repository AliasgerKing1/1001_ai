import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {DetailsRed, DetailsIdRed} from "../../../Redux/DetialPageReducer"
const CommunityFeedContent = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let imageDetails = (id) => {
    dispatch(DetailsRed(true))
    dispatch(DetailsIdRed(id))
  }
  return (
    <>
              <div className="techwave_fn_page">
          {/* Community Feed Page */}
          <div className="techwave_fn_community_page">
            <div className="fn__title_holder">
              <div className="container">
                <h1 className="title">Community Feed</h1>
              </div>
            </div>
            {/* Feed */}
            <div className="techwave_fn_feed">
              <div className="container">
                {/* feed filter */}
                <div className="feed__filter">
                  <div className="filter__left">
                    <div className="filter__search">
                      <input type="text" placeholder="Search gallery" />
                      <a href="#" className="techwave_fn_button"><span>Search</span></a>
                    </div>
                    <div className="filter__upscaled">
                      <label className="fn__checkbox">
                        <input type="checkbox" />Upscaled
                        <span className="checkmark" />
                        <img src="/assets/svg/check.svg" alt className="fn__svg" />
                      </label>
                    </div>
                  </div>
                  <div className="filter__sorting">
                    <a href="#" className="filter__trending enabled techwave_fn_button has__icon small__border">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 254.7 383.3"  className="fn__svg light_mode" style={{enableBackground: 'new 0 0 254.7 383.3'}} xmlSpace="preserve">
  <g>
    <path d="M83.7,383.3c-8.1-4.1-9.8-7.8-7.6-16.6c12.1-48.7,24.2-97.4,36.3-146.1c0.3-1.2,0.5-2.4,0.9-4.1c-1.9,0-3.3,0-4.8,0
		c-31.7,0-63.5-0.3-95.2,0.2c-9.4,0.1-16.2-7.2-12.1-17.8C26,135.8,50.3,72.6,74.8,9.4C77.7,2.1,80.7,0,88.7,0c33,0,66,0,99,0
		c10.9,0,15.9,7.5,11.5,17.5c-13.9,31.5-27.8,62.9-41.7,94.4c-0.6,1.4-1.2,2.9-2,4.8c1.9,0,3.2,0,4.6,0c27.4,0,54.7,0,82.1,0
		c6.1,0,10,2.5,11.8,7.3c1.6,4.3,0.2,8-2.1,11.6c-17.4,26.9-34.7,53.9-52,80.8c-34.1,53-68.2,105.9-102.2,158.9
		c-2.2,3.5-4.8,6.3-8.6,7.9C87.2,383.3,85.5,383.3,83.7,383.3z M114.3,306.2c0.3,0.1,0.5,0.3,0.8,0.4
		c35.8-55.6,71.6-111.2,107.7-167.4c-2.1,0-3.4,0-4.7,0c-25.7,0-51.5,0-77.2,0c-11.9,0-16.8-7.4-12-18.3
		c12.8-29.1,25.7-58.1,38.5-87.2c1.6-3.6,3.1-7.2,4.8-11.1c-0.9-0.1-1.3-0.2-1.8-0.2c-24.6,0-49.2,0-73.9-0.1c-2.8,0-3.2,1.5-4,3.4
		C72.1,78.6,51.7,131.4,31.2,184.3c-1.2,3.1-2.4,6.2-3.7,9.7c2,0,3.5,0,5,0c31.1,0,62.2,0,93.3,0c10.1,0,15,6.1,12.6,15.8
		c-4.5,18.4-9.2,36.7-13.7,55.1C121.2,278.6,117.8,292.4,114.3,306.2z" />
  </g>
</svg>

                      <span>Trending</span>
                    </a>
                    <a href="#" className="filter__new disabled techwave_fn_button has__icon small__border">
       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 319.3 319.9" className="fn__svg light_mode" style={{enableBackground: 'new 0 0 319.3 319.9'}} xmlSpace="preserve">
  <g>
    <path d="M260.2,41.1c8.7,0.4,13.7,3.4,16.4,9.3c2.8,6.1,2.2,12.2-2.4,17.1C262.6,79.9,250.7,92,238.7,104
		c-6.2,6.1-16.6,5.5-22.6-0.7c-6-6.1-6.3-15.6-0.2-22c11.7-12.1,23.6-24.1,35.7-35.7C254.2,43,258.4,42,260.2,41.1z" />
    <path d="M42.1,261.7c0-4.5,1.7-8.3,4.8-11.4C58,239.2,69.1,228,80.3,216.9c6.7-6.7,16.5-6.7,22.8-0.3c6.3,6.3,6.3,16.1-0.3,22.8
		c-11,11.2-22.2,22.3-33.3,33.4c-5.1,5.1-11.7,6.2-17.9,3.4C45.7,273.7,42.1,268.1,42.1,261.7z" />
    <path d="M42.7,61c0.5-8.5,3.3-13.7,9.5-16.5c6.1-2.8,12.2-2.2,17,2.5c11.7,11.3,23.1,22.8,34.3,34.5c6.2,6.5,5.6,16.2-0.7,22.2
		c-6.2,5.9-15.5,6.1-21.9-0.1c-11.4-11.2-22.8-22.4-33.8-34C44.7,66.9,43.7,62.9,42.7,61z" />
    <path d="M143.7,39.8c0-7.7-0.1-15.5,0-23.2c0.1-9.8,6.8-16.6,16-16.5c9.1,0.1,15.7,6.8,15.7,16.4c0.1,15.6,0.1,31.2,0,46.9
		c-0.1,9.8-6.8,16.6-16,16.5c-9-0.1-15.6-6.9-15.7-16.4C143.7,55.5,143.7,47.6,143.7,39.8z" />
    <path d="M39.8,175.9c-7.7,0-15.5,0.1-23.2,0c-9.8-0.1-16.6-6.8-16.6-16c0-9.2,6.9-15.8,16.7-15.8c15.5-0.1,30.9-0.1,46.4,0
		c9.8,0.1,16.6,6.7,16.6,16c0,9.2-6.9,15.8-16.7,15.8C55.2,175.9,47.5,175.9,39.8,175.9z" />
    <path d="M279.6,175.8c-8.2,0-16.5,0.1-24.7,0c-7.8-0.2-14.3-6-15.2-13.5c-1-8.2,3.5-15.4,11.2-17.7c1.3-0.4,2.7-0.6,4-0.6
		c16.3,0,32.7-0.1,49,0c7.8,0.1,14.2,6,15.2,13.4c1,8.3-3.7,15.8-11.5,17.7c-2.7,0.7-5.7,0.5-8.5,0.6
		C292.6,175.9,286.1,175.9,279.6,175.8C279.6,175.9,279.6,175.9,279.6,175.8z" />
    <path d="M175.6,280.2c0,7.7,0.1,15.5,0,23.2c-0.1,9.7-6.9,16.6-16.1,16.5c-9-0.1-15.6-6.9-15.7-16.5c-0.1-15.6-0.1-31.2,0-46.9
		c0.1-9.6,6.7-16.4,15.7-16.5c9.2-0.1,15.9,6.7,16.1,16.5c0,0.2,0,0.5,0,0.7C175.6,264.9,175.6,272.5,175.6,280.2z" />
    <path d="M263.2,277.7c-6.1,0-9.9-1.6-13.1-4.7c-11.3-11-22.6-21.9-33.7-33c-6.5-6.5-6.4-16.3-0.3-22.6c6.2-6.3,16-6.5,22.5-0.1
		c11.5,11.3,22.9,22.7,34.1,34.2c4.9,5,5.8,11.2,3,17.7C273,275.4,267.9,277.6,263.2,277.7z" />
  </g>
</svg>

                      <span>New</span>
                    </a>
                  </div>
                </div>
                {/* !feed filter */}
                {/* feed content */}
                <div className="feed__content">
                  <div className="feed__results">
                    {/* <div className="fn__preloader">
                      <div className="icon" />
                      <div className="text">Loading</div>
                    </div> */}
                    <ul className="fn__gallery_items">
                      {/* #1 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={345}>
                          <div className="img" onClick={()=>imageDetails("1")}>
                            <img src="/assets/img/gallery/1.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={3}>
                                <span className="count">343</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#1 gallery item */}
                      {/* #2 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={265}>
                          <div className="img" onClick={()=>imageDetails("2")}>
                            <img src="/assets/img/gallery/2.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={265}>
                                <span className="count">65</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#2 gallery item */}
                      {/* #3 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={456}>
                          <div className="img" onClick={()=>imageDetails("3")}>
                            <img src="/assets/img/gallery/3.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={456}>
                                <span className="count">95</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#3 gallery item */}
                      {/* #4 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={4311}>
                          <div className="img" onClick={()=>imageDetails("4")}>
                            <img src="/assets/img/gallery/4.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={4311}>
                                <span className="count">120</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#4 gallery item */}
                      {/* #5 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={33}>
                          <div className="img" onClick={()=>imageDetails("5")}>
                            <img src="/assets/img/gallery/5.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={33}>
                                <span className="count">322</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#5 gallery item */}
                      {/* #6 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={709}>
                          <div className="img" onClick={()=>imageDetails("6")}>
                            <img src="/assets/img/gallery/6.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={709}>
                                <span className="count">234</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#6 gallery item */}
                      {/* #7 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={20}>
                          <div className="img" onClick={()=>imageDetails("7")}>
                            <img src="/assets/img/gallery/7.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={20}>
                                <span className="count">700</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#7 gallery item */}
                      {/* #8 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={45}>
                          <div className="img" onClick={()=>imageDetails("8")}>
                            <img src="/assets/img/gallery/8.jpg" alt />
                          </div>
                          <div className="item__info">
                            <div className="info__header">
                              <div className="user__info">
                                <img src="/assets/img/user/user.jpg" alt />
                                <h3 className="author_name">LuckyLee</h3>
                              </div>
                              <a href="#" className="fn__like no_border" data-id={45}>
                                <span className="count">90</span>
                                <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
                                <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                              </a>
                            </div>
                            <p className="desc">Terra Fusion: A daring fusion of tectonic forms with neo-abstract swirls, reflecting the chaos and </p>
                          </div>
                        </div>
                      </li>
                      {/* !#8 gallery item */}
                    </ul>
                  </div>
                  <div className="feed__more">
                    <a href="#" className="medium techwave_fn_button"><span>Load More</span></a>
                  </div>
                </div>
                {/* !feed content */}
              </div>
            </div>
            {/* !Feed */}
          </div>
          {/* !Community Feed Page */}
        </div>
    </>
  )
}

export default CommunityFeedContent
