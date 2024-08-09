import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  logo1 from "../images/companylogo.webp"
//color #a9edff
import '../css/User_nav.css'
const User_nav = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="" style={{backgroundColor:'#26d3ff'}}>
      <Container >
        <Navbar.Brand href="#home"><img src={logo1} alt='company logo' className='companylogo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <div className='nav-item' >
          <div className='profile-div'>
          <div className='profile-img'>
          < img className='user-img'  src="https://img.icons8.com/glyph-neue/FFFFFF/64/user--v1.png" alt="user--v1"/>
          </div>
          <h4>MuniRaja</h4>
          </div>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default User_nav
