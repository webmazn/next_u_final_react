import React, {Component} from 'react';

class DetalleCarrito extends Component{ 

    constructor () {
        super();
    } 

    render(){
        const todos = this.props.misProductos.map((producto, i) => {
            return (
                <tr key={i}>
                    <td data-encabezado="Imagen" align="center">
                        <img src={'/assets/'+producto.imagen} className="img-fluid" alt="" />
                    </td>
                    <td data-encabezado="Nombre" align="left">{producto.nombre}</td>
                    <td data-encabezado="Precio" align="right">${producto.precio.toFixed(2)}</td>
                    <td data-encabezado="Cantidad" align="right">{producto.cantidad}</td>
                    <td data-encabezado="Sub Total" align="right">${(producto.precio * producto.cantidad).toFixed(2)}</td>
                </tr>
            );
        });
        return (
            <tbody>
                {todos}
            </tbody>
        );
    }

}

export default DetalleCarrito;