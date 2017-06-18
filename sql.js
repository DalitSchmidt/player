// In this file we connect to the database
// Define the variable 'mysql' as a const and loading the module 'mysql'
const mysql      = require('mysql')
// // Define the variable 'sql' as a const and a connection to the database
const sql = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'musicplayer'
})

// The variable 'sql' operation connecting to the database
sql.connect(function(err) {
    // If there was an error connecting to the database is displayed in the window console
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }

    // If there is an error connecting to the database, will be displayed in the window console message saying 'connected as id'
    console.log('connected as id ' + sql.threadId)
})

// To use the module in other files to export it out
module.exports = sql