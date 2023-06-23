import {Schema, model} from "mongoose"

const socioSchema = new Schema({
    nombre: String,
    direccion: String,
    telefono: {
        type : String,
        required: true
    },
    actoresFavoritos:[String],
    generosFavoritos: [String],
    directoresFavoritos: [String]
});

export const Socio = model('Socio', socioSchema)