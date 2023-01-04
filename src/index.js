// console.log("Hello Cheezycode");
const express = require('express');
const app = express();
const quotes = require("./card.json");
const noteRouter = require('./routes/noteroutes');
const useRouter = require('./routes/userroutes');
const dotenv = require("dotenv")
const cors = require("cors");


dotenv.config(); //read .env file

app.use(express.json());
app.use(cors());
// app.use((req,res,next)=>{
//     console.log(" Http Methods : "+req.method +  " , URL :" +req.url);
//     next();
// });
const PORT = process.env.PORT ||  5000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
        app.listen(PORT, ()=>{
            console.log("Server stated on port no. "+ PORT);
        })
})
.catch((error)=>{
    console.log(error)
})

app.use('/users',useRouter)
app.use('/notes',noteRouter)

app.get("/",(req,res)=>{
    res.send("Notes API From Sidhota54@gmail.com")
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