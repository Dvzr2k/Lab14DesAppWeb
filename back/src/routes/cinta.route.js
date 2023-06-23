import { Router } from "express";
const router = Router();
import {obtenerCintas, guardarCinta, obtenerCantidadCintas} from "../controllers/cinta.controller.js"

router.get('/', obtenerCintas)
router.post('/', guardarCinta)
router.get('/cantidades', obtenerCantidadCintas)

export default router;