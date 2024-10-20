import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import "../css/User_home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"; 
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import DetailModal from "./DetailModal";
import UserFooter from "./UserFooter";
import axios from "axios";
import Loader from "../loginComponent/Loader";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [loading,SetLoading] = useState(false);

  useEffect(() => {
    const data = items.filter((data) => {
      return data.name.toLowerCase().includes(search.toLowerCase()) || 
             data.supplier.toLowerCase().includes(search.toLowerCase()) || 
             data.mfgpart.toLowerCase().includes(search.toLowerCase()) || 
             data.espart.toLowerCase().includes(search.toLowerCase()) || 
             data.category.toLowerCase().includes(search.toLowerCase()) || 
             data.mfg.toLowerCase().includes(search.toLowerCase());
    });

    setFilter(search === "" ? items : data);
    // eslint-disable-next-line 
  }, [search, items]);

  const filterGeneral = () => {
    const data = items.filter((data) => data.category === "General");
    setFilter(data);
  };

  const filterMechanical = () => {
    const data = items.filter((data) => data.category === "Mechanical");
    setFilter(data);
  };

  const filterElectronics = () => {
    const data = items.filter((data) => data.category === "Electronics");
    setFilter(data);
  };

 
  

  useEffect(() => {
    SetLoading(true);
    axios.get(`${process.env.REACT_APP_API}/home/getItems`)
      .then(res => {
        console.log(res.data)
        setItems(res.data);
        setFilter(res.data);
        SetLoading(false)
      })
      .catch(err => console.log(err.message));
    // eslint-disable-next-line 
  }, []);

  const handleModalShow = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  return (
    <div>
      <UserNav />
      <div className="user-content">

        <h1>Welcome To Electro Solve</h1>

        <h3>Available Products</h3>
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <div className="group">
                  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input
                    placeholder="Search Your Product"
                    type="search"
                    className="input"
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <button className="badges" onClick={filterGeneral}>General</button>
              <button className="badges" onClick={filterMechanical}>Mechanical</button>
              <button className="badges" onClick={filterElectronics}>Electronics</button>
            </Col>
          </Row>
        </Container>
        {loading? <div style={{minHeight:"50vh"}}><Loader/></div>:
        <div>
        {
          filter.filter(item=>item.available>0).map((item, index) => (
            <div className="card-main-div" key={index}>
              <div className="card-div">
                <Card className="card-comp" style={{ width: "80%", backgroundColor: "#a9edff" }}>
                  <Card.Body className="card-body">
                    <Row style={{ width: "100%" }}>
                      <Col md={4} xs={12}>
                        <div className="img-div">
                          <img src={item.image} className="card-img" alt={item.name} />
                        </div>
                      </Col>
                      <Col md={8} xs={12} className="product-desp">
                        <h2 className="description">{item.name}</h2>
                        <h5 className="description">ES Part: {item.espart}</h5>
                        <Row className="description">
                          <Col md={8}>
                            <h5>Mfg Part: {item.mfgpart}</h5>
                          </Col>
                          <Col md={4}>
                            <h5>Mfg: {item.mfg}</h5>
                          </Col>
                        </Row>
                        <Row className="description">
                          <Col md={8}>
                          <h5>SupplierId: {item.supplierId}</h5>
                          </Col>
                          <Col md={4}>
                          <h5>Supplier: {item.supplier}</h5>
                          </Col>
                        </Row>
                       <Row  className="description">
                        <Col md={8}>
                        <h5  >Available Quantity: {item.available}</h5>
                        </Col>
                        <Col md={4}>
                        <h5 >Category: {item.category}</h5>
                        </Col>
                       </Row>
                        <Button
                          onClick={() => handleModalShow(item)}
                          style={{
                            backgroundColor: "#26d3ff",
                            border: "#26d3ff",
                            float: "right",
                            padding: "13px",
                            color: "black",
                          }}
                        >
                          Claim Product
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))
        }

        {selectedItem && (
          <DetailModal
            show={modalShow}
            name={selectedItem.name}
            mfg={selectedItem.mfg}
            onHide={() => setModalShow(false)}
          />
        )}</div>
      }
      </div>
      <UserFooter />
    </div>
  );
};


export default Home;
