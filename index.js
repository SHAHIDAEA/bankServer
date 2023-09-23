//import .env file
require('dotenv').config()

//import express
const express=require('express')
 
//import router file
const router=require('./routes/router')

//create server using express
const server=express()

//import cors to integrate frontend and backend
const cors=require('cors')

//convert all incoming json type data to js data
server.use(express.json())

//integrate front end with backend
server.use(cors())

//router set
server.use(router)

// import connection.js file - to run the connection file
require('./db/connection')

//server run
     //port           for run the env file in the same port which the server run
 const port=5000 || process.env.port

     //run
server.listen(port,()=>{
    console.log(`_________server started at port number ${port}__________`);
})     


//api calls resolve 
// server.post('/register',(req,res)=>{
//     res.send("register method working...")
// })

// server.post('/login',(req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login works")
// })
// server.get('/getexc',(req,res)=>{
//     res.send("get worked")
// })