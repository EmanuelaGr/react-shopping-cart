import React from "react";
import styled from "styled-components";
import { CartItem } from "../components/CartItem";
import { IProduct } from "../components/Product";
import { useStoreContext } from "../components/ProductsContex";
import EmptyCart from "../util/img/emptycart.png";

export default function Cart() {
  const { addedProducts, clearCart, savedLocalStorage } = useStoreContext();
  const visible = addedProducts.length === 0;

  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const total = addedProducts.reduce(
      (total: number, product: IProduct) => total + product.price * product.quantity,
      0
    );
    setTotal(total);
  }, [addedProducts, savedLocalStorage]);

  return (
    <Root>
      {visible && (
        <EmptyCartContent>
          <EmptyCartImage src={EmptyCart} alt=""></EmptyCartImage>
          <span>Your cart is empty.</span>
        </EmptyCartContent>
      )}
      {!visible && (
        <CardContent>
          <TotalPrice>Total {total.toFixed(2)} kr</TotalPrice>
          <Items>
            {addedProducts.map((product: IProduct) => (
              <CartItem key={product.id} item={product}></CartItem>
            ))}
          </Items>
          <Button onClick={clearCart}>CHECKOUT</Button>
        </CardContent>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85%;
  align-items: center;
  justify-content: space-evenly;
`;

const TotalPrice = styled.div`
  height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 20px;
  align-self: center;
  text-align: center;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: sroll;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  position: relative;
  float: right;
  background-color: black;
  color: white;
  font-weight: bold;
  margin-bottom: 50px;
`;

const EmptyCartContent = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyCartImage = styled.img`
  height: 300px;
  width: 400px;
`;
