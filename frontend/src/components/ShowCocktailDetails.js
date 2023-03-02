import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

function ShowCocktailDetails(props) {
    const [cocktail, setCocktail] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/cocktails/${id}`)
            .then((res) => {
                setCocktail(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowCocktailDetails');
            });
    }, [id]);

    const onDeleteClick = (id) => {
        axios
            .delete(`http://localhost:8080/cocktails/${id}`)
            .then((res) => {
                navigate('/cocktail-list')
            })
            .catch((err) => {
                console.log('Error from ShowCocktailDetails deleteClick')
                console.log(err.response.data)
            });
    };

    const CocktailItem = (
        <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>Name</td>
                        <td>{cocktail.name}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Description</td>
                        <td>{cocktail.description}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Recipe</td>
                        <td>{cocktail.recipe}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Glass</td>
                        <td>{cocktail.glass}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Ice</td>
                        <td>{cocktail.ice}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Garnish</td>
                        <td>{cocktail.garnish}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="ShowCocktailDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <br /> <br />
                        <Link
                            to='/cocktail-list'
                            className="btn btn-outline-warning float-left"
                        >
                            Show Cocktail List
                        </Link>
                    </div>
                    <br />
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Cocktail Recipe</h1>
                        <p className="lead text-center">View Cocktail Info</p>
                        <hr /> <br />
                    </div>
                    <div className="col-md-10 m-auto">{CocktailItem}</div>
                    <div className="col-md-6 m-auto">
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-lg btn-block"
                            onClick={() => {
                                onDeleteClick(cocktail._id);
                            }}
                        >
                            Delete Cocktail
                        </button>
                    </div>
                    <div className="col-md-6 m-auto">
                        <Link
                            to={`/edit-cocktail/${cocktail._id}`}
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Edit Cocktail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ShowCocktailDetails;