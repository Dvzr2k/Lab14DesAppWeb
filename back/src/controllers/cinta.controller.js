import { Cinta } from "../models/Cinta.js"

export const obtenerCintas = async (req, res) => {
    try {
        const cintas = await Cinta.find();
        return res.json( cintas )
    } catch (err) {
        console.log(err)
    }
}

export const guardarCinta = async (req, res) => {
    try {
        const cinta = new Cinta(req.body)
        const nuevaCinta = await cinta.save()
        return res.json(nuevaCinta)
    } catch (error) {
        console.log(error)
    }
}

export const prestarCinta = async (cintaId) => {

    try {
        await Cinta.findByIdAndUpdate(cintaId, {prestada: true});
        return true
    } catch (error) {
        console.log(error)
    }
}

export const devolverCinta = async (cintaId) => {
    try {
        await Cinta.findByIdAndUpdate(cintaId, {prestada: false});
        return true
    } catch (error) {
        console.log(error)
    }
}