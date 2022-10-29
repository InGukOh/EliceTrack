const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect("mongodb://localhost:27017/sample")
    .then(() => {
      console.log("|///////////////////////|");
      console.log("| DB connection Success |");
      console.log("|///////////////////////|");
    })
    .catch((err) => {
      console.log("//!!ERROR!!//");
      console.log(err);
    });
};

module.exports = connection;
