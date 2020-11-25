import * as React from "react";
import styled from "styled-components";
import { IProduct } from "../components/Product";
import { useStoreContext } from "./ProductsContex";
export interface IIncreaseDecreaseProps {
  item: IProduct;
}

export const IncreaseDecrease: React.FC<IIncreaseDecreaseProps> = ({ item }) => {
  const { saveQuantity } = useStoreContext();
  const [count, setCount] = React.useState(item.quantity);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
    saveQuantity(item, count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
    saveQuantity(item, count + 1);
  };

  return (
    <Content>
      <button onClick={incrementCount}>
        <svg width={20} fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <Input
        type="number"
        value={count}
        onChange={event => {
          console.log("change");
        }}
      />
      <button onClick={decrementCount}>
        <svg width={20} fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Input = styled.input`
  width: 30px;
  height: 25px;
`;
