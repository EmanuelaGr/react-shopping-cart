import React from 'react';
import styled from "styled-components";
import { IProduct } from './Product';
import { useStoreContext } from './ProductsContex';


export interface IAddToCartProps {
    item: IProduct;
  }
  
export const AddToCart: React.FC<IAddToCartProps> = ({ item }) => {
    const { addToCart} = useStoreContext();

    const handleClick = () => {
        addToCart(item);
    }
  return (
    <Button onClick={handleClick}>ADD
    </Button>
  );
}


const Button = styled.button`
    
`;
