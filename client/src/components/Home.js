import React, {Component} from 'react';
import '../css/Home.css';

class Home extends Component{
    render(){
        return (
            <div className="container-fluid bg-home">


            <div className="container h-cuerpo">
            <div className="row py-3 h-cuerpo-top">
                <div className="col-lg-9 col-md-6 col-sm-12 d-none d-md-block">
                <div className="h2">Catálogo de Productos</div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="h5">¿Qué estas buscando?</label>
                        <input type="text" className="form-control" name="filterProducto" placeholder="Buscar producto"/>
                    </div>
                </form>
                </div>
                <div className="col-12">
                <div className="dropdown-divider"></div>
                </div>
            </div>

            <div className="row py-3 h-cuerpo-bottom">
                <div className="col-lg-3 col-md-6 p-3">
                <div className="productos">
                    <div className="col-12">
                    <div className="row bg-white">
                        <div className="imagen-catalogo">
                            <img src="/assets/{{producto.imagen}}" className="img-fluid"/>
                        </div>
                    </div>
                    </div>
                    <h3></h3>
                    <div className="col-12">
                    <div className="row">
                        <div className="col-8 p-0"><small className="font-weight-bold">Precio de lista:</small> </div>
                        <div className="col-4 p-0 "><small></small></div>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="row">
                        <div className="col-8 p-0"><small className="font-weight-bold">Stock disponible:</small> </div>
                        <div className="col-4 p-0"><small></small></div>
                    </div>
                    </div>
                    <div className="col-12">

                    <div className="row py-2 d-flex justify-content-center">
                        <div className="btn-group m-0">
                        <button className="btn btn-primary btn-sm">Ver Más</button>
                        <button className="btn btn-warning btn-sm">Añadir</button>
                            <input type="number" className="form-control form-control-sm rounded-right cantidad" min="1" max="20" value="1" />
                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </div>

            </div>
        );
      }
}

export default Home;