import taskMdl from "../models/taskMdl.js";

const taskCtrl = {};

taskCtrl.getTask = async (req, res) => {
    try{
        const task = await taskMdl.find();
        res.status(200).json(task);
    }
    catch(err){
        console.error("Ha ocurrido un error: ", err.message)
        res.status(500).json({server: "Ha ocurrido un error", message: err.message})
    }
}

taskCtrl.postTask = async (req, res) => {
    try{
        const {title, description, completed} = req.body;

        if(!title || !description){
           return res.status(400).json({message: "todos los campos son obligatorios"})
        }
        const newtask = new taskMdl({title, description, completed});
        await newtask.save();
        res.status(200).json({message: "tarea insertada todo nice"})
    }
    catch(err){
        console.error("Ha ocurrido un error: ", err.message)
        return res.status(500).json({server: "Ha ocurrido un error", message: err.message})
    }
}

taskCtrl.putTask = async (req, res) => {
    try{
        const {title, description, completed} = req.body;

        await taskMdl.findByIdAndUpdate(req.params.id, {title, description, completed});
        res.status(200).json({message: "Tarea actualizada de manera correcta"})
    }
    catch(err){
        console.error("Ha ocurrido un error: ", err.message)
        res.status(500).json({server: "Ha ocurrido un error", message: err.message})
    }
}

taskCtrl.deleteTask = async (req, res) => {
    try{
       await taskMdl.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Tarea eliminada de manera correcta"})
        
    }
    catch(err){
        console.error("Ha ocurrido un error: ", err.message)
        res.status(500).json({server: "Ha ocurrido un error", message: err.message})
    }
}

export default taskCtrl;