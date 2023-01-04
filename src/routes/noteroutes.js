const express = require('express');
const { getNote, createNote, deleteNote,findbyid, updateNote } = require('../controllers/nodeController');
const auth = require("../middlewares/auth");

const noteRouter = express.Router();

// noteRouter.get('/',(req,res)=>{
//     res.send('note get request')
// });
noteRouter.get('/get/', auth ,getNote);

noteRouter.post('/newnote/',auth ,createNote)

noteRouter.delete('/delete/:id',auth ,deleteNote)

noteRouter.put('/update/:id',auth ,updateNote)

noteRouter.get('/findbyid/:id',auth ,findbyid)

// noteRouter.post('/',(req,res)=>{
//         res.send('note post request')
// });

 

module.exports = noteRouter;