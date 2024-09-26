import express from "express";
//import cors from "cors";


const app = express();

//app.use(cors());
//app.use("/public", express.static("public"));


//Establece el motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");


// rutas

// Carga la página de inicio
app.get("/", (req, res) => {
    res.render("inicio", {});
  });
  


