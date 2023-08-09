const express = require('express');
const {createGameController, latestGameController, updateGameController } = require('../controllers/gameController')

const router = express.Router();

//GET all games
router.get('/', (req, res) => {
    res.json({message: "GET all games"});
})

//GET single game
//router.get('/:id', (req, res) =>{
//    res.json({message: "GET single game"});
//})

//Get latest game
router.get('/latestgame', latestGameController);

//POST a new game
router.post('/newgame', createGameController);

//PUT a game
router.put('/:id', (req, res) =>{
    res.json({message: "update a game"});
})

//PATCH a game
router.patch('/updategame', updateGameController)

//Delete
router.delete('/:id', (req, res) =>{
    res.json({message: "delete a game"});
})


module.exports = router;