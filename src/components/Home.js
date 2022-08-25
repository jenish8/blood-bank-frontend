import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Menu from '../components/menu';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import {PLACES} from '../shared/places';
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
  console.log("username:-"+sessionStorage.getItem('user'));
  return (
    <>
      <div className="wrapper">
          <Navigation/>
						{/* <Menu places={this.state.places}>
								</Menu> */}
					<Footer />
      </div>
    </>
  );
}

export default Home;