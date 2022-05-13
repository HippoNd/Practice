import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
function App() {
  const [products,setProducts]=useState([])
  const [count,setCount]=useState(0)
  function callAPI(){
    axios.get('http://localhost:5001/products').then(function(res){
      setProducts(res.data)
    })
  }
  function buyProducts () {
    setCount(count+1)
  }
  useEffect(callAPI,[])
  return (
    <div className="App">
      <Header count={count}/>
      <Body products={products} buyProducts={buyProducts}/>
    </div>
  );
}

export default App;
