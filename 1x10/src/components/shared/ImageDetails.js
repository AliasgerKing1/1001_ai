import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {DetailsRed} from "../../Redux/DetialPageReducer"
import {DetailsImageRed} from "../../Redux/DetailsReducer"
import {DetailsIdRed} from "../../Redux/DetialPageReducer"
const ImageDetails = () => {
  let dispatch = useDispatch()

  let state = useSelector(state=>state.DetailsPageReducer)
  let state2 = useSelector(state2=>state2.DetailsReducer)
  let state3 = useSelector(state3=>state3.SignInUserReducer)

  function formatDate(timestamp) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toLocaleDateString('en-IN', options);
  }


  let closeDetails = () => {
    dispatch(DetailsRed(false))
  }

  let nextImage = () => {
    let id = state.id + 1; // Incrementing the ID first
    if (!state3.my_gen_images[id]) {
      id = 0; // If index doesn't exist, start from 0
    }
    
    dispatch(DetailsIdRed(id));
    let currentImage = state3.my_gen_images[id].image;
    dispatch(DetailsImageRed(currentImage));
  }
  let prevImage = () => {
    let id = state.id - 1; // Incrementing the ID first
    if(id < 0) {
      id = state3.my_gen_images.length - 1; // If index becomes less than 0, set to last index
    }
    
    dispatch(DetailsIdRed(id));
    let currentImage = state3.my_gen_images[id].image;
    dispatch(DetailsImageRed(currentImage));
  }

  const downloadImage = () => {
    let file = state2.split("/")
    let last = file[file.length - 1]
    let fileByDot = last.split(".")
    let lastByDot = fileByDot[0]
    const link = document.createElement('a');
    link.href = state2;
    link.target = '_blank'; // Open the link in a new tab/window
    link.download = `${lastByDot}.jpg`; // Specify the desired filename for the downloaded image
    link.click();
  };

  return (
    <>
              <div className={`techwave_fn_img_lightbox ${state.page == true ? "opened" : ""}`}>
    {/* top section (of the image lightbox) */}
    <div className="lightbox__top">
      <div className="lightbox__tl">
        <div className="lightbox__tlbar">
          <div className="lightbox__tlbar_left">
            <div className="item item__share fn__icon_options medium_size">
              <a href="#" className="item__btn fn__icon_button">
                <img src="/assets/svg/share.svg" alt className="fn__svg" />
              </a>
              <div className="fn__icon_popup">
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Pinterest</a></li>
                  <li><a href="#" className="fn__copy" data-copied="Copied!">Copy Link</a></li>
                </ul>
              </div>
            </div>
            <div className="item item__download fn__icon_options medium_size">
              <a className="item__btn fn__icon_button cursor">
                <img src="/assets/svg/download.svg" alt className="fn__svg" />
              </a>
              <div className="fn__icon_popup">
                <ul>
                  <li><a className='cursor'  onClick={downloadImage}>Original Image</a></li>
                  <li><a href="#">Creative Upscaled Image</a></li>
                  <li><a href="#">HD Upscaled Image</a></li>
                </ul>
              </div>
            </div>
            <div className="item item__more fn__icon_options medium_size">
              <a href="#" className="item__btn fn__icon_button">
                <span className="dots" />
              </a>
              <div className="fn__icon_popup">
                <ul>
                  <li><a href="#">Remove Background</a></li>
                  <li><a href="#">Creative Upscale</a></li>
                  <li><a href="#">Alternative Upscale</a></li>
                  <li className="high_priorety"><a href="#" className="fn__report">Report Image</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lightbox__tlbar_center">
            <a className="img_nav nav_prev cursor" onClick={prevImage}>
              <img src="/assets/svg/arrow.svg" alt className="fn__svg" />
            </a>
            <a className="img_nav nav_next cursor" onClick={nextImage}>
              <img src="/assets/svg/arrow.svg" alt className="fn__svg" />
            </a>
          </div>
          <div className="lightbox__tlbar_right">
            <a href="#" className="fn__like" data-id={2}>
              <span className="count">{state3?.my_gen_images?.[state.id]?.likes}</span>
              <img src="/assets/svg/like.svg" alt className="fn__svg empty__like" />
              <img src="/assets/svg/like-full.svg" alt className="fn__svg full__like" />
            </a>
          </div>
        </div>
        <div className="lightbox__tlimg">
          <img src={state2} alt />
        </div>
      </div>
      <div className="lightbox__tr">
      <div className="user__profile">
        <a className="profile_link" href={`/auth/user/profile/${state3._id}`}>
          <img src="/assets/img/user/user.jpg" alt />
          <h2 className="user_name">{state3.name}</h2>
        </a>
        {/* <a className="fn__follow" href="#" data-follow-text="Follow" data-unfollow-text="Unfollow">
          <span className="text">Follow</span>
        </a> */}
        <a href="#" className="fn__closer fn__icon_button" onClick={closeDetails}>
          <img src="/assets/svg/close.svg" alt className="fn__svg" />
        </a>
      </div>
      <div className="item__details">
        <div className="fn__model">
          <div className="model_img">
            <img src={state3?.my_gen_images?.[state.id]?.model_image} alt />
          </div>
          <div className="model_info">
            <h4 className="model_subtitle">Model</h4>
            <h3 className="model_title">{state3?.my_gen_images?.[state.id]?.model}</h3>
          </div>
          <a href="image-generation.html" className="fn__icon_button">
            <img src="/assets/svg/arrow.svg" alt className="fn__svg" />
          </a>
        </div>
        <div className="fn__prompt_details">
          <div className="prompt__header">
            <div className="prompt__text">Prompt Details</div>
            <div className="prompt__options">
              <a href="#" className="fn__icon_button">
                <span className="dots" />
              </a>
              <div className="prompt__popup">
                <ul>
                  <li><a href="#">Remix</a></li>
                  <li><a href="#">Image to Image</a></li>
                  <li><a className="fn__copy cursor" data-copied="Copied!" data-text="Realistic painting, photorealistic masterpiece detailing, professional photography, natural lighting, volumetric lighting maximalist photoillustration: 8k resolution concept art intricately detailed, complex, elegant, expansive" >Copy Prompt</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="prompt__content">
            <p>{state3?.my_gen_images?.[state.id]?.prompt}</p>
          </div>
        </div>
        <div className="techwave_fn_accordion small" data-type="accordion"> {/* data-type values: accordion, toggle */}
          <div className="acc__item">
            <div className="acc__header">
              <h2 className="acc__title">Negative Prompt</h2>
              <div className="acc__icon" />
            </div>
            <div className="acc__content">
            {state3?.my_gen_images?.[state.id]?.negative_prompt}
            </div>
          </div>
        </div>
      </div>
      <div className="fn__details_list">
        <ul>
          <li>
            <div className="sub_title">Created</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.created}</div>
          </li>
          <li>
            <div className="sub_title">Resolution</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.resolution}</div>
          </li>
          <li>
            <div className="sub_title">Sampler</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.sampler}</div>
          </li>
          <li>
            <div className="sub_title">Seed</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.seed}</div>
          </li>
          <li>
            <div className="sub_title">Base Model</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.base_model}</div>
          </li>
          <li>
            <div className="sub_title">High Contrast</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.high_contrast == true ? "On" : "Off"}</div>
          </li>
          <li>
            <div className="sub_title">Magic Prompt</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.magic_prompt == true ? "On" : "Off"}</div>
          </li>
          <li>
            <div className="sub_title">Magic Prompt Strength</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.magic_prompt_strength == null ? "None" : (state3?.my_gen_images?.[state.id]?.magic_prompt_strength)}</div>
          </li>
          <li>
            <div className="sub_title">Alchemy</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.alchemy == true ? "On" : "Off"}</div>
          </li>
          <li>
            <div className="sub_title">High Resolution</div>
            <div className="title">{state3?.my_gen_images?.[state.id]?.high_resolution == true ? "On" : "Off"}</div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    {/* !top section (of the image lightbox) */}
    {/* related section (of the image lightbox) */}
    <div className="lightbox__related">
      <div className="fn__title_holder">
        <h2 className="title">Related Images</h2>
      </div>
      <div className="fn__grid_items">
        <ul>
          <li>
            <a href="#" data-id={1}><img src="/assets/img/related/1.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={2}><img src="/assets/img/related/2.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={3}><img src="/assets/img/related/3.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={4}><img src="/assets/img/related/4.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={5}><img src="/assets/img/related/5.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={6}><img src="/assets/img/related/6.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={7}><img src="/assets/img/related/7.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={8}><img src="/assets/img/related/8.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={9}><img src="/assets/img/related/9.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={10}><img src="/assets/img/related/10.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={11}><img src="/assets/img/related/11.jpg" alt /></a>
          </li>
          <li>
            <a href="#" data-id={12}><img src="/assets/img/related/12.jpg" alt /></a>
          </li>
        </ul>
      </div>
    </div>
    {/* !related section (of the image lightbox) */}
  </div>
    </>
  )
}

export default ImageDetails
