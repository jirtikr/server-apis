const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const quizSchema = new Schema({
    courseid:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    questionanswer:{
        type:[],
        require:true
    },
    user:[
        {
            type:String,
        }
    ]
});

const QuizModel = db.model('quiz',quizSchema);
module.exports = QuizModel;
