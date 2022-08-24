import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import Modal from 'react-bootstrap/Modal';

import ChartistGraph from "react-chartist";
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

function Dashboard() {


  const [userDonations, setDonations] = useState("");
  const [userRevenue, setRevenue] = useState([]);
  const [userBottle, setBottle] = useState("");
  const [userDriveName, setDriveName] = useState("");
  const [userDriveDate, setDriveDate] = useState("");
  const [userCount, setCount] = useState([]);
  const [userStock, setStock] = useState([]);
  const [userMoDo, setMoDo] = useState([]);
  const [show, setShow] = useState(false);
  var row_count = 0;

  const location = useLocation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function fetchDonations() {
    await fetch("http://localhost:4000/user/total-donations")
      .then((res) => res.json())
      .then((result) => {
        setDonations(result);
      })
  }

  async function fetchRevenue() {
    await fetch("http://localhost:4000/transaction/revenue")
      .then((res) => res.json())
      .then((result) => {
        setRevenue(result);
      })
  }

  async function fetchBottlesSold() {
    await fetch("http://localhost:4000/bloodBottle/bottles-sold")
      .then((res) => res.json())
      .then((result) => {
        setBottle(result);
      })
  }

  async function fetchBottle() {
    await fetch("http://localhost:4000/bloodBottle/bottle-count")
      .then((res) => res.json())
      .then((result) => {
        setCount(result);
      })
  }

  async function fetchStock() {
    await fetch("http://localhost:4000/prerequesites/stock-count")
      .then((res) => res.json())
      .then((result) => {
        setStock(result);
      })
  }

  async function fetchMonthlyDonations() {
    await fetch("http://localhost:4000/user/monthly-donations")
      .then((res) => res.json())
      .then((result) => {
        setMoDo(result);
      })
  }

  async function fetchDrive() {
    console.log("called");
    await fetch("http://localhost:4000/drive/latest-drive")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setDriveName(result.programName);
        const dateFormat = moment(result.programDate).format('DD/MM/YY');
        setDriveDate(dateFormat);
      })
  }

  React.useEffect(() => {
    fetchDonations();
    fetchRevenue();
    fetchBottlesSold();
    fetchDrive();
    fetchBottle();
    fetchStock();
    fetchMonthlyDonations();
  }, [location]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Current Year Donations</p>
                      <Card.Title as="h4">{userDonations}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Current Year Blood Bottles Sold</p>
                      <Card.Title as="h4">{userBottle}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" onClick={handleShow}>
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers" >
                      <p className="card-category">Stock Recession</p>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Stock Recession Details</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Card className="card-plain table-plain-bg">
                          <Card.Header>
                            <Card.Title as="h4">User Database</Card.Title>
                          </Card.Header>
                          <Card.Body className="table-full-width table-responsive px-0">
                            <Table className="table-hover">
                              <thead>
                                <tr>
                                  <th className="border-0">Stock Name</th>
                                  <th className="border-0">Quantity</th>
                                </tr>
                              </thead>
                              <tbody>
                                {userStock && userStock.map(row => {
                                  return (
                                    <tr key={row_count}>
                                      <td>{row.stockName}</td>
                                      <td>{row.quantity}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Card>

                        {/* <strong>Stock Name:</strong> <strong>Stock Quantity:</strong> */}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Upcoming Program Drive</p>
                      <Card.Title >Name : {userDriveName}</Card.Title>
                      <Card.Title >{userDriveDate}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="5">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Blood Bottles Stock</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "A+",
                        "A-",
                        "B+",
                        "B-",
                        "O+",
                        "O-",
                        "AB+",
                        "AB-"
                      ],
                      series: [
                        [
                          userCount[0],
                          userCount[1],
                          userCount[2],
                          userCount[3],
                          userCount[4],
                          userCount[5],
                          userCount[6],
                          userCount[7]
                        ],
                      ]
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
                <div>
                  <label>A+ = {userCount[0]}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>A- = {userCount[1]}</label><br />
                  <label>B+ = {userCount[2]}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>B- = {userCount[3]}</label><br />
                  <label>O+ = {userCount[4]}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>O- = {userCount[5]}</label><br />
                  <label>AB+ = {userCount[6]}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>AB- = {userCount[7]}</label>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total Bottles 
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="7">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Monthly Donations</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ]
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total Bottles Donated
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Monthly Revenue</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          userRevenue[1],
                          userRevenue[2],
                          userRevenue[3],
                          userRevenue[4],
                          userRevenue[5],
                          userRevenue[6],
                          userRevenue[7],
                          userRevenue[8],
                          userRevenue[9],
                          userRevenue[10],
                          userRevenue[11],
                          userRevenue[12],
                        ],
                      ]
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 50,
                      axisX: {
                        showGrid: false,
                      },

                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total Revenue Accumulated
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
