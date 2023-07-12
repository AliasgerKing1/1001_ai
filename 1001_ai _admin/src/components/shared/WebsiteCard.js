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
                                <div dangerouslySetInnerHTML={{ __html: svg }} />
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
