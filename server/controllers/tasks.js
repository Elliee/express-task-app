const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    return res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
}

module.exports = {
    getAllTasks,
    createTask
}