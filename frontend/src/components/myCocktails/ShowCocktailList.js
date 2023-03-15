import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard';

function ShowCocktailList() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/cocktails')
            .then((res) => {
                setCocktails(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowCocktailList.');
                console.log(err);
            });
    }, []);

    const cocktailList =
        cocktails.length === 0
            ? 'There is no cocktail record!'
            : cocktails.map((cocktail, k) => <RecipeCard cocktail={cocktail} key={k} />)

    return (
        <div className="ShowCocktailList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Cocktail List</h2>
                    </div>

                    <div className="col-md-11">
                        <Link
                            to='/create-cocktail'
                            className="btn btn-outline-warning float-right"
                        >
                            + Add New Cocktail
                        </Link>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="list">{cocktailList}</div>
            </div>
        </div>
    );
};

export default ShowCocktailList;