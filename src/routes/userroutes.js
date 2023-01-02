const express = require('express');
const { signup, signin } = require('../controllers/userController');

const useRouter = express.Router();

// useRouter.post('/signup',(req,res)=>{
//         res.send('signup')
// });
useRouter.post('/signup',signup);

// useRouter.post('/signin',(req,res)=>{
//     res.send('signin')
// });
useRouter.post('/signin',signin);


module.exports = useRouter;