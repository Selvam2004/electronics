import React, {  useEffect, useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const DetailModal = (props) => { 
  const [designerName,setDesignerName] = useState();
  const [projectName,setProjectName] = useState();
  const [quantity,setQuantity] = useState();
  const [isDisabled,setIsDisabled] = useState(false);
  const [userName,setUserName]=useState("")
  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_API}/home/userData`, {
      withCredentials: true,
    })
    .then((res) => { 
        setUserName(res.data.name)
    })
    .catch((err) => console.log(err));
  },[]);
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsDisabled(true);
    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/home/claimItems`, {
            name: props.name,
            mfg: props.mfg,
            designerName: designerName,
            projectName: projectName,
            quantity: quantity,
            takenBy:userName
        });
        
        alert(response.data);  
        window.location.reload(true);
        props.onHide();  
    } catch (err) {
        console.error("Error while claiming items:", err.message);
    }
}; 
  return (
    <div>
      <Modal
      {...props}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form >
      <Form.Group className="mb-3 "  >
        <Form.Label><h5>Project Name</h5></Form.Label>
        <Form.Control type="text" placeholder="Enter the project name"   onChange={(e)=>setProjectName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Project Designer Name</h5></Form.Label>
        <Form.Control type="text" placeholder="Enter the project designer name" onChange={(e)=>setDesignerName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Number Of Quantity Required</h5></Form.Label>
        <Form.Control type="Number" placeholder="Enter the quantity required"  onChange={(e)=>setQuantity(e.target.value)}/>
      </Form.Group>
    </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button style={{backgroundColor:'#26d3ff',border:'#26d3ff',color:'black'}} disabled={isDisabled} onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default DetailModal
