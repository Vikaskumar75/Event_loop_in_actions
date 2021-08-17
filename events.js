//* Old way of working with event emitters

// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.on("newSale", () => {
//   console.log("This is a new sale");
// });

// myEmitter.on("newSale", () => {
//   console.log("Costumer name: Vikas Kumar");
// });

// myEmitter.on("newSale", (stock) => {
//   console.log(`There are ${stock} items left in stock`);
// });

// myEmitter.emit("newSale", 9);

//* New way of working with event emitters

const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("This is new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Vikas Kumar");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit("newSale", 12);

//* Using http module as an example for event emitter

const http = require("http");
const fs = require("fs");

const port = 8000;
const localHost = "127.0.0.1";

const data = fs.readFileSync("test-file.txt", "utf8", () => {
  console.log("fileRead");
});

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received!");
    // res.end(data);
});

server.on("request", (req, res) => {
  console.log("Another Request received!");
});

server.on("close", () => {
  console.log("Server closed!");
});

server.listen(port, localHost, () => {
  console.log(`Listening to the server on port: ${port}......`); 
});
