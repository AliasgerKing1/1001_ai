import React from 'react'

import Footer from '../../shared/Footer'
import Sidebar from '../../shared/Sidebar'
import Header from '../../shared/Header'
import SettingNav from '../../shared/SettingNav'

import { useSelector } from 'react-redux'

const BillingPlanSettings = () => {
  return (
    <>
{/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar  ">
  <div className="layout-container">
    {/* Menu */}
  <Sidebar />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
<Header />
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 mb-4 fw-bold text-a-l">
            <span className="text-muted fw-light fw-600">Account Settings /</span> Billings &amp; Plans
          </h4>
          <div className="row">
            <div className="col-md-12">
<SettingNav />
              <div className="card mb-4">
                {/* Current Plan */}
                <h5 className="card-header fw-bold text-a-l">Current Plan</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-1">
                      <div className="mb-3">
                        <h6 className="mb-1 text-a-l fw-600">Your Current Plan is Basic</h6>
                        <p className='fw-500 text-a-l'>A simple start for everyone</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 text-a-l fw-600">Active until Dec 09, 2021</h6>
                        <p className='fw-500 text-a-l'>We will send you a notification upon Subscription expiration</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-1 text-a-l fw-600"><span className="me-2">$199 Per Month</span> <span className="badge bg-label-primary text-a-l">Popular</span></h6>
                        <p className='fw-500 text-a-l'>Standard plan for small to medium businesses</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-1">
                      <div className="alert alert-warning mb-3 text-a-l" role="alert">
                        <h5 className="alert-heading mb-1 fw-620">We need your attention!</h5>
                        <span className='fw-600'>Your plan requires update</span>
                      </div>
                      <div className="plan-statistics">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-2 fw-600">Days</h6>
                          <h6 className="mb-2 fw-600">24 of 30 Days</h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="mt-1 mb-0 text-a-l fw-510">6 days remaining until your plan requires update</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary me-2 mt-2 fl fw-600" data-bs-toggle="modal" data-bs-target="#pricingModal">Upgrade Plan</button>
                      <button className="btn btn-label-danger cancel-subscription mt-2 fl fw-600">Cancel Subscription</button>
                    </div>
                  </div>
                </div>
                {/* /Current Plan */}
              </div>
              <div className="card mb-4">
                <h5 className="card-header fw-bold text-a-l">Payment Methods</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <form id="creditCardForm" className="row g-3" onsubmit="return false">
                        <div className="col-12 mb-2">
                          <div className="form-check form-check-inline fl">
                            <input name="collapsible-payment" className="form-check-input" type="radio" defaultValue id="collapsible-payment-cc" defaultChecked />
                            <label className="form-check-label fw-600" htmlFor="collapsible-payment-cc">Credit/Debit/ATM Card</label>
                          </div>
                          <div className="form-check form-check-inline fl">
                            <input name="collapsible-payment" className="form-check-input" type="radio" defaultValue id="collapsible-payment-cash" />
                            <label className="form-check-label fw-600" htmlFor="collapsible-payment-cash">Paypal account</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="form-label text-a-l w-100 fw-600" htmlFor="paymentCard">Card Number</label>
                          <div className="input-group input-group-merge">
                            <input id="paymentCard" name="paymentCard" className="form-control credit-card-mask" type="text" placeholder="1356 3215 6548 7898" aria-describedby="paymentCard2" />
                            <span className="input-group-text cursor-pointer p-1" id="paymentCard2"><span className="card-type" /></span>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 text-a-l fw-600">
                          <label className="form-label" htmlFor="paymentName">Name</label>
                          <input type="text" id="paymentName" className="form-control" placeholder="John Doe" />
                        </div>
                        <div className="col-6 col-md-3 text-a-l fw-600">
                          <label className="form-label" htmlFor="paymentExpiryDate">Exp. Date</label>
                          <input type="text" id="paymentExpiryDate" className="form-control expiry-date-mask" placeholder="MM/YY" />
                        </div>
                        <div className="col-6 col-md-3 text-a-l fw-600">
                          <label className="form-label" htmlFor="paymentCvv">CVV Code</label>
                          <div className="input-group input-group-merge">
                            <input type="text" id="paymentCvv" className="form-control cvv-code-mask" maxLength={3} placeholder={654} />
                            <span className="input-group-text cursor-pointer" id="paymentCvv2"><i className="ti ti-help text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value" /></span>
                          </div>
                        </div>
                        <div className="col-12">
                          <label className="switch fl">
                            <input type="checkbox" className="switch-input cursor-pointer" />
                            <span className="switch-toggle-slider">
                              <span className="switch-on" />
                              <span className="switch-off" />
                            </span>
                            <span className="switch-label fw-600">Save card for future billing?</span>
                          </label>
                        </div>
                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-primary me-sm-3 me-1 fl fw-600">Save Changes</button>
                          <button type="button" className="btn btn-label-secondary fl fw-600">Cancel</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                      <h6 className='text-a-l fw-600'>My Cards</h6>
                      <div className="added-cards">
                        <div className="cardMaster bg-lighter p-3 rounded mb-3">
                          <div className="d-flex justify-content-between flex-sm-row flex-column">
                            <div className="card-information me-2">
                              <img className="mb-3 img-fluid" src="/assets/img/icons/payments/mastercard.png" alt="Master Card" />
                              <div className="d-flex align-items-center mb-2 flex-wrap gap-2">
                                <p className="mb-0 me-2 fw-500">Tom McBride</p>
                                <span className="badge bg-label-primary fw-500">Primary</span>
                              </div>
                              <span className="card-number fw-500">∗∗∗∗ ∗∗∗∗ 9856</span>
                            </div>
                            <div className="d-flex flex-column text-start text-lg-end">
                              <div className="d-flex order-sm-0 order-1 mt-sm-0 mt-3">
                                <button className="btn btn-label-primary me-2 fw-600" data-bs-toggle="modal" data-bs-target="#editCCModal">Edit</button>
                                <button className="btn btn-label-secondary fw-600">Delete</button>
                              </div>
                              <small className="mt-sm-auto mt-2 order-sm-1 order-0 fw-500">Card expires at 12/26</small>
                            </div>
                          </div>
                        </div>
                        <div className="cardMaster bg-lighter p-3 rounded">
                          <div className="d-flex justify-content-between flex-sm-row flex-column">
                            <div className="card-information me-2">
                              <img className="mb-3 img-fluid" src="/assets/img/icons/payments/visa.png" alt="Visa Card" />
                              <p className="mb-2 fw-500">Mildred Wagner</p>
                              <span className="card-number fw-500">∗∗∗∗ ∗∗∗∗ 5896</span>
                            </div>
                            <div className="d-flex flex-column text-start text-lg-end">
                              <div className="d-flex order-sm-0 order-1 mt-sm-0 mt-3">
                                <button className="btn btn-label-primary me-2 fw-600" data-bs-toggle="modal" data-bs-target="#editCCModal">Edit</button>
                                <button className="btn btn-label-secondary fw-600">Delete</button>
                              </div>
                              <small className="mt-sm-auto mt-2 order-sm-1 order-0 fw-500">Card expires at 10/27</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Modal */}
                      {/* Add New Credit Card Modal */}
                      <div className="modal fade" id="editCCModal" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-simple modal-add-new-cc">
                          <div className="modal-content p-3 p-md-5">
                            <div className="modal-body">
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                              <div className="text-center mb-4">
                                <h3 className="mb-2">Edit Card</h3>
                                <p className="text-muted fw-600">Edit your saved card details</p>
                              </div>
                              <form id="editCCForm" className="row g-3" onsubmit="return false">
                                <div className="col-12">
                                  <label className="form-label w-100 fw-600 text-a-l" htmlFor="modalEditCard">Card Number</label>
                                  <div className="input-group input-group-merge">
                                    <input id="modalEditCard" name="modalEditCard" className="form-control fw-600 credit-card-mask-edit" type="text" placeholder="4356 3215 6548 7898" defaultValue="4356 3215 6548 7898" aria-describedby="modalEditCard2" />
                                    <span className="input-group-text cursor-pointer p-1" id="modalEditCard2"><span className="card-type-edit" /></span>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6 fw-600 text-a-l">
                                  <label className="form-label" htmlFor="modalEditName">Name</label>
                                  <input type="text" id="modalEditName" className="form-control fw-600" placeholder="John Doe" defaultValue="John Doe" />
                                </div>
                                <div className="col-6 col-md-3 fw-600 text-a-l">
                                  <label className="form-label" htmlFor="modalEditExpiryDate">Exp. Date</label>
                                  <input type="text" id="modalEditExpiryDate" className="form-control fw-600 expiry-date-mask-edit" placeholder="MM/YY" defaultValue="08/28" />
                                </div>
                                <div className="col-6 col-md-3 fw-600 text-a-l">
                                  <label className="form-label" htmlFor="modalEditCvv">CVV Code</label>
                                  <div className="input-group input-group-merge">
                                    <input type="text" id="modalEditCvv" className="form-control fw-600 cvv-code-mask-edit" maxLength={3} placeholder={654} defaultValue="XXX" />
                                    <span className="input-group-text cursor-pointer" id="modalEditCvv2"><i className="ti ti-help text-muted" data-bs-toggle="tooltip" data-bs-placement="top" title="Card Verification Value" /></span>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <label className="switch fl">
                                    <input type="checkbox" className="switch-input" />
                                    <span className="switch-toggle-slider">
                                      <span className="switch-on" />
                                      <span className="switch-off" />
                                    </span>
                                    <span className="switch-label fw-600">Set as primary card</span>
                                  </label>
                                </div>
                                <div className="col-12 text-center">
                                  <button type="submit" className="btn btn-primary me-sm-3 me-1 
                                                         ">Update</button>
                                  <button type="button" className="btn btn-label-danger fw-600" data-bs-dismiss="modal" aria-label="Close">Remove</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/ Add New Credit Card Modal */}
                      {/*/ Modal */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                {/* Billing Address */}
                <h5 className="card-header text-a-l fw-bold">Billing Address</h5>
                <div className="card-body">
                  <form id="formAccountSettings" onsubmit="return false">
                    <div className="row">
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="companyName" className="form-label fw-600">Company Name</label>
                        <input type="text" id="companyName" name="companyName" className="form-control fw-600" placeholder="1001_ai" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="billingEmail" className="form-label fw-600">Billing Email</label>
                        <input className="form-control fw-600" type="text" id="billingEmail" name="billingEmail" placeholder="john.doe@example.com" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="taxId" className="form-label fw-600">Tax ID</label>
                        <input type="text" id="taxId" name="taxId" className="form-control fw-600" placeholder="Enter Tax ID" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="vatNumber" className="form-label fw-600">VAT Number</label>
                        <input className="form-control fw-600" type="text" id="vatNumber" name="vatNumber" placeholder="Enter VAT Number" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="mobileNumber" className="form-label fw-600">Mobile</label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">IND (+91)</span>
                          <input className="form-control fw-600 mobile-number" type="text" id="mobileNumber" name="mobileNumber" placeholder="653 745 0111" />
                        </div>
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="country" className="form-label fw-600">Country</label>
                        <select id="country" className="form-select select2" name="country">
                          <option selected>INDIA</option>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>UK</option>
                          <option>Germany</option>
                          <option>France</option>
                        </select>
                      </div>
                      <div className="mb-3 col-12 text-a-l">
                        <label htmlFor="billingAddress" className="form-label fw-600">Billing Address</label>
                        <input type="text" className="form-control fw-600" id="billingAddress" name="billingAddress" placeholder="Billing Address" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="city" className="form-label fw-600">City</label>
                        <input className="form-control fw-600" type="text" id="city" name="city" placeholder="Indore" />
                      </div>
                      <div className="mb-3 col-sm-6 text-a-l">
                        <label htmlFor="zipCode" className="form-label fw-600">Zip Code</label>
                        <input type="text" className="form-control fw-600 zip-code" id="zipCode" name="zipCode" placeholder={231465} maxLength={6} />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2 fl fw-600">Save changes</button>
                      <button type="reset" className="btn btn-label-secondary fl fw-600">Discard</button>
                    </div>
                  </form>
                </div>
                {/* /Billing Address */}
              </div>
           <div className="card">
  {/* Billing History */}
  <h5 className="card-header text-a-l fw-bold">Billing History</h5>
  <div className="card-datatable table-responsive">
    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"><div className="row ms-2 me-3">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
        <div className="dataTables_length fw-600" id="DataTables_Table_0_length"><label>Show </label></div>
        <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-select w-a"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select>

    <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start mt-md-0 mt-3">
        <div className="dt-buttons btn-group flex-wrap"><button className="btn btn-secondary btn-primary" tabIndex={0} aria-controls="DataTables_Table_0" type="button">
            <span><i className="ti ti-plus me-md-1" />
            <span className="d-md-inline-block d-none fw-600">Create Invoice</span></span></button> </div></div></div>
    <div className="col-12 col-md-6 d-flex justify-content-end flex-column flex-md-row pe-3 gap-md-2">
        <div id="DataTables_Table_0_filter" className="dataTables_filter"><label><input type="search" className="form-control fw-600" placeholder="Search Invoice" aria-controls="DataTables_Table_0" /></label></div>
    <div className="invoice_status mb-3 mb-md-0" /></div></div><table className="invoice-list-table table border-top dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{width: 1045}}>
        
        <thead>
          <tr>
            <th className="control sorting dtr-hidden" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '25px', display: 'none'}} aria-label=": activate to sort column ascending" />
          <th className="sorting sorting_desc fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '60px'}} aria-sort="descending" aria-label="#ID: activate to sort column ascending">#ID</th>
          <th className="sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '55px'}} aria-label=": activate to sort column ascending"><i className="ti ti-trending-up" /></th>
          <th className="sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '102px'}} aria-label="Client: activate to sort column ascending">Client</th>
          <th className="sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '93px'}} aria-label="Total: activate to sort column ascending">Total</th>
          <th className="text-truncate sorting fw-600 text-a-l" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: '166px'}} aria-label="Issued Date: activate to sort column ascending">Issued Date</th>
          <th className="sorting_disabled fw-600 text-a-l" rowSpan={1} colSpan={1} style={{width: '125px'}} aria-label="Balance">Balance</th>
          <th className="cell-fit sorting_disabled fw-600 text-a-l" rowSpan={1} colSpan={1} style={{width: '65px'}} aria-label="Actions">Actions</th></tr>
        </thead><tbody><tr className="odd fw-500"><td colSpan={7} className="dataTables_empty" valign="top">Loading...</td></tr></tbody>
      </table>
      <div className="row mx-2">
        <div className="col-sm-12 col-md-6">
        <div className="dataTables_info text-a-l mt-4 fw-500" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div>
      <div className="col-sm-12 col-md-6">
        <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination fr"><li className="paginate_button page-item previous disabled pt-3 pe-2" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabIndex={0} className="page-link fw-600">Previous</a></li><li className="paginate_button page-item next disabled pt-3" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="next" tabIndex={0} className="page-link fw-600">Next</a></li></ul></div></div></div></div>
  </div>
  {/*/ Billing History */}
