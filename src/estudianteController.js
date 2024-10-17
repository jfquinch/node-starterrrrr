import pool from "./db.js";

export const listarEstudiantes = async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM estudiantes");
      return rows;
    } catch (error) {
      throw { status: 500, message: "Error al obtener estudiantes" };
    }
  };

  export const obtenerEstudiantePorId = async (id) => {
    try {
      const [rows] = await pool.query("SELECT * FROM estudiantes WHERE id = ?", [id]);
      if (rows.length > 0) {
        return rows[0];
      } else {
        throw { status: 404, message: "Estudiante no encontrado" };
      }
    } catch (error) {
      throw { status: 500, message: "Error al obtener el estudiante" };
    }
  };

  