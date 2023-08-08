import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../../../Services/AuthService"
import {SignInUserRed} from "../../../Redux/SignInUserReducer"
import {DetailsImageRed} from "../../../Redux/DetailsReducer"
import {DetailsRed, DetailsIdRed} from "../../../Redux/DetialPageReducer"
const PersonalFeedContent = () => {
  let dispatch = useDispatch()
  let state = useSelector(state => state.SignInUserReducer)
  let state2 = useSelector(state=>state.DetailsPageReducer)

  let [selectedImages, setSelectedImages] = useState([]); // Maintain an array of selected image states
  let [downloadVar, setDownloadVar] = useState(false);
  let [unselectAll, setUnselectAll] = useState(false);

  let imageDetails = (id) => {
    dispatch(DetailsRed(true))
    dispatch(DetailsIdRed(id))
    let currentImage = state.my_gen_images[id].image
    dispatch(DetailsImageRed(currentImage))
    
  }
  let fetchUserFun = async () => {
    let token = localStorage.getItem("token")
    let result = await fetchUser(token);
    dispatch(SignInUserRed(result.data[0]))
  }
useEffect(()=> {
    fetchUserFun();
}, [])

const handleImageClick = (index) => {
  const updatedSelectedImages = [...selectedImages];
  updatedSelectedImages[index] = !updatedSelectedImages[index];
  setSelectedImages(updatedSelectedImages);
};


const toggleSelectAll = () => {
  if(unselectAll == false ){
    const newSelectedImages = Array(state.my_gen_images.length).fill(true);
    setSelectedImages(newSelectedImages);
  }
  else {
    const newSelectedImages = Array(state.my_gen_images.length).fill(false);
    setSelectedImages(newSelectedImages);
  }
};

const downloadSelectedImages = () => {
  const selectedImageUrls = state.my_gen_images
    .filter((_, index) => selectedImages[index])
    .map(image => image.image);

  // Create anchor elements with download attribute to initiate download
  selectedImageUrls.forEach(imageUrl => {
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.target = '_blank';
    anchor.download = 'image.jpg'; // You can set a proper filename here
    anchor.click();
  });
  setDownloadVar(true)
  setTimeout(() => {
    setDownloadVar(false)
  }, 3000);
};

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
                      <a className="filter__download techwave_fn_button has__icon small__border cursor" onClick={()=> {
                        toggleSelectAll()
                        setUnselectAll(!unselectAll)
                      }
                      }>
                        <img src="/assets/svg/select_all.svg" alt className="fn__svg" />
                        <span>{unselectAll ? "Unselect All" : "Select All"}</span>
                      </a>
                      <a className="filter__delete techwave_fn_button has__icon small__border cursor">
                        <img src="/assets/svg/trash.svg" alt className="fn__svg" />
                        <span>Delete</span>
                      </a>
                      <a className="filter__download techwave_fn_button has__icon small__border cursor" onClick={downloadSelectedImages}>
                        <img src="/assets/svg/download.svg" alt className="fn__svg" />
                        <span>{downloadVar ? "Downloading" : "Download"}</span>
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
                      {state.length !== 0 ? state?.my_gen_images?.map((x, n) => (
                        <li className="fn__gallery_item" key={n}>
                        <div className="item" data-id={45}>
                          <div className="img" onClick={() => imageDetails(n)}>
                            <img src={x.image} alt />
                          </div>
                          <div className={`fn__selectable_item  ${selectedImages[n] ? "selected" : ""}`} onClick={() => handleImageClick(n)}>
                            <span className="icon">
                              <img src="/assets/svg/check.svg" alt className="fn__svg" />
                            </span>
                          </div>
                            <div className="item__info">
                              <div className="info__header">
                                <div className="user__info">
                                  <img src="/assets/img/user/user.jpg" alt />
                                  <h3 className="author_name">{state.name}</h3>
                                </div>
                                <a href="#" className="fn__like no_border" data-id={45}>
                                  <span className="count">{x.likes}</span>
                                  <img src="/assets/svg/like.svg" alt className="fn__svg empty__like light_mode" />
                                  <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
                                </a>
                              </div>
                              <p className="desc">{x.prompt}</p>
                            </div>
                          </div>
                        </li>
                      )) : null}
                      {/* !#1 gallery item */}

                    </ul>
                  </div>
                </div>
                  {/* <div className="feed__more">
                    <a href="#" className="medium techwave_fn_button"><span>Load More</span></a>
                  </div> */}
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
