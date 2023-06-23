import { Router } from "express";
const router = Router();
import { guardarPelicula, obtenerPeliculas } from "../controllers/peliculas.controller.js"

router.get('/', obtenerPeliculas);
router.post('/', guardarPelicula)

export default router;