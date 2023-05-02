const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Question Schema
const questionSchema = new Schema({
    question:{
        type: String,
        require: true,
    },
    answer:{
        type: String,
        required: true,
    },
    value:{
        type: Number,
    },
    selected:{
        type: Boolean,
        default: false,
    }
})

//Category Schema
const categorySchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    questions:[questionSchema],
},{timestamps: true})

//Round Schema
const roundSchema = new Schema({
    roundNumber:{
        type: Number,
        required: true,
    },
    categories:[categorySchema],
}, {timestamps: true})

//Player Schema
const playerSchema = new Schema({
    playerName:{
        type: String,
        required: true,
    },
    score:{
        type:Number,
        default: 0,
    },
    finalWager:{
        type: Number,
        default:0
    }
})

const gameEvent = new Schema ({
    

},{timestamps: true})

const gameHistorySchema = new Schema({
    gameEvents: [gameEventSchema],
    
},{timestamps: true})

//Game Schema
const gameSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    rounds: [roundSchema],
    players: [playerSchema],
    gameHistory: gameHistorySchema,

}, {timestamps: true})



module.exports = mongoose.model('game', gameSchema);