import { Router } from "express";
const router = Router();
import {obtenerCintas, guardarCinta} from "../controllers/cinta.controller.js"

router.get('/', obtenerCintas)
router.post('/', guardarCinta)

export default router;