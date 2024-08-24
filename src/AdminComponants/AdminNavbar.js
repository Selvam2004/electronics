import React, { useEffect, useState } from 'react'
import '../css/AdminNavbar.css'
import logo1 from "../images/companylogo.webp"; 
import { Outlet, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
const AdminNavbar = () => {
  const [activeKey, setActiveKey] = useState("/dashboard/home");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/home/userData`, { withCredentials: true })
      .then((res) => {
        if (res.data.status === "Success"&& res.data.access==="admin") { 
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
        <div className='nav-main-div'     >
            <div className="nav-left-div" >
            <Nav
              className="flex-column w-100 "
              defaultActiveKey="/dashboard/home"
              activeKey={activeKey}               
              onSelect={(selectedKey) => setActiveKey(selectedKey)}
            > 
            <div className="img-div mb-3"><img src={logo1} alt='company_logo' className='cmp-logo'></img></div>
              <Nav.Item className="nav-item" >
                <Nav.Link  
                  eventKey="/dashboard/home"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/home")} 
                  className="item"
                > 
                  <span className="ms-2 d-none d-sm-inline ">Dashboard</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" >
                <Nav.Link 
                  eventKey="/dashboard/addProduct"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/addUser")} 
                  className="item"
                > 
                  <span className="ms-2 d-none d-sm-inline ">Add User</span>
                </Nav.Link>
              </Nav.Item> 
              <Nav.Item className="nav-item" >
                <Nav.Link 
                  eventKey="/dashboard/addProduct"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/addProduct")} 
                  className="item"
                > 
                  <span className="ms-2 d-none d-sm-inline ">Add Product</span>
                </Nav.Link>
              </Nav.Item> 
            </Nav> 
                {/* <div className="top-item" >
                    <div className="img-div"><img src={logo1} alt='company_logo' className='cmp-logo'></img></div>
                    <div className="nav-item"  defaultActiveKey="/dashboard/main"   activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                        <div className="item" eventKey="/dashboard/main"
                  onClick={(e) => handleNavItemClick(e, "/dashboard/main")}>Home</div>
                        <div className="item">Add User</div>
                        <div className="item">Add Product</div>
                    </div>
                </div> */}
                 
            </div>
            <div className="nav-right-div">
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar