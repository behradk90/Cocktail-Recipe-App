import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const CreateCocktail = (props) => {
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState({
        name: '',
        description: '',
        recipe: '',
        glass: '',
        ice: '',
        garnish: ''
    });

    const onChange = (e) => {
        setCocktail({ ...cocktail, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/cocktails', cocktail)
            .then((res) => {
                setCocktail({
                    name: '',
                    description: '',
                    recipe: '',
                    glass: '',
                    ice: '',
                    garnish: '',
                });

                navigate('/cocktail-list');
            })
            .catch((err) => {
                console.log('Error in CreateCocktail!');
                console.log(err)
            });
    };

    return (
        <div className="CreateCocktail">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to='/cocktail-list' className="btn btn-outline-warning float-left">
                            Show Cocktail List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Cocktail</h1>
                        <p className="lead text-center">Create new Cocktail</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Cocktail Name"
                                    name="name"
                                    className="form-control"
                                    value={cocktail.name}
                                    onChange={onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Description/History"
                                    name="description"
                                    className="form-control"
                                    value={cocktail.description}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Drink Recipe"
                                    name="recipe"
                                    className="form-control"
                                    value={cocktail.recipe}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Glass Type"
                                    name="glass"
                                    className="form-control"
                                    value={cocktail.glass}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Ice Type"
                                    name="ice"
                                    className="form-control"
                                    value={cocktail.ice}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Garnish"
                                    name="garnish"
                                    className="form-control"
                                    value={cocktail.garnish}
                                    onChange={onChange}
                                />
                            </div>

                            <input type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCocktail;