import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import reportWebVitals from './reportWebVitals';
import User_home from './User_Componants/User_home';
import User_nav from './User_Componants/User_nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User_home/>
    {/* <Login/> */}
  </React.StrictMode>
); 
reportWebVitals();
