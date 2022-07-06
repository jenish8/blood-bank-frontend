import React from "react";

import { Link } from "react-router-dom";
import bloodcover from "../images/blood1.jpg"


const Register = () => {
    

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
                          <h3 className="mb-4 h1">Sign Up</h3>
                      </div>
                  </div>
                  <form onSubmit={'#'} name="signup">
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">First Name</label>
                          <input type="text"
                              className={`form-control  `}
                              name="firstName"  onChange={'#'} />
                          {/* {errors.firstName && <div className="alert-danger my-3 p-2">{errors.firstName}</div>} */}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Last Name</label>
                          <input type="text" className={`form-control  `}
                              name="lastName"  onChange={'#'} />
                          {/* {errors.lastName && <div className="alert-danger my-3 p-2">{errors.lastName}</div>} */}
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Email</label>
                          <input type="email" className={`form-control `}
                              name="email"  onChange={'#'} />
                          {/* {errors.email && <div className="alert-danger my-3 p-2">{errors.email}</div>} */}
                      </div>

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
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Phone Number</label>
                          <input type="number" className={`form-control `}
                              name="mobileNumber"  />
                      </div>

                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Date Of Birth</label>
                          <input type="date" className={`form-control`} name="dob" />
                          {/* {errors.dob && <div className="alert-danger my-3 p-2">{errors.dob} */}
        
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Aadhar Number</label>
                          <input type="number" className={`form-control `} name="aadharNumber"  />
                      </div>
                      {/* <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Profile Photo</label>
                          <input type="file" accept="image/png, image/jpg, image/jpeg" className={`form-control ${errors.profile ? "is-invalid"
                              : ""}`} name="profile" value={values.profile} onChange={handleChange} />
                          {errors.profile && <div className="alert-danger my-3 p-2">{errors.profile}
                          </div>}
                      </div> */}
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Gender</label>
                          <br />
                          <label>Male</label>
                          <input type="radio" className={`ms-2  `} name="gender" value="male"   />
                          <label className='ms-3'>Female</label>
                          <input type="radio" className={`ms-2  `} name="gender" value="female" />
                      </div>
                      <div className="form-group my-3 text-start">
                          <label className="form-control-placeholder">Address</label>
                          <textarea className={`form-control`} name="address" />
                          {/* {errors.address && <div className="alert-danger my-3 p-2">{errors.address}</div>} */}
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
