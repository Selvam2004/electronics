import React from 'react'
import '../css/AddUser.css'
import { Col, Row } from 'react-bootstrap'
const AddUser = () => {
  return (
    <div>
      <div className="main-div">
        <div className="title-div">
          <h1>Enter The User Details</h1>
          <div className='line'></div>
        </div>
        <div className="add-div">
          <form className='user-form'>
           <div className='field'>
           <span><h4>Name</h4></span>
           <input className='input-field' type='text' ></input>
           </div>
           <div className='field'>
           <span><h4>Email</h4></span>
           <input className='input-field' type='email' ></input>
           </div>
           <div className='field'>
           <span><h4>Password</h4></span>
           <input className='input-field' type='text' ></input>
           </div>
          <Row>
            <Col> <div className='field'>
           <span><h4>Designation</h4></span>
           <input className='input-field' type='text' ></input>
           </div></Col>
            <Col>
            <div className='field'>
           <span><h4>Role</h4></span>
            <select className='select'>
            <option className='opt'>Select Role</option>
              <option className='opt'>Admin</option>
              <option className='opt'>User</option>
            </select>
           </div></Col>
          </Row>
          <div className="btn-div">
            <button className='add-btn'>Add User</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
