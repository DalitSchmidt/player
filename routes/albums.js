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
            // we send to the client 422 status code with the error
            res.status(422).send({ error: "Must supply name" })

        // if we reached here then name of the author

        // try to execute the query
        sql.query(`INSERT INTO authors (author_name) VALUES ('${author}')`, (error, result, fields) => {

            if (error) {
                if (error.code == 'ER_DUP_ENTRY')
                    res.status(400).send({ error: `Author ${author} already exists` })
                else
                    res.status(500).send({ error: 'General Server Error' })
            } else {
                res.send({ id: result.insertId })
            }
        });
    })

    .get((req, res) => {
        sql.query('SELECT * FROM authors', (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        });
    })


router.route('/songs/:album_id')
    .get((req, res) => {
    })


module.exports = router