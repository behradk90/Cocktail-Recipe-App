const express = require('express');
const router = express.Router();
const {
    cocktailList,
    cocktailDetails,
    createCocktail,
    updateCocktail,
    deleteCocktail
} = require('../controllers/recipe.controller')
const Cocktail = require('../models/recipe');

router.get('/test', (req, res) => res.send('Recipes route testing!'));

router.get('/', cocktailList, function (req, res) {

});

router.get('/:id', cocktailDetails, function (req, res) {

});

router.post('/', createCocktail, function (req, res) {

});

router.put('/:id', updateCocktail, function (req, res) {

});

router.delete('/:id', deleteCocktail, function (req, res) {

});

module.exports = router;