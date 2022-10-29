const { Router } = require("express");
const { Sample } = require("../db/schemas");

const router = Router();

router.post("/login", console.log("login Controller action"));
