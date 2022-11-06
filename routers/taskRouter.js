/* 
TaskRouter.js
Defines task endpoints (CRUD)that respond to the client requests
*/
const router = require("express").Router();
const {
  getTasks,
  createTask,
  deleteTask,
  editTask,
} = require("../controllers/taskController");

router.get("/", (req, res) => {
  res.send("Welcome to task manager");
});

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:taskID", deleteTask);
router.put("/tasks/:taskID", editTask);

module.exports = router;
