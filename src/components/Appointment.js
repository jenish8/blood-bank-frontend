import React from "react";
import bloodcover from "../images/blood1.jpg"
import { makeStyles } from "@mui/styles"
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';




function Appointment() {

    // const classes = useStyles();

    const [username, setusername] = useState("");
    const [gender, setgender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState();
    console.log(bloodGroup);


    async function registerAppointment(event) {
        event.preventDefault();

        if (username === "") {
            alert("Enter Username");
            return;
        }

       
        if (appointmentDate === "") {
            alert("Enter Appointment");
            return;
        }

        if (age === "") {
            alert("Enter Age");
            return;
        }

       
        const result = await fetch('http://localhost:4000/user/donation-add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                appointmentDate,
            }),
        })

        const data = await result.json();
        console.log(data);


    }

    return <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh" }}>
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="col-md-7 col-lg-5 shadow p-3" style={{ backgroundColor: "pink" }}>
                    <div className="rounded w-100"
                        style={{ backgroundImage: `url(${bloodcover})`, height: "300px", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                    </div>
                    <div className="p-3">
                        <div className="d-flex">
                            <div className="w-100">
                                <h3 className="mb-4 h1">Appointment Page</h3>
                            </div>
                        </div>
                        <form onSubmit={'#'} name="signup">
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Username</label>
                                <input type="text"
                                    className={`form-control  `}
                                    value = {username}
                                    name="name" onChange={(e)=>setusername(e.target.value)} />
                                {/* {errors.firstName && <div className="alert-danger my-3 p-2">{errors.firstName}</div>} */}
                            </div>
                            {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Last Name</label>
                          <input type="text" className={`form-control  `}
                              name="lastName"  onChange={'#'} />
                          {errors.lastName && <div className="alert-danger my-3 p-2">{errors.lastName}</div>}
                      </div> */}
                            <br></br>


                           

                            {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Date Of Birth</label>
                          <input type="date" className={`form-control`} name="dob" />
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Aadhar Number</label>
                          <input type="number" className={`form-control `} name="username"  />
                      </div> */}
                            {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Profile Photo</label>
                          <input type="file" accept="image/png, image/jpg, image/jpeg" className={`form-control ${errors.profile ? "is-invalid"
                              : ""}`} name="profile" value={values.profile} onChange={handleChange} />
                          {errors.profile && <div className="alert-danger my-3 p-2">{errors.profile}
                          </div>}
                      </div> */}
                            {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Gender</label>
                          <br />
                          <label>Male</label>
                          <input type="radio" className={`ms-2  `} name="gender" value="male"   />
                          <label className='ms-3'>Female</label>
                          <input type="radio" className={`ms-2  `} name="gender" value="female" />
                      </div> */}

                            <div className="form-group my-3">
                                <label className="form-control-placeholder">Appointment Date</label>
                                <input type="date" className={`form-control `}
                                    name="password" value={appointmentDate}  
                                    onChange={(e)=>setappointmentDate(e.target.value)}
                                    />
                            </div>

                            <div className="form-group my-3">
                                <button type="submit" onClick={registerAppointment} className="form-control btn btn-primary rounded submit px-3">Book Appointment
                                </button>
                            </div>
                            <div className="form-group mt-5">
                                <div className="w-100 text-center">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
};

export default Appointment;