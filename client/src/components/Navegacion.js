import React, {Component} from 'react';
import '../css/Navegacion.css';

class Navegacion extends Component{
    render(){
        return (
            <div className="container h-menu">
            <header className="navbar navbar-light navbar-expand p-0">
                <a className="navbar-brand mr-0 mr-md-2" routerLink="/home" aria-label="Bootstrap">La Bodega</a>
                <ul className="navbar-nav flex-row ml-auto ">
                <li className="nav-item">
                    <a className="nav-link px-3" routerLink="/home" routerLinkActive="active"><i className="fas fa-th"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link px-3 position-relative" routerLink="/carrito" routerLinkActive="active">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-danger rounded-circle cantidadCarrito"></span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link px-3" routerLink="/bandeja" routerLinkActive="active">
                    <i className="fas fa-inbox"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pl-3 cursor-pointer"><i className="fas fa-sign-out-alt"></i></a>
                </li>
                </ul>
            </header>
            </div>
        );
    }
}

export default Navegacion;