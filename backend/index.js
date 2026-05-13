import express from "express";

const app = express();

const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("hello from JobHunt")
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
