import { useState, useEffect } from "react";
import styles from './TaskList.module.css'
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState(false);

  const fetchTaskData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/v1/tasks');
      const taskData = await response.json();
      setTasks(taskData.tasks);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTaskData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const request = await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
        method: "DELETE",
      })
      setTasks(
        tasks.filter((task) => {
          return task._id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  const onChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  }

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/tasks', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      setTasks([result.task, ...tasks]);
    } catch (error) {
      console.log(error);
    }
  }

    const displayForm = () => {
    setShowForm(!showForm)
  }


  return (
    <>
      <button onClick={displayForm}>Add Task</button>
      { showForm &&  <TaskForm handleAddTask={handleAddTask} onChange={onChange} />}

      <div className={styles.taskContainer}>
        {tasks && tasks.map((task, index) => {
          return (
            <TaskCard
              key={task._id}
              name={task.name}
              completed={task.completed ? 'done' : 'not done'}
              handleDelete={() => handleDelete(task._id)}
            />
          )
        })}
      </div>
    </>
  );
}

export default TasksList;