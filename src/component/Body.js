import React from 'react'
import Item from './Item'

function Body(props) {
    const listProducts = props.products.map(function(item,index){
        return <Item key={index} name={item.name} img={item.image} price={item.price} id={item.id} buyProducts={props.buyProducts} cart={props.cart}/> 
    })
  return (
    <div className='body'>
        {listProducts}
    </div>
  )
}

export default Body
