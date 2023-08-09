const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./DB/connect')
const mongoose = require('mongoose');

const cors = require('cors');

//routes
const tasksRouter = require('./routes/tasks');

const PORT = 3000

//middleware
app.use(express.json());
app.use(cors());
app.use('/api/v1/tasks', tasksRouter);

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