import { Route, Routes } from 'react-router-dom';
import Home from './UserComponants/Home'; 
import Login from './loginComponent/login';
import ForgotPassword from './loginComponent/ForgotPassword';
import AdminNavbar from './AdminComponants/AdminNavbar';
import AdminHome from './AdminComponants/AdminHome';
import AddUser from './AdminComponants/AddUser';
import AddProduct from './AdminComponants/AddProduct';
import ProductHistory from './AdminComponants/ProductHistory';

export default function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgotPassword/:email" element={<ForgotPassword/>}/>
        <Route path='/dashboard' element={<AdminNavbar/>}>
         <Route path="home" element={<AdminHome/>}/>
         <Route path="addProduct" element={<AddProduct/>}/>
         <Route path="addUser" element={<AddUser/>}/>
         <Route path="producthistory" element={<ProductHistory/>}/>

        </Route>
    </Routes>
    </>
  ) 
}
 