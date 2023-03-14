import React, { useState } from "react";
import axios from "axios";

import { useNavigate, useNavigate } from "react-router-dom";

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
            })
            .catch((err) => {
                console.log('Error in Login.js');
                console.log(err);
            });
    }

    return (
        <div></div>
    )
}

export default Login;