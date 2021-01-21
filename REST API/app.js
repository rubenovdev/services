const express=require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const addRoute = require('./routs/add')
const mainRoute = require('./routs/main')
const archiveRoute = require('./routs/archive')
const key=require('./config/keys')

const app= express()

mongoose.connect(key.mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('MongoDb connected'))
.catch(err=>console.log(err))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(require('cors')())
app.use('/api/add', addRoute)
app.use('/api/main', mainRoute)
app.use('/api/archive', archiveRoute)


module.exports = app;
