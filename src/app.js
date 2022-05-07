const express=require("express");
require("../src/db/conn")
const MenRanking=require("../src/models/mens")
const router =require("./routers/mens")

const app=express();
const port=process.env.PORT || 3000;


app.use(express.json( ))
// app.get("/", async(req,res)=>{
//     res.send("Hello from Rahul"); 
// })
app.use(router);
app.listen(port,()=>{
    console.log(`Connection is live at port number ${port}`)
})