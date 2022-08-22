import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import bloodcover from "../images/blood1.jpg"
import { useState, useEffect } from "react";




const ChangePassword = () => {

    const [pass, setpassword] = useState("");
    const [confirmPassword, setconfirmpassword] = useState("");
    const [errors, setErrors] = useState({})

    
    async function checkPass(event) {
        event.preventDefault();
        let errs = validateForm();
        setErrors(errs)


        //const username = sessionStorage.getItem("username");
        const username = "Sheryy";
        const url = `http://localhost:4000/user/updateUser/${username}`;
        const result = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                confirmPassword
                
            }),
        })

        const data = await result.json();
        console.log(data);





    }

    const validateForm = () => {
        let err = {}
        if (!pass) {
            err.pass = "Password is required."
        }

        if (!confirmPassword) {
            err.confirmPassword = "Confirm Password is required."
        }

        if(pass!=confirmPassword){
            err.confirmPassword="Password and Confirm Password is not matching!"
        }

        

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
                                <h3 className="mb-4 h1">Change Password</h3>
                            </div>
                        </div>
                        <form onSubmit={checkPass} name="signup">



                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Password</label>
                                <input type="password" className={`form-control `}
                                    value={pass}
                                    name="password" onChange={(e) => setpassword(e.target.value)} />
                                {errors.pass && <div className="alert-danger my-3 p-2">{errors.pass}</div>}

                            </div>
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Confirm Password</label>
                                <input type="password" className={`form-control `} name="confirmPassword"
                                 value={confirmPassword}
                                    onChange={(e) => setconfirmpassword(e.target.value)}
                                />
                                {errors.confirmPassword && <div className="alert-danger my-3 p-2">{errors.confirmPassword}</div>}

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
