import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loginComponent/Loader";

const ProjectHistory = () => {
  const navigate = useNavigate();
  const [project, setproject] = useState([]);
  const [loading,SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);

    axios
      .get(`${process.env.REACT_APP_API}/dashboard/getprojects`)
      .then((res) => {
        setproject(res.data);
        SetLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="main-div-history">
        <div className="admin-head">
          <h2>Project History</h2>
          <div className="line-admin-project"></div>
        </div>
        <div className="table-div">
          <table className="history-table">
            <thead>
              <tr className="table-head">
                <th className="t-h">Project Name</th>
                <th className="t-h">Designer Name</th>
                <th className="t-h">Created At</th>
                <th className="t-h">Details</th>
              </tr>
            </thead>
            <tbody>
            {loading? <div style={{minHeight:"50vh"}}><Loader/></div>:
              project && Array.isArray(project) ? (
                project.map((item, keyval) => {
                  return (
                    <tr className="table-head-data" key={keyval}>
                      <td>{item.projectName}</td>
                      <td>{item.designerName}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <button
                          className="details-btn"
                          onClick={(e) => {
                            navigate(`/dashboard/projectdetails/${item._id}`);
                          }}
                        >
                          View Details
                        </button>
                      </td>
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

export default ProjectHistory;
