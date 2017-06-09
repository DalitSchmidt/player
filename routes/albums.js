const router = require('express').Router()
const fs = require('fs')
const sql = require('./../sql')

router.route('/albums')
    .post((req, res) => {

    })

    .get((req, res) => {
    })

router.route('/albums/:name')
    .get(( req, res ) => {
    })

    .put(( req, res ) => {

    })

    .delete((req, res) => {
    })

router.route('/authors')
    .post((req, res) => {
    // The variable data include the body of the request
        let data = req.body
        // The variable data include the property name
        let author = data.name

        // Check if the json include name property
        if ( typeof author == 'undefined' )
            // We send to the client error message with a status code 422 (Unprocessable Entity) with the error
            res.status(422).send({ error: "Must supply name" })

        // If we reached here then name of the author

        // Try to execute the query
        sql.query(`INSERT INTO authors (author_name) VALUES ('${author}')`, (error, result, fields) => {
            // At this point we carry out some tests...
            if (error) {
                // In this test we are checking if the author already exists
                if (error.code == 'ER_DUP_ENTRY')
                    // If the author as existing we send to the client error message with a status code 400 (Bad Request)
                    res.status(400).send({ error: `Author ${author} already exists` })
                else
                    // If there is an server error we send to the client error message with the status code 500 (Internal Server Error)
                    res.status(500).send({ error: 'General Server Error' })
            } else {
                // If we got here, it says no errors and we send to the client the ID number added
                res.send({ id: result.insertId })
            }
        });
    })

    .get((req, res) => {
        // Following the query brings all the information that exists from a authors table
        sql.query('SELECT * FROM authors', (error, results, fields) => {
            // If there is any error we thrown an error with the error variable
            if (error) throw error;
            // Get all the results (as and)
            res.json(results);
        });
    })

router.route('/songs/:album_id')
    .get((req, res) => {
    })

module.exports = router