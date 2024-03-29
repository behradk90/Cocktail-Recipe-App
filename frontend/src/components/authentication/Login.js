import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
    });

    const onChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/user/login', login)
            .then((res) => {
                setLogin({
                    name: '',
                    email: '',
                    role: '',
                    password: '',
                });
                navigate('/cocktail-list')
                console.log(`welcome ${login.email}`)
            })
            .catch((err) => {
                console.log('Error in Login.js');
                console.log(err);
            });
    }

    return (
        <div className="LoginUser">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Login</h1>

                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="E-mail Address"
                                    name="email"
                                    className="form-control"
                                    value={login.email}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="form-control"
                                    value={login.password}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <input type="submit"
                                className="btn btn-outline-info btn-block mt-4"
                            />
                            <Link
                                className="btn btn-outline-warning btn-block mt-4"
                                to='/sign-up'
                            >
                                Or Register
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;