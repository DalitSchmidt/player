// Define the variable 'express' as a const and loading the module 'express'
const express = require('express')
// Define the variable 'bodyParser' as a const and loading the module 'body-parser'
const bodyParser = require('body-parser')
// Define the variable 'app' as a const and using the variable we use in the module 'express'
const app  = express()
// Define the variable 'path' as a const and loading the module 'path'
const path = require('path')
// Define the variable 'fs' as a const and loading the module 'fs'
const fs   = require('fs')
// Define the variable 'mysql' as a const and loading the module 'mysql'
const mysql = require('mysql')

// The variable 'app' uses the capabilities of the module 'express' so that 'public' folder be static
app.use( express.static('public') )
// The variable 'app' uses the capabilities of the module 'bodyParser' using encoded the url
app.use( bodyParser.urlencoded({ extended: false }) )
// The variable 'app' uses the capabilities of the module 'bodyParser' using json
app.use( bodyParser.json() )

// REST API routes
app.use('/api', require('./routes/albums'))

// To use the module in other files to export it out
module.exports = app