import { Link } from "react-router-dom";

const Navegacion = () => {
    return (
        <nav >
            <div className="row text-center">
                <div className="col-4 ">   
                </div>
                <div className="col-4 "> 
                    <h1><Link to ="/about">About</Link> <Link to ="/">Store</Link> < Link to ="/cart">Cart</Link></h1>
                </div>
                <div className="col-4">   
                </div>
            </div>
        </nav>
    );
};

export default Navegacion;
