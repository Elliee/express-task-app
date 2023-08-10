import styles from './TaskForm.module.css'

const TaskForm = (props) => {

    return (
        <form className={styles.form} onSubmit={props.handleAddTask}>
            <h3>Add New task</h3>
            <label>
                Task Name:<br></br>
                <input
                    type="text"
                    onChange={props.onChange}
                >
                </input>
            </label>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TaskForm;