const express = require('express');
const router = express.Router();

const Cocktail = require('../models/schema');

router.get('/test', (req, res) => res.send('Recipes route testing!'));

router.get('/', (req, res) => {
    Cocktail.find()
        .then(cocktails => res.json(cocktails))
        .catch(err => res.status(404).json({ nococktailsfound: 'No cocktails found.' }))
});

router.get('/:id', (req, res) => {
    Cocktail.findById(req.params.id)
        .then(cocktail => res.json(cocktail))
        .catch(err => res.status(404).json({ nococktailfound: 'No cocktail found.' }))
});

router.post('/', (req, res) => {
    Cocktail.create(req.body)
        .then(cocktail => res.json({ msg: 'Cocktail added successfully!' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Cocktail.' }))
});

router.put('/:id', (req, res) => {
    Cocktail.findByIdAndUpdate(req, params.id, req.body)
        .then(cocktail => res.json({ msg: 'Updated successfully!' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database.' }))
});

router.delete(':/id', (req, res) => {
    Cocktail.findByIdAndRemove(req.params.id, req.body)
        .then(cocktail => res.json({ msg: 'Cocktail deleted successfully!' }))
        .catch(err => res.status(404).json({ error: 'No such a Cocktail.' }))
});

module.exports = router;