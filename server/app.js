const express = require('express');
const app = express();
require('dotenv').config();


const cors = require('cors');

//routes
const tasksRouter = require('./routes/tasks');


//middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/tasks', tasksRouter);

module.exports = app;