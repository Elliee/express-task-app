import { BrowserRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound';
import TaskDetails from './components/TaskDetails';
import TaskList from './components/TaskList';
import Task from './components/Task';
import styles from './App.module.css'

function App() {

  return (
    <Router>
      <nav className={styles.nav}>
        <h3>Task Manager</h3>
        <Link to="/" className={styles.navLink}>
          All Tasks
        </Link>
      </nav>
    <Routes>
      {/* <Route path="/" element={<TaskList />} /> */}
      <Route path="/" element={<Navigate to="/tasks" replace={true} />} />
      <Route path="/tasks" element={<Task />}>
        <Route index element={<TaskList />} />
        <Route path=":id" element={<TaskDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}

export default App;
