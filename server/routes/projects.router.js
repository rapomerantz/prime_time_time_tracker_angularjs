const router = require('express').Router();
const pool = require('../modules/pool');


// project POST route
router.post('/', (req,res) => {
    console.log('POST /projects', req.body);
    let newProject = req.body;
    let queryText = `INSERT INTO time_tracker.client_project (client_id, project) 
                    VALUES ($1, $2)`;
    pool.query(queryText, [newProject.client_id, newProject.project])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /projects POST', error);
            res.sendStatus(500)
        })  
})

// project GET route
router.get('/', (req,res) => {
    console.log('GET /projects');
    let queryText = `SELECT * FROM time_tracker.client_project`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful GET /projects');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /projects GET', error);
            res.sendStatus(500)
        })  
})

// projects DELETE 
router.delete('/:id', (req,res) => {
    let projectId = req.params.id
    console.log('in DELETE /projects, projectId ', projectId);
    let queryText = `DELETE FROM time_tracker.client_project WHERE id = ${projectId};`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful DELETE /tasks', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in /tasks DELETE', error);
            res.sendStatus(500)
        })  
})













module.exports = router;