const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const sampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = { Sample };
