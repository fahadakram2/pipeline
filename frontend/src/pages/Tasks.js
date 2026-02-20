import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    const res = await axios.get(`${API_URL}/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`${API_URL}/tasks/${id}`, { status });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter(task => task.status === filter);

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Tasks</h2>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.status}
            {task.status === "pending" && (
              <button onClick={() => updateStatus(task.id, "completed")}>
                Complete
              </button>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;