import React, {Component} from 'react';
import '../css/Carrito.css';
import Navegacion from './Navegacion';
import DetalleCarrito from './DetalleCarrito';
import * as request from 'superagent';

class Carrito extends Component{

    constructor () {
        super();
        this.acumulador = 0
        this.state = {
            cantidadProductos: (localStorage.getItem('carritoProductos') == undefined ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length),
            total: 0
        }
    } 

    componentDidMount() {
        if(typeof localStorage.getItem('carritoProductos') !== undefined){        
            const carrito = JSON.parse(localStorage.getItem('carritoProductos'))
            for (let producto of carrito){
                this.acumulador += (producto.precio * producto.cantidad)
            }

            this.setState({
                total: this.acumulador
            })
        }
        this.cantidadProductos = (localStorage.getItem('carritoProductos') == undefined) ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length;
    }

    pagarCarrito(producto){
        const API_URI = 'http://localhost:3000';
        // request.get(`${API_URI}/productos`)
        // .end((err, res)=>{
        //     this.setState({ productos: res.body })
        // });
        const local = localStorage.getItem('carritoProductos');
        if(local == undefined){
            console.log('carro vacio');
        }else{
            const carrito = JSON.parse(local);
            const total = carrito.length;
            for(const items in carrito){
                let id = carrito[items].id;
                let disponibles = carrito[items].disponibles;
                let cantidad = carrito[items].cantidad;
                let actualizado = disponibles - cantidad;
                let acum = parseInt(items) + 1;
                console.log(`[${total}|${items}|${acum}] => ${id} : ${disponibles} - ${cantidad} = ${actualizado} `);

                request.put(`${API_URI}/producto/${id}/${actualizado}`)
                .set('Content-Type', 'application/json')
                .end((err, res)=>{
                    console.log("listo!");
                });
            }
            localStorage.removeItem('carritoProductos');
            window.location.href="./home";
        }

    }

    render(){
        return (
            <div className="container-fluid bg-home">

                <Navegacion miCarrito={this.state.cantidadProductos} />

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
                                    { localStorage.getItem('carritoProductos') != undefined ? (
                                            <DetalleCarrito misProductos={JSON.parse(localStorage.getItem('carritoProductos'))}  />
                                        ) : (
                                            ''
                                        )

                                    }                                    
                                    <tfoot>
                                    <tr>
                                        <td colSpan="4" align="right">Total</td>
                                        <td align="right">${this.state.total.toFixed(2)}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-right text-lg-left">
                            <h4>Total: <span>${this.state.total.toFixed(2)}</span></h4>
                            <div className="btn-group">
                                <a href="/home" className="btn btn-primary btn-sm" >Cancelar</a>
                                <button className="btn btn-warning btn-sm" onClick={this.pagarCarrito.bind(this, JSON.parse(localStorage.getItem('carritoProductos')))}>Pagar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Carrito;