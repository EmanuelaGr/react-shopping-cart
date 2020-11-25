import React from "react";
import styled from "styled-components";

import { IProduct } from "../components/Product";
import { useStoreContext } from "../components/ProductsContex";
import { StoreItem } from "../components/StoreItem";

export default function Store() {
  const { products } = useStoreContext();

  return (
    <Root>
      {products.map((product: IProduct) => (
        <StoreItem key={product.id} item={product}></StoreItem>
      ))}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 92vh;
`;
