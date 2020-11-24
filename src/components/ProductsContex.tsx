import * as React from "react";
import { dummyProducts } from '../util/data';
import {IProduct}  from '../components/Product';

export interface IStoreContext {
  products: IProduct[];
  addedProducts: IProduct[];
  addToCart: (item: IProduct) => void;
  deleteFromCart: (item: IProduct) => void;
  increaseQuantity: (item: IProduct, count: number) => void;
  decreaseQuantity: (item: IProduct, count: number) => void;
  clearCart: () => void;
}
  
const StoreContext = React.createContext<IStoreContext | null>(null);

export const StoreContextProvider: React.FC = ({ children }) => {

    const [products]= React.useState<IProduct[]>(dummyProducts);
    const addedProductsInitalState: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const [addedProducts, setAddedProducts] = React.useState<IProduct[]>(addedProductsInitalState);

    const addToCart = React.useCallback((item: IProduct) => {
        const addedItem = addedProducts.find((prod: IProduct) => prod.id === item.id);

        if (addedItem)
            addedItem.quantity++;
        else {
            item.quantity++;
            addedProducts.push(item);
        }
        console.log("item", item, addedProducts);
    
        localStorage.setItem('cart', JSON.stringify(addedProducts));
      }, [addedProducts]);

      const deleteFromCart = React.useCallback((item: IProduct) => {
        item.quantity = 0;
        const filteredArray = addedProducts.filter((val: IProduct) => val.id !== item.id);
        setAddedProducts(filteredArray);
        localStorage.setItem('cart', JSON.stringify(filteredArray));
      }, [addedProducts]);

      const clearCart = React.useCallback(() => {
        addedProducts.forEach((item:IProduct) => item.quantity =0 );
        setAddedProducts([]);
        localStorage.setItem('cart', JSON.stringify([]));
      }, [addedProducts]);

      const decreaseQuantity = React.useCallback((item: IProduct, count:number) => {
        const findItem = addedProducts.find((prod: IProduct) => prod.id === item.id);
        console.log("decrease",findItem)
        if (findItem)
            if (findItem.quantity > 1 )
            findItem.quantity --;
            else
                {
                    const filteredArray = addedProducts.filter((val: IProduct) => val.id !== item.id);
                    setAddedProducts(filteredArray);
                }
      }, [addedProducts]);

      const increaseQuantity = React.useCallback((item: IProduct, count: number) => {
        const findItem = addedProducts.find((prod: IProduct) => prod.id === item.id);
        console.log("increaseQuantity",findItem)

        findItem.quantity = count;
      }, [addedProducts]);

    return ( 
        <StoreContext.Provider value={{products, increaseQuantity,decreaseQuantity, addToCart,deleteFromCart,addedProducts,clearCart}} >
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
  