import React, {Component} from 'react';
import '../css/Home.css';
import Navegacion from './Navegacion';

class Bandeja extends Component{
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
                            <div className="h2">Bandeja</div>
                        </div>
                        <div className="col-12">
                            <div className="dropdown-divider"></div>
                        </div>
                        </div>

                        <div className="row py-3 h-cuerpo-bottom">
                        <div className="col-12">
                            Bandeja!
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Bandeja;