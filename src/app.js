import express from "express";
import morgan from "morgan";
const morgan = require("morgan");

const app = express();

// Configuración de middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Configuración de las vistas
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Rutas
app.get("/", (req, res) => {
  res.render("index");
});

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
