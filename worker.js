const { parentPort } = require("worker_threads");

parentPort.once("message", (message) => {
  console.log(message);

  const start = Date.now();
  while (Date.now() - start < 10000) {}

  parentPort.postMessage("loop finish!");
});
