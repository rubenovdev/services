const errorHandler = require('../utils/errorHandler')
const Note = require('../Models/Note')



module.exports.getNote = async function (req, res) {
    try {
        const note = await Note.find()
        res.status(200).json(note)
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.update = async function (req, res) {

    const updated = {
        name: req.body.name,
        task: req.body.task,
        archive: req.body.archive
    }
    try {
        const note = await Note.findOneAndUpdate(
            {_id: req.params.id }, 
            {$set: updated}, 
            {new: true} )
        res.status(200).json(note)
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.delete = async function (req, res) {

    try {
        await Note.remove(
            {_id: req.params.id })
        res.status(200).json({
            message: "Категория удалена"
        })
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.getById = async function (req, res) {
    try {
        const noteId = await Note.findById(req.params.id)
        res.status(200).json(noteId)
    } catch (e) {
        errorHandler(res, e)
    }
}