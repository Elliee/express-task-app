import { useState, useEffect } from "react";
import styles from './TaskList.module.css'
const TasksList = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTaskData = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/api/v1/tasks')
      const taskData = await response.json()
      setTasks(taskData.tasks)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTaskData();
  }, [])


  return (
   <div className={styles.taskContainer}>
    {tasks && tasks.map((task, index) => {
      return (
        <div key={index} className={styles.taskCard}>
          <h4>{task.name}</h4>
          <p>Status: { task.status ? 'done' : 'not done' }</p>
          <button>Update Task</button>
          <button>Mark task done</button>
        </div>
      )
    })}
   </div>
    
  );
}

export default TasksList;