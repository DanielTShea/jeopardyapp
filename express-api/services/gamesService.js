const { createGameRepo} = require('../repository/gamesRepository')

//Get all games

//Get a single game

//Create a new workout
const createGameService = async(req, res) =>{
    return(createGameRepo(req, res));
}

module.exports = {
    createGameService
}