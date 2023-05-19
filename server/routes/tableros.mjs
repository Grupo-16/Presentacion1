import mongoose, { mongo } from "mongoose";
import express from "express";
import Tablero from "../models/Tablero.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.on('open', () => console.log('Connected to database'));

router.get('/', (req, res) => {
    res.send("hola")
})

router.post('/', async (req, res) => {
    
    const tablero = new Tablero({
        nombre: req.body.nombre,
    })


    try {
        const newTablero = await tablero.save();
        res.status(200).json(newTablero);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.patch('/:id', async (req, res) => {
    
    try {
        console.log(req.params.id);
        
        const updateTablero = await Tablero.findByIdAndUpdate({_id: req.params.id}, { 
            nombre: "esto es un update"
            /* tareas: [
                {
                    titulo: "hola",
                    descripcion: "desc",
                    usuarios: ["ho", "as"],
                    fecha_vencimiento: Date.now(),
                    estado: "en progreso",
                },
            ] */
            
        })
        res.status(200);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

export default router
