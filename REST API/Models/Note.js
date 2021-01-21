const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    task:{
        type:String,
        require:true
    },
    archive:{
        type:Boolean,
        require:true
    }

})

module.exports = mongoose.model('note', noteSchema)