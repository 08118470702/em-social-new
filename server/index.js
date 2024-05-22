require("dotenv/config")

const express=require("express")
const app=express();
const port=6677 ||process.env.PORT;
const connect =require('./config/db');
const authRouter = require('./routes/authRouted');
const userRouter = require("./routes/userRoute")
const cors=require("cors");
const cloudinary=require("cloudinary").v2;
const fileUpload=require("express-fileupload");


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });
  
// custom middleware
app.use(fileUpload({useTempFiles:true}));
app.use(express.json());
app.use(cors());


// middlewares
app.use(express.json())

// API's
app.use('/api/v1/auth', authRouter);
app.use("/api/v1/users", userRouter)
// server and DB connection
connect()
.then(()=>{
try{
    app.listen (port,()=>{
        console.log(`EM-server is connected to http://localhost:${port}`)
    })

}catch(error){
    console.log("cannot connect to th EM-SEVER");

}
})
.catch((error)=>{
    console.log(("invalid database connection...,error"));
})

// app.get('/', (req,res)=>{
//     res.json({
//         success:true,message:"em server is live"
//     })
// })

// server


// route


app.get('/', (req,res)=>{
    res.json({
        success:true,message:"em server is live"
    })
})

app.use ((req,res)=>{
    res.status(404).json({success:false,message:"route doesent exist"})
})