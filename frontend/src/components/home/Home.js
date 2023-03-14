import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='text-center m-auto'>
            <h1>CocktailApp</h1>
            <Link
                to='cocktail-list'
                className='btn btn-info'
            >
                Enter
            </Link>
        </div>
    )
}


export default Home;