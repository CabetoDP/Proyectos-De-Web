import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoContext } from '../context/CarritoContext';

const CartItem = ({item}) => {
    const {cart,setCart,total,setTotal} = useContext(CarritoContext)

    const aumentar = ()=> {
        const newArray = cart.map(itemCart => {
             if(itemCart.nombre === item.nombre) {
                 itemCart.cantidad =itemCart.cantidad +  1;
                 setTotal(total+itemCart.precio);
             }
             return itemCart;
         });

         setCart(newArray);
    }
    const disminuir = ()=> {
        let newArray = cart.map(itemCart => {
            if(itemCart.nombre === item.nombre && itemCart.cantidad > 0) {
    
            
                itemCart.cantidad =itemCart.cantidad - 1;
                setTotal(total-itemCart.precio);
                
            }
            return itemCart;
        })

        newArray = newArray.filter(itemCart => itemCart.cantidad > 0 )

        setCart(newArray);
    }
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
                <Card.Footer>
                    <button onClick={disminuir}>
                        -
                    </button>
                    <button onClick={aumentar}>
                        +
                    </button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CartItem
