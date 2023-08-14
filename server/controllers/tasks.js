const Task = require('../models/Task');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors')

const getAllTasks = async (req,res) => {
    const tasks = await Task.find({})
    res.status(StatusCodes.OK).json({tasks})
}

const createTask = async (req, res) => {

    const {
        body: {name, completed}
    } = req;
     if(name === ""){
        throw new BadRequestError(`Task name field cannot be blank`)
     }
    const task = await Task.create(req.body)
    res.status(StatusCodes.CREATED).json({ task })
}

const getTask = async (req,res) => {
    const { params:{id: taskId}} = req

    const task = await Task.findOne({
        _id:taskId
    })

    if(!task){
       throw new NotFoundError(`No task with id: ${taskId} found`)
    }

    res.status(StatusCodes.OK).json({task})
}

const updateTask = async (req,res) => {

    const {
        body: {name, completed},
        params: {id: taskId},
    } = req

    if(name === ''){
        throw new BadRequestError('Task name field cannot be blank')
    }
    
    const task = await Task.findOneAndUpdate({ _id: taskId}, req.body, {
        new:true,
        runValidators:true,
    })

    if (!task){
        throw new NotFoundError(`Task with id: ${taskId} not found`)
    }

    res.status(StatusCodes.OK).json({ task })
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
        throw new NotFoundError(`Task with id: ${taskId} not found`)
    }
    res.status(StatusCodes.OK).send()
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}