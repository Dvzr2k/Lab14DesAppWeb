import { Socio } from "../models/Socio.js"

export const obtenerSocios = async (req, res) => {
    try {
        const socios = await Socio.find()
        return res.json(socios)
    } catch (error) {
        console.log(error)
    }
}

export const guardarSocio = async (req, res) => {
    try {
        const socio = new Socio(req.body);
        const nuevoSocio = await socio.save();
        res.json(nuevoSocio)
    } catch (error) {
        console.log(error)
    }
}