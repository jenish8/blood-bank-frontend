import React from "react";
import logo from "./images/bloodbank_logo.png"
import { makeStyles } from "@mui/styles"
import { useState, useEffect } from "react";



const useStyles = makeStyles({

    body: {
        background: "#CD5C5C",
        fontFamily: "Pacifico', cursive",



    },
    heading: {

        marginBottom: "10px",
        marginLeft: "140px",
        fontFamily: "Cedarville Cursive', cursive"

    },
    form: {

        border: "10px 10px 10px 10px",
        background: "#fbfbfbaf",
        height: "750px",
        width: "650px",
        marginTop: "70px",
        marginLeft: "500px",
        border: "solid"

    },
    btn: {
        background: "#1687A7",
        color: "black",
        width: "100px",
        fontWeight: "bolder",
        marginTop: "40px",
        border: "none"

    },

    transition: "0.3s all",
    "&:hover": {



        background: "#0F2C67",
        color: "white"

    },



    label: {
        fontWeight: "bold",
        alignItems: "center",
        paddingBottom: "5px"



    },

    input: {


        background: "lightgray",
        border: "none",
        display: "inline-block",
        marginTop: "10px",
        padding: "10px"

    },






    option: {

        background: "lightgray"

    },

    img: {
        position: "inline",
        paddingLeft: "220",
        marginLeft: "auto",
        marginRight: "auto"
    }





});


function Appointment() {



    const classes = useStyles();

    const [aadharNumber, setaadharNumber] = useState("");
    const [gender, setgender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState();


    async function registerAppointment(event) {
        event.preventDefault();
        if (aadharNumber === "") {
            alert("Enter Aadhar Number");
            return;
        }

        if (gender === "") {
            alert("Enter Gender");
            return;
        }

        if (bloodGroup === "") {
            alert("Enter Blood Group");
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

        if (age < 18) {
            alert("You are under aged");
            return;
        }

        if (weight === "") {
            alert("Enter Weight");
            return;
        }

        const result = await fetch('http://localhost:4000/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                aadharNumber,
                gender,
                bloodGroup,
                appointmentDate,
                age,
                weight
            }),
        })

        const data = await result.json();
        if (data.aadharNumber.length == 10) {
            alert("Registration successful")

        }
        else {
            alert("Aadhar Number Failure")
        }
        console.log("result", data)
    }

    return  <div>

    <form className={classes.body}>
        <div className={classes.form}>
            <div>
                <h1 className={classes.heading}>Blood Donation Appointment</h1>
                {<img
                    src={logo}

                    height={80}
                    width={80}
                    className="img"
                    alt="Blood Bank logo"
                />}
            </div>
            <hr />
            <label htmlFor="">Name</label>
            <br />
            <input type="text" size={61} className={classes.text} placeholder="Enter your name" />
            <br />
            <br />


            <label width={70}>Gender</label> &nbsp;
            <select className="gender" style={{ width: "200px", height: "30px" }}>
                <option>Male</option>
                <option>Female</option>

            </select>
            <br />  <br />

            <label width={70}>Blood Group</label> &nbsp;
            <select className="gender" style={{ width: "200px", height: "30px" }}>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>

            </select>
            <br />
            <br />
            <label>Appointment Date</label>&nbsp;
            <input
                type="date"
            />



            <br />
            <br />
            <br />
            <label htmlFor="">Age</label>
            <br />
            <input
                type="number"
                size={68}
                onkeydown="pass(this)"
                id="password"
                className="text"
                placeholder="Enter Age"
                required=""
            />
            <error style={{ color: "red", fontWeight: "bolder" }} id="size" />
            <br />
            <label >Body Weight</label>
            <br />

            <input
                type="number"
                size={68}
                onkeydown="pass(this)"
                id="password"
                className="text"
                placeholder="Enter Weight"
                required=""

            />

            <br />
            <error style={{ color: "red", fontWeight: "bolder" }} id="alert" />
            <input
                type="submit"
                className={classes.btn}
                defaultValue="SUBMIT"
                style={{ marginLeft: 200 }}
            />
        </div>
    </form >

</div >

}







export default Appointment;