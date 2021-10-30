import React, { useContext } from 'react'
import Card from 'react-bootstrap/card';
import { useHistory } from 'react-router';
import { CarritoContext } from '../context/CarritoContext';

const ProductItem = ({item}) =>{
    const history = useHistory()
    const {cart,setCart,total,setTotal} = useContext(CarritoContext)
    const irCarrito = () =>{
        let existe = false

        for (const itemCart of cart) {
            if(itemCart.nombre === item.nombre){
                existe = true
            }
        }

        if(existe){
           const newArray = cart.map(itemCart => {
               console.log(itemCart.nombre, item.nombre, itemCart.nombre === item.nombre);
                if(itemCart.nombre === item.nombre) {
                    itemCart.cantidad =itemCart.cantidad +  1;
                    setTotal(total+itemCart.precio);
                }
                return itemCart;
            });

            setCart(newArray);
        }
        else{
            setTotal(total + (item.precio))
            console.log(item);
            setCart([...cart, {
                ...item, cantidad:1
            }])
        }
        
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