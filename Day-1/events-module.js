const EventEmitter = require("events");
// Create a new instance of EventEmitter
const event = new EventEmitter();
const handleFunction = () => {
  console.log("hello");
};
const byeEventhandlerFunction = () => {
    console.log("bye");
  };
event.on("HelloEvent", handleFunction);
event.on("ByeEvent", byeEventhandlerFunction);
// emit hamare function handleFunction ko call krta h and "hello" print hota hai nhi toh bina emit k woh print nhi krta console mey
event.emit("HelloEvent")
event.emit("ByeEvent")
