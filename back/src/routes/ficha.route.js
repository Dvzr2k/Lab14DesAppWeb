import { Router } from "express";
const router = Router();
import {devolverFicha, guardarFichaPrestamo, obtenerFichas} from "../controllers/ficha.controller.js"

router.get('/', obtenerFichas);
router.post('/', guardarFichaPrestamo);
router.put('/', devolverFicha);

export default router;