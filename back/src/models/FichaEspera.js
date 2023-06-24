//LISTA DE ESPERA
//cintas en lista de espera (consulta de tipo inner para obtener el nombre de la pelicula segun el id de la cinta)
//socio que la requiere (al darle click al boton de solicitar y no tiene cintas disponibles se agrega a la tabla y se agrega el nombre del socio)
//Socio qeu debe devolver
//Dias de retraso y su numero de telefono


import { Schema, model } from "mongoose";

const fichaEsperaSchema = new Schema({
    cinta:{
        type: Schema.Types.ObjectId,
        ref: "Cinta"
    },
    socioSolicitante: {
        type: Schema.Types.ObjectId,
        ref: "Socio"
    },
    socioRetrasado: {
        type: Schema.Types.ObjectId,
        ref: "Socio"
    },
    diasDeRetardo: Number,
    },
    { timestamps: true }
)

export const FichaEspera = model ("FichaEspera", fichaEsperaSchema)