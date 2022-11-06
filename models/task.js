const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  assignedTo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
