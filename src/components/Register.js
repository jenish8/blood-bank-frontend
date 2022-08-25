import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bloodcover from "../images/blood1.jpg"
import { toast } from "react-toastify";


const Register = ({notify}) => {
     document.title = "Registration- BloodBank.com"

    const formInitialValue = {
        username:"",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        address: ""
    }
     const [values, setValues] = useState(formInitialValue)
     const [sucessMessage, setMessage] = useState("")
     const [errors, setErrors] = useState({})
     const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (event) => {
        //console.log(event.target.value, event.target)
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        //console.log("data ", event.target);
        event.preventDefault()
        // setErrors(validateForm(values))
        let errs = validateForm(values)
        // setDataIsCorrect(true)
        setErrors(errs)

        if(Object.keys(errs).length===0){
            const userName = event.target.userName.value;
            const name = event.target.name.value;
            //console.log("fn ",name);
            const email = event.target.email.value;
            const contactNumber = event.target.contactNumber.value;
            const password = event.target.password.value;
            const address = event.target.address.value;

            let item = { userName,name, email, contactNumber, password, address }
            // console.warn(item)
            let result = await fetch("http://localhost:4000/user/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })

            result = await result.json()
            console.log(result);
            window.location.href='/login';
            // if(result.message === 'Record created successfully.'){
            //     notify("Account verification link has been sent to your mail.")
            // }
        }
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.name) {
            err.name = "Name is required."
        }
        if (!values.userName) {
            err.userName = "Username is required."
        }
        if (!/\S+@\S+\.\S+/.test(values.email)) {
            err.email = "Email is invalid"
        }
        if (!values.email) {
            err.email = "Email is required."
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/.test(values.password)) {
            err.password = `At least 1 Uppercase. At least 1 Lowercase. At least 1 Number. Min 8 chars and Max 20 chars`
        }

        if (!values.password) {
            err.password = "Password is required."
        }
        if (!values.confirmPassword) {
            err.confirmPassword = "Confirm password is required."
        }
        if (values.password !== values.confirmPassword) {
            err.confirmPassword = "Password and confirm password not matching."
        }

        if (values.contactNumber.length !== 10) {
            err.contactNumber = "Contact number must be of 10 digit."
        }

        if (!values.contactNumber) {
            err.contactNumber = "Contact number is required."
        }

        // if (values.aadharNumber.length !== 12) {
        //     err.aadharNumber = "Aadhar number must be of 12 digit."
        // }
        // if (!values.aadharNumber) {
        //     err.aadharNumber = "Aadhar number is required."
        // }

        // if (!values.gender) {
        //     err.gender = "Gender is required."
        // }

        // if (!validator.isDate(values.dob)) {
        //     err.dob = "Invalid date."
        // }

        // if (!values.dob) {
        //     err.dob = "Date Of Birth is required."
        // }

        // if (!values.profile.match(/\.(jpg|jpeg|png)$/)) {
        //     err.profile = "Please select an image file only."
        // }

        // if (!values.profile) {
        //     err.profile = "Please select an image file."
        // }


        if (!values.address) {
            err.address = "Address is required."
        }
        return err
    }
    
  return  <div style={{backgroundColor:"#ffcccb", minHeight:"100vh"}}>
  <div className="container">
      <div className="row justify-content-center my-4">
          <div className="col-md-7 col-lg-5 shadow p-3" style={{backgroundColor:"pink"}}>
          <div className="rounded w-100"
                            style={{ backgroundImage: `url(${bloodcover})`, height: "300px", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                        </div>
              <div className="p-3">
                  <div className="d-flex">
                      <div className="w-100">
                          <h3 className="mb-4 h1">Sign Up</h3>
                      </div>
                  </div>
                  {sucessMessage.length !== 0 && <div className="alert alert-success">{sucessMessage}</div>}
                            <form onSubmit={handleSubmit} name="signup">
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Name</label>
                          <input type="text"
                              className={`form-control ${errors.name ? "is-invalid" : ""}  `}
                              name="name" value={values.name} onChange={handleChange} />
                          {errors.name && <div className="alert-danger my-3 p-2">{errors.name}</div>}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Username</label>
                          <input type="text"
                              className={`form-control ${errors.userName ? "is-invalid" : ""}  `}
                              name="userName" value={values.userName} onChange={handleChange} />
                          {errors.userName && <div className="alert-danger my-3 p-2">{errors.userName}</div>}
                      </div>
                     
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Email</label>
                          <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""} `}
                              name="email" value={values.email} onChange={handleChange} />
                          {errors.email && <div className="alert-danger my-3 p-2">{errors.email}</div>}
                      </div>

                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Password</label>
                          <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""} `}
                              name="password"  value={values.password} onChange={handleChange}  />
                          {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Confirm Password</label>
                          <input type="password" className={`form-control ${errors.confirmPassword ? "is-invalid" : ""} `} name="confirmPassword" 
                           value={values.confirmPassword} onChange={handleChange} />
                          {errors.confirmPassword && <div className="alert-danger my-3 p-2">{errors.confirmPassword}
                          </div>}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Contact Number</label>
                          <input type="contactNumber" className={`form-control ${errors.contactNumber? "is-invalid" : ""} `}
                              name="contactNumber" value={values.contactNumber} onChange={handleChange} />
                              {errors.contactNumber && <div className="alert-danger my-3 p-2">{errors.contactNumber}
                              </div>}  
                              </div>
                      
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Address</label>
                          <textarea className={`form-control ${errors.address? "is-invalid" : ""}`} name="address" 
                           value={values.address} onChange={handleChange}/>
                          {errors.address && <div className="alert-danger my-3 p-2">{errors.address}</div>}
                      </div>

                      <div className="form-group my-3">
                          <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                              Up</button>
                      </div>
                      <div className="form-group mt-5">
                          <div className="w-100 text-center">
                              <p>Not a member?
                                  {" "}<Link data-toggle="tab" to="/login">Sign In</Link>
                              </p>
                          </div>
                      </div>
                      </form> 
              </div>
          </div>
      </div>
  </div>

</div>
};

export default Register;
