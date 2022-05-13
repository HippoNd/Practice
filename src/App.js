import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
function App() {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
  function callAPI(){
    axios.get('http://localhost:5001/products').then(function(res){
      setProducts(res.data)
    })
  }
  function buyProducts (data) {
    setCart((prev)=>{
      const newCart = [...prev]
      newCart.push(data)
      return newCart
    })
  }
  useEffect(callAPI,[])
  return (
    <div className="App">
      <Header count={cart.length}/>
      <Body products={products} buyProducts={buyProducts} cart={cart}/>
    </div>
  );
}

export default App;
