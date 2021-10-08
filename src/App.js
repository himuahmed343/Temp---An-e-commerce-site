import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import {commerce} from "./Components/lib/commerce"
import Cart from './Components/Cart/Cart';

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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
   <>
   <Navbar totalItems = {cart.total_items} />
   {/* <Products products={products} onAddToCart={handleAddToCart} /> */}

    <Cart cart={cart} />


   </>
  );
}

export default App;
