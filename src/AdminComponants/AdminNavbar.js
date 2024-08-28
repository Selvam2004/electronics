import React, { useEffect, useState } from "react";
import "../css/AdminNavbar.css";
import logo1 from "../images/companylogo.webp";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
const AdminNavbar = () => {
  const [activeKey, setActiveKey] = useState("/dashboard/home");
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [designation,setDesignation]=useState();
  const navigate = useNavigate(); 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/home/userData`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "Success" && res.data.access === "admin") {
          setName(res.data.name);
          setEmail(res.data.email);
          setDesignation(res.data.designation);
          navigate(activeKey);
        } else {
          console.log(res.data);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  const handleNavItemClick = (event, href) => {
    event.preventDefault();
    navigate(href);
  };
  return (
    <div>
      <div className="nav-main-div">
        <div className="nav-left-div">
          <Nav
            className="flex-column w-100 "
            defaultActiveKey="/dashboard/home"
            activeKey={activeKey}
            onSelect={(selectedKey) => setActiveKey(selectedKey)}
          >
            <div className="img-div mb-3">
              <img src={logo1} alt="company_logo" className="cmp-logo"></img>
            </div>
            <Nav.Item className="nav-item">
              <Nav.Link
                eventKey="/dashboard/home"
                onClick={(e) => handleNavItemClick(e, "/dashboard/home")}
                className="item"
              >
                <span className="ms-2 d-none d-sm-inline ">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                eventKey="/dashboard/addUser"
                onClick={(e) => handleNavItemClick(e, "/dashboard/addUser")}
                className="item"
              >
                <span className="ms-2 d-none d-sm-inline ">Add User</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                eventKey="/dashboard/addProduct"
                onClick={(e) => handleNavItemClick(e, "/dashboard/addProduct")}
                className="item"
              >
                <span className="ms-2 d-none d-sm-inline ">Add Product</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="btm-div">
          <Dropdown drop="up" className="w-100">
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 p-1 toggle-btn">
          <div className="profile-div-admin">
            <div className="profile-img-admin">
              <img
                className="user-img"
                src="https://img.icons8.com/glyph-neue/FFFFFF/64/user--v1.png"
                alt="user--v1"
              />
            </div>
            <h4>{name}</h4>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100"> 
          <Dropdown.Item>{email}</Dropdown.Item>
          <Dropdown.Item href={"/forgotPassword/"+email}>Reset Password</Dropdown.Item>
          <Dropdown.Item>{designation}</Dropdown.Item>
          <Dropdown.Item href="/" >Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
        </div>
        <div className="nav-right-div">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
