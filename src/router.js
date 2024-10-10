import express from "express";


import { listarEstudiantes} from "./estudianteController.js";
 
  const router = express.Router();


  router.get("/consultarEstudiante", async (req, res) => 
    {
        const estudiantes = await listarEstudiantes();
        res.render("pages/estudiantes", { estudiantes });
    

    }
)