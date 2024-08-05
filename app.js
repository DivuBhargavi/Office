
import express from "express"; 
 
const port = 3000

const app = express(); 

app.use(express.json()); 

app.get('/hii', (req,res) =>{ 
    res.send("hello world");
})

app.listen(port, () => { 
    console.log(`Server running on port ${port}`);
  });
