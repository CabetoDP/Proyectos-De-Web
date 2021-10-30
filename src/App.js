import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header';
import About from"./pages/about";
import Store from"./pages/store.js";
import Cart from"./pages/Cart.js";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
// import "./App.css"
import {Component, useState} from 'react';

const App = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <div className = "App"> 
      <Router>
        <Header/>
        <Switch>
          <Route exact  path="/" component={Store}/> 
          <Route exact  path="/about" component={About}/> 
          <Route exact  path="/cart" render={()=><Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>}/> 
        </Switch>
      </Router>
    </div>
  )
}

export default App;



/*
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";

class header extends Component{
  render() {
    return(
      <Router>
        <div>
          <header>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/" component={Cart} />
              <Route exact path="/" component={Store} />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
*/
