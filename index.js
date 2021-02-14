const express = require("express");
const { Worker } = require("worker_threads");

const server = express();
const worker = new Worker("./worker.js");

worker.once("message", (message) => {
  console.log(message);
});

server.get("/fast", (req, res) => {
  return res.send("realy fast");
});
server.get("/worker", (req, res) => {
  worker.postMessage("invoke work");
  return res.send("worker running!");
});

server.listen(3333);

// const worker = new Worker("./worker.js");
