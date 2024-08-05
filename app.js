//Introduction to Express.js: Setting up an Express server. Create basic routes and middleware.
//  Express.js is a popular web framework for Node.js that makes it easier to build web applications and APIs. Let’s walk through setting up a basic Express server, creating routes, and using middleware.
import express from "express"; // Import the express module
 
const port = 3000

const app = express(); // Create an Express app

app.use(express.json()); // middleware to parse JSON request bodies

app.get('/hii', (req,res) =>{ // Define a GET route for /hii
    res.send("hello world");
})

app.listen(port, () => { // Start the server and log a message when it's running
    console.log(`Server running on port ${port}`);
  });
