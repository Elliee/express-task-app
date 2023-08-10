import styles from './TaskCard.module.css'
const TaskCard = (props) => {
    return ( 
        <div key={props._id} className={styles.taskCard}>
            <h4>{props.name}</h4>
            <p>Completed: {props.completed}</p>
            <button onClick={props.handleDelete}>Delete Task</button>
            <button>Update Task</button>
        </div>
     );
}
 
export default TaskCard;