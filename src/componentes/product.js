import React from 'react'
import Card from 'react-bootstrap/card';
import GridProduct from './gridproduct';
const producto =()=>{
    return(
        <Card border="primary"> 
            <Card.Body>
                <h1 className = "text-center">PC's Store</h1>
                <h2 className = "text-center">¡Compra tus productos!</h2>
                <h3 className = "text-center">Hay 9 productos</h3>
                <GridProduct/>
            </Card.Body>
        </Card>
    );
}

export default producto;










