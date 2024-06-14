const {Router} = require('express');
const {
  getUnidadAcademica,
  getFacultates,
  getCarreras,
  getNiveles,
  getProfesores,
  getAsignaturas,
  getEstudianes,
  getRoles
} = require('../controllers/utndb.controller');

const router = Router();
router.get('/unidad-academica', getUnidadAcademica);

router.get('/facultades', getFacultates);
router.get('/facultades/:id', getFacultates);

router.get('/carreras', getCarreras);
router.get('/carreras/:id', getCarreras);

router.get('/niveles', getNiveles);
router.get('/niveles/:id', getNiveles);

router.get('/profesores', getProfesores);
router.get('/profesores/:id', getProfesores);

router.get('/asignaturas', getAsignaturas);
router.get('/asignaturas/:id', getAsignaturas);

router.get('/estudiantes', getEstudianes);
router.get('/estudiantes/:id', getEstudianes);

router.get('/roles', getRoles);
router.get('/roles/:id', getRoles);



module.exports = router;