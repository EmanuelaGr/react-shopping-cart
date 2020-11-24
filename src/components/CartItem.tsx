import React from 'react';
import styled from "styled-components";
import { IProduct, Product } from '../components/Product';import { useStoreContext } from './ProductsContex';
;


export interface ICartItemProps {
    item: IProduct;
  }
  
  export const CartItem: React.FC<ICartItemProps> = ({ item }) => {
    const { deleteFromCart} = useStoreContext();
    const handleClick = () => {
        deleteFromCart(item);
    };

  return (
      <CartItemContent>
        <Product key={item.id} {...item} ></Product>
        <DeleteButton onClick={handleClick}></DeleteButton>
      </CartItemContent>
      )

}
const CartItemContent = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  margin: 20px;
  transition: .3s all ease-in-out;
  position: relative;
  box-shadow: 0px 0px 15px background;
  &:hover{
    background: linear-gradient(130deg, #d0a3d0 0%, #7c477c 100%);
    box-shadow: none;
    & div {
      color: white;
      transition: .3s all ease-in-out;
    }
  }
`;

const DeleteButton = styled.button``;