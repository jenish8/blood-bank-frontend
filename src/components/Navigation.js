import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./images/bloodbank_logo.png"

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const LogOut = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-8 sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt=""
              width="100"
              height="50"
              className="d-inline-block align-text-top mx-3"
            />
            Blood Bank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
             (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link px-4" to="/register">
                    Arrange Program Drive
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-4" to="/Appointment">
                    Book Donation Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-4" to="/recipient/register">
                    Request Blood Bottle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-danger" to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            )
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;