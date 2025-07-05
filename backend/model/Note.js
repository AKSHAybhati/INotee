const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: String,
  description: String,
  tag: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
