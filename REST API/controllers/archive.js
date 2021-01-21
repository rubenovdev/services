const errorHandler = require('../utils/errorHandler')
const Note = require('../Models/Note')

module.exports.getArchive = async function(req,res){
    try{
        const noteArchive = await Note.find()
        res.status(200).json(noteArchive)
    }
    catch(err){errorHandler(res, err)}
}