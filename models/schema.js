const mongoose = require('mongoose');

const CocktailRecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    recipe: {
        type: String,
        required: true
    },
    glass: {
        type: String
    },
    ice: {
        type: String
    },
    garnish: {
        type: String
    }
});

module.exports = Cocktail = mongoose.model('cocktail', CocktailRecipeSchema);