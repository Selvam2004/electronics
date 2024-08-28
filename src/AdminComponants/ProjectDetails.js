import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [projectdetails, setprojectdetails] = useState([{}]);
  const {id}=useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/dashboard/getProjectbyId/${id}`)
      .then((res) => {
        setprojectdetails(res.data);
        console.log(res.data);
      }) 
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <div className="main-div-history">
        <div className="admin-head">
          <h2>Product Taken</h2>
          <div className="line-admin-taken"></div>
        </div>
        <div className="table-div">
          <table className="history-table">
            <thead>
              <tr className="table-head">
                <th className="t-h">Product Name</th>
                <th className="t-h">Mfg</th>
                <th className="t-h">Taken By</th>
                <th className="t-h"> Quantity</th>
                <th className="t-h">Date</th>
              </tr>
            </thead>
            <tbody>
              {projectdetails && Array.isArray(projectdetails) ? (
                projectdetails.map((item, keyval) => {
                  return (
                    <tr className="table-head-data" key={keyval}>
                      <td>{item.name}</td>
                      <td>{item.mfg}</td>
                      <td>{item.takenBy}</td>
                      <td>{item.quantity}</td>
                      <td>{item.dateofTaken}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td className="text-center">No data available to Display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
