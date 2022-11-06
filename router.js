const router = require("express").Router();
const {
  getTasks,
  createTask,
  deleteTask,
  editTask,
} = require("./controllers/task");

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:taskID", deleteTask);
router.put("/tasks/:taskID", editTask);

module.exports = router;
