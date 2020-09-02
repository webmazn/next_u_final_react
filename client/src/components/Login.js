import React, { Component } from 'react';
import '../css/Login.css';
import * as request from 'superagent';

class Login extends Component{

  constructor () {
    super();
    this.state = {
      respuesta: '',
    };
  }

  login(e){
    e.preventDefault();
    const API_URI = 'http://localhost:3000';
  
    request.post(`${API_URI}/login`)
    .send({
      email: document.getElementById('email').value,
      clave: document.getElementById('clave').value
    })
    .set('Content-Type','application/json')
    .end((err, res)=>{
      // console.log(err);
      // console.log(res);
      // console.log(res.body.message);
      if(err || !res.ok){
        console.log(res.body.message);
        this.setState({
          respuesta: res.body.message
        });
      }else{
        window.location.href="./home";
      }
    })
  }

  render(){
    return (
      <div className="App">
        <div className="container-fluid bg-login">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Iniciar Sesión</h3>
                <span className="resServer">{this.state.respuesta}</span>
              </div>
              <div className="card-body">
                <form onSubmit={(e)=> this.login(e)}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Correo electrónico"/>
                    <div className="invalid-feedback">
                      <div>El email es requerido</div>
                      <div>El email debe ser una dirección válida</div>
                    </div>
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="clave" id="clave" className="form-control" placeholder="Contraseña"/>
                    <div className="invalid-feedback">
                      <div>La clave es requerida</div>
                      <div>La clave debe tener mínimo 6 caracteres</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Ingresar" className="btn float-right login_btn"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
