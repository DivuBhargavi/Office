// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// //import dbInit from './db/init';
// //import routes from "./routes";
// const port = 3000;
// const app = (0, express_1.default)();
// app.use(express_1.default.json());
// //dbInit()
// //app.use('/' , routes)
// app.get('/', (req, res) => {
//     res.send("hello world");
// });
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });



// Load the http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code for "OK"
  res.setHeader('Content-Type', 'text/plain'); // Set the response content type
  res.end('Hello World\n'); // Send the response body
});

// Make the server listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});