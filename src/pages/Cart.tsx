import React from 'react';
import styled from "styled-components";
import { CartItem } from '../components/CartItem';
import { IProduct } from '../components/Product';
import { useStoreContext } from '../components/ProductsContex';
import EmptyCart from '../util/img/emptycart.png';

export default  function Cart() {
  const { addedProducts, clearCart} = useStoreContext();

  const visible = addedProducts.length === 0;
  return (
    <Root>
      {visible && 
      <EmptyCartContent> 
        <EmptyCartImage src={EmptyCart} alt=""></EmptyCartImage>
        <span>Your card is empty.</span>
      </EmptyCartContent>
      }
      <Items>
      {addedProducts.map((product: IProduct) => 
        <CartItem key={product.id} item={product} ></CartItem>
      )
      }
      </Items>
      {!visible && <Button onClick={clearCart}>CHECKOUT</Button>}
    </Root>
  );
}


const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  height: 90%; 
  overflow: sroll;
`;

const Button = styled.button`
  // display: flex;
  height: 50px;
  width: 200px;
  position: relative;
  float: right;
`;

const EmptyCartContent = styled.div`
  height:300px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyCartImage = styled.img`
  height:300px;
  width: 400px;
`;


