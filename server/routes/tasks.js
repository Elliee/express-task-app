const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/:id').get(getTask)
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask)
router.route('/:id').patch(updateTask)
module.exports = router;