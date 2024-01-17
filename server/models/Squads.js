import mongoose from "mongoose";

const squadSchema = new mongoose.Schema({
  squad: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  time: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9]+@[a-zA-Z0-9.]*$/
  },
  day: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9]*$/
  },
  availability: {
    type: String,
    required: true,
    validate: /^[A-Za-z]*$/
  }
});

const Squad = mongoose.model("Squad", squadSchema);

export default Squad;
