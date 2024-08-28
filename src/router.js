import { Route, Routes } from 'react-router-dom';
import Home from './UserComponants/Home'; 
import Login from './loginComponent/login';
import ForgotPassword from './loginComponent/ForgotPassword';
import AdminNavbar from './AdminComponants/AdminNavbar';
import AdminHome from './AdminComponants/AdminHome';
import AddUser from './AdminComponants/AddUser';
import AddProduct from './AdminComponants/AddProduct';
import ProductHistory from './AdminComponants/ProductHistory';
import AdminHistory from './AdminComponants/AdminHistory';
import ProjectHistory from './AdminComponants/ProjectHistory';
import ProjectDetails from './AdminComponants/ProjectDetails';
import PendingOrders from './AdminComponants/PendingOrders';

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
         <Route path="producthistory/:_id" element={<ProductHistory/>}/>
         <Route path='history' element={<AdminHistory/>}/>
         <Route path='project' element={<ProjectHistory/>}/>
         <Route path='projectdetails' element={<ProjectDetails/>}/>
         <Route path='pendingorders' element={<PendingOrders/>}/>

        </Route>
    </Routes>
    </>
  ) 
}
 