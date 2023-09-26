import React, {useEffect, useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {fetchUser} from "../../../Services/AuthService"
import {SignInUserRed} from "../../../Redux/SignInUserReducer"
import {generateImage} from "../../../Services/ImageGenerationService"
import { DetailsImageRed } from '../../../Redux/DetailsReducer'

const ImageGenerationContent = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch()
  let state = useSelector(state => state.SignInUserReducer)
  let [mysticism, setMysticism] = useState(false)
  let [highRes, setHighRes] = useState(false)
  let [highContrast, setHighContrast] = useState(false)
  let [promptMagic, setPromptMagic] = useState(true)
  let [photoReality, setPhotoReality] = useState(false)
  let [promptText, setPromptText] = useState("Copy Prompt")
  let [guidance_scale, setGuidance_scale] = useState(7)
  let [dimensions_delimeter, setDimensions_delimeter] = useState(false)
  let [width, setWidth] = useState(512)
  let [height, setHeight] = useState(512)
  let [promptStrength, setPromptStrength] = useState(5)
  let [dimensions, setDimensions] = useState({x : 512, y : 512})
  let [prompt, setPrompt] = useState("")
  let [negPrompt, setNegPrompt] = useState("")
  let [numberOfImg, setNumberOfImg] = useState(4)
let [model, setModel] = useState(5)
let [modelDetails, setModelDetails] = useState({
  title : "IceCold",
  avtar : "/assets/img/models/5.jpg"
})
let fetchUserFun = async () => {
  let token = localStorage.getItem("token")
  let result = await fetchUser(token);
  dispatch(SignInUserRed(result.data[0]))

}
useEffect(()=> {
  fetchUserFun();
}, [])

let switchcaseFun = (modelNum) => {
  setModel(modelNum)
  switch (modelNum) {
    case 0:
      setModelDetails({
        title : "ArtShaper v3",
        avtar : "/assets/img/user/user.jpg"
      })
      break;
    case 1:
      setModelDetails({
        title : "ArtShaper v2",
        avtar : "/assets/img/models/1.jpg"
      })
      break;
    case 2:
      setModelDetails({
        title : "GameVisuals",
        avtar : "/assets/img/models/2.jpg"
      })
      break;
    case 3:
      setModelDetails({
        title : "VintageCar",
        avtar : "/assets/img/models/3.jpg"
      })
      break;
    case 4:
      setModelDetails({
        title : "ArtDeco",
        avtar : "/assets/img/models/4.jpg"
      })
      break;
    case 5:
      setModelDetails({
        title : "IceCold",
        avtar : "/assets/img/models/5.jpg"
      })
      break;
    case 6:
      setModelDetails({
        title : "Water Effect",
        avtar : "/assets/img/models/6.jpg"
      })
      break;
    case 7:
      setModelDetails({
        title : "Stable Diffusion v2",
        avtar : "/assets/img/models/7.jpg"
      })
      break;
    case 8:
      setModelDetails({
        title : "Stable Diffusion v1",
        avtar : "/assets/img/models/8.jpg"
      })
      break;
    case 9:
      setModelDetails({
        title : "Others",
        avtar : "/assets/img/models/9.jpg"
      })
      break;
  
    default:
      break;
  }
}

useEffect(()=>{
  if(dimensions_delimeter === false) {
    setDimensions({x : width, y : height})
  }
}, [dimensions_delimeter,width, height])
function formatDate(timestamp) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(timestamp).toLocaleDateString('en-IN', options);
}


let dimensionsFun = (event) => {
  let e = event.target.value;
  let [x, y] = e.split('_');
  setDimensions({ x: parseInt(x), y: parseInt(y) }); // Parse string values to integers
  setDimensions_delimeter(true);
};

let generateImageFun = () => {
  let date = new Date()
  const formattedDate = formatDate(date);
  let token = localStorage.getItem("token")
  let data = {
    // image : "/assets/img/gallery/8.jpg",
    prompt :  prompt,
    negative_prompt : negPrompt,
    created : formattedDate,
    resolution : `${dimensions.x} x ${dimensions.y}px`,
    sampler : "Tech-AI-Frenify",
    base_model : "Frenify v2.0",
    magic_prompt : promptMagic,
    magic_prompt_strength : promptStrength,
    high_contrast : highContrast,
    model : model,
    photo_reality : photoReality,
    mysticism : mysticism,
  seed : "877743523",
    high_resolution : highRes,
    guidance_scale : guidance_scale,
    likes : [],
    _id : "",
  }
  dispatch(DetailsImageRed(data))
  // generateImage(token, data)
}

