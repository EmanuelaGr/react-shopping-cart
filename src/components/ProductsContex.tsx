import * as React from "react";
import { dummyProducts } from '../util/data';
import {IProduct}  from '../components/Product';

export interface IProductsContext {
  products: IProduct[];
}
  
const ProductsContext = React.createContext<IProductsContext | null>(null);

export const ProductsContextProvider: React.FC = ({ children } : any) => {

    const [products]= React.useState<IProduct[]>(dummyProducts);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}

export const useProductsContext = () => {
    const context = React.useContext(ProductsContext);
  
    if (!context) {
      throw new Error("useProductsContext must be used within an ProductsContext");
    }
  
    return context;
  };
  