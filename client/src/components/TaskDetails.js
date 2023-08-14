import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './TaskDetails.module.css'

const TaskDetails = () => {

    const { id } = useParams();
    const [task, setTask] = useState({})
    const navigate = useNavigate();


    const fetchTaskData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/tasks/${id}`);
            const taskData = await response.json();
            setTask({ ...task, name: taskData.task.name, completed: taskData.task.completed });
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchTaskData();
    }, []);


    const updateTask = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:8000/api/v1/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({...task, name: task.name, completed: task.completed}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            setTask({ ...task, name: result.task.name, completed: result.task.completed });
        } catch (error) {
            console.log(error);
        }

        navigate('/')

    }

    return (
        <div className={styles.formContainer}>
            <form method="patch" className={styles.updateForm} onSubmit={updateTask}>
                <h3>Edit Task</h3>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={task.name}
                    onChange={e => setTask({ ...task, name: e.target.value })}
                ></input>
                <br></br>
                <label>Completed</label>
                <input
                    type="checkbox"
                    name="completed"
                    defaultChecked={task.completed}
                    onClick={e => setTask({ ...task, completed: e.target.checked })}
                >
                </input>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TaskDetails;