import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import bloodcover from "../images/blood1.jpg"


const ChangePassword = () => {
    // document.title = "Registration- BloodBank.com"

    // const formInitialValue = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     mobileNumber: "",
    //     dob: "",
    //     aadharNumber: "",
    //     gender: "",
    //     address: ""
    // }
    // const [values, setValues] = useState(formInitialValue)
    // const [sucessMessage, setMessage] = useState("")
    // const [errors, setErrors] = useState({})
    // const [dataIsCorrect, setDataIsCorrect] = useState(false)

    // const handleChange = (event) => {
    //     //console.log(event.target.value, event.target)
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // async function handleSubmit(event) {
    //     //console.log("data ", event.target);
    //     event.preventDefault()
    //     // setErrors(validateForm(values))
    //     let errs = validateForm(values)
    //     // setDataIsCorrect(true)
    //     setErrors(errs)

    //     if(Object.keys(errs).length===0){
    //         const firstName = event.target.firstName.value;
    //         //console.log("fn ",firstName);
    //         const lastName = event.target.lastName.value;
    //         const dob = event.target.dob.value;
    //         const email = event.target.email.value;
    //         const mobileNumber = event.target.mobileNumber.value;
    //         const password = event.target.password.value;
    //         const aadharNumber = event.target.aadharNumber.value;
    //         const address = event.target.address.value;
    //         const gender = event.target.gender.value;

    //         let item = { firstName, lastName, dob, email, mobileNumber, password, aadharNumber, address, gender }
    //         // console.warn(item)
    //         let result = await fetch("https://auctionpointbackend.herokuapp.com/user/register", {
    //             method: 'POST',
    //             body: JSON.stringify(item),
    //             headers: {
    //                 "Content-Type": 'application/json',
    //                 "Accept": 'application/json'
    //             }
    //         })

    //         result = await result.json()
    //         if(result.message === 'Record created successfully.'){
    //             notify("Account verification link has been sent to your mail.")
    //         }
    //     }
    // }
    
  return  <div style={{backgroundColor:"#f2f2f2", minHeight:"100vh"}}>
  <div className="container">
      <div className="row justify-content-center my-4">
          <div className="col-md-7 col-lg-5 shadow p-3" style={{backgroundColor:"pink"}}>
          <div className="rounded w-100"
                            style={{ backgroundImage: `url(${bloodcover})`, height: "300px", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                        </div>
              <div className="p-3">
                  <div className="d-flex">
                      <div className="w-100">
                          <h3 className="mb-4 h1">Change Password</h3>
                      </div>
                  </div>
                  <form onSubmit={'#'} name="signup">
                      

                      
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Password</label>
                          <input type="password" className={`form-control `}
                              name="password"  onChange={'#'} />
                          {/* {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>} */}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Confirm Password</label>
                          <input type="password" className={`form-control `} name="confirmPassword" />
                          {/* {errors.confirmPassword && <div className="alert-danger my-3 p-2">{errors.confirmPassword}
                          </div>} */}
                      </div>
                      

                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Date Of Birth</label>
                          <input type="date" className={`form-control`} name="dob" />
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Aadhar Number</label>
                          <input type="number" className={`form-control `} name="aadharNumber"  />
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
                          <button type="submit" className="form-control btn btn-primary rounded submit px-3">Change Password </button>
                      </div>
                      <div className="form-group mt-5">
                          
                      </div>
                      </form> 
              </div>
          </div>
      </div>
  </div>

</div>
};

export default ChangePassword;
