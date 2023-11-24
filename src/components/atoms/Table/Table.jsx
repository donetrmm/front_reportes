import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Table.css';

function Tables() {
  const [alumnos, setAlumnos] = useState([
    {
      id: 1,
      nombre: 'Pepe',
      apellidoM: 'Gonzalez',
      apellidoP: 'Perez',
      matricula: '2311323',
      grado: '1',
      grupo: 'C',
      TipoDSA: 'A+',
      NomTuto: 'Didier',
      NumTuto: '9611242949',
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [nextId, setNextId] = useState(2);

  // Expresión regular para permitir solo números
  const numberRegex = /^[0-9]+$/;

  // Expresión regular para permitir solo 6 dígitos numéricos
  const matriculaRegex = /^\d{6}$/;

  // Expresión regular para permitir solo 10 dígitos numéricos
  const numeroTutorRegex = /^\d{10}$/;

  const handleDelete = (id) => {
    const studentToDelete = alumnos.find((alumno) => alumno.id === id);

    if (!studentToDelete) {
      Swal.fire('Error', 'No se encontró el alumno a eliminar.', 'error');
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
        setAlumnos(updatedAlumnos);

        // Reindexar los ids después de la eliminación
        const reindexedAlumnos = updatedAlumnos.map((alumno, index) => ({ ...alumno, id: index + 1 }));
        setAlumnos(reindexedAlumnos);

        // Restablecer nextId a 1 si no hay alumnos
        setNextId(reindexedAlumnos.length === 0 ? 1 : reindexedAlumnos.length + 1);

        Swal.fire('Eliminado', 'Alumno eliminado.', 'success');
      }
    });
  };

  const handleAdd = () => {
    Swal.fire({
      title: editMode ? 'Editar Alumno' : 'Agregar Nuevo Alumno',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${editMode ? editingStudent.nombre : ''}">
        <input id="swal-input2" class="swal2-input" placeholder="Apellido Paterno" value="${editMode ? editingStudent.apellidoP : ''}">
        <input id="swal-input3" class="swal2-input" placeholder="Apellido Materno" value="${editMode ? editingStudent.apellidoM : ''}">
        <input id="swal-input4" class="swal2-input" placeholder="Matricula" value="${editMode ? editingStudent.matricula : ''}">
        <input id="swal-input5" class="swal2-input" placeholder="Grado" value="${editMode ? editingStudent.grado : ''}">
        <input id="swal-input6" class="swal2-input" placeholder="Grupo" value="${editMode ? editingStudent.grupo : ''}">
        <select id="swal-input7" class="form-control"> <!-- Utiliza la clase form-control de Bootstrap -->
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input id="swal-input8" class="swal2-input" placeholder="Nombre del tutor" value="${editMode ? editingStudent.NomTuto : ''}">
        <input id="swal-input9" class="swal2-input" placeholder="Número de Tutor" value="${editMode ? editingStudent.NumTuto : ''}">`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: editMode ? 'Guardar cambios' : 'Agregar',
    }).then((result) => {
      if (result.isConfirmed) {
        const nombre = document.getElementById('swal-input1').value;
        const apellidoM = document.getElementById('swal-input2').value;
        const apellidoP = document.getElementById('swal-input3').value;
        const matricula = document.getElementById('swal-input4').value;
        const grado = document.getElementById('swal-input5').value;
        const grupo = document.getElementById('swal-input6').value;
        const TipoDSA = document.getElementById('swal-input7').value;
        const NomTuto = document.getElementById('swal-input8').value;
        const NumTuto = document.getElementById('swal-input9').value;

        // Validar la matrícula
        if (!matriculaRegex.test(matricula)) {
          Swal.fire('Error', 'La matrícula debe contener exactamente 6 dígitos numéricos.', 'error');
          return;
        }

        // Validar el número de tutor
        if (!numeroTutorRegex.test(NumTuto)) {
          Swal.fire('Error', 'El número de tutor debe contener exactamente 10 dígitos numéricos.', 'error');
          return;
        }

        const newStudent = {
          id: editMode ? editingStudent.id : nextId,
          nombre,
          apellidoM,
          apellidoP,
          matricula,
          grado,
          grupo,
          TipoDSA,
          NomTuto,
          NumTuto,
        };

        if (editMode) {
          const updatedAlumnos = alumnos.map((alumno) =>
            alumno.id === editingStudent.id ? newStudent : alumno
          );
          setAlumnos(updatedAlumnos);

          // Restablecer nextId a 1 si no hay alumnos
          setNextId(updatedAlumnos.length === 0 ? 1 : updatedAlumnos.length + 1);

          setEditMode(false);
          setEditingStudent(null);
          Swal.fire('Modificado', 'Alumno modificado con éxito.', 'success');
        } else {
          setAlumnos((prevAlumnos) => [...prevAlumnos, newStudent]);

          // Aumentar nextId al agregar un nuevo alumno
          setNextId(nextId + 1);

          Swal.fire('Agregado', 'Nuevo alumno agregado con éxito.', 'success');
        }
      }
    });
  };

  const handleEdit = (id) => {
    const studentToEdit = alumnos.find((alumno) => alumno.id === id);
    setEditMode(true);
    setEditingStudent(studentToEdit);

    Swal.fire({
      title: 'Editar Alumno',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${studentToEdit.nombre}">
        <input id="swal-input2" class="swal2-input" placeholder="Apellido Paterno" value="${studentToEdit.apellidoP}">
        <input id="swal-input3" class="swal2-input" placeholder="Apellido Materno" value="${studentToEdit.apellidoM}">
        <input id="swal-input4" class="swal2-input" placeholder="Matricula" value="${studentToEdit.matricula}">
        <input id="swal-input5" class="swal2-input" placeholder="Grado" value="${studentToEdit.grado}">
        <input id="swal-input6" class="swal2-input" placeholder="Grupo" value="${studentToEdit.grupo}">
        <select id="swal-input7" class="form-control"> <!-- Utiliza la clase form-control de Bootstrap -->
          <option value="A+" ${studentToEdit.TipoDSA === 'A+' ? 'selected' : ''}>A+</option>
          <option value="A-" ${studentToEdit.TipoDSA === 'A-' ? 'selected' : ''}>A-</option>
          <option value="B+" ${studentToEdit.TipoDSA === 'B+' ? 'selected' : ''}>B+</option>
          <option value="B-" ${studentToEdit.TipoDSA === 'B-' ? 'selected' : ''}>B-</option>
          <option value="O+" ${studentToEdit.TipoDSA === 'O+' ? 'selected' : ''}>O+</option>
          <option value="O-" ${studentToEdit.TipoDSA === 'O-' ? 'selected' : ''}>O-</option>
        </select>
        <input id="swal-input8" class="swal2-input" placeholder="Nombre del tutor" value="${studentToEdit.NomTuto}">
        <input id="swal-input9" class="swal2-input" placeholder="Número de Tutor" value="${studentToEdit.NumTuto}">
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar cambios', 
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMatricula = document.getElementById('swal-input4').value;
        const updatedNumTuto = document.getElementById('swal-input9').value;

        // Validar la matrícula actualizada
        if (!matriculaRegex.test(updatedMatricula)) {
          Swal.fire('Error', 'La matrícula debe contener exactamente 6 dígitos numéricos.', 'error');
          return;
        }

        // Validar el número de tutor actualizado
        if (!numeroTutorRegex.test(updatedNumTuto)) {
          Swal.fire('Error', 'El número de tutor debe contener exactamente 10 dígitos numéricos.', 'error');
          return;
        }

        const updatedStudent = {
          ...studentToEdit,
          nombre: updatedNombre,
          apellidoP: updatedApellidoP,
          apellidoM: updatedApellidoM,
          matricula: updatedMatricula,
          grado: updatedGrado,
          grupo: updatedGrupo,
          TipoDSA: updatedTipoDSA,
          NomTuto: updatedNomTuto,
          NumTuto: updatedNumTuto,
        };

        const updatedAlumnos = alumnos.map((alumno) =>
          alumno.id === studentToEdit.id ? updatedStudent : alumno
        );

        setAlumnos(updatedAlumnos);

        // Restablecer nextId a 1 si no hay alumnos
        setNextId(updatedAlumnos.length === 0 ? 1 : updatedAlumnos.length + 1);

        setEditMode(false);
        setEditingStudent(null);
        Swal.fire('Modificado', 'Alumno modificado con éxito.', 'success');
      }
    });
  };

  return (
    <>
      <div>
        <div className="text-center mt-3 mt-3">
          <Button variant="success" onClick={handleAdd}>
            <i className="fas fa-plus mr-2"></i>
            Agregar Alumno
          </Button>
        </div>
        <div className="d-flex justify-content-center Container-table">
          <Table striped bordered hover size="sm" className="algo mx-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido M</th>
                <th>Apellido P</th>
                <th>Matricula</th>
                <th>Grado</th>
                <th>Grupo</th>
                <th>Tipo de sangre</th>
                <th>Nombre de tutor</th>
                <th>Número de tutor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{alumno.id}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellidoM}</td>
                  <td>{alumno.apellidoP}</td>
                  <td>{alumno.matricula}</td>
                  <td>{alumno.grado}</td>
                  <td>{alumno.grupo}</td>
                  <td>{alumno.TipoDSA}</td>
                  <td>{alumno.NomTuto}</td>
                  <td>{alumno.NumTuto}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      title="Editar"
                      onClick={() => handleEdit(alumno.id)}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      title="Eliminar"
                      onClick={() => handleDelete(alumno.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Tables;
