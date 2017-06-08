const mysql      = require('mysql');
const sql = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'musicplayer'
});

sql.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + sql.threadId);
});

module.exports = sql