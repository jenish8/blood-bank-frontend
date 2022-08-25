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
        // result.forEach(obj=>{
        //   obj.programDate = moment(obj.programDate).format('DD/MM/YY');
        // })
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
        <Container fluid>
          <Table className="table-hover">
            <thead>
              <tr>
                <th className="border-0">Program Name</th>
                <th className="border-0">Program Date</th>
              </tr>
            </thead>
            <tbody>
              {userList && userList.map(row => {
                return (
                  <tr key={row_count}>
                    <td>{row.programName}</td>
                    <td>{row.programDate}</td>
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
