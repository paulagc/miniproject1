/* 
TaskController.js
Forwards the requests of the router to the correct controller functions
*/
const Task = require("../models/taskModel");

const getTasks = (req, res) => {
  Task.find((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
};

const createTask = (req, res) => {
  const newTask = new Task({
    assignedTo: req.body.assignedTo,
    description: req.body.description,
  });

  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

const deleteTask = (req, res) => {
  Task.deleteOne({ _id: req.params.taskID })
    .then(() => res.json({ message: "Task Deleted" }))
    .catch((err) => res.send(err));
};

const editTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskID },
    {
      $set: {
        assignedTo: req.body.assignedTo,
        description: req.body.description,
      },
    },
    { new: true },
    (err, task) => {
      if (err) {
        res.send(err);
      } else res.json(task);
    }
  );
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  editTask,
};
