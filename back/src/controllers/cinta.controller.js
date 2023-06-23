import { Cinta } from "../models/Cinta.js"
import { Pelicula } from "../models/Pelicula.js"

export const obtenerCintas = async (req, res) => {
    try {
        const cintasTotales = await Cinta.find();
        let cintasDisponibles = []
        let cintasPrestadas = []
        for (const cinta of cintasTotales) {
            if (!cinta.prestada) {
                const pelicula = await Pelicula.findById(cinta.pelicula);
                cintasDisponibles.push({
                    _id: cinta._id,
                    pelicula: cinta.pelicula,
                    nombrePelicula: pelicula.nombre,
                    prestada: cinta.prestada,
                    v: cinta.v
                });
            } else {
                cintasPrestadas.push(cinta);
            }
        }
        return res.json( {cintasTotales, cintasDisponibles, cintasPrestadas} )
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