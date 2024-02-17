const logEvent = require("./logEvents");
const EventEmiter = require("events");

class MyEmitor extends EventEmiter {}

const myEmitor = new MyEmitor();

myEmitor.on("log", (msg) => logEvent(msg));

setTimeout(() => {
  myEmitor.emit("log", "Log Event Emitter");
}, 2000);
