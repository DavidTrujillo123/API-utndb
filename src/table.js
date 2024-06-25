const table = `
<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-family: Arial, sans-serif;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e8f5e9;
  }

  pre {
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    padding: 5px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
  }

  code {
    white-space: pre-wrap; /* Ajuste automático del texto */
  }
</style>

<table border="1">
  <thead>
    <tr>
      <th>Ruta</th>
      <th>Método</th>
      <th>Controlador</th>
      <th>Ejemplo de Respuesta JSON</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/unidad-academica</td>
      <td>GET</td>
      <td>getUnidadAcademica</td>
      <td>
      <pre><code>
        {
          "un_id": 1,
          "un_nombre": "UNIDAD ACADÉMICA"
        }
      </td></code></pre>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/facultades/:id</td>
      <td>GET</td>
      <td>getFacultates</td>
      <td>
      <pre><code>
        {
          "facultad": {
            "fa_id": 5,
            "fa_nombre": "FICA"
          },
          "carreras": [
            {
              "ca_id": 5,
              "ca_nombre": "Ingeniería de Software"
            },
          ...
        }</code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/facultades</td>
      <td>GET</td>
      <td>getFacultates</td>
      <td><pre><code>
        [
          {
            "fa_id": 5,
            "un_id": 1,
            "fa_nombre": "FICA"
          },
          {
            "fa_id": 6,
            "un_id": 1,
            "fa_nombre": "FICAYA"
          },
          {
            "fa_id": 7,
            "un_id": 1,
            "fa_nombre": "FCSSS"
          },
          {
            "fa_id": 8,
            "un_id": 1,
            "fa_nombre": "FECYT"
          }
        ]</code></pre>
      </td>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/carreras/:id</td>
      <td>GET</td>
      <td>getCarreras</td>
      <td><pre><code>
        {
          "carrera": {
            "ca_id": 5,
            "fa_id": 5,
            "ca_nombre": "Ingeniería de Software"
          },
          "niveles": [
            {
            "ni_id": 1,
            "ni_nivel": "Nivel 1"
            },
            {
            "ni_id": 2,
            "ni_nivel": "Nivel 2"
            },...
          ]
        }</code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/carreras</td>
      <td>GET</td>
      <td>getCarreras</td>
      <td><pre><code>
        [
          {
            "ca_id": 5,
            "fa_id": 5,
            "ca_nombre": "Ingeniería de Software"
          },
          {
            "ca_id": 6,
            "fa_id": 5,
            "ca_nombre": "Ingeniería Industrial"
          }...
        ]</code></pre>
      </td>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/niveles/:id</td>
      <td>GET</td>
      <td>getNiveles</td>
      <td><pre><code>
      {
        "nivel": {
            "ni_id": 1,
            "ca_id": 5,
            "ni_nivel": "Nivel 1"
        },
        "asignaturas": [
          {
            "as_id": 1,
            "as_nombre": "Lógica de programación"
          },
          {
            "as_id": 2,
            "as_nombre": "Introducción a la ingeniería en software"
          }...
        ]
      }</code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/niveles</td>
      <td>GET</td>
      <td>getNiveles</td>
      <td><pre><code>
        [
          {
            "ni_id": 1,
            "ca_id": 5,
            "ni_nivel": "Nivel 1"
          },
          {
            "ni_id": 2,
            "ca_id": 5,
            "ni_nivel": "Nivel 2"
          }...
        ]
      </td></code></pre>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/profesores/:id</td>
      <td>GET</td>
      <td>getProfesores</td>
      <td><pre><code>
      {
        "profesor": {
          "pr_id": 1,
          "pr_nombre": "Juan",
          "pr_apellido": "Pérez",
          "pr_email": "juperez@utn.edu.ec",
          "pr_contrasenia": "12345",
          "pr_usuario": "D100200301"
        },
        "asignaturas": [
          {
            "as_id": 1,
            "as_nombre": "Lógica de programación"
          }
        ],
        "roles": [
          {
            "ro_id": 5,
            "ro_nombre": "Subdecano"
          },
          {
            "ro_id": 6,
            "ro_nombre": "Profesor"
          }
        ]
      }
      </td></code></pre>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/profesores</td>
      <td>GET</td>
      <td>getProfesores</td>
      <td><pre><code>
      [
        {
          "pr_id": 1,
          "pr_nombre": "Juan",
          "pr_apellido": "Pérez",
          "pr_email": "juperez@utn.edu.ec",
          "pr_contrasenia": "12345",
          "pr_usuario": ""D100200301"
        },
        {
          "pr_id": 2,
          "pr_nombre": "Laura",
          "pr_apellido": "González",
          "pr_email": "lagonzalez@utn.edu.ec",
          "pr_contrasenia": "12345",
          "pr_usuario": "D100200302"
        },
        {
          "pr_id": 3,
          "pr_nombre": "Carlos",
          "pr_apellido": "Martínez",
          "pr_email": "camartinez@utn.edu.ec",
          "pr_contrasenia": "12345",
          "pr_usuario": "D100200303"
        }
      ]</code></pre>
      </td>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/asignaturas/:id</td>
      <td>GET</td>
      <td>getAsignaturas</td>
      <td><pre><code>
        {
          "asignatura": {
            "as_id": 1,
            "as_nombre": "Lógica de programación",
            "ni_id": 1,
            "ni_nivel": "Nivel 1"
          },
          "profesores": [
            {
              "pr_id": 1,
              "pr_nombre": "Juan",
              "pr_apellido": "Pérez"
            }
          ],
          "estudiantes": [
            {
              "est_id": 1,
              "est_nombre": "Ana",
              "est_apellido": "Vega"
            }
          ]
      }
        </code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/asignaturas</td>
      <td>GET</td>
      <td>getAsignaturas</td>
      <td><pre><code>
        [
          {
            "as_id": 1,
            "ni_id": 1,
            "as_nombre": "Lógica de programación"
          },
          {
            "as_id": 2,
            "ni_id": 1,
            "as_nombre": "Introducción a la ingeniería en software"
          },
          {
            "as_id": 3,
            "ni_id": 1,
            "as_nombre": "Algebra"
          },
          {
            "as_id": 4,
            "ni_id": 1,
            "as_nombre": "Calculo"
          },
          {
            "as_id": 5,
            "ni_id": 1,
            "as_nombre": "Física"
          },
          {
            "as_id": 6,
            "ni_id": 2,
            "as_nombre": "POO"
          }
        ]
      </td></code></pre>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/estudiantes/:id</td>
      <td>GET</td>
      <td>getEstudianes</td>
      <td><pre><code>
        {
          "estudiante": [
              {
                "est_id": 1,
                "est_nombre": "Ana",
                "est_apellido": "Vega"
                "est_email": "anvega@utn.edu.ec",
                "est_contrasenia": "12345",
                "est_usuario": "E100200301"
              }
          ],
          "nivel":{
            "ni_id": 1,
            "ni_nivel": "Nivel 1"
          },
          "asignaturas": [
              {
                "as_id": 1,
                "as_nombre": "Lógica de programación",
                "ni_id": 1
              },
              {
                "as_id": 6,
                "as_nombre": "POO",
                "ni_id": 2
              }
          ]
        }
        </code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/estudiantes</td>
      <td>GET</td>
      <td>getEstudianes</td>
      <td><pre><code>
        [
          {
            "est_id": 1,
            "est_nombre": "Ana",
            "est_apellido": "Vega",
            "est_email": "anvega@utn.edu.ec",
            "est_contrasenia": "12345",
            "est_usuario": "E100200301"
          },
          {
            "est_id": 2,
            "est_nombre": "Pedro",
            "est_apellido": "Lopez",
            "est_email": "pelopez@utn.edu.ec",
            "est_contrasenia": "12345",
            "est_usuario": "E100200302"
          },
          {
            "est_id": 3,
            "est_nombre": "María",
            "est_apellido": "Ruiz",
            "est_email": "maruiz@utn.edu.ec",
            "est_contrasenia": "12345",
            "est_usuario": "E100200303"
          }
        ]
        </code></pre>
      </td>
      <td>ARRAY</td>
    </tr>
    <tr>
      <td>/roles/:id</td>
      <td>GET</td>
      <td>getRoles</td>
      <td><pre><code>
        {
          "roles": {
              "ro_id": 4,
              "ro_nombre": "Decano"
          },
          "profesores": [
            {
              "pr_id": 2,
              "pr_nombre": "Laura",
              "pr_apellido": "González"
            }
          ]
        }
        </code></pre>
      </td>
      <td>OBJETO</td>
    </tr>
    <tr>
      <td>/roles</td>
      <td>GET</td>
      <td>getRoles</td>
      <td><pre><code>
        [
          {
            "ro_id": 4,
            "ro_nombre": "Decano"
          },
          {
            "ro_id": 5,
            "ro_nombre": "Subdecano"
          },
          {
            "ro_id": 6,
            "ro_nombre": "Profesor"
          },
          {
             "ro_id": 7,
             "ro_nombre": "Profesor suplente"
          }
        ]
        </code></pre>
      </td>
      <td>ARRAY</td>
    </tr>
  </tbody>
</table>`;

module.exports = {
  table,
};
