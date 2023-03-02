import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function UpdateCocktailInfo(props) {
    const [cocktail, setCocktail] = useState({
        name: '',
        description: '',
        recipe: '',
        glass: '',
        ice: '',
        garnish: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/cocktails/${id}`)
            .then((res) => {
                setCocktail({
                    name: res.data.name,
                    description: res.data.description,
                    recipe: res.data.recipe,
                    glass: res.data.glass,
                    ice: res.data.ice,
                    garnish: res.data.garnish,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateCocktailInfo');
            });
    }, [id])

    const onChange = (e) => {
        setCocktail({ ...cocktail, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: cocktail.name,
            description: cocktail.description,
            recipe: cocktail.recipe,
            glass: cocktail.glass,
            ice: cocktail.ice,
            garnish: cocktail.garnish,
        }

        axios
            .put(`http://localhost:8080/cocktails/${id}`, data)
            .then((res) => {
                navigate(`/show/cocktail/${id}`);
            })
            .catch((err) => {
                console.log('Error in UpdateCocktailInfo!');
            });
    };

    return (
        <div className="UpdateBookInfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to='/cocktail-list' className="btn btn-outline-warning float-left">
                            Show Cocktail List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Edit Cocktail</h1>
                        <p className="lead text-center">Update Cocktail Info</p>
                    </div>
                </div>

                <div className="col-md-8 m-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="name"
                                className="form-control"
                                value={cocktail.name}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <label htmlFor="name">Description</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="description"
                                className="form-control"
                                value={cocktail.description}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <label htmlFor="name">Recipe</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="recipe"
                                className="form-control"
                                value={cocktail.recipe}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <label htmlFor="name">Glass Type</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="glass"
                                className="form-control"
                                value={cocktail.glass}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <label htmlFor="name">Ice Type</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="ice"
                                className="form-control"
                                value={cocktail.ice}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className="form-group">
                            <label htmlFor="name">Garnish</label>
                            <input type="text"
                                placeholder="Name of Cocktail"
                                name="garnish"
                                className="form-control"
                                value={cocktail.garnish}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <button
                            type="submit"
                            className="btn btn-outline-info btn-lg btn-block"
                        >
                            Update Cocktail
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

module.exports = UpdateCocktailInfo;