import {Schema, model} from "mongoose" 

const cintaSchema = new Schema({
    pelicula: {
        type: Schema.Types.ObjectId,
        ref: "Pelicula"
    },
    prestada: {
        type: Boolean,
        default: false
    }
})

export const Cinta = model("Cinta", cintaSchema)