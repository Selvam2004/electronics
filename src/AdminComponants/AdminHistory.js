import axios from "axios";
import { useEffect, useState } from "react"

 

const AdminHistory = () => {
  const [items,setItems]=useState(null);
  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_API}/home/getItems`)
    .then((res) => {
      setItems(res.data);   
    })
    .catch((err) => console.log(err.message));
  },[])
  return (
    <div>
      <div className='main-div-history' >
        <div className='admin-head'>
            <h2>Product Adding History</h2>
            <div className='line-admin-history'></div>
        </div>
        <div className='table-div'>
            <table className='history-table'>
                <thead>
                <tr className='table-head'>
                    <th className='t-h'>Name</th>
                    <th className='t-h'>Es-Part</th>
                    <th className='t-h'>Date</th>
                    <th className='t-h'>Quantity</th>
                    <th className='t-h'>Added By</th>
                </tr>
                </thead>
                <tbody>
                 
                        {
                          items && Array.isArray(items)?items.map((item,index)=>{
                            return (
                              item.history && Array.isArray(item.history)?item.history.map((logs,historyIndex)=>{
                                     return (
                                      <tr className='table-head-data'key={index} >
                                      <td key={historyIndex}>{item.name}</td>
                                      <td>{item.espart}</td> 
                                      <td>{logs.dateofAdding}</td> 
                                      <td>{logs.quantity}</td> 
                                      <td>{logs.addedBy}</td>
                                      </tr>
                                     )
                              }):<td>No data to display</td>
                            )
                          }):<td>No data available</td>
                        }

                        
                    
                </tbody>
      

            </table>
        </div>
      
    </div>
    </div>
  )
}

export default AdminHistory
