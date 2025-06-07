// const mongoose = require("mongoose");
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

module.exports = mongoose.models.Task || mongoose.model("Task", TaskSchema);
