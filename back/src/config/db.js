import mongoose from "mongoose";
import { MONGODB_URI } from "./keys.js";

mongoose.connect(
    MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(db => console.log(`Base de datos ${db.connection.name} conectada`))
    .catch(error => console.log(error))