import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import Carrito from '../components/Carrito';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/carrito" component={Carrito}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;