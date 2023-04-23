const express = require('express');

const router = express.Router();

//GET all games
router.get('/', (req, res) => {
    res.json({message: "GET all games"});
})

//GET single game
router.get('/:id', (req, res) =>{
    res.json({message: "GET single game"});
})

//POST a new game
router.post('/', (req, res) =>{
    res.json({message: "create new game"});
})

//PUT a game
router.put('/:id', (req, res) =>{
    res.json({message: "update a game"});
})

//PATCH a game
router.patch('/:id', (req, res) =>{
    res.json({message: "patch a game"});
})

//Delete
router.delete('/:id', (req, res) =>{
    res.json({message: "delete a game"});
})


module.exports = router;