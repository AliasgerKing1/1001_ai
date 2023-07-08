import React, { useState } from 'react';

const DataTables = ({ title }) => {
  const [dataSet, setDataSet] = useState([
    {
      name: 'vimeet',
      link: 'http://vimeet.com/index.html',
      path: 'C:\\demos',
      index: 'C:\\demos/html/index.html'
    }
  ]);

  const [dataAdd, setDataAdd] = useState({
    name: '',
    link: '',
    path: '',
    index: ''
  });

  const addNewData = () => {
    setDataSet([...dataSet, dataAdd]);
    setDataAdd({ name: '', link: '', path: '', index: '' });
  };
  const handleInputChange = (e, field) => {
    setDataAdd({ ...dataAdd, [field]: e.target.value });
  };

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
              <div className="row">
                <div className="col-lg-4">
                <p className="card-subtitle mb-3">
                  total numbers of website left to clone
                </p>
                </div>
                <div className="col-lg-1 offset-lg-7">
                <button type="button" class="justify-content-center w-100 btn mb-1 btn-rounded btn-primary d-flex align-items-center" onClick={addNewData}>
                        <i class="ti ti-send fs-4 me-2"></i>
                        Submit
                      </button>
                </div>
              </div>
              </div>
              <div className="top">
                <div className="dataTables_info" id="multi_control_info" role="status" aria-live="polite">
                  Showing 11 to 20 of 57 entries
                </div>
              </div>
              <div className="table-responsive">
                <table
                  id="multi_control"
                  className="table border table-striped table-bordered display text-nowrap"
                  style={{ width: '100%' }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Link</th>
                      <th>Path</th>
                      <th>Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSet.map((x, i) => (
                      <tr key={i}>
                        <td>{x.name}</td>
                        <td>{x.link}</td>
                        <td>{x.path}</td>
                        <td>{x.index}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="data__table__input">
                        <input
                          type="text"
                          placeholder="name"
                          onChange={(e) => handleInputChange(e, 'name')}
                          value={dataAdd.name}
                        />
                      </td>
                      <td className="data__table__input">
                        <input
                          type="text"
                          placeholder="link"
                          onChange={(e) => handleInputChange(e, 'link')}
                          value={dataAdd.link}
                        />
                      </td>
                      <td className="data__table__input">
                        <input
                          type="text"
                          placeholder="path"
                          onChange={(e) => handleInputChange(e, 'path')}
                          value={dataAdd.path}
                        />
                      </td>
                      <td className="data__table__input">
                        <input
                          type="text"
                          placeholder="index"
                          onChange={(e) => handleInputChange(e, 'index')}
                          value={dataAdd.index}
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Link</th>
                      <th>Path</th>
                      <th>Index</th>
                    </tr>
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
  );
};

export default DataTables;


{/* <DataTables title="Website Left to Clone" />
<DataTables title="Website Done" /> */}