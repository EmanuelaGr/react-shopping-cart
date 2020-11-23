import * as React from "react";
import styled from "styled-components";

export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: number;
}

export const Product: React.FC<IProduct> = ( data:IProduct) => {
    return ( 
        <Root>
            <Image src={data.image}></Image>
            <Name>{data.name}</Name>
            <Price>{data.price}</Price>
        </Root>
     );
}

const Root = styled.div`
//   display: flex;
//   flex: 1;
//   height: 100%;
`;

const Image = styled.img`
  height: 140px;
  width: 140px;
`;

const Name = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const Price = styled.div`

`;

