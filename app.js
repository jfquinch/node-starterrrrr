import express from "express";
import bodyParser from "body-parser"; // Necesario para manejar datos POST
import router from "./src/router.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para manejar los datos del formulario

// Rutas
app.get("/", (req, res) => {
  res.render("pages/inicio");
});

app.use("/", router);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://127.0.0.1:${PORT}`);
});
