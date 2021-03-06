import React, {Component} from 'react';
import '../css/Productos.css';

class Productos extends Component{ 

    constructor () {
        super(); 
        this.cantidades = []
    } 

    agregarCarrito(producto, index){
        producto['cantidad'] = (this.cantidades[index].value == "") ? 1 : this.cantidades[index].value

        this.cantidades[index].value = producto['cantidad']

        this.props.actualizarCarrito(producto)
    }    

    verMas(producto){
        window.location.href="./producto/ver/"+producto.id;
    }    

    render(){
        const todos = this.props.misProductos.map((producto, i) => {
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
                                <div className="col-4 p-0 "><small>${producto.precio.toFixed(2)}</small></div>
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
                                    <button className="btn btn-primary btn-sm" onClick={this.verMas.bind(this, producto)}>Ver Más</button>
                                    <button className="btn btn-warning btn-sm" onClick={this.agregarCarrito.bind(this, producto, i)}>Añadir</button>
                                    <input type="number" className="form-control form-control-sm rounded-right cantidad" id={'num'+i} ref={(ref) => { this.cantidades[i] = ref; return true; }} name="cantidad" min="1" max="20" onChange={this.agregarCantidad}  />
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