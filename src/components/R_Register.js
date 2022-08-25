import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bloodcover from "../images/blood1.jpg"
import { toast } from "react-toastify";
import Navigation from "../components/Navigation";


const R_Register = () => {
    // document.title = "Registration- BloodBank.com"

    const username=sessionStorage.getItem("user")
    const formInitialValue = {
        bloodGroup: "",
        quantity:"",
        supplyDate:""
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
            const bloodGroup = event.target.bloodGroup.value;
            const quantity = event.target.quantity.value;
            const supplyDate = event.target.supplyDate.value;
            
            //console.log("fn ",firstName);
            // const lastName = event.target.lastName.value;
            // const dob = event.target.dob.value;
            // const email = event.target.email.value;
            // const mobileNumber = event.target.mobileNumber.value;
            // const password = event.target.password.value;
            // const aadharNumber = event.target.aadharNumber.value;
            // const address = event.target.address.value;
            // const gender = event.target.gender.value;

            let item = { username,bloodGroup, quantity ,supplyDate}
            // console.warn(item)
            let result = await fetch("http://localhost:4000/user/r_register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })

            result = await result.json()
            toast(result);
            // if(result.message === 'Record created successfully.'){
            //     notify("Account verification link has been sent to your mail.")
            // }
        }
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.bloodGroup) {
            err.bloodGroup = "Blood Group is required."
        }
        if (!values.supplyDate) {
            err.supplyDate = "SupplyDate is required."
        }
        // if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     err.email = "Email is invalid"
        // }
        if (!values.quantity) {
            err.quantity = "Quantity is required."
        }

        // if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/.test(values.password)) {
        //     err.password = `At least 1 Uppercase. At least 1 Lowercase. At least 1 Number. Min 8 chars and Max 20 chars`
        // }

        // if (!values.gender) {
        //     err.gender = "Gender is required."
        // }
        // if (!values.bloodGroup) {
        //     err.bloodGroup = "Blood Group is required."
        //}
        // if (values.password !== values.confirmPassword) {
        //     err.confirmPassword = "Password and confirm password not matching."
        // }

        // if (values.contactNumber.length !== 10) {
        //     err.contactNumber = "Contact number must be of 10 digit."
        // }

        // if (!values.contactNumber) {
        //     err.contactNumber = "Contact number is required."
        // }

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


        // if (!values.address) {
        //     err.address = "Address is required."
        // }
        return err
    }
    
  return  <div style={{ backgroundColor: "#ffcccb", minHeight: "100vh" }}>
      <Navigation/>
  <div className="container">
      <div className="row justify-content-center my-4">
          <div className="col-md-7 col-lg-5 shadow p-3" style={{backgroundColor:"pink"}}>
          <div className="rounded w-100"
                            style={{ backgroundImage: `url(${bloodcover})`, height: "300px", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                        </div>
              <div className="p-3">
                  <div className="d-flex">
                      <div className="w-100">
                          <h3 className="mb-4 h1">Recipient : Request Blood</h3>
                      </div>
                  </div>
                  <form onSubmit={handleSubmit} name="signup">
                  <div className="form-group my-3 text start">
                            <label className="form-control-placeholder">Blood Group</label>
                            <select  value={values.bloodGroup}
                            className={`form-control ${errors.bloodGroup ? "is-invalid" : ""} `} onChange={handleChange} name="bloodGroup">
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                            {errors.bloodGroup && <div className="alert-danger my-3 p-2">{errors.bloodGroup}
                        </div>}
                        </div>
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Name</label>
                          <input type="text"
                              className={`form-control  `}
                              name="name"  onChange={'#'} />
                          {errors.firstName && <div className="alert-danger my-3 p-2">{errors.firstName}</div>}
                      </div> */}
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Last Name</label>
                          <input type="text" className={`form-control  `}
                              name="lastName"  onChange={'#'} />
                          {errors.lastName && <div className="alert-danger my-3 p-2">{errors.lastName}</div>}
                      </div> */}
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Email</label>
                          <input type="email" className={`form-control `}
                              name="email"  onChange={'#'} />
                          {errors.email && <div className="alert-danger my-3 p-2">{errors.email}</div>}
                      </div> */}

                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Password</label>
                          <input type="password" className={`form-control `}
                              name="password"  onChange={'#'} />
                          {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>}
                      </div> */}
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Confirm Password</label>
                          <input type="password" className={`form-control `} name="confirmPassword" />
                          {errors.confirmPassword && <div className="alert-danger my-3 p-2">{errors.confirmPassword}
                          </div>}
                      </div> */}
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Contact Number</label>
                          <input type="contactNumber" className={`form-control `}
                              name="contactNumber"  />
                      </div> */}
                       <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Quantity</label>
                          <input type="text"  value={values.quantity}
                          className={`form-control ${errors.quantity ? "is-invalid" : ""} `} onChange={handleChange} name="quantity" />
                            {errors.quantity && <div className="alert-danger my-3 p-2">{errors.quantity}
                        </div>}
                      </div>

                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Supply Date</label>
                          <input type="date" value={values.supplyDate}
                            className={`form-control ${errors.supplyDate ? "is-invalid" : ""} `} onChange={handleChange} name="supplyDate" />
                            {errors.supplyDate && <div className="alert-danger my-3 p-2">{errors.supplyDate}
                        </div>}
                      </div>
                     
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
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Address</label>
                          <textarea className={`form-control`} name="address" />
                          {errors.address && <div className="alert-danger my-3 p-2">{errors.address}</div>}
                      </div> */}
                       
                      <div className="form-group my-3">
                          <button type="submit" className="form-control btn btn-primary rounded submit px-3">Request Blood</button>
                      </div>
                      {/* <div className="form-group mt-5">
                          <div className="w-100 text-center">
                              <p>Not a member?
                                  {" "}<Link data-toggle="tab" to="/login">Sign In</Link>
                              </p>
                          </div>
                      </div> */}
                      </form> 
              </div>
          </div>
      </div>
  </div>

</div>
};

export default R_Register;
