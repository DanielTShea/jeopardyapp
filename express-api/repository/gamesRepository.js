const {Game, Round} = require('../models/gameModel')


//Get Latest Game Repo
const latestGameRepo = async (req, res) =>{
    try{
        const latestGame = await Game.find().sort({createdAt: -1}).limit(1)
        return res.status(200).json(latestGame);
    }catch(error){
        return(res.status(400).json({error: error.message}));
    }

}

//Create Game Repo
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

//Update Game Repo
const updateGameRepo = async(req,res) =>{
    const id = req.body._id;
    const game = await Game.findById(id);
    if(!game) {
        return res.status(404).json({error: 'Game does not exist'});
    }

    if(req.body.round !== null){ 
    game.round.push(req.body.round[0]);
    }
    if(req.body.finalQuestion !== null){
        game.finalQuestion = req.body.finalQuestion;
    }
    game.save();
    return res.status(200).json(game);

}

module.exports = {
    createGameRepo,
    latestGameRepo,
    updateGameRepo
}