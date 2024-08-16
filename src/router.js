import { Route, Routes } from 'react-router-dom';
import Home from './UserComponants/Home'; 
import Login from './loginComponent/login';

export default function Router() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  ) 
}
 