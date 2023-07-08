import React from 'react'

const WebsiteCard = ({ classVal, title, ratio, noOfWebsite, value, svg, trend }) => {
    return (
        <>
            <div className="col-sm-6 col-xl-3">
                <div className={`card bg-light-${classVal} shadow-none`}>
                    <div className="card-body p-4">
                        <div className="d-flex align-items-center">
                            <div className={`round rounded bg-${classVal} d-flex align-items-center justify-content-center`}>
                                {/* <i className="cc BTC text-white fs-7" title="BTC" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack-3 cc BTC text-white fs-7" title="left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 2l-8 4l8 4l8 -4l-8 -4"></path>
                                    <path d="M4 10l8 4l8 -4"></path>
                                    <path d="M4 18l8 4l8 -4"></path>
                                    <path d="M4 14l8 4l8 -4"></path>
                                </svg>
                            </div>
                            <h6 className="mb-0 ms-3">{title}</h6>
                            <div className={`ms-auto text-${classVal} d-flex align-items-center`}>
                                <i className={`ti ti-trending-${trend} text-${classVal} fs-6 me-1`} />
                                <span className="fs-2 fw-bold">{ratio}</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4">
                            <h3 className="mb-0 fw-semibold fs-7">{noOfWebsite}</h3>
                            <span className="fw-bold">{value}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteCard
