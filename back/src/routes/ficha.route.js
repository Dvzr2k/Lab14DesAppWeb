import { Router } from "express";
const router = Router();
import {devolverFichaPrestamo, guardarFichaPrestamo, obtenerFichasPrestamo, agregarFichaEspera, obtenerFichasEspera} from "../controllers/ficha.controller.js"

router.get('/prestamo', obtenerFichasPrestamo);
router.post('/prestamo', guardarFichaPrestamo);
router.put('/prestamo', devolverFichaPrestamo);


router.get('/espera', obtenerFichasEspera);
router.post('/espera', agregarFichaEspera);

export default router;