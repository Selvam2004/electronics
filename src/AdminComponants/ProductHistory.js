import { useParams } from 'react-router-dom'
import '../css/ProductHistory.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loginComponent/Loader';
const ProductHistory = () => {
    const {_id}=useParams();
    const [history,setHistory] = useState([{}]);
    const [name,setName] = useState();
    const [mfg,setMfg] = useState();
    const [loading,SetLoading] = useState(false);

    useEffect(()=>{
        SetLoading(true);
         axios.get(`${process.env.REACT_APP_API}/dashboard/productHistory/${_id}`)
         .then(res=>{ 
            setHistory(res.data.projects); 
            setName(res.data.name);
            setMfg(res.data.mfg);
            SetLoading(false);
         })
         .catch(err=>console.log(err))
         // eslint-disable-next-line
    },[])  
  return (
    <div className='main-div' >
        <div className='admin-head'>
            <h2>{name} History</h2>
            <div className='line-history'></div>
        </div>
        <div className='table-div'>
            <table className='history-table'>
                <thead>
                <tr className='table-head'>
                    <th className='t-h'>Project Name</th>
                    <th className='t-h'>Designer Name</th>
                    <th className='t-h'>Taken By</th>
                    <th className='t-h'>Quantity</th>
                    <th className='t-h'>Project Created</th>
                    <th className='t-h'>Product Claimed</th>
                </tr>
                </thead>
                <tbody>
                {loading? <div style={{minHeight:"50vh"}}><Loader/></div>:

                
                   history && Array.isArray(history)?  history.map((project,index)=>{ 
   
                     return (   
                    project.itemsTaken && Array.isArray(project.itemsTaken)  ? project.itemsTaken
                            .filter((item) => item.name === name && item.mfg === mfg)
                            .map((item, itemIndex) => {
                                return (
                                <tr className='table-head-data'  key={itemIndex}>
                        
                                    <td>{project.projectName}</td> 
                                    <td>{project.designerName}</td>
                                    <td>{item.takenBy}</td>
                                    <td key={itemIndex}> {item.quantity}</td>
                                    <td> {project.createdAt}</td>
                                    <td> {item.dateofTaken}</td>
                                </tr> )
                             }) : <td></td>  
                
                    
                    )}):<tr><td></td><td className='text-center'>No data available to Display</td></tr>
                
               }
                </tbody>
      

            </table>
        </div>
        
      
    </div>
  )
}

export default ProductHistory