let sendPrompt = (event) => {
setPrompt(event.target.value)
}
let sendNegativePrompt = (event) => {
  setNegPrompt(event.target.value)
}

let sendNumberOfImages = (event) => {
  let e = event.target.value;
  if (!isNaN(e)) {
    // Numeric value
    if (e > 12) {
      setNumberOfImg(12);
    } else {
      setNumberOfImg(parseInt(e)); // Convert e to integer and update the state
    }
  }
};

const handleIncrement = () => {
  console.log(numberOfImg)
  if (numberOfImg < 12) {
    sendNumberOfImages(numberOfImg + 1);
  }
};

const handleDecrement = () => {
  if (numberOfImg > 1) {
    sendNumberOfImages(numberOfImg - 1);
  }
};

let copyPrompt = ()  => {
  let promptText = document.getElementById("prompt_id").innerHTML
  setPromptText("Prompt Copied")
  setTimeout(()=> {
    setPromptText("Copy Prompt")
  }, 3000)
  navigator.clipboard.writeText(promptText)
}
  return (
    <>
              <div className="techwave_fn_page">
          {/* Image Generation Page */}
          <div className="techwave_fn_image_generation_page">
            <div className="generation__page">
              {/* Generation Header */}
              <div className="generation_header">
                <div className="header_top">
                  <h1 className="title">Image Generation</h1>
                  <div className="setup">
                    <p className="info">This wil use <span className="count">4</span> tokens</p>
                    <a href="#" className="sidebar__trigger">
                      <img src="/assets/svg/option.svg" alt className="fn__svg" />
                    </a>
                  </div>
                </div>
                <div className="header_bottom">
                  <div className="include_area">
                    <textarea id="fn__include_textarea" rows={1} defaultValue={""} placeholder=' Prompt...' value={prompt} onChange={(e)=> sendPrompt(e)} />
                    <textarea className="fn__hidden_textarea" rows={1} tabIndex={-1} defaultValue={""} />
                  </div>
                  <div className="exclude_area">
                    <textarea id="fn__exclude_textarea" rows={1} defaultValue={""}placeholder='Negative Prompt...' value={negPrompt} onChange={(e)=> sendNegativePrompt(e)} />
                    <textarea className="fn__hidden_textarea" rows={1} tabIndex={-1} defaultValue={""} />
                  </div>
                  <div className="generate_section">
                    <label className="fn__toggle">
                      <span className="t_in">
                        <input type="checkbox" defaultChecked id="negative_prompt" />
                        <span className="t_slider" />
                        <span className="t_content" />
                      </span>
                      Negative Prompt
                    </label>
                    <a id="generate_it" className="techwave_fn_button cursor" onClick={generateImageFun}><span>Generate</span></a>
                  </div>
                </div>
              </div>
              {/* !Generation Header */}
              <div className="generation_history">
                <div className="fn__generation_item">
                  <div className="item_header">
                    <div className="title_holder">
                      <h2 className="prompt_title" id="prompt_id">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                      <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                    </div>
                    <div className="item_options">
                      <div className="fn__icon_options medium_size align_right">
                        <a href="#" className="fn__icon_button">
                          <img src="/assets/svg/info.svg" alt className="fn__svg" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <span className="text">ArtShaper v3</span>
                            </li>
                            <li>
                              <span className="text">512 x 512px</span>
                            </li>
                            <li>
                              <span className="text">March 15,  2023</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="fn__icon_options medium_size align_right">
                        <a className="fn__icon_button cursor">
                          <span className="dots" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <a className='cursor' onClick={copyPrompt}>{promptText}</a>
                            </li>
                            <li>
                              <a href="#">Reuse Prompt</a>
                            </li>
                            <li>
                              <a href="#">Upscale All</a>
                            </li>
                            <li>
                              <a href="#">Download All</a>
                            </li>
                            <li className="high_priorety">
                              <a href="#">Delete All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item_list">
                    <ul className="fn__generation_list">
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/1.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/2.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/3.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/4.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fn__generation_item">
                  <div className="item_header">
                    <div className="title_holder">
                      <h2 className="prompt_title">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                      <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                    </div>
                    <div className="item_options">
                      <div className="fn__icon_options medium_size align_right">
                        <a href="#" className="fn__icon_button">
                          <img src="/assets/svg/info.svg" alt className="fn__svg" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <span className="text">ArtShaper v3</span>
                            </li>
                            <li>
                              <span className="text">512 x 512px</span>
                            </li>
                            <li>
                              <span className="text">March 15,  2023</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="fn__icon_options medium_size align_right">
                        <a href="#" className="fn__icon_button">
                          <span className="dots" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <a href="#">Copy Prompt</a>
                            </li>
                            <li>
                              <a href="#">Reuse Prompt</a>
                            </li>
                            <li>
                              <a href="#">Upscale All</a>
                            </li>
                            <li>
                              <a href="#">Download All</a>
                            </li>
                            <li className="high_priorety">
                              <a href="#">Delete All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item_list">
                    <ul className="fn__generation_list">
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/5.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/6.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/7.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/8.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fn__generation_item">
                  <div className="item_header">
                    <div className="title_holder">
                      <h2 className="prompt_title">Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors</h2>
                      <p className="negative_prompt_title">Negative prompt: Text, watermarks, off centre, blur, low res, out of frame, cut off, ugly</p>
                    </div>
                    <div className="item_options">
                      <div className="fn__icon_options medium_size align_right">
                        <a href="#" className="fn__icon_button">
                          <img src="/assets/svg/info.svg" alt className="fn__svg" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <span className="text">ArtShaper v3</span>
                            </li>
                            <li>
                              <span className="text" >512 x 512px</span>
                            </li>
                            <li>
                              <span className="text">March 15,  2023</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="fn__icon_options medium_size align_right">
                        <a href="#" className="fn__icon_button">
                          <span className="dots" />
                        </a>
                        <div className="fn__icon_popup">
                          <ul>
                            <li>
                              <a href="#">Copy Prompt</a>
                            </li>
                            <li>
                              <a href="#">Reuse Prompt</a>
                            </li>
                            <li>
                              <a href="#">Upscale All</a>
                            </li>
                            <li>
                              <a href="#">Download All</a>
                            </li>
                            <li className="high_priorety">
                              <a href="#">Delete All</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item_list">
                    <ul className="fn__generation_list">
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/1.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/2.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/3.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="fn__gl_item">
                        <div className="fn__gl__item">
                          <div className="abs_item">
                            <img src="/assets/img/gallery/4.jpg" alt />
                            <div className="all_options">
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/download.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Original Image</a>
                                    </li>
                                    <li>
                                      <a href="#">Creative Upscaled Image</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscaled Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <img src="/assets/svg/upscale.svg" alt className="fn__svg" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Creative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">Alternative Upscale</a>
                                    </li>
                                    <li>
                                      <a href="#">HD Upscale</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="fn__icon_options medium_size">
                                <a href="#" className="fn__icon_button">
                                  <span className="dots" />
                                </a>
                                <div className="fn__icon_popup">
                                  <ul>
                                    <li>
                                      <a href="#">Make Variations</a>
                                    </li>
                                    <li className="high_priorety">
                                      <a href="#">Delete Image</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="generation_more">
                  <NavLink to={`/auth/user/profile/${state._id}`} className="techwave_fn_button medium"><span>Previous Generations</span></NavLink>
                </div>
              </div>
            </div>
            <div className="generation__sidebar" style={{overflowY : 'auto', scrollbarWidth: "thin",
scrollbarColor: "#999 #fff"}}>
              <div className="sidebar_model">
                <div className="fn__select_model">
                  <a className="model_open">
                    <img className="user_img" src={modelDetails.avtar} alt />
                    <div className="author">
                      <h4 className="subtitle">Model</h4>
                      <h3 className="title">{modelDetails.title}</h3>
                    </div>
                    <span className="fn__icon_button">
                      <img src="/assets/svg/arrow.svg" alt className="fn__svg" />
                    </span>
                  </a>
                  <div className="all_models">
                    <ul>
                      <li><a className={model == 0 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(0)}>ArtShaper v3</a></li>
                      <li><a className={model == 1 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(1)}>ArtShaper v2</a></li>
                      <li><a className={model == 2 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(2)} >GameVisuals</a></li>
                      <li><a className={model == 3 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(3)} >VintageCar</a></li>
                      <li><a className={model == 4 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(4)} >ArtDeco</a></li>
                      <li><a className={model == 5 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(5)} >IceCold</a></li>
                      <li><a className={model == 6 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(6)} >Water Effect</a></li>
                      <li><a className={model == 7 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(7)} >Stable Diffusion v2</a></li>
                      <li><a className={model == 8 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(8)} >Stable Diffusion v1</a></li>
                      <li><a className={model == 9 ? "selected" : ""} style={{cursor : 'pointer'}} onClick={()=>switchcaseFun(9)} >Other</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar_details">
              <div className="prompt_magic_switcher">
                  <h4 className="title"><label htmlFor="prompt_switcher">Photo reality</label><span className="fn__tooltip" title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="prompt_switcher" onChange={()=>setPhotoReality(!photoReality)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
              <div className="prompt_magic_switcher">
                  <h4 className="title"><label htmlFor="prompt_switcher" style={{marginRight : '5px'}}>Mysticism</label>
                  <img src="/assets/svg/chemical.svg" alt className="fn__svg" />
                  <span className="fn__tooltip" title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="prompt_switcher" onClick={()=>setMysticism(!mysticism)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                <div style={{marginBottom : '20px'}}>
                <div className="contrast_switcher" style={{display : mysticism === false ? "none" : ''}}>
                  <h4 className="title"><label htmlFor="contrast_switcher">High Resolution</label>
                  <span className="fn__tooltip" title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="contrast_switcher" onClick={()=>setHighRes(!highRes)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                <p style={{color : "#7e7a86", fontSize : "13px", display : mysticism === true && highRes == true ? "" : 'none'}} className='text'>1050px x 1050px resolution</p>
                </div>
                <div className="number_of_images" >
                  <h4 className="title">Number of Images</h4>
                  <div className="fn__quantity">
                    <a className="decrease cursor" onClick={handleDecrement} />
                    <input type="number" defaultValue={4} max={12} min={1} value={numberOfImg} onChange={(e)=> sendNumberOfImages(e)} />
                    <a  className="increase cursor" onClick={handleIncrement} />
                  </div>
                </div>
                <div className="img_sizes">
                  <h4 className="title">Image Dimensions</h4>
                  <div className="img_size_select">
                    <select style={{cursor : "pointer"}} onChange={(e)=>dimensionsFun(e)}>
                      <option value="512_512" selected>512 x 512px</option>
                      <option value="768_768">768 x 768px</option>
                      <option value="512_1024">512 x 1024px</option>
                      <option value="768_1024">768 x 1024px</option>
                      <option value="1024_1024">1024 x 1024px</option>
                    </select>
                  </div>
                </div>
                <h4 className="title">Width</h4>
                <div className="fn__range mb-1">
                    <div className="range_in">
                      <input type="range" min={1} max={4096} defaultValue={512}     value={
              dimensions_delimeter
                ? dimensions.x
                : width
            }
            onChange={(e) =>
              setWidth(parseInt(e.target.value))
            } // Parse string value to an integer
          />
                      <div className="slider" />
                    </div>
                    <div className="value">{dimensions.x}</div> {/* Display the correct value */}
                  </div>
                  <h4 className="title">Height</h4>
                <div className="fn__range mb-2">
                    <div className="range_in">
                      <input type="range" min={1} max={4096} defaultValue={512} value={
              dimensions_delimeter
                ? dimensions.y
                : height
            }
            onChange={(e) =>
              setHeight(parseInt(e.target.value))
            } // Parse string value to an integer
          />
                      <div className="slider" />
                    </div>
                    <div className="value">{dimensions.y}</div> {/* Display the correct value */}
                  </div>
                <div className="guidance_scale">
                  <h4 className="title">Guided Scale<span className="fn__tooltip" title="how much ai can think by there own for images."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <div className="fn__range">
                    <div className="range_in">
                      <input type="range" min={1} max={40} defaultValue={7} onChange={(e)=>setGuidance_scale(e.target.value) }/>
                      <div className="slider" />
                    </div>
                    <div className="value">7</div>
                  </div>
                </div>
                <div className="prompt_magic_switcher">
                  <h4 className="title"><label htmlFor="prompt_switcher">Prompt Magic</label><span className="fn__tooltip" title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" defaultChecked id="prompt_switcher" onChange={()=>setPromptMagic(!promptMagic)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                <h4 className="title">Prompt Magic Strength</h4>
                <div className="fn__range">
                    <div className="range_in">
                      <input type="range" min={1} max={10} defaultValue={5} onChange={(e) => setPromptStrength(e.target.value)} // Parse string value to an integer 
                      />
                      <div className="slider" />
                    </div>
                    <div className="value">{promptStrength / 10}</div> {/* Display the correct value */}
                  </div>
                <div className="contrast_switcher">
                  <h4 className="title"><label htmlFor="contrast_switcher">High Contrast</label><span className="fn__tooltip" title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="contrast_switcher" onChange={()=>setHighContrast(!highContrast)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* !Image Generation Page */}
        </div>
    </>
  )
}

export default ImageGenerationContent
