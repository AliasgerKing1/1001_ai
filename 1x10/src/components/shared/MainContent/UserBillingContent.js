import React from 'react'

const UserBillingContent = () => {
  return (
    <>
              <div className="techwave_fn_page">
          {/* User Billing Page */}
          <div className="techwave_fn_user_billing_page">
            {/* Page Title */}
            <div className="techwave_fn_pagetitle">
              <h2 className="title">User Billing</h2>
            </div>
            {/* !Page Title */}
            <div className="container small">
              <div className="techwave_fn_user_billing">
                <div className="billing__plan">
                  <div className="plan"><span>Your Plan</span></div>
                  <h2 className="title">Personal Plan — $15.00 Per Month</h2>
                  <p className="desc">You will given 4500 tokens every month</p>
                </div>
                <div className="billing__activation">
                  <div className="activation_status">
                    <div className="status_left">
                      <h2 className="title">Active until Dec 09, 2025</h2>
                      <p className="desc">We will send you a notification upon Subscription expiration</p>
                    </div>
                    <div className="status_right">
                      <span className="info">657 Days Left</span>
                      <span className="progress" data-percentage="66.66%" />
                    </div>
                  </div>
                  <div className="activation_actions">
                    <a href="/auth/pricing" className="techwave_fn_button"><span>Upgrade Plan</span></a>
                    <a href="pricing.html" className="disabled techwave_fn_button"><span>Cancel Subscription</span></a>
                  </div>
                </div>
                <div className="payment__methods">
                  <h2 className="title">Payment Methods</h2>
                  <div className="payment_list">
                    <ul className="payment__list">
                      <li className="payment__list_item ready">
                        <div className="item">
                          <div className="item_header">
                            <h2 className="title">Mastercard **** 4658</h2>
                            <p className="subtitle">Card expires at 03/25</p>
                          </div>
                          <div className="action">
                            <div className="edit_wrapper">
                              <a href="#" className="options"><span className="dots" /></a>
                              <div className="edit__popup">
                                <ul>
                                  <li><a href="#" className="edit">Edit</a></li>
                                  <li><a href="#" className="delete">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="payment__list_item ready">
                        <div className="item">
                          <div className="item_header">
                            <h2 className="title">Visa **** 3623</h2>
                            <p className="subtitle">Card expires at 07/27</p>
                          </div>
                          <div className="action">
                            <div className="edit_wrapper">
                              <a href="#" className="options"><span className="dots" /></a>
                              <div className="edit__popup">
                                <ul>
                                  <li><a href="#" className="edit">Edit</a></li>
                                  <li><a href="#" className="delete">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="primary">
                              <span>Primary</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="payment__list_item new">
                        <div className="item">
                          <a href="#" className="fn__full_link" />
                          <span className="add" />
                          <span className="text">Add new</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* !User Billing Page */}
        </div>
    </>
  )
}

export default UserBillingContent
