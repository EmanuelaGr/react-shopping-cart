import React from 'react';
import styled from "styled-components";
import { CartItem } from '../components/CartItem';
import { IProduct } from '../components/Product';
import { useStoreContext } from '../components/ProductsContex';

export default  function Cart() {
  const { addedProducts, clearCart} = useStoreContext();

  return (
    <Root>
      {addedProducts.map((product: IProduct) => 
      <div>
        <CartItem key={product.id} item={product} ></CartItem>
      </div>
      )
      }
      <Button onClick={clearCart}>CHECKOUT</Button>
    </Root>
  );
}


const Root = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 97vh;
`;


const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 97vh;
`;