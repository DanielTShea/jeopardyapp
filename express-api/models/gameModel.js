const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Question Schema
const questionSchema = new Schema({
    questionID:{
        type: String,
        require: true,
    },
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
        required: true,
    },
    dailyDouble:{
        type: Boolean,
        default: false,
    },
    selected:{
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

//Round Schema
const roundSchema = new Schema({
    roundNumber:{
        type: Number,
        require: true,
    },
    question: [questionSchema],
}, {timestamps: true})

//Final Question Schema
const finalQuestionSchema = new Schema({
    question:{
        type: String,
        require: true,
    },
    answer:{
        type: String,
        required: true,
    }
}, {timestamps: true})

//Game Schema
const gameSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    round:[roundSchema],
    finalQuestion: [finalQuestionSchema]
}, {timestamps: true})


module.exports = mongoose.model('Game', gameSchema);