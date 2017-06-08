const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
const path = require('path')
const fs   = require('fs')
const mysql = require('mysql')

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

// REST API routes
app.use('/api', require('./routes/albums'))

module.exports = app