import * as React from "react";
import { dummyProducts } from '../util/data';
import {IProduct}  from '../components/Product';

export interface IStoreContext {
  products: IProduct[];
  addedProducts: IProduct[];
  addToCart: (item: IProduct) => void;
  deleteFromCart: (item: IProduct) => void;
  clearCart: () => void;
}
  
const StoreContext = React.createContext<IStoreContext | null>(null);

export const StoreContextProvider: React.FC = ({ children }) => {

    const [products]= React.useState<IProduct[]>(dummyProducts);
    const addedProductsInitalState: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const [addedProducts, setAddedProducts] = React.useState<IProduct[]>(addedProductsInitalState);

    const addToCart = React.useCallback((item: IProduct) => {
        addedProducts.push(item);
        setAddedProducts(addedProducts);
        localStorage.setItem('cart', JSON.stringify(addedProducts));
      }, [addedProducts]);

      const deleteFromCart = React.useCallback((item: IProduct) => {
        const filteredArray = addedProducts.filter((val: IProduct) => val.id !== item.id);
        setAddedProducts(filteredArray);
        localStorage.setItem('cart', JSON.stringify(filteredArray));
      }, [addedProducts]);

      const clearCart = React.useCallback(() => {
        setAddedProducts([]);
        localStorage.setItem('cart', JSON.stringify([]));
      }, []);

    return ( 
        <StoreContext.Provider value={{products, addToCart,deleteFromCart,addedProducts,clearCart}} >
            { children }
        </StoreContext.Provider>
     );
}

export const useStoreContext = () => {
    const context = React.useContext(StoreContext);
  
    if (!context) {
      throw new Error("useProductsContext must be used within an ProductsContext");
    }
  
    return context;
  };
  