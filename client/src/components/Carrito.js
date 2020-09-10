import React, {Component} from 'react';
import '../css/Home.css';
import Navegacion from './Navegacion';

class Carrito extends Component{
    constructor () {
        super();
        this.state = {
            carrito: 0,
        };
    }    
    
    render(){
        return (
            <div className="container-fluid bg-home">

                <Navegacion />

                <div className="container h-cuerpo">
                    <div className="row py-3 h-cuerpo-top">
                        <div className="col-12">
                            <div className="h2">Carrito de compras</div>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>

                    <div className="row py-3 h-cuerpo-bottom">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-md-right">
                            <div className="table-respinsive">
                                <table className="table table-bordered tabla">
                                    <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-encabezado="Imagen" align="center">
                                        <img src="" className="img-fluid" alt="" />
                                        </td>
                                        <td data-encabezado="Nombre" align="left"></td>
                                        <td data-encabezado="Precio" align="right"></td>
                                        <td data-encabezado="Cantidad" align="right"></td>
                                        <td data-encabezado="Sub Total" align="right"></td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colSpan="4" align="right">Total</td>
                                        <td align="right"></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-right text-lg-left">
                            <h4>Total: <span></span></h4>
                            <div className="btn-group">
                                <a href="/home" className="btn btn-primary btn-sm" >Cancelar</a>
                                <button className="btn btn-warning btn-sm" >Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Carrito;