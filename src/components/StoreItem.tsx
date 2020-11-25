import React from "react";
import styled from "styled-components";
import { IProduct, Product } from "../components/Product";
import { useStoreContext } from "./ProductsContex";
export interface IStoreItemProps {
  item: IProduct;
}

export const StoreItem: React.FC<IStoreItemProps> = ({ item }) => {
  const { addToCart } = useStoreContext();

  const handleClick = () => {
    addToCart(item);
  };

  return (
    <ProductItem>
      <Product key={item.id} {...item}></Product>
      <Button onClick={handleClick}>ADD</Button>
    </ProductItem>
  );
};

const ProductItem = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  margin: 20px;
  transition: 0.3s all ease-in-out;
  box-shadow: 0px 0px 15px background;
  &:hover {
    background: linear-gradient(130deg, #d0a3d0 0%, #7c477c 100%);
    box-shadow: none;
    & div {
      color: white;
      transition: 0.3s all ease-in-out;
    }
  }
`;

const Button = styled.button`
  display: flex;
  position: relative;
  background-color: #464646;
  color: white;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  margin-top: -20px;
  margin-right: 10px;
  float: right;
  font-weight: bold;
`;
