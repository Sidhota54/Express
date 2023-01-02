// console.log("Hello Cheezycode");
const express = require('express');
const app = express();
const quotes = require("./card.json");
const noteRouter = require('./routes/noteroutes');
const useRouter = require('./routes/userroutes');

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://siddharth:14Feb1999@cluster0.jqzcng9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
        app.listen(5000, ()=>{
            console.log("Server stated on port no. 5000");
        })
})
.catch((error)=>{
    console.log(error)
})

app.use('/users',useRouter)
app.use('/notes',noteRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})
// app.get("/quote",(req,res)=>{
//     // res.send("Quote")
//     res.status(200).json(quotes)
// })
// app.get("/random",(req,res)=>{
//         let index = Math.floor(Math.random() * quotes.length)
//         let quote = quotes[index]
//         res.status(200).json(quote.header)
// })
// app.post("/random",(req,res)=>{
//     let index = Math.floor(Math.random() * quotes.length)
//     let quote = quotes[index]
//     res.status(200).json(quote)
// })


// app.listen(5000, ()=>(
//     console.log("Server Started on port no. 5000")
// ));