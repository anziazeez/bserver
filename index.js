//import .env file
require('dotenv').config()

//server creation
//express

//import express
const express = require('express')
//import router
const router = require('./routes/router')
const cors = require('cors')

//create server using express
const server = express()
//integrate front-end
server.use(cors())

//to convert all incoming json data to js data
server.use(express.json())

//set router
server.use(router)


//import connection.js
require('./database/connection')

//run server
//set port
const port = 5000 || process.env.port

server.listen(port, () => {
    console.log(`_________server started at port number ${port}________`);
})

//api calls resolve-post
// server.post('/register', (req,res)=>{
//     res.send("post method working...")
// })

// server.post('/login', (req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login worked")
// })

// server.get('/getexc', (req,res)=>{
//     res.send("get worked")
// })