const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const bodyParser = require('body-parser');
const pool = require('./modules/pool.js') //bringing the SQL connection into the server
const clientsRouter = require('./routes/clients.router.js')
const projectsRouter = require('./routes/projects.router.js')
const tasksRouter = require('./routes/tasks.router.js')

// Configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is required for Angular


// Static files
app.use(express.static('server/public'));


//use /clients router
app.use('/clients', clientsRouter); 
//use /projects router
app.use('/projects', projectsRouter); 
//use /tasks router
app.use('/tasks', tasksRouter); 







// tasks POST route
// app.post('/projects', (req, res) => {
//     console.log('POST /tasks', req.body);
//     const newProject = req.body;
//     const queryText = `INSERT INTO "client" (name) VALUES (${newProject.client}),
//                     INSERT INTO "client_project" (client_id, project) VALUES (1, ${newProject.project}
//                     INSERT INTO project_task (project_id, task, est_time, act_time) 
//                             VALUES (1, ${newProject.task}, ${newProject.estTime}, ${newProject.actTime});`;
//     pool.query(queryText, [])
//         .then((result) => {
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log('ERROR ADDING CREW - POST /crew -', error);
//             res.sendStatus(500);
//         });
// });






// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
