
import React, { useState } from 'react';

export const CarritoContext = React.createContext()

export default function CarritoProvider({children}) {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const contextValues = {
        cart,
        setCart,
        total,
        setTotal
    }
    return (
        <CarritoContext.Provider value={contextValues}>
            {children}
        </CarritoContext.Provider>
    )
}