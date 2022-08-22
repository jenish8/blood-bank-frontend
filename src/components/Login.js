import React, { useState } from "react";
import { Link } from "react-router-dom";
import bloodcover from "../images/blood1.jpg"


const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [showValidation, setShowValidation] = useState(false);

    // Login Data
    const getLogindata = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        if (email.length <= 0 || password.length<=0) {
            setShowValidation(true);
        }else{
            setShowValidation(false)

        }
        console.log(`Email: ${email} Password: ${password}`);
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
                                <h3 className="mb-4 h1">Sign in</h3>
                            </div>
                        </div>
                        <form name="signin">
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Email</label>
                                <input required type="email" className="form-control"
                                    name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                               
                            </div>

                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Password</label>
                                <input required type="password" className="form-control"
                                    name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            {showValidation && <h6 className="text-danger">Fields should not be empty</h6>}
                            <div className="form-group my-3">
                                <button type="submit" onClick={getLogindata} className="form-control btn btn-primary rounded submit px-3">Sign
                                    in</button>
                            </div>
                            <div className="form-group mt-5">
                                <div className="w-100 text-center">
                                    <p>Not a member?
                                        {" "}<Link data-toggle="tab" to="/log">Sign up</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="form-group mt-5">
                                <div className="w-100 text-center">
                                    <p>forget password
                                        {" "}<Link data-toggle="tab" to=" ">click here</Link>
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

export default Login;