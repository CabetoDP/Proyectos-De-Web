import React from 'react'
import ProductItem from './productItem';
import Card from 'react-bootstrap/card';

import {items} from "../constantes"
const gridProduct =()=>{
    
    return(
        <div className ="container-fluid">
            <Card>
                <Card.Body >    
                    <div className="row" >
                    {
                        items.map((item,index)=>(
                            <ProductItem key={index} item={item} />
                        ))
                    }
                    </div>
                </Card.Body>   
            </Card>
        </div>
         
    );
}

export default gridProduct;