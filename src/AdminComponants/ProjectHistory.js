import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectHistory = () => {
    const navigate=useNavigate();
  return (
    <div>
    <div className='main-div-history' >
      <div className='admin-head'>
          <h2>Project History</h2>
          <div className='line-admin-project'></div>
      </div>
      <div className='table-div'>
          <table className='history-table'>
              <thead>
              <tr className='table-head'>
                  <th className='t-h'>Project Name</th>
                  <th className='t-h'>Designer Name</th>
                  <th className='t-h'>Created At</th>
                  <th className='t-h'>Details</th>
              </tr>
              </thead>
              <tbody>
              <tr className='table-head-data' >
                      
                      <td>xxxxxxxxx</td>
                      <td>Munish</td> 
                      <td>12.05.2024</td> 
                      <td><button className='details-btn' onClick={(e)=>{navigate("/dashboard/projectdetails")}}>View Details</button></td> 
                      
                  </tr>
              </tbody>
    

          </table>
      </div>
    
  </div>
  </div>
  )
}

export default ProjectHistory
