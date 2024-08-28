import { Route, Routes } from 'react-router-dom';
import Home from './UserComponants/Home'; 
import Login from './loginComponent/login';
import ForgotPassword from './loginComponent/ForgotPassword';
import AdminNavbar from './AdminComponants/AdminNavbar';
import AdminHome from './AdminComponants/AdminHome';
import AddUser from './AdminComponants/AddUser';
import AddProduct from './AdminComponants/AddProduct';
import ProductHistory from './AdminComponants/ProductHistory';
import Img from './img';

export default function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/img" element={<Img/>}/>
        <Route path="/forgotPassword/:email" element={<ForgotPassword/>}/>
        <Route path='/dashboard' element={<AdminNavbar/>}>
         <Route path="home" element={<AdminHome/>}/>
         <Route path="addProduct" element={<AddProduct/>}/>
         <Route path="addUser" element={<AddUser/>}/>
         <Route path="producthistory/:_id" element={<ProductHistory/>}/>

        </Route>
    </Routes>
    </>
  ) 
}
 