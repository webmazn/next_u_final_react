import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container-fluid bg-login">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Iniciar Sesión</h3>
              <span class="resServer"></span>
            </div>
            <div class="card-body">
              <form>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="email" name="email" class="form-control" placeholder="Correo electrónico"/>
                  <div class="invalid-feedback">
                    <div>El email es requerido</div>
                    <div>El email debe ser una dirección válida</div>
                  </div>
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password" name="clave" class="form-control" placeholder="Contraseña"/>
                  <div class="invalid-feedback">
                    <div>La clave es requerida</div>
                    <div>La clave debe tener mínimo 6 caracteres</div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="submit" value="Ingresar" class="btn float-right login_btn"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
