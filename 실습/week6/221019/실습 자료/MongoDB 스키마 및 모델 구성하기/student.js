const { Schema } = require("mongoose");

// 지시사항을 참고하여 코드를 완성하세요.
const StudentSchema = new Schema({
  name: { type: String, required: true},
  age: Number,
  major: String
});

module.exports = StudentSchema;
