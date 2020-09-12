import React, {Component} from 'react';
import '../css/Home.css';
import Navegacion from './Navegacion';
import Productos from './Productos';

class Home extends Component{

    render(){
        return (
            <div className="container-fluid bg-home">

                <Navegacion />

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
                    <Productos />
                </div>

            </div>
        );
    }
}

export default Home;