import { Schema, model } from "mongoose";

const fichaPrestamoSchema = new Schema({
    cinta:{
        type: Schema.Types.ObjectId,
        ref: "Cinta"
    },
    socio: {
        type: Schema.Types.ObjectId,
        ref: "Socio"
    },
    fecha: {
        type: Date,
        default: () => {
            const nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            return nextWeek;
        }
    },
    entregado: {
        type: Boolean,
        default: false
    }
    },
    { timestamps: true }
)

export const FichaPrestamo = model ("FichaPrestamo", fichaPrestamoSchema)