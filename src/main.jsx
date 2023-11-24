import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import './main.css'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
   <BrowserRouter>
    <App/>
   </BrowserRouter>
  </React.StrictMode>,
)



/*

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
      id:'',
      nombre: '',
      apellidoM: '',
      apellidoP: '',
      matricula: '',
      grado: '',
      grupo: '',
      tipoSangre: '',
      nombreTutor: '',
      numeroTutor: '',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newAlumno, setNewAlumno] = useState({
    id: null,
    nombre: '',
    apellidoM: '',
    apellidoP: '',
    matricula: '',
    grado: '',
    grupo: '',
    tipoSangre: '',
    nombreTutor: '',
    numeroTutor: '',
  });

  const handleDelete = (id) => {
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
        // Elimina la fila si el usuario confirma
        const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
        setAlumnos(updatedAlumnos);

        Swal.fire('Eliminado', 'Tu fila ha sido eliminada.', 'success');
      }
    });
  };

  const handleAdd = () => {
    Swal.fire({
      title: 'Agregar Nuevo Alumno',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Apellido Paterno">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Apellido Materno">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Matricula">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Grado">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Grupo">' +
        '<input id="swal-input7" class="swal2-input" placeholder="Tipo de sangre">' +
        '<input id="swal-input8" class="swal2-input" placeholder="Nombre del tutor">' +
        '<input id="swal-input9" class="swal2-input" placeholder="Número de Tutor">',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agregar',
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

        const newStudent = {
          id: Date.now(), // Asignar un id único (puedes mejorar esto)
          nombre,
          apellidoM,
          apellidoP,
          matricula,
          grado,
          grupo,
          TipoDSA,
          NomTuto,
          NumTuto
        };

        if (nombre.trim() === '' || apellidoM.trim() === '') {
          Swal.fire('Error', 'Nombre,Apellidos y Tipo de sangre son obligatorios', 'error');
        } else {
          setAlumnos([...alumnos, newStudent]);
          Swal.fire('Agregado', 'Nuevo alumno agregado con éxito.', 'success');
        }
      }
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    
    setNewAlumno({
      id: null,
      nombre: '',
      apellidoM: '',
      apellidoP: '',
      matricula: '',
      grado: '',
      grupo: '',
      tipoSangre: '',
      nombreTutor: '',
      numeroTutor: '',
    });
  };

  const handleSave = () => {
    if (newAlumno.nombre.trim() === '' || newAlumno.apellidoM.trim() === '') {
      Swal.fire('Error', 'Nombre y Apellido son obligatorios', 'error');
    } else {
      setAlumnos([...alumnos, newAlumno]);
      setShowModal(false);
      Swal.fire('Agregado', 'Nuevo alumno agregado con éxito.', 'success');
    }
  };

  return (
    <>
      <div>
        <div className="text-center mt-3">
          <Button variant="success" onClick={handleAdd}>
            <i className="fas fa-plus mr-2"></i>Agregar Alumno
          </Button>
        </div>
        <div className="d-flex justify-content-center Container-table">
          <Table striped bordered hover size="sm" className="algo mx-auto">
            {/* ... (código existente) 
            </Table>
            </div>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleModalClose}>
                    &times;
                  </span>
                  <p>Completa la información del nuevo alumno:</p>
                  
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={newAlumno.nombre}
                    onChange={(e) => setNewAlumno({ ...newAlumno, nombre: e.target.value })}
                  />
                  
                  <Button variant="success" onClick={handleSave}>
                    Guardar
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      );
    }
    
    export default Tables;
    

*/