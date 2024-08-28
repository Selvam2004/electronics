import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
const ProductEditmodal = (props) => {
  const _id=props._id;
  const [name,setName]=useState(props.name);
  const [mfg,setMfg]=useState(props.mfg);
  const [mfgpart,setMfgpart]=useState(props.mfgpart);
  const [supplier,setSupplier]=useState(props.supplier);
  const [category,setCategory]=useState(props.category); 
  const [linkToBuy,setLinkToBuy1]=useState(props.linkToBuy);
  const [linkToBuy2,setLinkToBuy2]=useState(props.linkToBuy2);
  const [available,setAvailable]=useState(props.available);
  const[minQuantity,setminimumqty]=useState(props.minQuantity);
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
  const handleClick = ()=>{
    axios.post(`${process.env.REACT_APP_API}/dashboard/updateProduct`, {_id,name,mfg,mfgpart,supplier,linkToBuy,linkToBuy2,minQuantity,category,available,userName},{withCredentials:true})
    .then(res=>{
      alert(res.data)
      window.location.reload(true);
  })
    .catch(err=>console.log(err));
  }
  return (
    <div>
      <Modal
        {...props}
          size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Product Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5> Name</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Product name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Mfgpart</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Mfgpart"
                    value={mfgpart}
                    onChange={e=>setMfgpart(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5>Supplier</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Supplier name"
                    value={supplier}
                    onChange={e=>setSupplier(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Mfg</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Mfg"
                    value={mfg}
                    onChange={e=>setMfg(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5>Category</h5>
                  </Form.Label>
                  <Form.Select
              aria-label="Default select example" 
              value={category}
              onChange={e=>setCategory(e.target.value)}
              
            >
              <option>Select The Category</option>
              <option value="General">General</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Electrical">Electrical</option>
            </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Available Count</h5>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the Available Count"
                    value={available}
                    onChange={e=>setAvailable(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5>Minimum no.of Qty</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Minimum quantity"
                    value={minQuantity}
                    onChange={e=>setminimumqty(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5>Link To Buy 1</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Link To Buy"
                    value={linkToBuy}
                    onChange={e=>setLinkToBuy1(e.target.value)}
                  />
                </Form.Group>
                </Col>
            </Row>
            <Row>

              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Link To Buy 2</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Link To Buy"
                    value={linkToBuy2}
                    onChange={e=>setLinkToBuy2(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#26d3ff",
              border: "#26d3ff",
              color: "black",
              width:"10%"
            }}
            onClick={handleClick}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductEditmodal;
