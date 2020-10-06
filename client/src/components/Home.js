import React, {Component} from 'react';
import '../css/Home.css';
import Navegacion from './Navegacion';
import Productos from './Productos';

import * as request from 'superagent';

import { carrito } from './carrito.json';

class Home extends Component{

    constructor () {
        super();       

        this.cantidades = []
        this.seleccionados = []
        
        this.state = {
            productos: [],
            cantidadProductos: (localStorage.getItem('carritoProductos') == undefined ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length),
            carrito
        } 
    } 

    componentDidMount() {
        const API_URI = 'http://localhost:3000';
        request.get(`${API_URI}/productos`)
        .end((err, res)=>{
            this.setState({ productos: res.body })
        });

        this.cantidadProductos = (localStorage.getItem('carritoProductos') == undefined) ? 0 : JSON.parse(localStorage.getItem('carritoProductos')).length;
    }

    actualizarCarrito(producto){        
        console.log(producto)

        this.seleccionados = (localStorage.getItem('carritoProductos') == undefined) ? this.seleccionados : JSON.parse(localStorage.getItem('carritoProductos'));

        if(this.seleccionados.length>0){
            let posicion = '';
            for(const detalle in this.seleccionados){
                if(this.seleccionados[detalle].id == producto.id){
                posicion = detalle;
                }
            }
            if(posicion==''){
                this.seleccionados.push(producto);
            }else{
                this.seleccionados[posicion].cantidad = producto.cantidad;
            }
        }else{
            this.seleccionados.push(producto);
        }

        //this.seleccionados.push(producto)

        localStorage.setItem('carritoProductos', JSON.stringify(this.seleccionados));            
        
        /*this.setState({
            carrito : [...this.state.carrito, producto]
        })
        console.log(this.state.carrito.length);*/
        this.setState({
            cantidadProductos : JSON.parse(localStorage.getItem('carritoProductos')).length
        })
    }

    render(){
        return (
            <div className="container-fluid bg-home">

                <Navegacion miCarrito={this.state.cantidadProductos} />

                <div className="container h-cuerpo">
                    <div className="row py-3 h-cuerpo-top">
                        <div className="col-lg-9 col-md-6 col-sm-12 d-none d-md-block">
                        <div className="h2">Catálogo de Productos</div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <form>
                            <div className="form-group">
                                <label className="h5">¿Qué estas buscando?</label>
                                <input type="text" className="form-control" name="filterProducto" placeholder="Buscar producto"/>
                            </div>
                        </form>
                        </div>
                        <div className="col-12">
                        <div className="dropdown-divider"></div>
                        </div>
                    </div>                    
                    <Productos misProductos={this.state.productos} actualizarCarrito={this.actualizarCarrito.bind(this)} />
                </div>

            </div>
        );
    }
}

export default Home;