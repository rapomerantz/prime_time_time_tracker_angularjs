const router = require('express').Router();
const pool = require('../modules/pool');

// tasks POST route
router.post('/', (req,res) => {
    console.log('POST /projects', req.body);
    let newTask = req.body;
    let queryText = `INSERT INTO time_tracker.project_task (project_id, task, est_time, act_time) 
                    VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newTask.project_id, newTask.task, newTask.estTime, newTask.actTime])
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
    let queryText = `SELECT * FROM time_tracker.project_task`;
    pool.query(queryText)
        .then((result) => {
            // console.log('successful GET /tasks');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /tasks GET', error);
            res.sendStatus(500)
        })  
})


//tasks DELETE 
router.delete('/:id', (req,res) => {
    let taskId = req.params.id
    console.log('in DELETE /tasks, taskId ', taskId);
    let queryText = `DELETE FROM time_tracker.project_task WHERE id = $1;`;
    pool.query(queryText, [taskId])
        .then((result) => {
            // console.log('successful DELETE /tasks', result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in /tasks DELETE', error);
            res.sendStatus(500)
        })  
})












module.exports = router;