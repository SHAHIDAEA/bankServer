
//import express for router object to create path
const express=require('express')
//import logics in logic.js
const { register, getBalance, moneyTransfer, accountStatement, accountDelete } = require('../controllers/logic')
const jwtMiddleWare = require('../MiddleWares/jwtMiddleware')

// router object
const router=new express.Router()

//create account - signup
router.post('/bankuser/create_acc',register)

//login
router.post('/bankuser/login',login)

//balance check
router.get('/bankuser/balance/:acno',jwtMiddleWare,getBalance)

//money transfer
router.post('/bankuser/money-transfer',jwtMiddleWare,moneyTransfer)

//account statement
router.get('/bankuser/account-statement/:acno',jwtMiddleWare,accountStatement)

//delete account
router.delete('/bankuser/delete-account/:acno',jwtMiddleWare,accountDelete)




//export router file
module.exports=router