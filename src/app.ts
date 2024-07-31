<<<<<<< HEAD
// import express from "express";
// //import dbInit from './db/init';
// //import routes from "./routes";
// const port = 4000

// const app = express();

// app.use(express.json());

// //dbInit()

// //app.use('/' , routes)

// app.get('/', (req,res) =>{
//     res.send("hello world");
// })

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });








//  Express.js is a popular web framework for Node.js that makes it easier to build web applications and APIs. 

import express from "express"; // Import the express module
 
const port = 2000

const app = express(); // Create an Express app

app.use(express.json()); // middleware to parse JSON request bodies

app.get('/you', (req,res) =>{ // Define a GET route for /hii
    res.send("hello Divya");
})

app.listen(port, () => { // Start the server and log a message when it's running
    console.log(`Server running on port ${port}`);
  });
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import dbInit from './db/init';
//import routes from "./routes";
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
//dbInit()
//app.use('/' , routes)
app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



>>>>>>> 0d972c508c4adc778637b80cf6318ef8de53753f
