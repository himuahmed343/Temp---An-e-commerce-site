import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import {commerce} from "./Components/lib/commerce"
import Cart from './Components/Cart/Cart';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());

  }

  const handleAddToCart = async (productId, quantity) =>{
    const {cart} = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});

    setCart(cart)

  }

  const handleRemoveCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart)

  }
  const handleEmptyCartQty = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
   <>
   <Router>
      <Navbar totalItems = {cart.total_items} />
      <Switch>
      <Route exact path="/">
      <Products products={products} onAddToCart={handleAddToCart} />

        </Route>
        <Route exact path="/cart">
        <Cart cart={cart} 
        handleUpdateCartQty = {handleUpdateCartQty} 
        handleRemoveCartQty = {handleRemoveCartQty} 
        handleEmptyCartQty = {handleEmptyCartQty} 
        
        />

        </Route>
      </Switch>


      </Router>





   </>
  );
}

export default App;
