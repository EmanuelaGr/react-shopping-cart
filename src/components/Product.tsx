import * as React from "react";
import styled from "styled-components";

export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

export const Product: React.FC<IProduct> = ( data:IProduct) => {
    return ( 
        <Root>
            <Image src={data.image}></Image>
            <Name>{data.name}</Name>
            <Price>{data.price}kr</Price>
        </Root>
     );
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;        
`;

const Image = styled.img`
    height: 140px;
    width: 140px;
    border-radius: 5px;
`;

const Name = styled.div`
    margin-top: 7px;
    margin-bottom: 7px;
    font: bold 15px Arial, Sans-serif;
`;

const Price = styled.div`
    font: small-caps bold 20px Arial, Sans-serif;
`;

