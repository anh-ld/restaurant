import React from 'react';
import OrderButton from './menu/OrderButton';
import menu from '../../../utils/menu';
import styled from 'styled-components';

const $Menu = styled.div`
  background-color: #FFF;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Menu = () => {
  return (
    <$Menu>
      {menu.map((item, index) => {
        return <OrderButton name={item.name} price={item.price} key={index}/>
      })}
    </$Menu>
  );
};

export default Menu;