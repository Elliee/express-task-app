import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './TaskList.module.css'
import TaskForm from "./TaskForm";
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
const TasksList = () => {

  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
  });

  const fetchTaskData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/tasks');
      const taskData = await response.json();
      setTasks(taskData.tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTaskData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const request = await fetch(`http://localhost:8000/api/v1/tasks/${id}`, {
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

  console.log(formData)
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/tasks', {
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


  return (
    <>
      <TaskForm handleAddTask={handleAddTask} onChange={onChange}/>
      <div className={styles.taskContainer}>
      
          {tasks.map((task) => {
            return(
              <div className={styles.taskCard} key={task._id}>
                <p>{task.completed ? '✅' : '❌'}</p>
                <Link className={styles.cardLink} to={`/tasks/${task._id}`}>{task.name}</Link>
                <Link className={styles.updateBtn}to={`/tasks/${task._id}`}><FaPencilAlt /></Link>
                <button className={styles.deleteBtn} onClick={() =>handleDelete(task._id)}><FaRegTrashAlt /></button>
              </div>
            )
          })}
        
      </div>
    </>
  );
}

export default TasksList;