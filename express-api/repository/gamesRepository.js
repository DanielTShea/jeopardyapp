const Game = require('../models/gameModel')

const createGameRepo = async (req, res) =>{
    const {title} = req.body;
    try{
        const game = await Game.create({
            title
        })
        return(res.status(200).json(game));
        
    }catch (error) {
        return(res.status(400).json({error: error.message}));
    }
}

module.exports = {
    createGameRepo
}