const express = require("express");
const app = express();

const tumanRouter = require("../routes/tuman");
const maktabRouter = require("../routes/maktab");
const sinfRouter = require("../routes/sinf");
const uquvchiRouter = require("../routes/uquvchi");

app.use(express.json());

app.use("/api/v1/tuman", tumanRouter);
app.use("/api/v1/maktab", maktabRouter);
app.use("/api/v1/sinf", sinfRouter);
app.use("/api/v1/uquvchi", uquvchiRouter);
module.exports = app;
