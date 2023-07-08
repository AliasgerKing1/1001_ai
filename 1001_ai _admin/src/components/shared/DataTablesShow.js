import React, { useState } from 'react';
import { postWebsite } from "../../services/websiteDataService"
const DataTablesShow = ({ title, tagline }) => {
  const [dataSet, setDataSet] = useState([
    {
      name: 'vimeet',
      url: 'http://vimeet.com/index.html',
      link: 'C:\\demos',
      index: 'C:\\demos/html/index.html'
    }
  ]);

  const [dataAdd, setDataAdd] = useState({
    name: '',
    url: '',
    link: '',
    index: ''
  });

  const addNewData = () => {
    setDataSet([...dataSet, dataAdd]);
    setDataAdd({ name: '', url: '', link: '', index: '' });
    postWebsite(dataSet).then(result => {
      console.log(result.data)
      if (result.data.status == 200) {
        console.log("true")
      } else {
        console.log("false")

      }
    })
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
                <p className="card-subtitle mb-3">
                  {tagline}
                </p>
              </div>
              <div className="top">
                <div className="Show_info" id="multi_control_info" role="status" aria-live="polite">
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
                      <th>Url</th>
                      <th>Link</th>
                      <th>Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSet.map((x, i) => (
                      <tr key={i}>
                        <td>{x.name}</td>
                        <td>{x.url}</td>
                        <td>{x.link}</td>
                        <td className="pointer">{x.index}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Url</th>
                      <th>Link</th>
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

export default DataTablesShow;


