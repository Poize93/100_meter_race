const mongoose=require('mongoose');

//mongoose.connect("mongodb://localhost:27017/olympics")
mongoose.connect("mongodb+srv://projectUser:Z8TltZKoIUZQND8S@cluster0.c8wpk.mongodb.net/olympics?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection Successful")
})
.catch((e)=>{
    console.log("failed connection")
    console.log(e)
})


