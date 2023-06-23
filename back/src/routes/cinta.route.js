import { Router } from "express";
const router = Router();
import {obtenerCintas, prestarCinta, devolverCinta, guardarCinta} from "../controllers/cinta.controller.js"

router.get('/', obtenerCintas)
router.post('/', guardarCinta)

export default router;