import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card_img from "../images/mouse.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import '../css/AdminHome.css'
import ProductEditmodal from './ProductEditmodal';
const AdminHome = () => {
  const[modalShow,setModalShow]=useState(false)
  return (
    <div>
      <div className=''>
        <div className='admin-head'>
            <h2>Available Products</h2>
            <div className='line-home'></div>
        </div>
      
      <Container>
      <Row>
            <Col md={8}>
              <div>
                <div className="group">
                  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input
                    placeholder="Search Your Product"
                    type="search"
                    className="input"
                    
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <button className="badges" >General</button>
              <button className="badges" >Mechanical</button>
              <button className="badges">Electronics</button>
            </Col>
          </Row>
      <div className="card-main-div" >
              <div className="card-div">
                <Card className="card-comp" style={{ width: "80%", backgroundColor: "#a9edff" }}>
                  <Card.Body className="card-body">
                    <Row style={{ width: "100%" }}>
                      <Col md={4} xs={12}>
                        <div className="img-div">
                          <img src={card_img} className="card-img" alt="item-image" />
                        </div>
                      </Col>
                      <Col md={8} xs={12} className="product-desp">
                        <h2 className="description"></h2>
                        <h5 className="description">ES Part: </h5>
                        <Row className="description">
                          <Col>
                            <h5>Mfg Part: </h5>
                          </Col>
                          <Col>
                            <h5>Mfg: </h5>
                          </Col>
                        </Row>
                        <Row className="description">
                          <Col>
                            <h5>Supplier: Flipkart</h5>
                          </Col>
                          <Col>
                            <h5>Category:Mechanical</h5>
                          </Col>
                        </Row>
                        <h5 className="description">Available Quantity:10</h5>
                       <Row style={{margin:'10px'}}>
                        <Col md={4}>
                         <Button
                         
                          style={{
                            backgroundColor: "#26d3ff",
                            border: "#26d3ff",
                            float: "right",
                            padding: "13px",
                            color: "black",
                          }}
                        >
                           Product History
                        </Button></Col>
                        <Col md={4}>
                         <Button
                         
                          style={{
                            backgroundColor: "#26d3ff",
                            border: "#26d3ff",
                            float: "right",
                            padding: "13px",
                            color: "black",
                          }}
                          onClick={()=>setModalShow(true)}
                        >
                          Edit Product
                        </Button></Col>
                        <Col md={4}>
                         <Button
                         
                          style={{
                            backgroundColor: "#FF7F7F",
                            border: "#26d3ff",
                            float: "right",
                            padding: "13px",
                            color: "black",
                          }}
                        >
                          Delete Product
                        </Button></Col>
                       </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

              </div>
            </div>
            <ProductEditmodal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </Container>
      </div>
    </div>
  )
}

export default AdminHome
