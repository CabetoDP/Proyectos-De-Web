import React from 'react'
import Card from 'react-bootstrap/card';
import { useHistory } from 'react-router';

const ProductItem = ({item}) =>{
    const history = useHistory()

    const irCarrito = () =>{
        history.push('/cart')
    }
    
    return(
        <div className = "col-4 text-light py-2">
            <Card border = "primary " bg = {item.color}> 
                <Card.Body>
                    <h2>{item.nombre}</h2>
                    <h2>$ {item.precio}</h2>
                    <div className = "row">
                        <div className = "col-3">
                            <button onClick={irCarrito} type="button" className="btn btn-light">Agregar</button>
                        </div>
                        <div className = "col-3">
                            <button type="button" className="btn btn-light">detalles</button>
                        </div>

                    </div>
                    
                </Card.Body>
            </Card>
        </div>

        
    );
}

export default ProductItem;