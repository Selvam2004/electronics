import React from 'react'
import '../css/AdminNavbar.css'
import logo1 from "../images/companylogo.webp";
import AddUser from './AddUser';
const AdminNavbar = () => {
  return (
    <div>
        <div className='nav-main-div'>
            <div className="nav-left-div">
                <div className="top-item">
                    <div className="img-div"><img src={logo1} alt='company_logo' className='cmp-logo'></img></div>
                    <div className="nav-item">
                        <div className="item">Home</div>
                        <div className="item">Add User</div>
                        <div className="item">Add Product</div>
                        <div className="item">History</div>
                    </div>
                </div>
                {/* <div className="nav-bottom-item">
                    <div className="profile">
                    <div className="profile-img">
                  <img
                    className="user-img"
                    src="https://img.icons8.com/glyph-neue/FFFFFF/64/user--v1.png"
                    alt="user--v1"
                  />
                </div>
                <div><h4>Munish</h4></div>
                    </div>
                </div>
                <div className="bottom-item"></div> */}
            </div>
            <div className="nav-right-div">
                <AddUser/>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar