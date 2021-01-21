const errorHandler = require('../utils/errorHandler')
const Note= require('../Models/Note')

module.exports.createNote = async function(req, res){
        
 try{
    const note = await new Note({
            name:req.body.name,
            task:req.body.task,
            archive:false
        }).save()
     res.status(201).json(note)
    }
    catch(err){errorHandler(res, err)}
}

