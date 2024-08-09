import './css/login.css';

import Form from 'react-bootstrap/Form'; 
import loginImage from "./images/logImage.jpg"
import  logo1 from "./images/companylogo.webp"
import { useState } from 'react';
function Login() {
  const [imgcls,Setimgcls ] = useState("img");
  const change=(e)=>{
      e.preventDefault();
      Setimgcls(imgcls==="img"?"img-not":"img");
  }
  return (
    <>
    <div className='login d-flex flex-column justify-content-center'>

     <div className='login-box '>
      
          <div className='box-1'>
            
            <img src={loginImage} alt='sample' className={imgcls}/>

            <div className='login-div'> 
              <div className='login-cnt'>
                <div  className='d-block text-center'>
                 <img src={logo1} alt='comnylogo'style={{width:"150px",height:"50px"}}/>
                </div>
             <h3 className='text-center mt-1 mb-3'>Admin Login</h3>         
 
             <Form> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className='login-input'/>
                 </Form.Group>    
             
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  className='login-input'/>
                 </Form.Group>
              </Form>
              <a href='password' className='d-block'>Forgot Password?</a><br/>
              <div className=' d-block text-center'>
              <button className='login-btn'>LOGIN</button>
              </div>
              <div className='mt-4 d-block text-center'> User Login? <a href='change' onClick={change} >Click here</a></div> 
            </div> 
            </div>
          </div>

          <div className='box-2'>
            <div className='login-cnt'>
            <div  className='d-block text-center'>
                 <img src={logo1} alt='comnylogo' style={{width:"150px",height:"50px"}}/>
                </div>
             <h3 className='text-center mt-1 mb-3'>SIGN IN</h3>
             
             <Form> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className='login-input'/>
                 </Form.Group>    
             
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  className='login-input'/>
                 </Form.Group>
              </Form>
              <a href='password' className='d-block'>Forgot Password?</a><br/>
              <div className=' d-block text-center'>
              <button className='login-btn'>LOGIN</button>
              </div>
              <div className='mt-4 d-block text-center'> Admin Login? <a href='change' onClick={change} >Click here</a></div>
 
            </div>
          </div>
          
     </div>
    </div>

    </>
  );
}

export default Login;
