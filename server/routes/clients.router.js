const router = require('express').Router();
const pool = require('../modules/pool');


// client POST route
router.post('/', (req,res) => {
    console.log('POST /clients', req.body);
    let newClient = req.body.client;
    let queryText = `INSERT INTO time_tracker.clients (client) VALUES ($1)`;
    pool.query(queryText, [newClient])
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
    let queryText = `SELECT * FROM time_tracker.clients`;
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

// client/fullTable GET route
router.get('/fullTable', (req,res) => {
    console.log('GET /clients/fullTable');
    let queryText = `SELECT clients.id as client_id, client, 
                        client_project.id as project_id, project, 
                        project_task.id as task_id, task, est_time, act_time
                        FROM time_tracker.client_project 
                        JOIN time_tracker.clients ON clients.id = time_tracker.client_project.client_id 
                        JOIN time_tracker.project_task ON time_tracker.client_project.id = time_tracker.project_task.project_id;`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful GET /clients/fullTable');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /clients GET', error);
            res.sendStatus(500)
        })  
})













module.exports = router;