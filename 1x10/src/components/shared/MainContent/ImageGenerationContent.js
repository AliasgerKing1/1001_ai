import React, {useState} from 'react'

const ImageGenerationContent = () => {
  let [alchemy, setAlchemy] = useState(false)
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
                    <textarea id="fn__include_textarea" rows={1} defaultValue={""} placeholder=' Prompt...' />
                    <textarea className="fn__hidden_textarea" rows={1} tabIndex={-1} defaultValue={""} />
                  </div>
                  <div className="exclude_area">
                    <textarea id="fn__exclude_textarea" rows={1} defaultValue={""}placeholder='Negative Prompt...' />
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
                    <a id="generate_it" href="#" className="techwave_fn_button"><span>Generate</span></a>
                  </div>
                </div>
              </div>
              {/* !Generation Header */}
              <div className="generation_history">
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
                  <a href="pricing.html" className="techwave_fn_button medium"><span>Previous Generations</span></a>
                </div>
              </div>
            </div>
            <div className="generation__sidebar" style={{overflowY : 'auto'}}>
              <div className="sidebar_model">
                <div className="fn__select_model">
                  <a className="model_open">
                    <img className="user_img" src="/assets/img/user/user.jpg" alt />
                    <div className="author">
                      <h4 className="subtitle">Model</h4>
                      <h3 className="title">ArtShaper v3</h3>
                    </div>
                    <span className="fn__icon_button">
                      <img src="/assets/svg/arrow.svg" alt className="fn__svg" />
                    </span>
                  </a>
                  <div className="all_models">
                    <ul>
                      <li><a className="selected" href="#">ArtShaper v3</a></li>
                      <li><a href="#">ArtShaper v2</a></li>
                      <li><a href="#">GameVisuals</a></li>
                      <li><a href="#">VintageCar</a></li>
                      <li><a href="#">ArtDeco</a></li>
                      <li><a href="#">IceCold</a></li>
                      <li><a href="#">Water Effect</a></li>
                      <li><a href="#">Stable Diffusion v2</a></li>
                      <li><a href="#">Stable Diffusion v1</a></li>
                      <li><a href="#">Other</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar_details">
              <div className="prompt_magic_switcher">
                  <h4 className="title"><label htmlFor="prompt_switcher" style={{marginRight : '5px'}}>Alchemy</label>
                  <img src="/assets/svg/chemical.svg" alt className="fn__svg" />
                  <span className="fn__tooltip" title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="prompt_switcher" onClick={()=>setAlchemy(!alchemy)} />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                <div style={{marginBottom : '20px'}}>
                <div className="contrast_switcher" style={{display : alchemy === false ? "none" : 'block'}}>
                  <h4 className="title"><label htmlFor="contrast_switcher">High Resolution</label>
                  <span className="fn__tooltip" title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="contrast_switcher" />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                </div>
                <div className="number_of_images" >
                  <h4 className="title">Number of Images</h4>
                  <div className="fn__quantity">
                    <a href="#" className="decrease" />
                    <input type="number" defaultValue={4} max={10} min={1} />
                    <a href="#" className="increase" />
                  </div>
                </div>
                <div className="img_sizes">
                  <h4 className="title">Image Dimensions</h4>
                  <div className="img_size_select">
                    <select>
                      <option value="512_512" selected>512 x 512px</option>
                      <option value="768_768">768 x 768px</option>
                      <option value="512_1024">512 x 1024px</option>
                      <option value="768_1024">768 x 1024px</option>
                      <option value="1024_1024">1024 x 1024px</option>
                    </select>
                  </div>
                </div>
                <div className="guidance_scale">
                  <h4 className="title">Guided Scale<span className="fn__tooltip" title="how much ai can think by there own for images."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <div className="fn__range">
                    <div className="range_in">
                      <input type="range" min={1} max={40} defaultValue={7} />
                      <div className="slider" />
                    </div>
                    <div className="value">7</div>
                  </div>
                </div>
                <div className="prompt_magic_switcher">
                  <h4 className="title"><label htmlFor="prompt_switcher">Prompt Magic</label><span className="fn__tooltip" title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" defaultChecked id="prompt_switcher" />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                  </label>
                </div>
                <div className="contrast_switcher">
                  <h4 className="title"><label htmlFor="contrast_switcher">High Contrast</label><span className="fn__tooltip" title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."><img src="/assets/svg/question.svg" alt className="fn__svg" /></span></h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input type="checkbox" id="contrast_switcher" />
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
