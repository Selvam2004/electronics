import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Router from './router';
import AddUser from './AdminComponants/AddUser';
import AdminNavbar from './AdminComponants/AdminNavbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <Router/> */}
     <AdminNavbar/>
    </BrowserRouter>
  </React.StrictMode>
); 
reportWebVitals();
