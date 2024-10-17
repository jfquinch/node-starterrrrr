import express from "express";
import { listarEstudiantes, obtenerEstudiantePorId } from "./estudianteController.js";
import { listarCursos, registrarCurso } from "./cursoController.js";

const router = express.Router();

// Rutas para los estudiantes
router.get("/consultarEstudiante", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Nueva ruta para ver detalles de un estudiante
router.get("/estudiante/:id", async (req, res) => {
  try {
    const estudiante = await obtenerEstudiantePorId(req.params.id);
    res.render("pages/detallesEstudiante", { estudiante });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

// Rutas para los cursos
router.get("/cursos", async (req, res) => {
  try {
    const cursos = await listarCursos();
    res.render("pages/cursos", { cursos });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

router.post("/cursos", async (req, res) => {
  const { nombre_curso } = req.body;
  try {
    await registrarCurso(nombre_curso);
    res.redirect("/cursos");
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

export default router;
