import { FichaPrestamo } from "../models/FichaPrestamo.js"
import { FichaEspera  } from "../models/FichaEspera.js";
import { devolverCinta, obtenerCintas, prestarCinta } from "./cinta.controller.js";


export const obtenerFichasPrestamo = async (req, res) => {
    try {
        const fichas = await FichaPrestamo.find().populate('socio');
        console.log(fichas)
        const listaFichas = fichas.map(ficha => ({
            _id: ficha._id,
            nroCinta: ficha.cinta,
            socio: ficha.socio.nombre,
            fechaDevolver: ficha.fecha
        }))
        return res.json(listaFichas)
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

export const agregarFichaEspera = async (req, res) => {
    try {
        const fichaEspera = new FichaEspera(req.body)
        const nuevaFicha = await fichaEspera.save()
        return res.status(201).json(nuevaFicha)
    } catch (error) {
        console.log(error)
    }
}


export const obtenerFichasEspera  = async (req, res) => {
    try {
        const fichas = await FichaEspera.aggregate([
            {
              $lookup: {
                from: 'cintas',
                localField: 'cinta',
                foreignField: '_id',
                as: 'cinta'
              }
            },
            {
              $unwind: '$cinta'
            },
            {
              $lookup: {
                from: 'peliculas',
                localField: 'cinta.pelicula',
                foreignField: '_id',
                as: 'pelicula'
              }
            },
            {
              $unwind: '$pelicula'
            },
            {
              $lookup: {
                from: 'socios',
                localField: 'socioSolicitante',
                foreignField: '_id',
                as: 'socioSolicitante'
              }
            },
            {
              $unwind: '$socioSolicitante'
            },
            {
              $lookup: {
                from: 'socios',
                localField: 'socioRetrasado',
                foreignField: '_id',
                as: 'socioRetrasado'
              }
            },
            {
              $unwind: '$socioRetrasado'
            },
            {
              $project: {
                _id: 1,
                'pelicula.nombre': 1,
                'socioSolicitante.nombre': 1,
                'socioSolicitante.telefono': 1,
                'socioRetrasado.nombre': 1,
                diasDeRetardo: 1,
              }
            }
          ])
        return fichas
    } catch (error) {
        console.log(error)
    }
}