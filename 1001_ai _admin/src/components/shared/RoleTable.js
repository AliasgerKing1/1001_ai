import React from 'react'
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
                                                <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-plus" />Add</a>
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
                                                ><i className="fs-4 ti ti-trash" />
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
                            <h5 className="mt-0">Are you sure to delete hii ?</h5>
                            <p>
                                Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis
                                in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Vivamus sagittis lacus vel
                                augue laoreet rutrum faucibus dolor auctor.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-light-danger text-danger font-medium">
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
