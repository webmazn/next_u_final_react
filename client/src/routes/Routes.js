import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Carrito from '../components/Carrito';
import Bandeja from '../components/Bandeja';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/carrito" component={Carrito}/>
        <Route exact path="/bandeja" component={Bandeja}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;