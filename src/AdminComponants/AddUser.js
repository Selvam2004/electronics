import React from "react";
import "../css/AddUser.css";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
const AddUser = () => {
  return (
    <div>
      <div className="main-div">
        <div className="title-div">
          <h1>Enter The User Details</h1>
          <div className="line"></div>
        </div>
        <div className="add-div">
          <form className="user-form">
            <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                className="add-input"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="add-input"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className="add-input"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group"  controlId="formBasicEmail" >
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Designation"
                className="add-input"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" >
              <Form.Label>Role</Form.Label>
              <Form.Select
              aria-label="Default select example"
              className="add-input"
            >
              <option>Select The Role</option>
              <option value="1">User</option>
              <option value="2">Administrator</option>
            </Form.Select>
            </Form.Group>
            <div className="btn-div">
              <button className="add-btn">Add User</button>
            </div>
          </form>
        </div>
        <div className="user-delete-div">
        <div className="title-div">
          <h1>Delete User</h1>
          <div className="line-delete"></div>
        </div>
        <div className="delete-div">
          <form className="delete-form">
          <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="add-input"
              />
            </Form.Group>
          <div className="btn-div">
              <button className="add-btn">Detele User</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
