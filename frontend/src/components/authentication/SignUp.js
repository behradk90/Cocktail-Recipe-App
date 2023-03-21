import React, { useState } from "react";
// import { useSignup } from "../../hooks/useSignup";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        created: ''
    });
    // const { signup, error, isLoadiing } = useSignup()

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // signup(
        //     user.name,
        //     user.email,
        //     user.role,
        //     user.password
        // )
        axios.post('http://localhost:8080/user/signup', user)
            .then((res) => {
                setUser({
                    name: '',
                    email: '',
                    role: '',
                    password: '',
                    created: ''
                });

                navigate('/login')
            })
            .catch((err) => {
                console.log('Error in SignUp!');
                console.log(err);
            });
        console.log(`Welcome to the cocktailApp ${user.name}`)
    };

    return (
        <div className="CreateUser">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Register</h1>

                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    name="name"
                                    className="form-control"
                                    value={user.name}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="E-mail Address"
                                    name="email"
                                    className="form-control"
                                    value={user.email}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Role"
                                    name="role"
                                    className="form-control"
                                    value={user.role}
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
                                    value={user.password}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <input
                                // disabled={isLoadiing}
                                type="submit"
                                className="btn btn-outline-info btn-block mt-4"
                            />
                            {/* {error && <div className="error">{error}</div>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;