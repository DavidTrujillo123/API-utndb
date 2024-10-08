CREATE TABLE "unidad_academica" (
  "un_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "un_nombre" varchar NOT NULL
);

CREATE TABLE "facultades" (
  "fa_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "un_id" integer NOT NULL,
  "fa_nombre" varchar NOT NULL
);

CREATE TABLE "carreras" (
  "ca_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "fa_id" integer NOT NULL,
  "ca_nombre" varchar NOT NULL
);

CREATE TABLE "niveles" (
  "ni_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "ca_id" integer NOT NULL,
  "ni_nivel" varchar NOT NULL
);

CREATE TABLE "asignaturas" (
  "as_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "ni_id" integer NOT NULL,
  "as_nombre" varchar NOT NULL
);

CREATE TABLE "profesor_asignatura" (
  "prof_asig" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "prof_id" integer NOT NULL,
  "as_id" integer NOT NULL
);

CREATE TABLE "profesor" (
  "pr_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "pr_nombre" varchar NOT NULL,
  "pr_apellido" varchar NOT NULL,
  "pr_email" varchar NOT NULL,
  "pr_password" varchar NOT NULL
);

CREATE TABLE "roles" (
  "ro_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "ro_nombre" varchar
);

CREATE TABLE "roles_profesor" (
  "ro_pr_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "ro_id" integer NOT NULL,
  "pr_id" integer NOT NULL
);

CREATE TABLE "estudiante_asignatura" (
  "est_as_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "est_id" integer NOT NULL,
  "as_id" integer NOT NULL
);

CREATE TABLE "estudiante" (
  "est_id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "est_nombre" varchar NOT NULL,
  "est_apellido" varchar NOT NULL,
  "est_email" varchar NOT NULL,
  "est_password" varchar NOT NULL
);

ALTER TABLE "facultades" ADD FOREIGN KEY ("un_id") REFERENCES "unidad_academica" ("un_id");

ALTER TABLE "carreras" ADD FOREIGN KEY ("fa_id") REFERENCES "facultades" ("fa_id");

ALTER TABLE "niveles" ADD FOREIGN KEY ("ca_id") REFERENCES "carreras" ("ca_id");

ALTER TABLE "asignaturas" ADD FOREIGN KEY ("ni_id") REFERENCES "niveles" ("ni_id");

ALTER TABLE "profesor_asignatura" ADD FOREIGN KEY ("as_id") REFERENCES "asignaturas" ("as_id");

ALTER TABLE "estudiante_asignatura" ADD FOREIGN KEY ("as_id") REFERENCES "asignaturas" ("as_id");

ALTER TABLE "profesor_asignatura" ADD FOREIGN KEY ("prof_id") REFERENCES "profesor" ("pr_id");

ALTER TABLE "estudiante_asignatura" ADD FOREIGN KEY ("est_id") REFERENCES "estudiante" ("est_id");

ALTER TABLE "roles_profesor" ADD FOREIGN KEY ("pr_id") REFERENCES "profesor" ("pr_id");

ALTER TABLE "roles_profesor" ADD FOREIGN KEY ("ro_id") REFERENCES "roles" ("ro_id");
