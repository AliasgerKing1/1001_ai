import React from 'react'

const ListedChart = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body p-4">
            <h5 className="card-title fw-semibold">Plans List</h5>
            <p className="card-subtitle mb-7 pb-8">Types of paln available</p>
            <div className="position-relative">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex">
                  <div className="p-8 bg-light-primary rounded-2 d-flex align-items-center justify-content-center me-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf cc BTC text-primary fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 21c.5 -4.5 2.5 -8 7 -10"></path>
                      <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">Free</h6>
                    <p className="fs-3 mb-0">Tier 4 Available</p>
                  </div>
                </div>
                <h6 className="mb-0 fw-semibold">$0</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex">
                  <div className="p-8 bg-light-success rounded-2 d-flex align-items-center justify-content-center me-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant-2 cc BTC text-success fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M2 9a10 10 0 1 0 20 0"></path>
                      <path d="M12 19a10 10 0 0 1 10 -10"></path>
                      <path d="M2 9a10 10 0 0 1 10 10"></path>
                      <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
                      <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
                    </svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">Fresher</h6>
                    <p className="fs-3 mb-0">Tier 3-4 Available</p>
                  </div>
                </div>
                <h6 className="mb-0 fw-semibold">$30</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex">
                  <div className="p-8 bg-light-warning rounded-2 d-flex align-items-center justify-content-center me-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-seeding cc BTC text-warning fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
   <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
   <path d="M12 20l0 -10"></path>
</svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">professional</h6>
                    <p className="fs-3 mb-0">Tier 2-4 Available</p>
                  </div>
                </div>
                <h6 className="mb-0 fw-semibold">+$80</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-7 pb-8">
                <div className="d-flex">
                  <div className="p-8 bg-light-danger rounded-2 d-flex align-items-center justify-content-center me-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree cc BTC text-danger fs-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 3l4 4l-2 1l4 4l-3 1l4 4h-14l4 -4l-3 -1l4 -4l-2 -1z"></path>
   <path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3"></path>
</svg>
                  </div>
                  <div>
                    <h6 className="mb-1 fs-4 fw-semibold">Entreprenuer</h6>
                    <p className="fs-3 mb-0">Tier 1-4 Available</p>
                  </div>
                </div>
                <h6 className="mb-0 fw-semibold">$300</h6>
              </div>
            </div>
            {/* <button className="btn btn-outline-primary w-100">View all Plans</button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default ListedChart
