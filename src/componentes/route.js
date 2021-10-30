import React from 'react';
import {Link} from 'react-router-dom';

import Header from './header';

class header extends React.Component {
    render (){
        return (
            <Header>
                <div>Logo</div>
                <nav className = "nav">
                    <Link to = "/">Inicio</Link>
                    <Link to = "/">Carrito</Link>
                    <Link to = "/">Sobre nosotros</Link>
                </nav>
            </Header>
        );
    }
}

export default header;

