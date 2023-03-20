const express = require('express');
const router = express.Router();
const {
    cocktailList,
    cocktailDetails,
    createCocktail,
    updateCocktail,
    deleteCocktail
} = require('../controllers/recipeController');

router.get('/test', (req, res) => res.send('Recipes route testing!'));

router.get('/', cocktailList);

router.get('/:id', cocktailDetails);

router.post('/', createCocktail);

router.put('/:id', updateCocktail);

router.delete('/:id', deleteCocktail);

module.exports = router;