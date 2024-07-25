import express from "express";
 
const port = 5000

const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
