import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='d-flex justify-content-center'>
            <h1>CocktailApp</h1>
            <Link
                to='cocktail-list'
                className='btn btn-info center'
            >
                Enter
            </Link>
        </div>
    )
}


export default Home;