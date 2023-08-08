const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./DB/connect')

//routes
const tasksRouter = require('./routes/tasks');

const port = 3000

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start();