const express= require("express");
const mongoose=require("mongoose");
const router=require("./route/bookroute");
const dotenv = require('dotenv'); 
dotenv.config()
const app=express();
app.use(express.json());

//Middleware
app.use("/books",router);
app.use("/",(req,res,next)=>{
res.send("Welcome to my store")
})



mongoose.connect(process.env.MONGODB_URL, {
  }).then(console.log("Connected")).catch((err) => console.log(err));

app.listen("3000", () => {
    console.log("running")
});
