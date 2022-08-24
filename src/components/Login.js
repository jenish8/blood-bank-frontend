import React, { useState } from "react";
import { Link } from "react-router-dom";
import bloodcover from "../images/blood1.jpg"


const Login = () => {

    const formInitialValue = {
        username: "",
        password: "",
    } 

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
            const userName = event.target.username.value;
            const password = event.target.password.value;

            let item = { userName, password }
            console.log(item);
            
            let result = await fetch("http://localhost:4000/user/login", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })
            
            if(result.status == 200){
                result = await result.json();
                console.log("token " + result.token);
                console.log("message " + result.message);
                sessionStorage.setItem("token",result.token);
                
                if(result.userName == "Admin"){
                    console.log(result.userName);
                    window.location.href = '/admin';
                }
                else{
                    window.location.href = '/'
                }    
            }
        }
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.username) {
            err.username = "Username is required."
        }
        if (!values.password) {
            err.password = "Password is required."
        }
        return err
    }


    return <div style={{backgroundColor:"#ffcccb", minHeight:"100vh"}}>
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
                        <form onSubmit={handleSubmit} name="signin">
                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Username</label>
                                <input className={`form-control ${errors.username ? "is-invalid" : ""}  `}
                                    name="username" value={values.username} onChange={handleChange} />
                                {errors.username && <div className="alert-danger my-3 p-2">{errors.username}</div>}

                            </div>

                            <div className="form-group my-3 text-start">
                                <label className="form-control-placeholder">Password</label>
                                <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}  `}
                                    name="password" value={values.password} onChange={handleChange}  />
                                    {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>} 
                            </div>
                            <div className="form-group my-3">
                                <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
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

                                    <p>Forget Password ?

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