const { db } = require("../config/connection");

//----------------SELECT
const getUnidadAcademica = async (req, res) => {
  try {
    const response = await db.any("SELECT * from unidad_academica;");
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getFacultates = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const facultad = await db.one(`
        SELECT fa_id, fa_nombre
        FROM facultades
        WHERE fa_id = ${id}
      `);

      const carreras = await db.any(`
        SELECT ca_id, ca_nombre
        FROM carreras
        WHERE fa_id = ${id}
      `);

      const data = { facultad, carreras };
      res.status(200).json(data);
    } else {
      const response = await db.any("SELECT * from facultades;");
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getCarreras = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const carrera = await db.one(`
        SELECT * FROM carreras WHERE ca_id = ${id}
      `);
      const niveles = await db.any(`
        SELECT n.ni_id, n.ni_nivel 
        FROM carreras c
        INNER JOIN niveles n ON c.ca_id = n.ca_id
        AND c.ca_id = ${id}
      `);
      const data = { carrera, niveles };
      res.status(200).json(data);
    } else {
      const response = await db.any(`SELECT * FROM carreras;`);
      res.status(200).json(response);
    }

  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getNiveles = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const nivel = await db.one(`
        SELECT * FROM niveles WHERE ni_id = ${id}
      `);
      const asignaturas = await db.any(`
        SELECT a.as_id, a.as_nombre
        FROM niveles n
        INNER JOIN asignaturas a ON a.ni_id = n.ni_id
        AND n.ni_id = $1
      `, [id]);
      const data = { nivel, asignaturas };
      res.status(200).json(data);
    } else {
      const response = await db.any(`SELECT * FROM niveles;`);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAsignaturas = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const asignatura = await db.one(`
          SELECT a.as_id, a.as_nombre, n.ni_id, n.ni_nivel 
          FROM asignaturas a
          INNER JOIN niveles n ON a.ni_id = n.ni_id
          AND as_id = ${id}
        `);

      const profesores = await db.any(`
        SELECT p.pr_id, p.pr_nombre, p.pr_apellido
        FROM profesor_asignatura pa
        INNER JOIN profesor p ON pa.prof_id = p.pr_id
        AND pa.as_id = ${id}
      `);

      const estudiantes = await db.any(`
        SELECT e.est_id, e.est_nombre, e.est_apellido
        FROM estudiante_asignatura ea
        INNER JOIN estudiante e ON ea.est_id = e.est_id
        AND ea.as_id = ${id}
      `);

      const data = { asignatura, profesores, estudiantes };

      res.status(200).json(data);
    } else {
      const response = await db.any(`SELECT * FROM asignaturas;`);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getProfesores = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const profesor = await db.one(`SELECT * FROM profesor WHERE pr_id = $1`, [
        id,
      ]);
      const asignaturas = await db.any(
        `
        SELECT a.as_id, a.as_nombre
        FROM asignaturas a
        INNER JOIN profesor_asignatura pa ON pa.as_id = a.as_id 
        AND pa.prof_id = $1
      `,
        [id]
      );
      const roles = await db.any(
        `
        SELECT r.ro_id, r.ro_nombre
        FROM roles_profesor rp
        INNER JOIN roles r ON rp.ro_id = r.ro_id 
        INNER JOIN profesor p ON p.pr_id = rp.pr_id 
        AND p.pr_id = $1
      `,
        [id]
      );
      const data = { profesor, asignaturas, roles };
      res.status(200).json(data);
    } else {
      const profesores = await db.any(`SELECT * FROM profesor;`);
      res.status(200).json(profesores);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRoles = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const roles = await db.one(`SELECT * FROM roles WHERE ro_id = $1`, [id]);

      const profesores = await db.any(
        `
        SELECT p.pr_id, p.pr_nombre, p.pr_apellido
        FROM roles_profesor rp
        INNER JOIN profesor p ON rp.pr_id = p.pr_id
        AND ro_id = $1
      `,
        [id]
      );

      const data = { roles, profesores };
      res.status(200).json(data);
    } else {
      const roles = await db.any(`SELECT * FROM roles;`);
      res.status(200).json(roles);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEstudiantes = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const estudiante = await db.any(
        `SELECT * FROM estudiante WHERE est_id = $1`,
        [id]
      );

      const asignaturas = await db.any(
        `
        SELECT a.as_id, a.as_nombre, a.ni_id, n.ni_id
        FROM estudiante_asignatura ea
        INNER JOIN asignaturas a ON ea.as_id = a.as_id
        INNER JOIN niveles n ON a.ni_id = n.ni_id
        AND ea.est_id = $1
      `,
        [id]
      );

      const nivel = await db.one(
        `
        SELECT n.ni_id, n.ni_nivel
        FROM estudiante_asignatura ea
        INNER JOIN asignaturas a ON ea.as_id = a.as_id
        INNER JOIN niveles n ON a.ni_id = n.ni_id
        AND ea.est_id = $1
        ORDER BY n.ni_nivel ASC
        LIMIT 1
      `,
        [id]
      );

      const data = { estudiante, nivel, asignaturas };
      res.status(200).json(data);
    } else {
      const estudiantes = await db.any(`SELECT * FROM estudiante;`);
      res.status(200).json(estudiantes);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUnidadAcademica,
  getFacultates,
  getCarreras,
  getNiveles,
  getAsignaturas,
  getProfesores,
  getRoles,
  getEstudiantes,
};
