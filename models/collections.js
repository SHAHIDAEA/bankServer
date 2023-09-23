// create model

//mongoose library is used to create model
//import mongoose
const mongoose=require('mongoose')

//define schema
const usersSchema=new mongoose.Schema({
    acno:Number,
    uname:String,
    psw:String,
    balance:Number,
    transactions:[]
})

//model creation
const users=new mongoose.model("users",usersSchema)


//export module - to import on other files
module.exports=users