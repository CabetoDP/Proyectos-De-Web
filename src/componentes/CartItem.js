import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem = ({item}) => {
    return (
        <div className = "row py-2 text-light">
            <Card border = "dark " bg ={item.color}> 
                <Card.Body>
                    <div className = "row">
                        <div className = "col-6">
                            <Card className = "card-header border-light">
                                <h2>{item.nombre}</h2>
                            </Card>
                        </div>
                        <h2>$ {item.precio}</h2>
                        <h2>Cantidad: {item.cantidad}</h2>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem
