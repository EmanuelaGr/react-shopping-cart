import React from 'react';
import styled from "styled-components";
import { IProduct, Product } from '../components/Product';
import { IncreaseDecrease } from '../components/IncreaseDecrease';
import { useStoreContext } from './ProductsContex';

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
        <IncreaseDecrease item={item}></IncreaseDecrease>
        <DeleteButton onClick={handleClick}>
            <svg width={20} fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            <ButtonSpan>DELETE</ButtonSpan>
        </DeleteButton>

      </CartItemContent>
      )

}
const CartItemContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    margin: 20px;
    transition: .3s all ease-in-out;
    box-shadow: 0px 0px 15px background;
`;

const DeleteButton = styled.button`
    display: flex;    
    heigh: 60px;
    width: 150px;
    margin: 50px;
    align-self: center;
    justify-content: center;
`;

const ButtonSpan = styled.span`
    display: flex;
    align-self: center;
    justify-content: center;
`;