import React, { useState } from 'react'
import { checkCode } from '../../services/PassowrdService'
let RolesData = [
    {
        image: "/assets/dist/images/profile/user-1.jpg",
        name: "Olivia Rhye",
        tag: "@rhye",
        email: "olivia@ui.com",
        role: {
            state: "Manager",
            color: "primary"
        },
        isActive: false

    },
    {
        image: "/assets/dist/images/profile/user-2.jpg",
        name: "Barbara Steele",
        tag: "@steele",
        email: "steele@ui.com",
        role: {
            state: "Frontend Developer",
            color: "success"
        },
        isActive: false

    },
    {
        image: "/assets/dist/images/profile/user-3.jpg",
        name: "Leonard Gordon",
        tag: "@gordon",
        email: "leonard@ui.com",
        role: {
            state: "CFO",
            color: "danger"
        },
        isActive: true

    }
]
const RoleTable = () => {

    let [memberName, setMemberName] = useState("")
    let [delPass, setDelPass] = useState("")
    let deleteMember = async (data) => {
        setMemberName(data.name)
    }

    let deleteMemberFinal = async () => {
        if (delPass.length == 0) {

        } else {
            let admin_token = localStorage.getItem("admin_token")
            let result = await checkCode(admin_token, { password: delPass })
            if (result.data.status == 200) {
                //delete member code to write here
            }
        }

    }
    return (
        <>
            <table className="table border text-nowrap customize-table mb-0 align-middle">
                <thead className="text-dark fs-4">
                    <tr>
                        <th><h6 className="fs-4 fw-semibold mb-0">Member</h6></th>
                        <th><h6 className="fs-4 fw-semibold mb-0">Status</h6></th>
                        <th><h6 className="fs-4 fw-semibold mb-0">Email Address</h6></th>
                        <th><h6 className="fs-4 fw-semibold mb-0">Role</h6></th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {RolesData.map((x) => {
                        return (
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={x.image} className="rounded-circle" width={40} height={40} />
                                        <div className="ms-3">
                                            <h6 className="fs-4 fw-semibold mb-0">{x.name}</h6>
                                            <span className="fw-normal">{x.tag}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {x.isActive == true ? (<span className="badge bg-light-success text-success fw-semibold fs-2 gap-1 d-inline-flex align-items-center"><i className="ti ti-circle fs-3" />Active</span>) : (<span className="badge bg-light text-dark fw-semibold fs-2 gap-1 d-inline-flex align-items-center"><i className="ti ti-clock-hour-4 fs-3" />offline</span>)}
                                </td>
                                <td><p className="mb-0 fw-normal">{x.email}</p></td>
                                <td>
                                    <div className="d-flex align-items-center gap-2">
                                        <span className={`badge bg-${x.role.color} rounded-3 fw-semibold fs-2`}>{x.role.state}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown dropstart">
                                        <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots fs-5" />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{}}>
                                            <li>
                                                <a className="dropdown-item d-flex align-items-center gap-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                                    <path d="M9 17h6"></path>
                                                    <path d="M9 13h6"></path>
                                                </svg>Details</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-edit" />Edit</a>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    class="dropdown-item d-flex align-items-center gap-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#danger-header-modal"
                                                    onClick={() => {
                                                        deleteMember(x)
                                                    }}  ><i className="fs-4 ti ti-trash" />
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* danger Header Modal */}
            <div id="danger-header-modal" className="modal fade" tabIndex={-1} aria-labelledby="danger-header-modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header modal-colored-header bg-danger text-white">
                            <h4 className="modal-title" id="danger-header-modalLabel">
                                Confirm Delete
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <h5 className="mt-0">Are you sure to delete {memberName} ?</h5>
                            <p>Type the password to delete the memeber below </p>
                            <form class="mt-4">
                                <div class="form-group">
                                    <input type="password" class="form-control" id="password" name="delpass" placeholder="Admin Password" value={delPass} onChange={(e) => { setDelPass(e.target.value) }} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-light-danger text-danger font-medium" onClick={deleteMemberFinal}>
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
            {/* /.modal */}

        </>
    )
}

export default RoleTable
