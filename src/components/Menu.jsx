import React from "react";
import OrderButtonContainer from "../containers/OrderButtonContainer.js";

const Menu = () => {
  return (
    <div className="menu">
      <OrderButtonContainer name="Burger" price={5} />
      <OrderButtonContainer name="Pizza" price={3} />
      <OrderButtonContainer name="Fries" price={1} />
      <OrderButtonContainer name="Water" price={0} />
      <OrderButtonContainer name="Donut" price={1} />
      <OrderButtonContainer name="Tea" price={1} />
      <OrderButtonContainer name="Pork" price={4} />
      <OrderButtonContainer name="Steak" price={7} />
      <OrderButtonContainer name="Milk" price={2} />
      <OrderButtonContainer name="Salad" price={3} />
      <OrderButtonContainer name="Fruit" price={2} />
      <OrderButtonContainer name="Beef" price={3} />
      <OrderButtonContainer name="Coffee" price={2} />
      <OrderButtonContainer name="Soup" price={1} />
      <OrderButtonContainer name="Pasta" price={3} />
      <OrderButtonContainer name="Rips" price={3} />
      <OrderButtonContainer name="Lasagna" price={3} />
      <OrderButtonContainer name="Margherita" price={4} />
    </div>
  );
};

export default Menu;