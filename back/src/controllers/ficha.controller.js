import { FichaPrestamo } from "../models/FichaPrestamo.js"
import { devolverCinta, prestarCinta } from "./cinta.controller.js";


export const obtenerFichasPrestamo = async (req, res) => {
    try {
        const fichasPrestamos = await FichaPrestamo.find();
        return res.json(fichasPrestamos)
    } catch (error) {
        console.log(error)
    }
}

export const guardarFichaPrestamo = async (req, res) => {
    try{
        const fichaprestamo = new FichaPrestamo(req.body)
        const nuevaFicha = await fichaprestamo.save();
        const cintaId = nuevaFicha.cinta
        await prestarCinta(cintaId)
        res.json(nuevaFicha)
    } catch (err) {
        console.log(err)
    }
}

export const devolverFichaPrestamo = async (req, res) => {
    try {
        const {_id} = req.body;
        const ficha = await FichaPrestamo.findByIdAndUpdate(_id, {entregado: true});
        await ficha.save();
        const cintaId = ficha.cinta;
        await devolverCinta(cintaId)
        return res.json({msg: "Ficha entregada"})
    } catch (error) {
        
    }
}

export const devolverFichaEspera = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}