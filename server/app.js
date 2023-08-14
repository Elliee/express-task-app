const express = require('express');
require('express-async-errors');
const app = express();
require('dotenv').config();
const cors = require('cors');


// routes
const tasksRouter = require('./routes/tasks');

// error handler

const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/tasks', tasksRouter);

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleware)

module.exports = app;