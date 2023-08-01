const { createGameService } = require('../services/gamesService')


//Get all games

//Get a single game

//Create a new workout
const createGameController = async(req, res) =>{
    return(createGameService(req, res));
}

module.exports = {
    createGameController
}