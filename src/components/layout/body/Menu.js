import React, { Component } from 'react';
import OrderButton from './menu/OrderButton';
import menu from '../../../data/menu';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        {menu.map((item, index) => {
          return <OrderButton name={item.name} price={item.price} key={index}/>
        })}
      </div>
    );
  }
}

export default Menu;