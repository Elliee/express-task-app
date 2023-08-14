import { Outlet } from 'react-router-dom';

const Task = () => {
    return (
        <div style={{ padding: 20 }}>
          <Outlet />
        </div>
      );
}
 
export default Task;