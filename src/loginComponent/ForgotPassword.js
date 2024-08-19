import Navbar from "react-bootstrap/Navbar";
import "../css/forgotpwd.css";
import logo1 from "../images/companylogo.webp";
import Container from "react-bootstrap/Container"; 
import Form from 'react-bootstrap/Form'; 
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


function ForgotPassword() { 
    const {email}=useParams();
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errors,setErrors] = useState({});
    const navigate = useNavigate(); 
    const handleSubmit = (e)=>{
        e.preventDefault();
        let error={};
        if(!password||!confirmPassword){
            error.msg="*Enter password please";
            setErrors(error);
        }
        else if(password!==confirmPassword){
            error.msg="*Password does not match";
            setErrors(error);
        }
        else if(password.length<5){
                error.msg="*Password length should be atleast 6"
                setErrors(error);
        }
        else{
             axios.post(`${process.env.REACT_APP_API}/changePassword`,{email:email,password:password},{ withCredentials: true })
             .then(res=>{
                alert(res.data)
                navigate('/');
             })
             .catch(err=>console.log(err));
        }
    }
  return (
    <div className="pwd-div">
        <Navbar 
        expand="lg" 
        style={{ backgroundColor: "#26d3ff" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo1} alt="company logo" className="companylogo"></img>
          </Navbar.Brand>
        </Container>
       </Navbar>
       <div className="forgot-pwd">
         <div className="pwd-cnt">
            <h2 style={{textAlign:"center"}}>Reset Password</h2>
       <Form> 
                <Form.Group className="mb-3 mt-4" controlId="formBasicPassword" >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter new password" className='login-input' onChange={e=>setPassword(e.target.value)}/>
                  
                 </Form.Group>    
             
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter confirm password"  className='login-input'  onChange={e=>setConfirmPassword(e.target.value)}/>
                  <p style={{color:"red"}}>{errors.msg}</p>
                 </Form.Group>
                 
        </Form>
        <div className=' d-block text-center'>
              <button className='login-btn mt-2' onClick={handleSubmit}>Change</button>
              </div>
        </div></div>
    </div>
  )
}

export default ForgotPassword;
