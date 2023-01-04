const noteModel = require("../models/node");

const createNote = async(req, res) =>{
    const {title ,description} = req.body;

    const newnote = new noteModel({
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

const updateNote = async(req, res) =>{
    const id = req.params.id;
    const {title ,description } =req.body;
    const newNote = {
        title: title,
        description : description,
        userId : req.userId
    }
    try{
        await noteModel.findByIdAndUpdate(id, newNote , {new : true})
        res.status(200).json(newNote)
    }
    catch(error){
        console.log(error)
        res.status(500).json({message : "Something went Wrong"})
    }
}
const deleteNote = async(req, res) =>{
    const id = req.params.id;
    try{
        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note)

    }catch(error){
        console.log(error)
        res.status(500).json({message : "Something went Wrong"})
    }

}
const getNote = async(req, res) =>{
        try{
        
                const notes = await noteModel.find({userId : req.userId});
                res.status(200).json(notes)
        } catch(error){
            console.log(error);
            res.status(500).json({message: "Something ff went wrong"}); 
        }
}
const findbyid = async(req, res) =>{
    const id = req.params.id;
    try{
    
            const note = await noteModel.find({_id : id});
            if(note){
                res.status(200).json(note)
            }
           
            else{
                res.status(500).json({message: "Not found"})
            }
         

    } catch(error){
        console.log(error);
        res.status(500).json({message: "Something ff went wrong"}); 
    }
}


module.exports = {createNote, updateNote, deleteNote, getNote,findbyid}