import React from 'react'

const PendingOrders = () => {
  return (
    <div>
       <div className='main-div-history' >
      <div className='admin-head'>
          <h2>Pending Orders</h2>
          <div className='line-admin-project'></div>
      </div>
      <div className='table-div'>
          <table className='history-table'>
              <thead>
              <tr className='table-head'>
                  <th className='t-h'>Name</th>
                  <th className='t-h'>Es-Part</th>
                  <th className='t-h'>Available Qty</th>
                  <th className='t-h'>Minimum Qty</th>
                  <th className='t-h'>Link To Buy 1</th>
                  <th className='t-h'>Link To Buy 2</th>
              </tr>
              </thead>
              <tbody>
              <tr className='table-head-data' >
                      
                      <td>Mouse</td>
                      <td>Es1234567890123456789012345</td> 
                      <td>2</td> 
                      <td>5</td> 
                      <td>url1</td>
                      <td>url2</td>
                      
                  </tr>
              </tbody>
    

          </table>
      </div>
    
  </div>
    </div>
  )
}

export default PendingOrders
