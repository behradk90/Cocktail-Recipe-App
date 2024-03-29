const Cocktail = require('../models/recipeModel');

exports.cocktailList = (req, res) => {
    Cocktail.find()
        .then(cocktails => res.json(cocktails))
        .catch(err => res.status(404).json({ nococktailsfound: 'No cocktails found.' }))
};

exports.cocktailDetails = (req, res) => {
    Cocktail.findById(req.params.id)
        .then(cocktail => res.json(cocktail))
        .catch(err => res.status(404).json({ nococktailfound: 'No cocktail found.' }))
};

exports.createCocktail = (req, res) => {
    Cocktail.create(req.body)
        .then(cocktail => res.json({ msg: 'Cocktail added successfully!' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Cocktail.' }))
};

exports.updateCocktail = (req, res) => {
    Cocktail.findByIdAndUpdate(req.params.id, req.body)
        .then(cocktail => res.json({ msg: 'Updated successfully!' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database.' }))
};

exports.deleteCocktail = (req, res) => {
    Cocktail.findByIdAndRemove(req.params.id, req.body)
        .then(cocktail => res.json({ msg: 'Cocktail deleted successfully!' }))
        .catch(err => res.status(404).json({ error: 'No such a Cocktail.' }))
};