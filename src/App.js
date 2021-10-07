import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import {commerce} from "./Components/lib/commerce"

function App() {
  const [products, setProducts] = useState();

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(fetchProducts)
  return (
   <>
   <Navbar />
   <Products />
   </>
  );
}

export default App;
