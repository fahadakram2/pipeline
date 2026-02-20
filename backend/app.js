const express = require("express");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();

const app = express();
const filePath = process.env.DATA_FILE || "tasks.json";

app.use(cors());
app.use(express.json());

const readTasks = () => JSON.parse(fs.readFileSync(filePath));
const writeTasks = (tasks) =>
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

app.get("/tasks", (req, res) => {
  res.json(readTasks());
});

app.post("/tasks", (req, res) => {
  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title: req.body.title,
    status: "pending"
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  let tasks = readTasks();

  tasks = tasks.map(task =>
    task.id == req.params.id
      ? { ...task, status: req.body.status }
      : task
  );

  writeTasks(tasks);
  res.json({ message: "Updated" });
});

app.delete("/tasks/:id", (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter(task => task.id != req.params.id);

  writeTasks(tasks);
  res.json({ message: "Deleted" });
});

module.exports = app;