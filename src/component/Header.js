import React from 'react'
import '../App.css'
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
function Header(props) {
  return (
    <div className='header-container'>
        <h1>Danh sách sản phẩm</h1>
        <div className='header-right'>
            <div className='header-input'>
                <SearchOutlined className='icon-input' /><input placeholder='Tên sản phẩm'/>  
            </div>
            <button><SearchOutlined className='icon-button'/></button>
            <ShoppingOutlined className='icon-shopping' />
            <span className='span-count'>{props.count}</span>
        </div>
    </div>
  )
}

export default Header