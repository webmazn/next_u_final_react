import React, {Component}  from 'react';
import '../css/Navegacion.css';
import { NavLink } from "react-router-dom";

class Navegacion extends Component{
    render(){
        return (
            <div className="container h-menu">
                <header className="navbar navbar-light navbar-expand p-0">                    
                    <NavLink className="navbar-brand mr-0 mr-md-2" to="/home">La Bodega</NavLink>
                    <ul className="navbar-nav flex-row ml-auto ">
                        <li className="nav-item">                            
                            <NavLink className="nav-link px-3" to="/home" activeClassName={"active"} exact><i className="fas fa-th"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3 position-relative" to="/carrito" activeClassName={"active"} exact>
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge badge-danger rounded-circle cantidadCarrito"></span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3" to="/bandeja" activeClassName={"active"} exact><i className="fas fa-inbox"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-3 cursor-pointer" href="/salir"><i className="fas fa-sign-out-alt"></i></a>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Navegacion;