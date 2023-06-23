import { Schema, model } from "mongoose";

const peliculaSchema = new Schema({
    nombre: String,
    director: String,
    reparto: [String],
    genero: String,
    urlImage: String
})

export const Pelicula = model('Pelicula', peliculaSchema);