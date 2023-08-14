import styles from './TaskForm.module.css'

const TaskForm = (props) => {

    return (
        <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={props.handleAddTask}>
            <h3>Add a new task</h3>
                <input
                    type="text"
                    required
                    onChange={props.onChange}
                >
                </input>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default TaskForm;