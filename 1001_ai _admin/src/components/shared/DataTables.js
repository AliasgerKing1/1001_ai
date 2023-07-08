import React, { useState } from 'react';
import { postWebsite } from "../../services/websiteDataService"
const DataTables = ({ title, tagline }) => {
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
    postWebsite(dataSet).then(result => {
      console.log(result.data)
      if (result.data.status == 200) {
        console.log("true")
      } else {
        console.log("false")

      }
    })
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
                      {tagline}
                    </p>
                  </div>
                  <div className="col-lg-1 offset-lg-7">
                    <button type="button" class="justify-content-center w-100 btn mb-1 btn-rounded btn-primary d-flex align-items-center" onClick={addNewData}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-plus fs-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 10h-14"></path>
                        <path d="M5 6h14"></path>
                        <path d="M14 14h-9"></path>
                        <path d="M5 18h6"></path>
                        <path d="M18 15v6"></path>
                        <path d="M15 18h6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="top">
                <div className="dataTables_info" id="multi_control_info" role="status" aria-live="polite">
                  Showing 0 to 8 of {dataSet.length} entries
                </div>
              </div>
              <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
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
                    {dataSet.map((x, i) => (
                      <tr key={i}>
                        <td>{x.name}</td>
                        <td>{x.link}</td>
                        <td>{x.path}</td>
                        <td className="pointer">{x.index}</td>
                      </tr>
                    ))}
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


