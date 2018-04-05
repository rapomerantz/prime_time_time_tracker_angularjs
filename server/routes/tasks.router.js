const router = require('express').Router();
const pool = require('../modules/pool');


// tasks POST route
router.post('/', (req,res) => {
    console.log('POST /projects', req.body);
    let newTask = req.body;
    let queryText = `INSERT INTO project_task (project_id, task, est_time, act_time) 
                    VALUES ('${newTask.project_id}', '${newTask.task}', 
                            '${newTask.estTime}', '${newTask.actTime}')`;
    pool.query(queryText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error in /projects POST', error);
            res.sendStatus(500)
        })  
})

// tasks GET route
router.get('/', (req,res) => {
    console.log('GET /tasks');
    let queryText = `SELECT * FROM project_task`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful GET /tasks');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /tasks GET', error);
            res.sendStatus(500)
        })  
})













module.exports = router;