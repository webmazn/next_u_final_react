import React, {Component} from 'react';
import '../css/Productos.css';
import * as request from 'superagent';

import { carrito } from './carrito.json';

class Productos extends Component{ 

    constructor () {
        super();
        this.state = {
            productos: [],
            carrito
        } 
    } 
    
    componentDidMount() {
        // get all entities - GET
        //e.preventDefault();
        const API_URI = 'http://localhost:3000';
        request.get(`${API_URI}/productos`)
        .end((err, res)=>{
            // console.log(err);
            // console.log(res);
            // console.log(res.body.message);
            this.setState({
                productos: res.body
            })
        })        
    }

    agregarCarrito(producto, index){
        console.log(producto);
        console.log(index);
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }    

    render(){
        const todos = this.state.productos.map((producto, i) => {
            return (
                <div className="col-lg-3 col-md-6 p-3" key={i}>
                    <div className="productos">
                        <div className="col-12">
                            <div className="row bg-white">
                                <div className="imagen-catalogo">
                                    <img src={'/assets/'+producto.imagen} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <h3>{producto.nombre}</h3>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-8 p-0"><small className="font-weight-bold">Precio de lista:</small> </div>
                                <div className="col-4 p-0 "><small>{producto.precio}</small></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-8 p-0"><small className="font-weight-bold">Stock disponible:</small> </div>
                                <div className="col-4 p-0"><small>{producto.disponibles}</small></div>
                            </div>
                        </div>
                        <div className="col-12">

                            <div className="row py-2 d-flex justify-content-center">
                                <div className="btn-group m-0">
                                <   button className="btn btn-primary btn-sm">Ver Más</button>
                                    <button className="btn btn-warning btn-sm" onClick={this.agregarCarrito.bind(this, producto, i)}>Añadir</button>
                                    <input type="number" className="form-control form-control-sm rounded-right cantidad" name="cantidad" min="1" max="20"  />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="row py-3 h-cuerpo-bottom">
                {todos}
            </div>
        );
    }

}

export default Productos;