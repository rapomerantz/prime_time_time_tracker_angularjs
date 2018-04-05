const router = require('express').Router();
const pool = require('../modules/pool');


// client POST route
router.post('/', (req,res) => {
    console.log('POST /clients', req.body);
    let newClient = req.body;
    let queryText = `INSERT INTO "clients" (client) VALUES ('${newClient.client}')`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /clients POST', error);
            res.sendStatus(500)
        })  
})
// client GET route
router.get('/', (req,res) => {
    console.log('GET /clients');
    let queryText = `SELECT * FROM clients`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful GET /clients');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /clients GET', error);
            res.sendStatus(500)
        })  
})













module.exports = router;