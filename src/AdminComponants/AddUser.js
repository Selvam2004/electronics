import React, { useState } from "react";
import "../css/AddUser.css";
import Form from "react-bootstrap/Form"; 
import axios from "axios";
const AddUser = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [designation,setDesignation]= useState("");
  const [access,setAccess]= useState("");
  const [removeEmail,setRemoveEmail]= useState("");
  const handleClick=(e)=>{
    e.preventDefault(); 
    if(name===""||email===""||password===""||designation===""||access===""){
      alert("Please Enter all details to proceed");
    }
    else{
      axios.post(`${process.env.REACT_APP_API}/registerUser`,{name,email,password,designation,access},{withCredentials:true})
      .then((res)=>{
        alert(res.data); 
        setName("");
        setEmail("");
        setPassword("");
        setDesignation("");
        setAccess("");
    })
      .catch(err=>console.log(err));
    }
  }
  const handleDelete =(e)=>{
    e.preventDefault();
    if(removeEmail===""){
      alert("Please Enter email to proceed");
    }
    else{
      axios.post(`${process.env.REACT_APP_API}/deleteUser`,{removeEmail},{withCredentials:true})
      .then((res)=>{
        alert(res.data)
        setRemoveEmail("")
    })
      .catch(err=>console.log(err));
    }
  }
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
                onChange={e=>setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="add-input"
                onChange={e=>setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                className="add-input"
                onChange={e=>setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" >
              <Form.Label>Designation</Form.Label>
              <Form.Select
              aria-label="Default select example"
              className="add-input"
              onChange={e=>setDesignation(e.target.value)}
              value={designation}
            >
              <option>Select The Designation</option>
              <option value="CEO">CEO</option>
              <option value="Senior Manager">Senior Manager</option>
              <option value="Junior Developer">Junior Developer</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-group" >
              <Form.Label>Access</Form.Label>
              <Form.Select 
              className="add-input"
              onChange={e=>setAccess(e.target.value)}
              value={access}
            >
              <option>Select The Access</option>
              <option value="user">User</option>
              <option value="admin">Administrator</option>
            </Form.Select>
            </Form.Group>
            <div className="btn-div">
              <button className="add-btn" onClick={handleClick}>Add User</button>
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
                onChange={e=>setRemoveEmail(e.target.value)}
              />
            </Form.Group>
          <div className="btn-div">
              <button className="add-btn" onClick={handleDelete}>Delete User</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
