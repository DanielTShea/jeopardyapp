const { createGameService, latestGameService, updateGameService } = require('../services/gamesService')


//Get all games

//Get a single game

//Get Latest Game
const latestGameController = async(req, res) =>{
    return await latestGameService(req, res);
}

//Create a new game
const createGameController = async(req, res) =>{
    return await createGameService(req, res);
}

//Update a Game
const updateGameController = async(req,res) =>{
    return await updateGameService(req, res);
}


module.exports = {
    createGameController,
    latestGameController,
    updateGameController
}