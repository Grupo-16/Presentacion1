import mongoose from "mongoose";

const tableroSchema = new mongoose.Schema({
    nombre: String,
    tareas: [{
        titulo: String,
        descripcion: String,
        usuarios: [String], // en el futuro, esto debería ser un ObjectId
        fecha_vencimiento: Date,
        estado: String,
    }]
})

export default mongoose.model("Tablero", tableroSchema);