import React, {useState} from 'react'

function Item(props) {
    const [inputValue,setInputValue]=useState(1)
    function getValue (e) {
        const {value} = e.target
        setInputValue(value)
    }
    function Cong () {
        setInputValue(inputValue+1)
    }
    function Tru () {
        setInputValue(inputValue-1)
    }
  return (
    <div className='item-container'>
      <img src={props.img}></img>
      <div className='item-name'><b>{props.name}</b></div>
      <div className='item-price'>{props.price}</div>
      <button className='buttonCongTru' onClick={Tru}>-</button><input className='item-input' onChange={getValue} value={inputValue}/><button className='buttonCongTru' onClick={Cong}>+</button><button className='buttonThem' onClick={props.buyProducts}>Thêm vào giỏ</button>
    </div>
  )
}

export default Item
