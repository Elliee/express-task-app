import TasksList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState} from "react";
import styles from './App.module.css'
function App() {
  // const [showForm, setShowForm] = useState(false)

  // const displayForm = () => {
  //   setShowForm(!showForm)
  // }

  return (
    <div className="App">
      <nav className={styles.navBar}>
        <h1>Task Manager</h1>
        {/* <button onClick={displayForm}>Add New Task</button> */}
      </nav>
  
      {/* {showForm && <TaskForm/>} */}
      <TasksList/>
      
    </div>
  );
}

export default App;
