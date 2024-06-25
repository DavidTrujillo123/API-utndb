-- INSERTS
INSERT INTO public.asignaturas VALUES (1, 1, 'Lógica de programación');
INSERT INTO public.asignaturas VALUES (2, 1, 'Introducción a la ingeniería en software');
INSERT INTO public.asignaturas VALUES (3, 1, 'Algebra');
INSERT INTO public.asignaturas VALUES (4, 1, 'Calculo');
INSERT INTO public.asignaturas VALUES (5, 1, 'Física');
INSERT INTO public.asignaturas VALUES (6, 2, 'POO');


INSERT INTO public.carreras VALUES (5, 5, 'Ingeniería de Software');
INSERT INTO public.carreras VALUES (6, 5, 'Ingeniería Industrial');
INSERT INTO public.carreras VALUES (7, 5, 'Ingeniería de Electrica');
INSERT INTO public.carreras VALUES (8, 5, 'Ingeniería en Telecominucaciones');

-- WARNING: MAYBE STRUCTURE CHANGE
INSERT INTO public.estudiante VALUES (1, 'Ana', 'Vega', 'anvega@utn.edu.ec', '12345', 'E100200301');
INSERT INTO public.estudiante VALUES (2, 'Pedro', 'Lopez', 'pelopez@utn.edu.ec', '12345', 'E100200302');
INSERT INTO public.estudiante VALUES (3, 'María', 'Ruiz', 'maruiz@utn.edu.ec', '12345', 'E100200303');


INSERT INTO public.estudiante_asignatura VALUES (1, 1, 1);
INSERT INTO public.estudiante_asignatura VALUES (2, 2, 2);
INSERT INTO public.estudiante_asignatura VALUES (3, 3, 3);
INSERT INTO public.estudiante_asignatura VALUES (4, 1, 6);


INSERT INTO public.facultades VALUES (5, 1, 'FICA');
INSERT INTO public.facultades VALUES (6, 1, 'FICAYA');
INSERT INTO public.facultades VALUES (7, 1, 'FCSSS');
INSERT INTO public.facultades VALUES (8, 1, 'FECYT');


INSERT INTO public.niveles VALUES (1, 5, 'Nivel 1');
INSERT INTO public.niveles VALUES (2, 5, 'Nivel 2');
INSERT INTO public.niveles VALUES (3, 5, 'Nivel 3');
INSERT INTO public.niveles VALUES (4, 5, 'Nivel 4');
INSERT INTO public.niveles VALUES (5, 5, 'Nivel 5');

-- WARNING: MAYBE STRUCTURE CHANGE
INSERT INTO public.profesor VALUES (1, 'Juan', 'Pérez', 'juperez@utn.edu.ec', '12345', 'D100200301');
INSERT INTO public.profesor VALUES (2, 'Laura', 'González', 'lagonzales@utn.edu.ec', '12345', 'D100200302');
INSERT INTO public.profesor VALUES (3, 'Carlos', 'Martínez', 'camartinez@utn.edu.ec', '12345', 'D100200303');


INSERT INTO public.profesor_asignatura VALUES (1, 1, 1);
INSERT INTO public.profesor_asignatura VALUES (2, 2, 2);
INSERT INTO public.profesor_asignatura VALUES (3, 3, 3);


INSERT INTO public.roles VALUES (4, 'Decano');
INSERT INTO public.roles VALUES (5, 'Subdecano');
INSERT INTO public.roles VALUES (6, 'Profesor');
INSERT INTO public.roles VALUES (7, 'Profesor suplente');


INSERT INTO public.roles_profesor VALUES (4, 5, 1);
INSERT INTO public.roles_profesor VALUES (5, 6, 1);
INSERT INTO public.roles_profesor VALUES (6, 4, 2);


INSERT INTO public.unidad_academica VALUES (1, 'UNIDAD ACADÉMICA');

