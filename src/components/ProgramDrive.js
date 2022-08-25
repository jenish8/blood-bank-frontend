import React from "react";
import bloodcover from "../images/blood1.jpg"
import { useState, useEffect } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import Navigation from "../components/Navigation";




const Programdrive = () => {

    const formInitialValue = {
        programName: "",
        contactNumber:"",
        supervisorName: "",
    } 
    const username = sessionStorage.getItem("user");
    

    console.log(username);

    const[programDate,setProgramDate] = useState("");
    const [values, setValues] = useState(formInitialValue)
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }


    async function handleSubmit(event) {
        event.preventDefault()
        let errs = validateForm(values)
        setErrors(errs)

        if (Object.keys(errs).length === 0) {
            const programName = event.target.programName.value;
            const contactNumber = event.target.contactNumber.value;
            const supervisorName = event.target.supervisorName.value;
            let item = { programName,programDate,contactNumber,username,supervisorName};
            console.log(item);
            
            let result = await fetch("http://localhost:4000/drive/add", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            
            if(result.status == 200){
                toast("Drive requested!!");    
            }
        }
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.programName) {
            err.programName = "Program name is required."
        }
        if (!programDate) {
            err.programDate = "Date is required."
        }
        if(!values.contactNumber){
            err.contactNumber = "Contact number is required";
        }
        if (!values.supervisorName) {
            err.supervisorName = "Supervisor name is required."
        }
        if(values.contactNumber.length !== 10){
            err.contactNumber = "Number should be of 10 digits";
        }
        return err
    }



    return <div style={{ backgroundColor: "#ffcccb", minHeight: "100vh" }}>
        <Navigation/>
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="col-md-7 col-lg-5 shadow p-3" style={{ backgroundColor: "pink" }}>
                    <div className="rounded w-100"
                        style={{ backgroundImage: `url(${bloodcover})`, height: "300px", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                    </div>
                    <div className="p-3">
                        <div className="d-flex">
                            <div className="w-100">
                                <h3 className="mb-4 h1">Program Drive</h3>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} name="signup">
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Program Name</label>
                                <input type="text"
                                    className={`form-control ${errors.programName ? "is-invalid" : ""}  `}
                                    name="programName" value={values.programName} onChange={handleChange}/>
                                {errors.programName && <div className="alert-danger my-3 p-2">{errors.programName}</div>}
                            </div>
                            <br></br>
                           
                            
                            <div className="form-group my-3">
                                <label className="form-control-placeholder">Program Date</label>
                                <input type="date" className={`form-control `}
                                    name="programDate" min={moment(new Date()).format('YYYY-MM-DD')}
                                    value={programDate} onChange={(e) => setProgramDate(e.target.value)} />
                                    {errors.programDate && <div className="alert-danger my-3 p-2">{errors.programDate}</div>}
                                    
                            </div>
                            <br></br>


                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Supervisor Name</label>
                                <input type="text"
                                    className={`form-control ${errors.supervisorName ? "is-invalid" : ""}  `}
                                    name="supervisorName" value={values.supervisorName} onChange={handleChange}/>
                                {errors.supervisorName && <div className="alert-danger my-3 p-2">{errors.supervisorName}</div>}
                            </div>
                            <br></br>
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Contact Number</label>
                                <input type="text"
                                    className={`form-control ${errors.contactNumber ? "is-invalid" : ""}  `}
                                    value = {values.contactNumber}
                                    name="contactNumber" onChange={handleChange} />
                                {errors.contactNumber && <div className="alert-danger my-3 p-2">{errors.contactNumber}</div>}
                            </div>

                            <div className="form-group my-3">
                                <button type="submit" onClick={''} className="form-control btn btn-primary rounded submit px-3"> Register
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

export default Programdrive;