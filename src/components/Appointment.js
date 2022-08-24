import React from "react";
import bloodcover from "../images/blood1.jpg"
import { makeStyles } from "@mui/styles"
import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import moment from 'moment'




function Appointment() {

    // const classes = useStyles();


    const formInitialValue = {
      
        username:"",
       appointmentDate:""
    }

    // const [values, setValues] = useState(formInitialValue)
    const [username, setusername] = useState("");
    const [gender, setgender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState();
    const [errors, setErrors] = useState({})
    console.log(appointmentDate);

    
    // const handleChange = (event) => {
    //     //console.log(event.target.value, event.target)
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     })
    // }



    async function registerAppointment(event) {
        event.preventDefault();
        let errs = validateForm();
        setErrors(errs)



       
        

        console.log("date"+appointmentDate);
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
        console.log("www"+data);


    }
    const validateForm = () => {
        let err = {}
        if (!username) {
            err.username = "Name is required."
        }

        if (!appointmentDate) {
            err.appointmentDate = "Appointment Date is required."
        }

       
       // console.log(currentdate);
       //document.getElementById("date").setAttribute('min',currentdate)


        return err;
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
                        <form onSubmit={registerAppointment} name="signup">
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Username</label>
                                <input type="text"
                                    className={`form-control  `}
                                    value = {username}
                                    name="name" onChange={(e)=>setusername(e.target.value)} />
                                      {errors.username && <div className="alert-danger my-3 p-2">{errors.username}</div>}
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
                                <input type="date" id="date" className={`form-control `}
                                    name="password" value={appointmentDate} min={moment(new Date()).format('YYYY-MM-DD')}
                                    onChange={(e)=>setappointmentDate(e.target.value)}
                                    />
                                    {/* {console.log(`"${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}"`)} */}
                                {errors.appointmentDate && <div className="alert-danger my-3 p-2">{errors.appointmentDate}</div>}

                            </div>

                            <div className="form-group my-3">
                                <button type="submit"  className="form-control btn btn-primary rounded submit px-3">Book Appointment
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