import React, {Component} from 'react';

class Salir extends Component{
    componentDidMount() {
        localStorage.removeItem('carritoProductos');
        localStorage.removeItem('session');
        window.location.href="./login";        
    }
    render(){
        return (
            <div></div>
        )
    }
}

export default Salir;