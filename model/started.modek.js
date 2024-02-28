const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const startedSchema = new Schema({
    number:{
        type:String,
    },
    title:{
        type:String,
    },
    vnum:{
        type:String,
    },
});

const startedModel = db.model('started',startedSchema);
module.exports = startedModel;
