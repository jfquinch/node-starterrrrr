import pool from "./db.js";

export const listarCursos = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM cursos");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener los cursos" };
  }
};

export const registrarCurso = async (nombreCurso) => {
  try {
    await pool.query("INSERT INTO cursos (nombre) VALUES (?)", [nombreCurso]);
  } catch (error) {
    throw { status: 500, message: "Error al registrar el curso" };
  }
};
