import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { getWebsiteDone } from '../../services/websiteDataService'

const WebsiteName = () => {
    let [websiteData, setWebsiteData] = useState([])
    let getWebsiteDoneFun = async () => {
        let result = await getWebsiteDone();
        setWebsiteData(result.data)
    }
    useEffect(() => {
        getWebsiteDoneFun()
    }, [])
    return (
        <>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <h4 class="card-title mb-0">Name of Websites</h4>
                        </div>
                        <ul class="list-group" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                            {websiteData?.done?.map((x) => {
                                return (
                                    <li class="list-group-item d-flex align-items-center" key={x.index}>
                                        <i data-feather="box" class="text-primary feather-sm me-2"></i>
                                                    <NavLink to="" className="text-white">
                                                    {x.name}
                                        </NavLink>
                                        {/* <span class="badge bg-light-primary text-primary font-medium rounded-pill ms-auto">14</span> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings ms-auto text-white pointer" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        </svg>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteName
