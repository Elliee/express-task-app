import { useState } from "react";
import styles from './TaskForm.module.css'
const TaskForm = () => {
    
    const [showForm, setShowForm] = useState(true)
    const [formData, setFormData] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/v1/tasks', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json()
        console.log(result)

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3>Add New task</h3>
            <label>
                Task Name:<br></br>
                <input
                    type="text"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                >
                </input>
            </label>
            <br></br>
            <br></br>
            <button type="submit" onClick={() => window.location.reload(true)}>Submit</button>
        </form>
    );
}

export default TaskForm;