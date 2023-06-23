import express from "express";
import cors from "cors";
import "./config/db.js"
import { PORT } from "./config/keys.js";
import cintaRouter from "./routes/cinta.route.js";
import fichaRouter from "./routes/ficha.route.js";
import peliculasRouter from "./routes/peliculas.route.js"
import sociosRouter from "./routes/socio.route.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/cinta", cintaRouter);

app.use("/api/ficha", fichaRouter);

app.use("/api/pelicula", peliculasRouter);

app.use("/api/socio", sociosRouter);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}/`);
})