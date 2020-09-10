import React, {Component} from 'react';
import '../css/Navegacion.css';
import { Link } from "react-router-dom";

class Navegacion extends Component{
    render(){
        return (
            <div className="container h-menu">
                <header className="navbar navbar-light navbar-expand p-0">                    
                    <Link className="navbar-brand mr-0 mr-md-2" to="/home">La Bodega</Link>
                    <ul className="navbar-nav flex-row ml-auto ">
                        <li className="nav-item">                            
                            <Link className="nav-link px-3" to="/home"><i className="fas fa-th"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3 position-relative" to="/carrito">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="badge badge-danger rounded-circle cantidadCarrito"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/bandeja"><i className="fas fa-inbox"></i></Link>
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