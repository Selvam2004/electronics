import React from 'react'

const AdminHistory = () => {
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
                <tr className='table-head-data' >
                        
                        <td>Mouse</td>
                        <td>Es1234567890123456789012345</td> 
                        <td>12.05.2024</td> 
                        <td>5</td> 
                        <td>Munish</td>
                        
                    </tr>
                </tbody>
      

            </table>
        </div>
      
    </div>
    </div>
  )
}

export default AdminHistory
