import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
const ProductEditmodal = (props) => {
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
                  <Form.Control
                    type="text"
                    placeholder="Enter the Category"
                  />
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
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 ">
                  <Form.Label>
                    <h5>Link To Buy</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Link To Buy"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <h5>Image Url</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter the Image Url"
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
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductEditmodal;
