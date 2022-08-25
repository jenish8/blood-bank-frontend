import React, { useState, useEffect } from "react";
import Menu from '../components/menu';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { useLocation } from "react-router-dom";
import moment from "moment";


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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Home() {
  console.log("username:-" + sessionStorage.getItem('user'));
  const location = useLocation();
  const [userList, setUserList] = useState([]);

  let row_count = 0;
  async function fetchDrive() {
    console.log("called");
    await fetch("http://localhost:4000/drive/upcomming-drive")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        result.forEach(obj=>{
          obj.programDate = moment(obj.programDate).format('DD/MM/YY');
        })
        console.log(typeof(result))
        setUserList(result);
        console.log("userList  "+ userList);
      })
  }

  React.useEffect(() => {
    fetchDrive();
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Navigation />
        <br></br>
        <Container>
          <Table className="table-hover">
            <h1>
              Upcoming program Drives  
            </h1><br/><br/>
            <tbody>
              {userList && userList.map(row => {
                return (
                  <tr key={row_count}>
                    <Card className="card-stats" style={{ backgroundColor: "#ffcccb"}}>
              <Card.Body >
                  <Col xs="8">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-favourite-28 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <Card.Title style={{fontWeight:"bolder",fontSize:"20px"}}>Program Name: {row.programName}</Card.Title>
                      <Card.Title style={{fontWeight:"bolder",fontSize:"20px"}}>Program Date: {row.programDate}</Card.Title>
                    </div>
                  </Col>
              </Card.Body>
            </Card>
                    </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default Home;
