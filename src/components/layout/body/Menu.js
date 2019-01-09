import React, { Component } from 'react';
import OrderButton from './menu/OrderButton';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <OrderButton name="Water" price={0} />
        <OrderButton name="Tea" price={1} />
        <OrderButton name="Coffee" price={2} />
        <OrderButton name="Milk" price={2} />
        <OrderButton name="Fruit" price={2} />
        <OrderButton name="Donut" price={1} />
        <OrderButton name="Fries" price={1} />
        <OrderButton name="Pork" price={4} />
        <OrderButton name="Beef" price={3} />
        <OrderButton name="Steak" price={6} />  
        <OrderButton name="Salad" price={3} />
        <OrderButton name="Burger" price={2} />
        <OrderButton name="Pizza" price={3} />
        <OrderButton name="Burrata" price={4} />
        <OrderButton name="Pasta" price={3} />
        <OrderButton name="Ratatouille" price={5} />
        <OrderButton name="Lasagna" price={3} />
        <OrderButton name="Margherita" price={4} />
      </div>
    );
  }
}

export default Menu;