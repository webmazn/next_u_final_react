import React, {Component} from 'react';
import '../css/Home.css';
import Navegacion from './Navegacion';
import * as request from 'superagent';

class Producto extends Component{

    constructor () {
        super();
        this.state = {
            productos: [],
            cantidadProductos: (localStorage.getItem('carritoProductos') == undefined ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length)
        }
    } 

    componentDidMount() {
        const API_URI = 'http://localhost:3000';
        const id = this.props.match.params.id
        request.get(`${API_URI}/producto/${id}`)
        .end((err, res)=>{
            this.setState({ productos: res.body })
        });

        this.cantidadProductos = (localStorage.getItem('carritoProductos') == undefined) ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length;
    }

    render(){
        return (
            <div className="container-fluid bg-home">

                <Navegacion miCarrito={this.state.cantidadProductos} />

                <div className="container h-cuerpo">
                    <div className="row py-3 h-cuerpo-top">
                        <div className="col-12">
                            <div className="h2">{this.state.productos.nombre}</div>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>

                    <div className="row py-3 h-cuerpo-bottom">
                        <div className="col-lg-4 col-md-12">
                            <img src={'/assets/'+this.state.productos.imagen} className="img-fluid" />
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div><strong>Precio: </strong> <span>$ {this.state.productos.precio}</span></div>
                            <div><strong>Unidades disponible: </strong> <span> {this.state.productos.disponibles}</span></div>
                            <a href="/home" className="btn btn-primary btn-sm" >Regresar</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Producto;