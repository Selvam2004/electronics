import React from "react";
import User_nav from "./User_nav";
import "../css/User_home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card_img from "../images/mouse.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
const User_home = () => {
  return (
    <div>
      <User_nav />
      <div className="user-content">
        <h1>Welcome To Electro Solve</h1>
        <h3>Available Products</h3>
      {/* <Container>
      <Row>
          <Col md={8}>
            <div>
              <div class="InputContainer">
                <input
                  placeholder="Search"
                  id="input"
                  class="input"
                  name="text"
                  type="text"
                />

                <label class="labelforsearch" for="input">
                  <svg class="searchIcon" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
              </div>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container> */}
        <div className="card-main-div">
          
          <div className="card-div">
            <Card style={{ width: "80%", backgroundColor: "#a9edff" }}>
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
                      style={{
                        backgroundColor: "#26d3ff",
                        border: "#26d3ff",
                        float: "right",
                        padding: "13px",
                        color:'black',
                      }}
                    >
                      Claim Product
                    </Button>
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
