import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

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

function User() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const [userList, setUserList] = useState([])
  var row_count = 0;

  async function fetchData() {
    await fetch("http://localhost:4000/user/all")
      .then((res) => res.json())
      .then((result) => {
        setUserList(result);
      })
  }

  async function fetchUsername(event) {
    
    const url = `http://localhost:4000/user/user-find`;
    const name= event.target.value;
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

  async function changeStatus(event) {
    const username=event.target.value;
    const check=event.target.checked;
    const url = `http://localhost:4000/user/change-status/${username}/${check}`;
    const result = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })

    fetchData();
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Search Donor Details By Username:</strong>&nbsp;&nbsp;&nbsp; 
                    <input type="text" placeholder="Search.." name="search" onChange={fetchUsername}/>
                  </div><br/><br/>
                  <Card className="card-plain table-plain-bg">
                    <Card.Header>
                      <Card.Title as="h4">User Database</Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                      <Table className="table-hover">
                        <thead>
                          <tr>
                            <th className="border-0">Username</th>
                            <th className="border-0">Name</th>
                            <th className="border-0">Email</th>
                            <th className="border-0">Contact No</th>
                            <th className="border-0">Address Line</th>
                            <th className="border-0">Active Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList && userList.map(row => {
                            return (
                              <tr key={row_count}>
                                <td>{row.userName}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.contactNumber}</td>
                                <td>{row.address}</td>
                                <td><input type="checkbox" class="btn btn-danger" defaultChecked={row.isActive} value={row.userName} name={row.isActive} onChange={changeStatus}/></td>
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

export default User;
