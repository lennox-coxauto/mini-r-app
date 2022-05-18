

/*
* @desc - Mini-Express-server for server side rendering.
*/

// imports
const express = require('express');
const morgan = require('morgan');
const app = express();
const HOMEROUTE = require('./routes/homeroute')

//PORT
const PORT = process.env.PORT || 8080;

// morgan package to log requests
app.use(morgan('tiny'));
//---------------------------------//


app.use(express.json())

app.use('/', HOMEROUTE)



const SERVER = () => {
    app.listen( PORT, () => { console.log(`server running on http://localhost:${PORT}`)} );
};

// RUN SERVER
SERVER();