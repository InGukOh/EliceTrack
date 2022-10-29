const express = require("express");
const mongoose = require("mongoose");
const connection = require("./db/connection");
const sampleSchema = require("./db/schemas/sample");

const app = express();

connection();

app.listen(8080);
