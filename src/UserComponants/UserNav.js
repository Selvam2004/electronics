import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container"; 
import Navbar from "react-bootstrap/Navbar"; 
import logo1 from "../images/companylogo.webp";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//color #a9edff
import "../css/User_nav.css";
import { Row } from "react-bootstrap";
const UserNav = () => {
  const [profile, Setprofile] = useState("none");
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [designation,setDesignation]=useState();
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:3500/home/userData`,{ withCredentials: true })
    .then((result)=>{
      if(result.data.status==="Error"){
         navigate("/");
      }
       setName(result.data.name);
       setEmail(result.data.email);
       setDesignation(result.data.designation);
    })
  },[navigate])
  const handleLogOut =(e)=>{
    e.preventDefault();
    navigate("/");
  }
  const manageClick = () => {
    if (profile === "none") {
      Setprofile("block");
    } else {
      Setprofile("none");
    }
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ backgroundColor: "#26d3ff", }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo1} alt="company logo" className="companylogo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="nav-item">
              <div className="profile-div" onClick={manageClick}>
                <div className="profile-img">
                  <img
                    className="user-img"
                    src="https://img.icons8.com/glyph-neue/FFFFFF/64/user--v1.png"
                    alt="user--v1"
                  />
                </div>
                <h4>{name}</h4>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="user-info" style={{ display: profile }}>
        <Row>
         <div ><h5 className="option" style={{borderRadius:'8px 8px 0px 0px '}}>{email}</h5></div>
         <div><h5 className="option">{designation}</h5></div>
         <div><a href={"/forgotPassword/"+email} style={{textDecoration:"none",color:"black"}}> <h5 className="option">Reset Password</h5></a> </div>
         <div><h5 className="option" style={{color:'red',borderRadius:'0px 0px 8px 8px '}} onClick={handleLogOut}>Log Out</h5></div>
        </Row>
      </div>
    </div>
  );
};

export default UserNav;
