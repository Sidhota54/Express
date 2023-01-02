const nodeModule = require("../models/node");

const createNote = async(req, res) =>{
    const {title ,description} = req.body;

    const newnote = new nodeModule({
        title : title,
        description : description ,
        userId : req.userId

    });
    try{
        await newnote.save();
        res.status(201).json(newnote);

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const updateNote = (req, res) =>{

}
const deleteNote = (req, res) =>{

}
const getNote = async(req, res) =>{
        try{
                const notes = await noteModel.find({userId: req.userId});
                res.status(200).json(notes)
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Something went wrong"}); 
        }
}


module.exports = {createNote, updateNote, deleteNote, getNote}