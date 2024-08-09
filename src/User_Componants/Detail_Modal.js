import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Detail_Modal = (props) => {
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
        <Form.Control type="text" placeholder="Enter the project name"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Project Designer Name</h5></Form.Label>
        <Form.Control type="text" placeholder="Enter the project designer name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label><h5>Number Of Quantity Required</h5></Form.Label>
        <Form.Control type="Number" placeholder="Enter the quantity required" />
      </Form.Group>
    </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button style={{backgroundColor:'#26d3ff',border:'#26d3ff',color:'black'}} onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Detail_Modal
