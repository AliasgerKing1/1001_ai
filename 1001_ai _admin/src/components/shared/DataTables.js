import React, { useEffect, useState } from 'react'

const DataTables = ({ title }) => {
    let [dataSet, setDataSet] = useState([
        {
            name: "vimeet",
            link: "http://vimeet.com/index.html",
            path: "C:\\demos",
            index: "C:\\demos/html/index.html"
        }
    ])
    let [inputData, setInputData] = useState(true)
    let [dataAdd, setDataAdd] = useState({
        name: "",
        link: "",
        path: "",
        index: ""
    })
    let addNewData = () => {
        setInputData(true)
        setDataSet([...dataSet, {
            name: "",
            link: "",
            path: "",
            index: ""
        }])
    }
    let submitNewData = () => {
        setDataSet([...dataSet, dataAdd])
        setInputData(false)
    }
    return (
        <>
            {/* Multiple table control element */}
            <div className="row">
                <div className="col-12">
                    {/* ---------------------
                      start Multiple table control element
                  ---------------- */}
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-2">
                                <h5 className="mb-0">{title}</h5>
                            </div>
                            <div>

                                <p className="card-subtitle mb-3">
                                    total numbers of website left to clone <button type='button' className='btn btn-primary' onClick={addNewData}>+</button><button type='button' className='btn btn-success' onClick={submitNewData}>++++</button>
                                </p>
                            </div>
                            <div class="top">
                                <div class="dataTables_info" id="multi_control_info" role="status" aria-live="polite">Showing 11 to 20 of 57 entries</div>
                            </div>
                            <div className="table-responsive">
                                <table id="multi_control" className="table border table-striped table-bordered display text-nowrap" style={{ width: '100%' }}>
                                    <thead>
                                        {/* start row */}
                                        <tr>
                                            <th>Name</th>
                                            <th>Link</th>
                                            <th>Path</th>
                                            <th>Index</th>
                                        </tr>
                                        {/* end row */}
                                    </thead>
                                    <tbody>
                                        {/* start row */}
                                        {dataSet.map((x, i) => {
                                            let latest = dataSet.length - 1
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{x.name}</td>
                                                        <td>{x.link}</td>
                                                        <td>{x.path}</td>
                                                        <td>{x.index}</td>
                                                    </tr>
                                                    <tr>
                                                        {inputData == false ? (<>
                                                            <td>{x.name}</td>
                                                            <td>{x.link}</td>
                                                            <td>{x.path}</td>
                                                            <td>{x.index}</td>
                                                        </>) : (<>
                                                            <td className='data__table__input'><input type='text' placeholder='name' onChange={(e) => { setDataAdd({ ...dataAdd, name: e.target.value }) }} value={dataAdd.name} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='link' onChange={(e) => { setDataAdd({ ...dataAdd, link: e.target.value }) }} value={dataAdd.link} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='path' onChange={(e) => { setDataAdd({ ...dataAdd, path: e.target.value }) }} value={dataAdd.path} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='index' onChange={(e) => { setDataAdd({ ...dataAdd, index: e.target.value }) }} value={dataAdd.index} /></td>
                                                        </>)}
                                                    </tr>
                                                </>

                                            )
                                        })}
                                        {/* end row */}
                                    </tbody>

                                    {/* (i == latest ? (<>
                                                            <td className='data__table__input'><input type='text' placeholder='name' onChange={(e) => { setDataAdd({ ...dataAdd, name: e.target.value }) }} value={dataAdd.name} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='link' onChange={(e) => { setDataAdd({ ...dataAdd, link: e.target.value }) }} value={dataAdd.link} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='path' onChange={(e) => { setDataAdd({ ...dataAdd, path: e.target.value }) }} value={dataAdd.path} /></td>
                                                            <td className='data__table__input'><input type='text' placeholder='index' onChange={(e) => { setDataAdd({ ...dataAdd, index: e.target.value }) }} value={dataAdd.index} /></td>
                                                        </>) : (<>
                                                            <td>{x.name}</td>
                                                            <td>{x.link}</td>
                                                            <td>{x.path}</td>
                                                            <td>{x.index}</td>
                                                        </>)) */}
                                    <tfoot>
                                        {/* start row */}
                                        <tr>
                                            <th>Name</th>
                                            <th>Link</th>
                                            <th>Path</th>
                                            <th>Index</th>
                                        </tr>
                                        {/* end row */}
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------
                      end Multiple table control element
                  ---------------- */}
                </div>
            </div>

        </>
    )
}

export default DataTables
