import { Router } from "express";
const router = Router();
import { generarTablaPDF } from "../controllers/pdf.controller.js";

router.get('/', generarTablaPDF);

export default router;