import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import AdminNavbar from "../components/Admin/Navbars/AdminNavbar";
import Footer from "../components/Admin/Footer/Footer";
import Sidebar from "../components/Admin/Sidebar/Sidebar";

import routes from "../routes.js";

import sidebarImage from "../assets/img/sidebar-3.jpg";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Prerequesites() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const [name,setStockName]=useState("");
  const [sName,setSname]=useState("");
  const [qty,setQty]=useState("");
  const [newName,setNewName]=useState("");
  const [newQty,setNewQty]=useState("");
  const [userList, setUserList] = useState([])
  var row_count = 0;

  async function handleCloseandAdd(event) {

    const url = `http://localhost:4000/prerequesites/add`;
    const name = event.target.value;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sName,
        qty
      }),
    })

    const res = await result.json();
    console.log(res);
    setShow(false);
    fetchData();
  }

  async function handleShow1(event) {
    setShow1(true);
    const name = event.target.id;
    setStockName(name);
    console.log(name);
  }

  async function updateStock(event) {
    console.log(name);
    const url = `http://localhost:4000/prerequesites/update/${name}/${newName}/${newQty}`;
    const result = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const res = await result.json();
    console.log(res);
    setShow1(false);
    fetchData();
  }

  async function fetchData() {
    await fetch("http://localhost:4000/prerequesites/all")
      .then((res) => res.json())
      .then((result) => {
        setUserList(result);
      })
  }

  async function fetchStockname(event) {

    const url = `http://localhost:4000/prerequesites/stock-find`;
    const name = event.target.value;
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    })

    const res = await result.json();
    console.log(res);
    setUserList(res);
  }
  React.useEffect(() => {
    fetchData();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">

            <Container fluid>
              <Row>
                <Col md="12">
                  <div class="search-container">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Search Prerequesites By Stock Name:</strong>&nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="Search.." name="search" onChange={fetchStockname} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <Button variant="primary" onClick={handleShow}>
                      Add stock
      </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add Stock Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <strong>Stock Name:</strong> <input type="text" value={sName} onChange={(e)=>setSname(e.target.value)}></input><br/><br/>
                        <strong>Stock Quantity:</strong> <input type="text" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
          </Button>
                        <Button variant="primary" onClick={handleCloseandAdd}>
                          Add Stock
          </Button>
                      </Modal.Footer>
                    </Modal>
                  </div><br /><br />
                  <Card className="card-plain table-plain-bg">
                    <Card.Header>
                      <Card.Title as="h4">Prerequesites Database</Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                      <Table className="table-hover">
                        <thead>
                          <tr>
                            <th className="border-0">Stock Name</th>
                            <th className="border-0">Quantity</th>
                            <th className="border-0">Update</th>
                          </tr>
                        </thead>
                        <tbody>

                          {userList && userList.map(row => {
                            return (
                              <tr key={row_count}>
                                <td>{row.stockName}</td>
                                <td>{row.quantity}</td>
                                {/* <td><button type="button" class="btn btn-danger">Drop</button></td> */}
                                <Button variant="success" onClick={handleShow1} id={row.stockName}>Update</Button>
                                <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Update Stock Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <strong>Stock Name:</strong> <input type="text"  value={newName} onChange={(e)=>setNewName(e.target.value)}></input><br/><br/>
                                  <strong>Stock Quantity:</strong> <input type="text" value={newQty} onChange={(e)=>setNewQty(e.target.value)}></input>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose1}>Close</Button>
                                  <Button variant="primary" onClick={updateStock}>Update Stock </Button>
                                </Modal.Footer>
                              </Modal>
                              </tr>
                            );
                          })}

                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Prerequesites;
