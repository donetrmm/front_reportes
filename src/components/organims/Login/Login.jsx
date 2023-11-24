import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'; 

function Login() {
  const [contraseña, setContraseña] = useState("");
  const [usuario, setUsuario] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const apiURL = 'http://localhost:8081/auth/login';

  const validarFormulario = () => {
    let formularioEsValido = true;

    if (!usuario.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formularioEsValido = false;
      setErrorUsuario("Usuario no válido");
    } else {
      setErrorUsuario("");
    }



    return formularioEsValido;
  };

  const enviarInicioSesion = async (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      try {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: usuario,
            password: contraseña,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token);
        } else {
          console.error('Error al enviar la solicitud');
          return
        }
        window.location.assign('/HomeAdm')
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-md-4 formulario">
            <form id="formularioLogin" onSubmit={enviarInicioSesion}>
              <div className="form-group">
                <label>Usuario</label>
                <input
                  type="email"
                  className="form-control"
                  id="InputUsuario"
                  name="InputUsuario"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su usuario"
                  onChange={(event) => setUsuario(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {errorUsuario}
                </small>
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  onChange={(event) => setContraseña(event.target.value)}
                />
                <small id="errorContraseña" className="text-danger form-text">
                  {errorContraseña}
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
