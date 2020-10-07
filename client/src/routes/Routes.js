import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Carrito from '../components/Carrito';
import Bandeja from '../components/Bandeja';
import Producto from '../components/Producto';
import Salir from '../components/Salir';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/carrito" component={Carrito}/>
        <Route exact path="/bandeja" component={Bandeja}/>
        <Route exact path="/producto/ver/:id" component={Producto}/>
        <Route exact path="/salir" component={Salir}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;