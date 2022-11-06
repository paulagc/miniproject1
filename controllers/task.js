const Task = require("../models/task");

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
    name: req.body.name,
    task: req.body.task,
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
        name: req.body.name,
        task: req.body.task,
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
