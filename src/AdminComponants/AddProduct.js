import React, {   useEffect, useState } from 'react'
import '../css/AddProduct.css'
import Form from "react-bootstrap/Form";
import { Col, Row } from 'react-bootstrap'; 
import axios from 'axios';
import Loader from '../loginComponent/Loader';
const AddProduct = () => {
  const [name,setName]=useState("");
  const [supplier,setSupplier]=useState("");
  const [mfg,setMfg]=useState("");
  const [mfgpart,setMfgpart]=useState("");
  const [category,setCategory]=useState("");
  const [available,setAvailable]=useState("");
  const [image, setImage] = useState(null);
  const [linkToBuy,setLinkToBuy1]=useState("");
  const [linkToBuy2,setLinkToBuy2]=useState("");
  const[minQuantity,setminimumqty]=useState("");
  const [userName,setUserName]=useState("")
  const[type,setType]=useState("")
  const [loading,SetLoading] = useState(false);
  const[supplierId,setsupplierId]=useState("")

useEffect(()=>{
  axios
  .get(`${process.env.REACT_APP_API}/home/userData`, {
    withCredentials: true,
  })
  .then((res) => { 
      setUserName(res.data.name)
  })
  .catch((err) => console.log(err));
},[]);
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleClick = (e)=>{

    e.preventDefault();
    if(name===""||supplier===""||mfg===""||mfgpart===""||category===""||available===""||image==null||linkToBuy===""||linkToBuy2===""||minQuantity===""||type===""||supplierId===""){
      alert("Please Enter all Details");
    }
    else{
      const formData = new FormData();
      formData.append('name', name);
      formData.append('supplier', supplier);
      formData.append('mfg', mfg);
      formData.append('mfgpart', mfgpart);
      formData.append('available', available);
      formData.append('linkToBuy', linkToBuy);
      formData.append('linkToBuy2', linkToBuy2); 
      formData.append('image', image);
      formData.append('minQuantity', minQuantity);
      formData.append('category', category);
      formData.append('userName', userName);
      formData.append('type',type);
      formData.append('supplierId',supplierId);
      SetLoading(true);
      alert(supplierId);
      try{
        axios.post(`${process.env.REACT_APP_API}/home/addItems`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          }},{withCredentials:true})
        .then(res=>{
          alert(res.data)   
          SetLoading(false);      
        })
        .catch(err=>console.log(err));
      }
        catch(err){
          console.log(err)
       }
    }
  }  
  return (
    <div> 
      <div className='main-div-product'>
      <div className="title-div">
          <h1>Enter The Product Details</h1>
          <div className="line-product"></div>
        </div>
        {loading? <div style={{minHeight:"50vh"}}><Loader/></div>:
        <div className='product-div'> 
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                className="product-input"
                onChange={e=>setName(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Mfgpart</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mfgpart"
                className="product-input"
                onChange={e=>setMfgpart(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Supplier"
                className="product-input"
                onChange={e=>setSupplier(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Mfg</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mfg"
                className="product-input"
                onChange={e=>setMfg(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
            <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Supplier Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Supplier Id"
                className="product-input"
                onChange={e=>setsupplierId(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Available</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Available"
                className="product-input"
                onChange={e=>setAvailable(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Image </Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter Image Url"
                className="product-input"
                onChange={handleFileChange}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Minimum no.of.Qty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the no.of Minimum Qty"
                className="product-input"
                onChange={e=>setminimumqty(e.target.value)}
              />
            </Form.Group>
                </Col>
            </Row>
            <Row className='product-row'>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Link TO Buy 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link To Buy"
                className="product-input"
                onChange={e=>setLinkToBuy1(e.target.value)}
              />
            </Form.Group>
                </Col>
                <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group " controlId="formBasicEmail">
              <Form.Label>Link To Buy 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link To Buy"
                className="product-input"
                onChange={e=>setLinkToBuy2(e.target.value)}
              />
            </Form.Group>
                </Col>
                
            </Row>
            <Row>
            <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group" >
              <Form.Label>Product Type</Form.Label>
              <Form.Select
              aria-label="Default select example"
              className="add-input"
              onChange={e=>setType(e.target.value)}
            >
              <option>Select The Product Type</option>
              <option value="FIX">FIX</option>
              <option value="OFT">OFT</option>
              <option value="JET">JET</option>
              <option value="AGI">AGI</option>
              <option value="TRD">TRD</option>
              <option value="SEI">SEI</option>
              <option value="FPT">FPT</option>
              <option value="STR">STR</option>
            </Form.Select>
            </Form.Group></Col>
            <Col md={6} className='product-col'>
                <Form.Group className="mb-3 product-group" >
              <Form.Label>Category</Form.Label>
              <Form.Select
              aria-label="Default select example"
              className="add-input"
              onChange={e=>setCategory(e.target.value)}
            >
              <option>Select The Category</option>
              <option value="General">General</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Electronics">Electronics</option>
            </Form.Select>
            </Form.Group>
                </Col>
            </Row>
            <Row>
            <div className="btn-div-pro">
              <button className="add-btn-product" onClick={handleClick}>Add Product</button>
            </div>
            </Row>
        </div>
        }
      </div>
    </div>
  )
}

export default AddProduct
