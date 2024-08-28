import React, {  useState } from 'react'
import '../css/AddProduct.css'
import Form from "react-bootstrap/Form";
import { Col, Row } from 'react-bootstrap'; 
import axios from 'axios';
const AddProduct = () => {
  const [name,setName]=useState("");
  const [supplier,setSupplier]=useState("");
  const [mfg,setMfg]=useState("");
  const [mfgpart,setMfgpart]=useState("");
  const [category,setCategory]=useState("");
  const [available,setAvailable]=useState("");
  const [imgUrl,setImageURL]=useState("");
  const [linkToBuy1,setLinkToBuy1]=useState("");
  const [linkToBuy2,setLinkToBuy2]=useState("");
  const[minQuantity,setminimumqty]=useState("");
   
 
  const handleClick = (e)=>{

    e.preventDefault();
    if(name===""||supplier===""||mfg===""||mfgpart===""||category===""||available===""||imgUrl===""||linkToBuy1===""||linkToBuy2===""||minQuantity===""){
      alert("Please Enter all Details");
    }
    else{
      axios.post(`${process.env.REACT_APP_API}/home/addItems`,{name,supplier,mfg,mfgpart,category,available,imgUrl,linkToBuy1,linkToBuy2,minQuantity},{withCredentials:true})
      .then(res=>{
        alert(res.data)         
      })
      .catch(err=>console.log(err));
    }
  }  
  return (
    <div>
      <div className='main-div-product'>
      <div className="title-div">
          <h1>Enter The Product Details</h1>
          <div className="line-product"></div>
        </div>
        <div className='product-div'> 
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                className="product-input"
                onChange={e=>setName(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Mfgpart</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mfgpart"
                className="product-input"
                onChange={e=>setMfgpart(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Supplier"
                className="product-input"
                onChange={e=>setSupplier(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Mfg</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mfg"
                className="product-input"
                onChange={e=>setMfg(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group" >
              <Form.Label>Category</Form.Label>
              <Form.Select
              aria-label="Default select example"
              className="add-input"
              onChange={e=>setCategory(e.target.value)}
            >
              <option>Select The Category</option>
              <option value="General">General</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Electronics">Electronics</option>
            </Form.Select>
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Available</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Available"
                className="product-input"
                onChange={e=>setAvailable(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image Url"
                className="product-input"
                onChange={e=>setImageURL(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Minimum no.of.Qty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the no.of Minimim Qty"
                className="product-input"
                onChange={e=>setminimumqty(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Link TO Buy 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link To Buy"
                className="product-input"
                onChange={e=>setLinkToBuy1(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Link To Buy 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link To Buy"
                className="product-input"
                onChange={e=>setLinkToBuy2(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row>
            <div className="btn-div-pro">
              <button className="add-btn-product" onClick={handleClick}>Add Product</button>
            </div>
            </Row>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
