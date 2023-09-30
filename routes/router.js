const express = require('express')
const { register, login, getBalance, moneyTransfer, accountStatement, accountDelete } = require('../controllers/logic')
const { jwtMiddleware } = require('../middlewares/jwtMiddleware')

//router object
const router = new express.Router()


//create ac- signup
router.post('/bankuser/create_acc', register)

//login
router.post('/bankuser/login', login)

//balance check
router.get('/bankuser/balance/:acno',jwtMiddleware,getBalance)

//money transfer
router.post('/bankuser/money-transfer',jwtMiddleware,moneyTransfer)

//ac statement
router.get('/bankuser/account-statement/:acno',jwtMiddleware,accountStatement)

//delete account
router.delete('/bankuser/delete-account/:acno',jwtMiddleware,accountDelete)

//export
module.exports = router