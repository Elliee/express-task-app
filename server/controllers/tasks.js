const { db } = require('../models/Task')
const Task = require('../models/Task')

const getAllTasks = async (req,res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
}

const getTask = async (req,res) => {
    const { params:{id: taskId}} = req

    const task = await Task.findOne({
        _id:taskId
    })

    res.status(200).json({task})
}

const updateTask = async (req,res) => {

    const {
        body: {name, completed},
        params: {id: taskId},
    } = req
    
    const task = await Task.findOneAndUpdate({ _id: taskId}, req.body, {
        new:true,
        runValidators:true,
    })

    res.status(200).json({ task })
}

const deleteTask = async (req,res) => {
    const {
        body: {name, completed},
        params:{id: taskId}
    } = req

    const task = await Task.findOneAndRemove({
        _id: taskId
    })

    if(!task){
        throw new Error(`No job with id: ${jobId} found!`)
    }
    res.status(200).send()
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}