</div>

            </div>
          </div>
          {/* Pricing Modal */}
          <div className="modal fade" id="pricingModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-xl modal-simple modal-pricing">
              <div className="modal-content p-2 p-md-5">
                <div className="modal-body">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  {/* Pricing Plans */}
                  <div className="py-0 rounded-top">
                    <h2 className="text-center mb-2 fw-bold">Pricing Plans</h2>
                    <p className="text-center fw-600"> Get started with us - it's perfect for individuals and teams. Choose a subscription plan that meets your needs. </p>
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-3 mb-4">
                      <label className="switch switch-primary ms-3 ms-sm-0 mt-2">
                        <span className="switch-label fw-600">Monthly</span>
                        <input type="checkbox" className="switch-input price-duration-toggler" defaultChecked />
                        <span className="switch-toggle-slider">
                          <span className="switch-on" />
                          <span className="switch-off" />
                        </span>
                        <span className="switch-label fw-600">Annual</span>
                      </label>
                      <div className="mt-n5 ms-n5 d-none d-sm-block">
                        <i className="ti ti-corner-left-down ti-sm text-muted me-1 scaleX-n1-rtl" />
                        <span className="badge badge-sm bg-label-primary fw-600">Save up to 10%</span>
                      </div>
                    </div>
                    <div className="row mx-0 gy-3">
                      {/* Basic */}
                      <div className="col-xl mb-md-0 mb-4">
                        <div className="card border rounded shadow-none">
                          <div className="card-body">
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-basic.png" alt="Basic Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Basic</h3>
                            <p className="text-center fw-600">A simple start for everyone</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary fw-600">$</sup>
                                <h1 className="display-4 mb-0 text-primary fw-600">0</h1>
                                <sub className="h6 pricing-duration mt-auto mb-2 text-muted fw-normal">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 0 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">100 responses a month</li>
                              <li className="mb-2 text-a-l fw-600">Unlimited forms and surveys</li>
                              <li className="mb-2 text-a-l fw-600">Unlimited fields</li>
                              <li className="mb-2 text-a-l fw-600">Basic form creation tools</li>
                              <li className="mb-0 text-a-l fw-600">Up to 2 subdomains</li>
                            </ul>
                            <button type="button" className="btn btn-label-success d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Your Current Plan</button>
                          </div>
                        </div>
                      </div>
                      {/* Pro */}
                      <div className="col-xl mb-md-0 mb-4">
                        <div className="card border-primary border shadow-none">
                          <div className="card-body position-relative">
                            <div className="position-absolute end-0 me-4 top-0 mt-4">
                              <span className="badge bg-label-primary fw-600">Popular</span>
                            </div>
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-standard.png" alt="Standard Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Pro</h3>
                            <p className="text-center fw-600">For small to medium businesses</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 pricing-currency mt-3 mb-0 me-1 text-primary fw-600">$</sup>
                                <h1 className="price-toggle price-yearly display-4 text-primary mb-0 fw-600">7</h1>
                                <h1 className="price-toggle price-monthly display-4 text-primary mb-0 d-none fw-600">9</h1>
                                <sub className="h6 text-muted pricing-duration mt-auto mb-2 fw-normal">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 90 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">Up to 5 users</li>
                              <li className="mb-2 text-a-l fw-600">120+ components</li>
                              <li className="mb-2 text-a-l fw-600">Basic support on Github</li>
                              <li className="mb-2 text-a-l fw-600">Monthly updates</li>
                              <li className="mb-0 text-a-l fw-600">Integrations</li>
                            </ul>
                            <button type="button" className="btn btn-primary d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Upgrade</button>
                          </div>
                        </div>
                      </div>
                      {/* Enterprise */}
                      <div className="col-xl">
                        <div className="card border rounded shadow-none">
                          <div className="card-body">
                            <div className="my-3 pt-2 text-center">
                              <img src="/assets/img/illustrations/page-pricing-enterprise.png" alt="Enterprise Image" height={140} />
                            </div>
                            <h3 className="card-title text-center text-capitalize mb-1 fw-bold">Enterprise</h3>
                            <p className="text-center fw-600">Solution for big organizations</p>
                            <div className="text-center h-px-100 mb-2">
                              <div className="d-flex justify-content-center">
                                <sup className="h6 text-primary pricing-currency mt-3 mb-0 me-1 fw-600">$</sup>
                                <h1 className="price-toggle price-yearly display-4 text-primary mb-0 fw-600">16</h1>
                                <h1 className="price-toggle price-monthly display-4 text-primary mb-0 d-none fw-600">19</h1>
                                <sub className="h6 pricing-duration mt-auto mb-2 fw-normal text-muted">/month</sub>
                              </div>
                              <small className="price-yearly price-yearly-toggle text-muted">$ 190 / year</small>
                            </div>
                            <ul className="list-group ps-3 my-4">
                              <li className="mb-2 text-a-l fw-600">Up to 10 users</li>
                              <li className="mb-2 text-a-l fw-600">150+ components</li>
                              <li className="mb-2 text-a-l fw-600">Basic support on Github</li>
                              <li className="mb-2 text-a-l fw-600">Monthly updates</li>
                              <li className="mb-0 text-a-l fw-600">Speedy build tooling</li>
                            </ul>
                            <button type="button" className="btn btn-label-primary d-grid w-100 mt-3 fw-600" data-bs-dismiss="modal">Upgrade</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/ Pricing Plans */}
                </div>
              </div>
            </div>
          </div>
          {/*/ Pricing Modal */}
        </div>
        {/* / Content */}
        {/* Footer */}
        <Footer />
        {/* / Footer */}
        <div className="content-backdrop fade"></div>
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle"></div>
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target"></div>
</div>
{/* / Layout wrapper */}

    </>
  )
}

export default BillingPlanSettings
