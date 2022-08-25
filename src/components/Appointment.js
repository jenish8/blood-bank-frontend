import React from "react";
import bloodcover from "../images/blood1.jpg"
import { makeStyles } from "@mui/styles"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify"
import { toast } from "react-toastify";

import { Link } from 'react-router-dom';

import moment, { relativeTimeRounding } from 'moment'




function Appointment() {

    // const classes = useStyles();
    const username = sessionStorage.getItem("user");
    const location = useLocation();


    const [appointmentDate, setappointmentDate] = useState("");
    const [errors,setErrors] = useState({});
    console.log(appointmentDate);

    async function registerAppointment(event) {
        event.preventDefault();
        let errs = validateForm();
        setErrors(errs)

        console.log("date" + appointmentDate);
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
        if(result.status==400){
            toast("Already donated within 90 days.")
        }
        else{
            toast("Appointment Booked.")
            window.location.reload(false);
        }


    }
    const validateForm = () => {
        let err = {}
    
        if (!appointmentDate) {
            err.appointmentDate = "Appointment Date is required."
        }
        return err;
    }

    async function fetchform(){
        console.log("Username:-"+username);
        const url = `http://localhost:4000/user/find`;
        const result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                }),
            })

        const res = await result.json();
        console.log(res);
        if(res==null){
            window.location.href='/donor/register';
        }
    }

    React.useEffect(() => {
        fetchform();
      }, [location]);

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

                            <div className="form-group my-3">
                                <label className="form-control-placeholder">Appointment Date</label>
                                <input type="date" id="date" className={`form-control `}
                                    name="password" value={appointmentDate} min={moment(new Date()).format('YYYY-MM-DD')}
                                    onChange={(e) => setappointmentDate(e.target.value)}
                                />
                                {errors.appointmentDate && <div className="alert-danger my-3 p-2">{errors.appointmentDate}</div>}

                            </div>

                            <div className="form-group my-3">
                                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Book Appointment
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