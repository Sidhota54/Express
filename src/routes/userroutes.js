const express = require('express');

const useRouter = express.Router();

useRouter.post('/signup',(req,res)=>{
        res.send('signup')
});

useRouter.post('/signin',(req,res)=>{
    res.send('signin')
});


module.exports = useRouter;