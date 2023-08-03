import React, {useState} from 'react'

const PricingContent = () => {
  let [planType, setPlanType] = useState(0)
  return (
    <>
              <div className="techwave_fn_page">
          {/* Pricing Page */}
          <div className="techwave_fn_pricing_page">
            <div className="techwave_fn_title_holder">
              <div className="container">
                <h1 className="title">Simple Pricing, Unbeatable Value</h1>
                <p className="desc fn__animated_text">Start small and free, upgrade as you go. Take control of everything.</p>
              </div>
            </div>
            {/* Pricing Shortcode */}
            <div className="techwave_fn_pricing">
              <div className="container">
                {/* toggle pricing */}
                <div className="pricing__toggle">
                  <div className="toggle_in">
                    <a href="#tab2" className={planType == 0 ? "active" : ""} onClick={()=>setPlanType(0)}>Monthly</a>
                    <a href="#tab1" className={planType == 1 ? "active" : ""} onClick={()=>setPlanType(1)}>Yearly</a>
                    <span className="bg" />
                  </div>
                </div>
                {/* !toggle pricing */}
                {/* pricing tabs */}
                <div className="pricing__tabs">
                  <div className="pricing__tab active" id="tab1">
                    {/* Mobile Pricing Table (shortcode) */}
                    <div className="fn__mobile_pricing">
                      {/* First Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="pricing__item__header">
                            <h2 className="title">Personal</h2>
                            <h3 className="price"><span>$10</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$15.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">5,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">1,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">4,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">—</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">—</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !First Plan */}
                      {/* Second Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="popular"><span>Most Popular</span></div>
                          <div className="pricing__item__header">
                            <h2 className="title">Premium</h2>
                            <h3 className="price"><span>$15</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">12,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">3,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">8,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !Second Plan */}
                      {/* Third Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="pricing__item__header">
                            <h2 className="title">Enerprice</h2>
                            <h3 className="price"><span>$25</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$35.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">20,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">7,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">15,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">+</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">+</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Enterpice</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !First Plan */}
                    </div>
                    {/* /Mobile Pricing Table (shortcode) */}
                    <div className="pricing__content">
                      {/* table's header */}
                      <div className="pricing__header">
                        <div className="item_row">
                          <div className="item_col" />
                          <div className="item_col">
                            <h2 className="title">Personal</h2>
                            <h3 className="price"><span>$10</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$15.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                            </p>
                          </div>
                          <div className="item_col">
                            <div className="popular"><span>Most Popular</span></div>
                            <h2 className="title">Premium</h2>
                            <h3 className="price"><span>$15</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                            </p>
                          </div>
                          <div className="item_col">
                            <h2 className="title">Enterprice</h2>
                            <h3 className="price"><span>$25</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$35.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                            </p>
                          </div>
                        </div>	
                      </div>
                      {/* !table's header */}
                      {/* table's heading */}
                      <div className="pricing__heading">
                        <div className="item"><span className="title">Main Features</span></div>
                        <div className="item wide" />
                      </div>
                      {/* !table's heading */}
                      {/* table's options */}
                      <div className="pricing__fields">
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Tokens per month</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">5,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">12,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">20,000</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Upscales per month</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">1,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">3,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">7,500</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Background removals</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">4,000</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">8,000</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">15,000</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Pending jobs</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Private generations</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Priority infrastructure</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Relaxed generation</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                      </div>
                      {/* !table's options */}
                      {/* table's heading */}
                      <div className="pricing__heading">
                        <div className="item"><span className="title">Other Features</span></div>
                        <div className="item wide" />
                      </div>
                      {/* !table's heading */}
                      {/* table's options */}
                      <div className="pricing__fields">
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Essential Frenify models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Expanded Frenify models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Community models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Custom Model</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                      </div>
                      {/* !table's options */}
                      {/* table's footer */}
                      <div className="pricing__footer">
                        <div className="item_row">
                          <div className="item_col" />
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                          </div>
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                          </div>
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !table's footer */}
                    </div>
                  </div>
                  <div className="pricing__tab" id="tab2">
                    {/* Mobile Pricing Table (shortcode) */}
                    <div className="fn__mobile_pricing">
                      {/* First Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="pricing__item__header">
                            <h2 className="title">Personal</h2>
                            <h3 className="price"><span>$15</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">5,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">1,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">4,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">—</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">—</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !First Plan */}
                      {/* Second Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="popular"><span>Most Popular</span></div>
                          <div className="pricing__item__header">
                            <h2 className="title">Premium</h2>
                            <h3 className="price"><span>$20</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$25.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">12,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">3,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">8,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">—</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !Second Plan */}
                      {/* Third Plan */}
                      <div className="pricing__item">
                        <div className="pricing__item_holder">
                          <div className="pricing__item__header">
                            <h2 className="title">Enerprice</h2>
                            <h3 className="price"><span>$30</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$40.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                            </p>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Main Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Tokens per month</h4>
                              <p className="desc">20,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Upscales per month</h4>
                              <p className="desc">7,500</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Background removals</h4>
                              <p className="desc">15,000</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Pending jobs</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Private generations</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Priority infrastructure</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Relaxed generation</h4>
                              <p className="desc">+</p>
                            </div>
                          </div>
                          <div className="pricing__item__heading">
                            <h2 className="title">Other Features</h2>
                          </div>
                          <div className="pricing__item_list">
                            <div className="pricing__item_list_item">
                              <h4 className="title">Essential Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Expanded Frenify models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Community models</h4>
                              <p className="desc">+</p>
                            </div>
                            <div className="pricing__item_list_item">
                              <h4 className="title">Custom Model</h4>
                              <p className="desc">+</p>
                            </div>
                          </div>
                          <div className="pricing__item_footer">
                            <a href="#" className="techwave_fn_button"><span>Buy Enterpice</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !First Plan */}
                    </div>
                    {/* /Mobile Pricing Table (shortcode) */}
                    <div className="pricing__content">
                      {/* table's header */}
                      <div className="pricing__header">
                        <div className="item_row">
                          <div className="item_col" />
                          <div className="item_col">
                            <h2 className="title">Personal</h2>
                            <h3 className="price"><span>$15</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$20.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                            </p>
                          </div>
                          <div className="item_col">
                            <div className="popular"><span>Most Popular</span></div>
                            <h2 className="title">Premium</h2>
                            <h3 className="price"><span>$20</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$25.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                            </p>
                          </div>
                          <div className="item_col">
                            <h2 className="title">Enterprice</h2>
                            <h3 className="price"><span>$30</span> / month</h3>
                            <p className="desc">billed yearly<br /><span>$40.00</span> billed monthly</p>
                            <p className="purchase">
                              <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                            </p>
                          </div>
                        </div>	
                      </div>
                      {/* !table's header */}
                      {/* table's heading */}
                      <div className="pricing__heading">
                        <div className="item"><span className="title">Main Features</span></div>
                        <div className="item wide" />
                      </div>
                      {/* !table's heading */}
                      {/* table's options */}
                      <div className="pricing__fields">
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Tokens per month</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">5,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">12,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">20,000</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Upscales per month</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">1,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">3,500</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">7,500</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Background removals</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">4,000</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">8,000</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">15,000</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Pending jobs</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Private generations</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Priority infrastructure</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Relaxed generation</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                      </div>
                      {/* !table's options */}
                      {/* table's heading */}
                      <div className="pricing__heading">
                        <div className="item"><span className="title">Other Features</span></div>
                        <div className="item wide" />
                      </div>
                      {/* !table's heading */}
                      {/* table's options */}
                      <div className="pricing__fields">
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Essential Frenify models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Expanded Frenify models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Community models</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                        <div className="item_row">
                          <div className="item_col">
                            <span className="heading_text">Custom Model</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">—</span>
                          </div>
                          <div className="item_col">
                            <span className="option_text">+</span>
                          </div>
                        </div>
                      </div>
                      {/* !table's options */}
                      {/* table's footer */}
                      <div className="pricing__footer">
                        <div className="item_row">
                          <div className="item_col" />
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Personal</span></a>
                          </div>
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Premium</span></a>
                          </div>
                          <div className="item_col">
                            <a href="#" className="techwave_fn_button"><span>Buy Enterprice</span></a>
                          </div>
                        </div>
                      </div>
                      {/* !table's footer */}
                    </div>
                  </div>
                </div>
                {/* !pricing tabs */}
              </div>
            </div>
            {/* !Pricing Shortcode */}
            <div className="techwave_fn_title_holder">
              <div className="container">
                <h1 className="title">Frequently Asked Questions</h1>
                <p className="desc fn__animated_text">Many support queries and technical questions will already be answered</p>
              </div>
            </div>
            <div className="container medium">
              {/* Accordion Shortcode */}
              <div className="techwave_fn_accordion" data-type="accordion"> {/* data-type values: accordion, toggle */}
                {/* #1 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">How does it work?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#1 accordion item */}
                {/* #2 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">How long does it take to download updates?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#2 accordion item */}
                {/* #3 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">Do I need a designer to use this Admin Theme?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#3 accordion item */}
                {/* #4 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">What do I need to do to start selling?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#4 accordion item */}
                {/* #5 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">How much does Extended license cost?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#5 accordion item */}
                {/* #6 accordion item */}
                <div className="acc__item">
                  <div className="acc__header">
                    <h2 className="acc__title">What platforms are compatible?</h2>
                    <div className="acc__icon" />
                  </div>
                  <div className="acc__content">
                    <p>TECH-AI is an AI-powered content production suite that empowers creators with a powerful, customisable, and user-friendly platform for bringing their ideas to life.</p>
                    <p>With a focus on granular control at every step of content creation, we put creators at the centre of the creative process by offering granular control at every stage of generation, ensuring that AI enhances, rather than replaces, human creative potential.</p>
                    <p>Our custom back-end delivers advancements in model fine tuning, prompt adherence, training and inference speed, and multi-image prompting functionality. We also address common issues around image degradation and have implemented a custom upscaling, with much more on the way!</p>
                  </div>
                </div>
                {/* !#6 accordion item */}
              </div>
              {/* !Accordion Shortcode */}
            </div>
          </div>
          {/* !Notification Single Page */}
        </div>
    </>
  )
}

export default PricingContent
