import React from "react";
import styled from "styled-components";
import { CartItem } from "../components/CartItem";
import { IProduct } from "../components/Product";
import { useStoreContext } from "../components/ProductsContex";
import EmptyCart from "../util/img/emptycart.png";

export default function Cart() {
  const { addedProducts, clearCart, savedLocalStorage } = useStoreContext();
  const visible = addedProducts.length === 0;

  const priceInitialState = JSON.parse(localStorage.getItem("price") || "0");
  const [total, setTotal] = React.useState(priceInitialState);

  React.useEffect(() => {
    const total = addedProducts.reduce(
      (total: number, product: IProduct) => total + product.price * product.quantity,
      0
    );
    setTotal(total);
  }, [addedProducts, savedLocalStorage]);

  if (addedProducts.length > 0) {
    localStorage.setItem("price", total);
  } else localStorage.setItem("price", JSON.stringify(0));

  return (
    <Root>
      {visible && (
        <EmptyCartContent>
          <EmptyCartImage src={EmptyCart} alt=""></EmptyCartImage>
          <span>Your cart is empty.</span>
        </EmptyCartContent>
      )}
      {!visible && (
        <CartContent>
          <TotalPrice>Total {total.toFixed(2)} kr</TotalPrice>
          <Items>
            {addedProducts.map((product: IProduct) => (
              <CartItem key={product.id} item={product}></CartItem>
            ))}
          </Items>
          <Button onClick={clearCart}>CHECKOUT</Button>
        </CartContent>
      )}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const CartContent = styled.div``;

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
  // display: flex;
  height: 50px;
  width: 200px;
  position: relative;
  float: right;
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
