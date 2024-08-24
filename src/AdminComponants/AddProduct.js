import React from 'react'
import '../css/AddProduct.css'
import Form from "react-bootstrap/Form";
import { Col, Row } from 'react-bootstrap';
const AddProduct = () => {
  return (
    <div>
      <div className='main-div'>
      <div className="title-div">
          <h1>Enter The Product Details</h1>
          <div className="line-product"></div>
        </div>
        <div className='product-div'> 
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                className="product-input"
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
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                className="product-input"
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Available</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Available"
                className="product-input"
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
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Link To Buy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link To Buy"
                className="product-input"
              />
            </Form.Group>
                </Col>
            </Row>
            <Row>
            <div className="btn-div">
              <button className="add-btn">Add Product</button>
            </div>
            </Row>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
