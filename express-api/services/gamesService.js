const { createGameRepo, latestGameRepo, updateGameRepo} = require('../repository/gamesRepository')

//Get all games

//Get a single game

//Get latest game service
const latestGameService = async(req, res) =>{
    return await latestGameRepo(req,res);
}
//Create a game
const createGameService = async(req, res) =>{
    return await createGameRepo(req, res);
}

//Update a game
const updateGameService = async(req, res) =>{
    return await updateGameRepo(req,res)
}

module.exports = {
    createGameService,
    latestGameService,
    updateGameService 
}