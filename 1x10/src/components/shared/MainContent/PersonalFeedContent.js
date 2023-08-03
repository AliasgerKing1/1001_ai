import React from 'react'
import {useDispatch} from "react-redux"
import {DetailsRed, DetailsIdRed} from "../../../Redux/DetialPageReducer"
const PersonalFeedContent = () => {
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
                <h1 className="title">Personal Feed</h1>
              </div>
            </div>
            {/* Feed */}
            <div className="techwave_fn_feed">
              <div className="fn__tabs">
                <div className="container">
                  <div className="tab_in">
                    <a className="active" href="#">Your Generations</a>
                    <a href="#">Follower's</a>
                    <a href="#">Liked</a>
                  </div>
                </div>
              </div>
              {/* feed filter */}
              <div className="container">
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
                  <div className="filter__right">
                    <div className="filter__select">
                      <label className="fn__checkbox">
                        <input type="checkbox" />Select Items
                        <span className="checkmark" />
                        <img src="/assets/svg/check.svg" alt className="fn__svg" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* !feed filter */}
              {/* feed selection */}
              <div className="fn__selection_box">
                <div className="container">
                  <div className="selection_in">
                    <p className="desc"><span className="count">0</span> item(s) selected</p>
                    <div className="actions">
                      <a href="#" className="filter__delete techwave_fn_button has__icon small__border">
                        <img src="/assets/svg/trash.svg" alt className="fn__svg" />
                        <span>Delete</span>
                      </a>
                      <a href="#" className="filter__download techwave_fn_button has__icon small__border">
                        <img src="/assets/svg/download.svg" alt className="fn__svg" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* !feed selection */}
              <div className="container">
                {/* feed content */}
                <div className="feed__content">
                  <div className="feed__results">
                    <div className="fn__preloader">
                      <div className="icon" />
                      <div className="text">Loading</div>
                    </div>
                    <ul className="fn__gallery_items">
                      {/* #1 gallery item */}
                      <li className="fn__gallery_item">
                        <div className="item" data-id={345}>
                          <div className="img" onClick={()=>imageDetails("1")}>
                            <img src="/assets/img/gallery/1.jpg" alt />
                          </div>
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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
                          <div className="fn__selectable_item">
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
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

export default PersonalFeedContent
