import { Route, Routes } from 'react-router-dom';
import Home from './UserComponants/Home'; 
import Login from './loginComponent/login';
import ForgotPassword from './loginComponent/ForgotPassword';

export default function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgotPassword/:email" element={<ForgotPassword/>}/>
    </Routes>
    </>
  ) 
}
 