import { Pelicula } from "../models/Pelicula.js"

export const obtenerPeliculas = async (req, res) => {
    try{
        const peliculas = await Pelicula.find()
        return res.json(peliculas);
    }catch(error){
        console.log("Error al buscar las películas")
    }
}

export const guardarPelicula = async (req, res) => {
    try {
        const pelicula = new Pelicula(req.body);
        const nuevaPelicula = await pelicula.save();
        res.json(nuevaPelicula)
    } catch (error) {
        console.log(error)
    }
}