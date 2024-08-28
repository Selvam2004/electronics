import React from 'react'

const ProjectDetails = () => {
  return (
    <div>
          <div className='main-div-history' >
      <div className='admin-head'>
          <h2>Project Taken</h2>
          <div className='line-admin-taken'></div>
      </div>
      <div className='table-div'>
          <table className='history-table'>
              <thead>
              <tr className='table-head'>
                  <th className='t-h'>Product Name</th>
                  <th className='t-h'>Es-Part</th>
                  <th className='t-h'>Taken By</th>
                  <th className='t-h'> Quantity</th>
                  <th className='t-h'>Date</th>
              </tr>
              </thead>
              <tbody>
              <tr className='table-head-data' >
                      
                      <td>Mouse</td>
                      <td>Es1234567890123456789012345</td> 
                      <td>Munish</td> 
                      <td>5</td> 
                      <td>15.12.2024</td>
                      
                  </tr>
              </tbody>
    

          </table>
      </div>
    
  </div>
    </div>
  )
}

export default ProjectDetails
