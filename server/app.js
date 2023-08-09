const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./DB/connect')
const mongoose = require('mongoose');

//routes
const tasksRouter = require('./routes/tasks');

const PORT = 3000

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

// mongoose.connect(process.env.MONGO_URI)


// app.listen(PORT, () => {
//     console.log(`server listerining on port ${PORT}...`)
// })

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URI)
//         app.listen(PORT, () => {
//             console.log(`Server listening on port ${PORT}...`)
//         })
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// start();

// module.exports = start;

module.exports = app;