import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const cocktail = props.cocktail;

    return (
        <div className="card-container">
            <img
                src="https://www.mixlabcocktails.com/images/cocktail-image/image-placeholder@3x.png"
                alt="Cocktails"
                height={200}
            />
            <div className="desc">
                <h2>
                    <Link to={`/show-cocktail/${cocktail._id}`}>{cocktail.name}</Link>
                </h2>
                <p>{cocktail.description}</p>
            </div>
        </div>
    )
};

module.exports = RecipeCard;