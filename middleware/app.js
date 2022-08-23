const express = require("express");
const app = express();

const tumanRouter = require("../routes/tuman");

app.use(express.json());

app.use("/api/v1/tuman", tumanRouter);
module.exports = app;
