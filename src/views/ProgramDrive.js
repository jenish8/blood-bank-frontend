import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import moment from "moment";
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

function ProgramDrive() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const [userList, setUserList] = useState([])
  const [name, setName] = useState()
  var sname;
  var row_count = 0;

  async function fetchData() {
    await fetch("http://localhost:4000/drive/all")
      .then((res) => res.json())
      .then((result) => {
        result.forEach(obj=>{
          obj.programDate = moment(obj.programDate).format('DD/MM/YY')
        })
        setUserList(result);
      })
  }

  async function fetchProgramname(event) {
    
    const url = `http://localhost:4000/drive/program-find`;
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
    res.forEach(obj=>{
      obj.programDate = moment(obj.programDate).format('DD/MM/YY')
    })
    setUserList(res);
  }

  async function fetchName(contactNumber) {
    
    const url = `http://localhost:4000/supervisor/all`;

    const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contactNumber,
            }),
        })

    const superName = await result.json();
    console.log(superName);
    sname=superName.supervisorName;
    setName(sname);
    console.log(name);
  }

  React.useEffect(() => {
    fetchData();
    //{fetchName("8000561122")}
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
                    <input type="text" placeholder="Search.." name="search" onChange={fetchProgramname}/>
                  </div><br/><br/>
                  <Card className="card-plain table-plain-bg">
                    <Card.Header>
                      <Card.Title as="h4">Program Drive Database</Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                      <Table className="table-hover">
                        <thead>
                          <tr>
                            <th className="border-0">Program_ID</th>
                            <th className="border-0">Program Name</th>
                            <th className="border-0">Program Date</th>
                            <th className="border-0">Supervisor Name</th>
                            <th className="border-0">Contact No</th>
                            <th className="border-0">Accept</th>
                            <th className="border-0">Reject</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList && userList.map(row => {
                            return (
                              <tr key={row_count}>
                                <td>{row._id}</td>
                                <td>{row.programName}</td>
                                <td>{row.programDate}</td>
                                <td onLoad={fetchName(row.contactNumber)} hidden="hidden"></td>
                                <td>{name}</td>
                                <td>{row.contactNumber}</td>
                                <td><button type="button" class="btn btn-success">Accept</button></td>
                                <td><button type="button" class="btn btn-danger">Reject</button></td>

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

export default ProgramDrive;
