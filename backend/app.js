const express = require('express') // Express framework for building web applications
const cors = require('cors'); // (Cross-Origin Resource Sharing) middleware for handling CORS issues
const { db } = require('./db/db'); // Custom database connection module
const { readdirSync, read } = require('fs'); // File system module for reading directories
const app = express(); // Creating an instance of the Express application

require('dotenv').config()

const PORT = process.env.PORT

// Middleware setup
app.use(express.json())
app.use(cors())

// Routes setup from reading "routes" directory
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })

}

// Call to the server function to start the application
server()