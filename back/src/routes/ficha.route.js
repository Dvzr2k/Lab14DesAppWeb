import { Router } from "express";
const router = Router();
import {devolverFichaPrestamo, guardarFichaPrestamo, obtenerFichasPrestamo} from "../controllers/ficha.controller.js"

router.get('/', obtenerFichasPrestamo);
router.post('/', guardarFichaPrestamo);
router.put('/', devolverFichaPrestamo);

export default router;