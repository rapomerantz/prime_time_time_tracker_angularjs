const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const bodyParser = require('body-parser');
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


// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
