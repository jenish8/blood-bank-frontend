import React from "react";
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

function Donor() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  React.useEffect(() => {
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Search Donor Details by Name:</strong>&nbsp;&nbsp;&nbsp; 
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </div><br/><br/>
                  <Card className="card-plain table-plain-bg">
                    <Card.Header>
                      <Card.Title as="h4">Donor Database</Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                      <Table className="table-hover">
                        <thead>
                          <tr>
                            <th className="border-0">Aadhar_No</th>
                            <th className="border-0">Name</th>
                            <th className="border-0">Blood Group</th>
                            <th className="border-0">Gender</th>
                            <th className="border-0">Date Of Birth</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                            <td>Oud-Turnhout</td>
                          </tr>
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

export default Donor;
