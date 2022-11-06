const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
