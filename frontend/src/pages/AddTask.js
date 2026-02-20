import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function AddTask() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    if (!title) return;

    await axios.post(`${API_URL}/tasks`, { title });
    setTitle("");
    alert("Task Added!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddTask;