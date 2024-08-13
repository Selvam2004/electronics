import './css/login.css';
import axios from "axios";
import Form from 'react-bootstrap/Form'; 
import loginImage from "./images/logImage.jpg"
import  logo1 from "./images/companylogo.webp"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [imgcls,Setimgcls ] = useState("img");

  let [email,setEmail] = useState();
  let [password,setPassword] = useState(); 
  let [admin,setAdmin]= useState(false);
  let [error, setError] = useState({});
  const change=(e)=>{
    e.preventDefault();
    Setimgcls(imgcls==="img"?"img-not":"img"); 
    setAdmin(!admin)
}

const handleForgot =(e)=>{
 e.preventDefault();
 axios
      .get(`http://localhost:3500/forgotPassword/${email}`,{ withCredentials: true })
      .then((result) => {
        if(result.data==="Email sent"){
          alert("Check your Email for Veification");
        }
        else{
          let errors={};
          errors.msg=result.data;
          setError(errors);
        }
      })
  
}
  const navigate = useNavigate(); 
  const handleSubmit = (e)=> {
    e.preventDefault();  
    axios
      .post("http://localhost:3500/login", { email, password },{ withCredentials: true })
      .then((result) => {
        if (result.data.status === "Success") {
          console.log(result.data);

          if(result.data.access==="admin" && admin){ 
            console.log("welcome admin"); 
            navigate("/dashboard");
          }
          else if(result.data.access==="user" && admin){
            let errors={};
            errors.msg2="*user is not a admin";
            setError(errors);
          }
          else{
            console.log("Welcome home")
            navigate("/home");
          } 
        }
        else{   
          let errors={};
          if(result.data==="*Password incorrect"){
            errors.pwd=result.data;
          }
          else{
            errors.msg=result.data;
          }
          setError(errors);
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
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
                  <Form.Control type="email" placeholder="Enter email" className='login-input' onChange={e=>setEmail(e.target.value)}/>
                  <p style={{color:"red"}}>{error.msg}</p>
                  <p style={{color:"red"}}>{error.msg2}</p>
                 </Form.Group>    
             
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  className='login-input'  onChange={e=>setPassword(e.target.value)}/>
                  <p style={{color:"red"}}>{error.pwd}</p>
                 </Form.Group>
              </Form>
              <a href='password' className='d-block' onClick={handleForgot}>Forgot Password?</a><br/>
              <div className=' d-block text-center'>
              <button className='login-btn' onClick={handleSubmit}>LOGIN</button>
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
                  <Form.Label >Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" className='login-input' onChange={e=>setEmail(e.target.value)}/>
                  <p style={{color:"red"}}>{error.msg}</p>
                 </Form.Group>    
             
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label >Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"  className='login-input' onChange={e=>setPassword(e.target.value)}/>
                  <p style={{color:"red"}}>{error.pwd}</p>
                 </Form.Group>
              </Form>
              <a href='password' className='d-block' onClick={handleForgot}>Forgot Password?</a><br/>
              <div className=' d-block text-center'>
              <button className='login-btn' onClick={handleSubmit}>LOGIN</button>
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
