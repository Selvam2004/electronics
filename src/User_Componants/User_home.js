import React, { useState } from "react";
import User_nav from "./User_nav";
import "../css/User_home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card_img from "../images/mouse.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Detail_Modal from "./Detail_Modal";
const User_home = () => {
  const [modalShow, setModalShow]=useState(false)
  return (
    <div>
      <User_nav />
      <div className="user-content">
        <h1>Welcome To Electro Solve</h1>
        <h3>Available Products</h3>
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <div class="group">
                  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input placeholder="Search Your Product" type="search" class="input" />
                </div>
              </div>
            </Col>
            <Col md={4}>
            <button className="badges">General</button>
            <button className="badges">Mechanical</button>
            <button className="badges">Electronics</button>
            </Col>
          </Row>
        </Container>
        <div className="card-main-div">
          <div className="card-div">
            <Card className="card-comp" style={{ width: "80%", backgroundColor: "#a9edff" }}>
              <Card.Body className="card-body">
                <Row style={{ width: "100%" }}>
                  <Col md={4} xs={12}>
                    <div className="img-div">
                      {" "}
                      <img src={card_img} className="card-img"></img>
                    </div>
                  </Col>
                  <Col md={8} xs={12} className="product-desp">
                    <h2 className="description">Mouse</h2>
                    <h5 className="description">
                      ES Part:ES12345678998745632115426587
                    </h5>
                    <Row className="description">
                      <Col>
                        <h5>Mfg Part: xxx-xxxxx-xxxxx-xxx</h5>
                      </Col>
                      <Col>
                        <h5>Mfg : Dell</h5>
                      </Col>
                    </Row>
                    <Row className="description">
                      <Col>
                        <h5>Supplier :Flipart</h5>
                      </Col>
                      <Col>
                        <h5>Category: General</h5>
                      </Col>
                    </Row>
                    <h5 className="description">Available Quanttity: 50</h5>
                    <Button
                    onClick={()=>setModalShow(true)}
                      style={{
                        backgroundColor: "#26d3ff",
                        border: "#26d3ff",
                        float: "right",
                        padding: "13px",
                        color: "black",
                      }}
                    >
                      Claim Product
                    </Button>
                    <Detail_Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_home;
