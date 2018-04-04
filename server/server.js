const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const bodyParser = require('body-parser');
const pool = require('./modules/pool.js') //bringing the SQL connection into the server


// Configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is required for Angular


// Static files
app.use(express.static('server/public'));




// Start the server
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
