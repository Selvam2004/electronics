import React from 'react'
import '../css/ProductHistory.css'
const ProductHistory = () => {
  return (
    <div >
        <div className='admin-head'>
            <h2>Mouse History</h2>
            <div className='line-history'></div>
        </div>
        <div className='table-div'>
            <table className='history-table'>
                <tr className='table-head'>
                    <th className='t-h'>Project Name</th>
                    <th className='t-h'>Designer Name</th>
                    <th className='t-h'>Quantity</th>
                </tr>

            </table>
        </div>
      
    </div>
  )
}

export default ProductHistory
