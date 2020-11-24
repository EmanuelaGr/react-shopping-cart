import React from 'react';
import styled from "styled-components";
import { AddToCart } from '../components/AddToCart';
import { IProduct, Product } from '../components/Product';
export interface IStoreItemProps {
    item: IProduct;
  }
  
  export const StoreItem: React.FC<IStoreItemProps> = ({ item }) => {
  return (
      <ProductItem>
        <Product key={item.id} {...item} ></Product>
        <AddToCart item={item}></AddToCart>
      </ProductItem>
      )

}
const ProductItem = styled.div`
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