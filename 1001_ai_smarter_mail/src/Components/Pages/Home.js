import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import Sidebar from '../Shared/Sidebar'
const Home = () => {
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
    {/* Hour chart  */}
    <div className="card bg-transparent shadow-none my-4 border-0">
      <div className="card-body row p-0 pb-3">
        <div className="col-12 col-md-8 card-separator">
          <h3>Welcome back, Felecia 👋🏻 </h3>
          <div className="col-12 col-lg-7">
            <p>Your progress this week is Awesome. let's keep it up and get a lot of points reward !</p>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-3 me-5">
            <div className="d-flex align-items-center gap-3 me-4 me-sm-0">
              <span className="bg-label-primary p-2 rounded">
                <i className="ti ti-device-laptop ti-xl" />
              </span>
              <div className="content-right">
                <p className="mb-0">Hours Spent</p>
                <h4 className="text-primary mb-0">34h</h4>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="bg-label-info p-2 rounded">
                <i className="ti ti-bulb ti-xl" />
              </span>
              <div className="content-right">
                <p className="mb-0">Test Results</p>
                <h4 className="text-info mb-0">82%</h4>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="bg-label-warning p-2 rounded">
                <i className="ti ti-discount-check ti-xl" />
              </span>
              <div className="content-right">
                <p className="mb-0">Course Completed </p>
                <h4 className="text-warning mb-0">14</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 ps-md-3 ps-lg-4 pt-3 pt-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div>
                <h5 className="mb-2">Time Spendings</h5>
                <p className="mb-5">Weekly report</p>
              </div>
              <div className="time-spending-chart">
                <h3 className="mb-2">231<span className="text-muted">h</span> 14<span className="text-muted">m</span> </h3>
                <span className="badge bg-label-success">+18.4%</span>
              </div>
            </div>
            <div id="leadsReportChart" />
          </div>
        </div>
      </div>
    </div>
    {/* Hour chart End  */}
    {/* Topic and Instructors */}
    <div className="row mb-4 g-4">
      <div className="col-12 col-xl-8">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">Topic you are interested in</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="topic" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ti ti-dots-vertical" />
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topic">
                <a className="dropdown-item" href="javascript:void(0);">Highest Views</a>
                <a className="dropdown-item" href="javascript:void(0);">See All</a>
              </div>
            </div>
          </div>
          <div className="card-body row g-3">
            <div className="col-md-6">
              <div id="horizontalBarChart" />
            </div>
            <div className="col-md-6 d-flex justify-content-around align-items-center">
              <div>
                <div className="d-flex align-items-baseline">
                  <span className="text-primary me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">UI Design</p>
                    <h5>35%</h5>
                  </div>
                </div>
                <div className="d-flex align-items-baseline my-3">
                  <span className="text-success me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">Music</p>
                    <h5>14%</h5>
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <span className="text-danger me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">React</p>
                    <h5>10%</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-baseline">
                  <span className="text-info me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">UX Design</p>
                    <h5>20%</h5>
                  </div>
                </div>
                <div className="d-flex align-items-baseline my-3">
                  <span className="text-secondary me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">Animation</p>
                    <h5>12%</h5>
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <span className="text-warning me-2"><i className="ti ti-circle-filled fs-6" /></span>
                  <div>
                    <p className="mb-2">SEO</p>
                    <h5>9%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 col-md-6">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <div className="card-title mb-0">
              <h5 className="m-0 me-2">Popular Instructors</h5>
            </div>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="popularInstructors" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ti ti-dots-vertical" />
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="popularInstructors">
                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Share</a>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-borderless border-top">
              <thead className="border-bottom">
                <tr>
                  <th>Instructors</th>
                  <th className="text-end">courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-2">
                    <div className="d-flex justify-content-start align-items-center mt-lg-4">
                      <div className="avatar me-3 avatar-sm">
                        <img src="/assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-0">Maven Analytics</h6>
                        <small className="text-truncate text-muted">Business Intelligence</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-end pt-2">
                    <div className="user-progress mt-lg-4">
                      <p className="mb-0 fw-medium">33</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="avatar me-3 avatar-sm">
                        <img src="/assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-0">Zsazsa McCleverty</h6>
                        <small className="text-truncate text-muted">Digital Marketing</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="user-progress">
                      <p className="mb-0 fw-medium">52</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="avatar me-3 avatar-sm">
                        <img src="/assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-0">Nathan Wagner</h6>
                        <small className="text-truncate text-muted">UI/UX Design</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="user-progress">
                      <p className="mb-0 fw-medium">12</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="avatar me-3 avatar-sm">
                        <img src="/assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                      </div>
                      <div className="d-flex flex-column">
                        <h6 className="mb-0">Emma Bowen</h6>
                        <small className="text-truncate text-muted">React Native</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="user-progress">
                      <p className="mb-0 fw-medium">8</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 col-md-6">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">Top Courses</h5>
            <div className="dropdown">
              <button className="btn p-0" type="button" id="topCourses" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ti ti-dots-vertical" />
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topCourses">
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Download</a>
                <a className="dropdown-item" href="javascript:void(0);">View All</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="d-flex mb-4 pb-1 align-items-center">
                <div className="avatar flex-shrink-0 me-3">
                  <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-video ti-md" /></span>
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                    <p className="mb-0 fw-medium">Videography Basic Design Course</p>
                  </div>
                  <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                    <div className="badge bg-label-secondary">1.2k Views</div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4 pb-1 align-items-center">
                <div className="avatar flex-shrink-0 me-3">
                  <span className="avatar-initial rounded bg-label-info"><i className="ti ti-code ti-md" /></span>
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                    <p className="mb-0 fw-medium">Basic Front-end Development Course</p>
                  </div>
                  <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                    <div className="badge bg-label-secondary">834 Views</div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4 pb-1 align-items-center">
                <div className="avatar flex-shrink-0 me-3">
                  <span className="avatar-initial rounded bg-label-success"><i className="ti ti-camera ti-md" /></span>
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                    <p className="mb-0 fw-medium">Basic Fundamentals of Photography</p>
                  </div>
                  <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                    <div className="badge bg-label-secondary">3.7k Views</div>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-4 pb-1 align-items-center">
                <div className="avatar flex-shrink-0 me-3">
                  <span className="avatar-initial rounded bg-label-warning"><i className="ti ti-brand-dribbble ti-md" /></span>
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                    <p className="mb-0 fw-medium">Advance Dribble Base Visual Design</p>
                  </div>
                  <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                    <div className="badge bg-label-secondary">2.5k Views</div>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="avatar flex-shrink-0 me-3">
                  <span className="avatar-initial rounded bg-label-danger"><i className="ti ti-microphone-2 ti-md" /></span>
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-sm-8 col-lg-12 col-xxl-8 mb-1 mb-sm-0 mb-lg-1 mb-xxl-0">
                    <p className="mb-0 fw-medium">Your First Singing Lesson</p>
                  </div>
                  <div className="col-sm-4 col-lg-12 col-xxl-4 d-flex justify-content-sm-end justify-content-md-start justify-content-xxl-end">
                    <div className="badge bg-label-secondary">948 Views</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <div className="bg-label-primary rounded-3 text-center mb-3 pt-4">
              <img className="img-fluid" src="/assets/img/illustrations/girl-with-laptop.png" alt="Card girl image" width={140} />
            </div>
            <h4 className="mb-2 pb-1">Upcoming Webinar</h4>
            <p className="small">Next Generation Frontend Architecture Using Layout Engine And React Native Web.</p>
            <div className="row mb-3 g-3">
              <div className="col-6">
                <div className="d-flex">
                  <div className="avatar flex-shrink-0 me-2">
                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-calendar-event ti-md" /></span>
                  </div>
                  <div>
                    <h6 className="mb-0 text-nowrap">17 Nov 23</h6>
                    <small>Date</small>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <div className="avatar flex-shrink-0 me-2">
                    <span className="avatar-initial rounded bg-label-primary"><i className="ti ti-clock ti-md" /></span>
                  </div>
                  <div>
                    <h6 className="mb-0 text-nowrap">32 minutes</h6>
                    <small>Duration</small>
                  </div>
                </div>
              </div>
            </div>
            <a href="javascript:void(0);" className="btn btn-primary w-100">Join the event</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-4 col-md-6">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">Assignment Progress</h5>
          </div>
          <div className="card-body">
            <ul className="p-0 m-0">
              <li className="d-flex mb-3 pb-1">
                <div className="chart-progress me-3" data-color="primary" data-series={72} data-progress_variant="true">
                  <img src='/assets/img/progress/1.svg' />
                </div>
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">User experience Design</h6>
                      <small>120 Tasks</small>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                      <i className="ti ti-chevron-right scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-3 pb-1">
              <img src='/assets/img/progress/2.svg' />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">Basic fundamentals</h6>
                      <small>32 Tasks</small>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                      <i className="ti ti-chevron-right scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-3 pb-1">
              <img src='/assets/img/progress/3.svg' />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">React native components</h6>
                      <small>182 Tasks</small>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                      <i className="ti ti-chevron-right scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex">
              <img src='/assets/img/progress/4.svg' />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">Basic of music theory</h6>
                      <small>56 Tasks</small>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                      <i className="ti ti-chevron-right scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*  Topic and Instructors  End*/}
    {/* Course datatable */}
 <div className="card mb-4">
  <div className="table-responsive mb-3">
    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"><div className="card-header py-sm-0"><div className="head-label text-center"><h5 className="card-title mb-0 text-nowrap">Course you are taking</h5></div><div id="DataTables_Table_0_filter" className="dataTables_filter"><label><input type="search" className="form-control" placeholder="Course Name" aria-controls="DataTables_Table_0" /></label></div></div><table className="table datatables-academy-course dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info" style={{width: 1043}}>
        <thead className="border-top">
          <tr><th className="control sorting_disabled dtr-hidden" rowSpan={1} colSpan={1} style={{width: 0, display: 'none'}} aria-label /><th className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowSpan={1} colSpan={1} style={{width: 18}} data-col={1} aria-label><input type="checkbox" className="form-check-input" /></th><th className="sorting sorting_desc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: 316}} aria-label="Course Name: activate to sort column ascending" aria-sort="descending">Course Name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: 55}} aria-label="Time: activate to sort column ascending">Time</th><th className="w-25 sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: 215}} aria-label="Progress: activate to sort column ascending">Progress</th><th className="w-25 sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} style={{width: 215}} aria-label="Status: activate to sort column ascending">Status</th></tr>
        </thead><tbody><tr className="odd"><td className="control dtr-hidden" tabIndex={0} style={{display: 'none'}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td className="sorting_1"><div className="d-flex align-items-center"><span className="me-3"><span className="badge bg-label-warning p-2"><i className="ti ti-brand-figma ti-md" /></span></span><div><a className="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">UI/UX Design</a><div className="d-flex align-items-center mt-1"><div className="avatar-wrapper me-2"><div className="avatar avatar-xs"><img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" /></div></div><span className="text-nowrap">Maybelle Zmitrovich</span></div></div></div></td><td><span className="h6 mb-0 text-nowrap">19h 17m</span></td><td><div className="d-flex align-items-center gap-3"><p className="h6 mb-0">89%</p><div className="progress w-100" style={{height: 8}}><div className="progress-bar" style={{width: '89%'}} aria-valuenow="89%" aria-valuemin={0} aria-valuemax={100} /></div><small className="text-muted">89/100</small></div></td><td className style={{}}><div className="d-flex align-items-center justify-content-between"><div className="w-px-50 d-flex align-items-center"><i className="ti ti-users ti-sm me-2 text-primary" />14</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-book ti-sm me-2 text-info" />48</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-video ti-sm me-2 text-danger" />43</div></div></td></tr><tr className="even"><td className="control dtr-hidden" tabIndex={0} style={{display: 'none'}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td className="sorting_1"><div className="d-flex align-items-center"><span className="me-3"><span className="badge bg-label-warning p-2"><i className="ti ti-brand-figma ti-md" /></span></span><div><a className="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">Typography Theory</a><div className="d-flex align-items-center mt-1"><div className="avatar-wrapper me-2"><div className="avatar avatar-xs"><img src="../../assets/img/avatars/13.png" alt="Avatar" className="rounded-circle" /></div></div><span className="text-nowrap">Rollie Parsons</span></div></div></div></td><td><span className="h6 mb-0 text-nowrap">16h 15m</span></td><td><div className="d-flex align-items-center gap-3"><p className="h6 mb-0">22%</p><div className="progress w-100" style={{height: 8}}><div className="progress-bar" style={{width: '22%'}} aria-valuenow="22%" aria-valuemin={0} aria-valuemax={100} /></div><small className="text-muted">11/50</small></div></td><td className style={{}}><div className="d-flex align-items-center justify-content-between"><div className="w-px-50 d-flex align-items-center"><i className="ti ti-users ti-sm me-2 text-primary" />209</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-book ti-sm me-2 text-info" />20</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-video ti-sm me-2 text-danger" />98</div></div></td></tr><tr className="odd"><td className="control dtr-hidden" tabIndex={0} style={{display: 'none'}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td className="sorting_1"><div className="d-flex align-items-center"><span className="me-3"><span className="badge bg-label-success p-2"><i className="ti ti-color-swatch ti-md" /></span></span><div><a className="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">The Ultimate Drawing Course</a><div className="d-flex align-items-center mt-1"><div className="avatar-wrapper me-2"><div className="avatar avatar-xs"><img src="../../assets/img/avatars/12.png" alt="Avatar" className="rounded-circle" /></div></div><span className="text-nowrap">Bernarr Markie</span></div></div></div></td><td><span className="h6 mb-0 text-nowrap">16h 24m</span></td><td><div className="d-flex align-items-center gap-3"><p className="h6 mb-0">10%</p><div className="progress w-100" style={{height: 8}}><div className="progress-bar" style={{width: '10%'}} aria-valuenow="10%" aria-valuemin={0} aria-valuemax={100} /></div><small className="text-muted">1/10</small></div></td><td className style={{}}><div className="d-flex align-items-center justify-content-between"><div className="w-px-50 d-flex align-items-center"><i className="ti ti-users ti-sm me-2 text-primary" />116</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-book ti-sm me-2 text-info" />33</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-video ti-sm me-2 text-danger" />53</div></div></td></tr><tr className="even"><td className="control dtr-hidden" tabIndex={0} style={{display: 'none'}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td className="sorting_1"><div className="d-flex align-items-center"><span className="me-3"><span className="badge bg-label-primary p-2"><i className="ti ti-diamond ti-md" /></span></span><div><a className="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">The Science of Everyday Thinking</a><div className="d-flex align-items-center mt-1"><div className="avatar-wrapper me-2"><div className="avatar avatar-xs"><img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" /></div></div><span className="text-nowrap">Freda Garham</span></div></div></div></td><td><span className="h6 mb-0 text-nowrap">8h 44m</span></td><td><div className="d-flex align-items-center gap-3"><p className="h6 mb-0">81%</p><div className="progress w-100" style={{height: 8}}><div className="progress-bar" style={{width: '81%'}} aria-valuenow="81%" aria-valuemin={0} aria-valuemax={100} /></div><small className="text-muted">81/100</small></div></td><td className style={{}}><div className="d-flex align-items-center justify-content-between"><div className="w-px-50 d-flex align-items-center"><i className="ti ti-users ti-sm me-2 text-primary" />79</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-book ti-sm me-2 text-info" />46</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-video ti-sm me-2 text-danger" />27</div></div></td></tr><tr className="odd"><td className="control dtr-hidden" tabIndex={0} style={{display: 'none'}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td className="sorting_1"><div className="d-flex align-items-center"><span className="me-3"><span className="badge bg-label-primary p-2"><i className="ti ti-diamond ti-md" /></span></span><div><a className="text-body text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">The Science of Critical Thinking</a><div className="d-flex align-items-center mt-1"><div className="avatar-wrapper me-2"><div className="avatar avatar-xs"><img src="../../assets/img/avatars/14.png" alt="Avatar" className="rounded-circle" /></div></div><span className="text-nowrap">Papageno Sloy</span></div></div></div></td><td><span className="h6 mb-0 text-nowrap">4h 59m</span></td><td><div className="d-flex align-items-center gap-3"><p className="h6 mb-0">55%</p><div className="progress w-100" style={{height: 8}}><div className="progress-bar" style={{width: '55%'}} aria-valuenow="55%" aria-valuemin={0} aria-valuemax={100} /></div><small className="text-muted">11/20</small></div></td><td className style={{}}><div className="d-flex align-items-center justify-content-between"><div className="w-px-50 d-flex align-items-center"><i className="ti ti-users ti-sm me-2 text-primary" />274</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-book ti-sm me-2 text-info" />21</div><div className="w-px-50 d-flex align-items-center"><i className="ti ti-video ti-sm me-2 text-danger" />60</div></div></td></tr></tbody>
      </table><div className="row mx-4 mt-3"><div className="col-sm-6 col-12 text-center text-xl-start pb-2 pb-xl-0 px-0"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 5 of 25 entries</div></div><div className="col-sm-6 col-12 d-flex justify-content-center justify-content-xl-end px-0"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" aria-role="link" aria-current="page" data-dt-idx={0} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" aria-role="link" data-dt-idx={1} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" aria-role="link" data-dt-idx={2} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" aria-role="link" data-dt-idx={3} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" aria-role="link" data-dt-idx={4} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" aria-role="link" data-dt-idx="next" tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
  </div>
</div>

    {/* Course datatable End */}
  </div>
  {/* / Content */}
  {/* Footer */}
<Footer />
  {/* / Footer */}
  <div className="content-backdrop fade" />
</div>

      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
</div>
{/* / Layout wrapper */}
    </>
  )
}

export default Home
