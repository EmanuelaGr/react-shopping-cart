import React from 'react';
import styled from "styled-components";
import { IProduct, Product } from '../components/Product';
import { useProductsContext } from '../components/ProductsContex';

export default  function Store() {
  const { products} = useProductsContext();

  return (
    <Root>
      {products.map((product: IProduct) => 
        <Product key={product.id} {...product} ></Product>
      )
      }

    </Root>
  );
}




const Root = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

