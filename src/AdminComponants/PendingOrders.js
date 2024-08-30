import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../loginComponent/Loader";

const PendingOrders = () => {
  const [items, setItems] = useState([]);
  const [filteredItem, setfilteredItem] = useState([]);
  const [loading,SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/home/getItems`)
      .then((res) => {
        setItems(res.data); 
        const filter = items.filter((d) => d.available <= d.minQuantity);
        setfilteredItem(filter);
        SetLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [items]);


  return (
    <div>
      <div className="main-div-history">
        <div className="admin-head">
          <h2>Pending Orders</h2>
          <div className="line-admin-project"></div>
        </div>
        <div className="table-div">
          <table className="history-table">
            <thead>
              <tr className="table-head">
                <th className="t-h">Name</th>
                <th className="t-h">Es-Part</th>
                <th className="t-h">Available Qty</th>
                <th className="t-h">Minimum Qty</th>
                <th className="t-h">Link To Buy 1</th>
                <th className="t-h">Link To Buy 2</th>
              </tr>
            </thead>
            <tbody>
            {loading? <div style={{minHeight:"50vh"}}><Loader/></div>:

              filteredItem && Array.isArray(filteredItem) ? (
                filteredItem.map((index,keyval) => {
                  return (
                    <tr className="table-head-data" key={keyval}>
                      <td>{index.name}</td>
                      <td>{index.espart}</td>
                      <td>{index.available}</td>
                      <td>{index.minQuantity}</td>
                      <td><a href={index.linkToBuy}>url1</a></td>
                      <td><a href={index.linkToBuy2}>url2</a></td>
                    </tr>
                  
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td className="text-center">No data available to Display</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
