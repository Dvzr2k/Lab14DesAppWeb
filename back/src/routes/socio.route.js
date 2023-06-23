import { Router } from "express";
const router = Router();
import { obtenerSocios, guardarSocio } from "../controllers/socio.controller.js"

router.get('/', obtenerSocios);
router.post('/', guardarSocio);

export default router;