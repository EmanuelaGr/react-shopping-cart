import * as React from "react";
import { dummyProducts } from "../util/data";
import { IProduct } from "../components/Product";

export interface IStoreContext {
  products: IProduct[];
  addedProducts: IProduct[];
  addToCart: (item: IProduct) => void;
  deleteFromCart: (item: IProduct) => void;
  saveQuantity: (item: IProduct, count: number) => void;
  clearCart: () => void;
  savedLocalStorage: string;
}

const StoreContext = React.createContext<IStoreContext | null>(null);

export const StoreContextProvider: React.FC = ({ children }) => {
  const [products] = React.useState<IProduct[]>(dummyProducts);
  const addedProductsInitalState: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const [addedProducts, setAddedProducts] = React.useState<IProduct[]>(addedProductsInitalState);
  const [savedLocalStorage, setSavedLocalStorage] = React.useState<string>(localStorage.getItem("cart") || "[]");

  const addToCart = React.useCallback(
    (item: IProduct) => {
      const addedItem = addedProducts.find((prod: IProduct) => prod.id === item.id);

      if (addedItem) addedItem.quantity++;
      else {
        item.quantity++;
        addedProducts.push(item);
      }

      saveInLocalStorage(addedProducts);
      setSavedLocalStorage(JSON.stringify(addedProducts));
    },
    [addedProducts]
  );

  const deleteFromCart = React.useCallback(
    (item: IProduct) => {
      item.quantity = 0;
      const filteredArray = addedProducts.filter((val: IProduct) => val.id !== item.id);
      setAddedProducts(filteredArray);
      saveInLocalStorage(filteredArray);
      setSavedLocalStorage(JSON.stringify(filteredArray));
    },
    [addedProducts]
  );

  const clearCart = React.useCallback(() => {
    addedProducts.forEach((item: IProduct) => (item.quantity = 0));
    setAddedProducts([]);
    saveInLocalStorage([]);
    setSavedLocalStorage(JSON.stringify([]));
  }, [addedProducts]);

  const saveQuantity = React.useCallback(
    (item: IProduct, count: number) => {
      const findItem = addedProducts.find((prod: IProduct) => prod.id === item.id);

      if (findItem && count >= 0) {
        findItem.quantity = count;

        if (count === 0) {
          const filteredArray = addedProducts.filter((val: IProduct) => val.id !== item.id);
          setAddedProducts(filteredArray);
          saveInLocalStorage(filteredArray);
          setSavedLocalStorage(JSON.stringify(filteredArray));
        } else saveInLocalStorage(addedProducts);
        setSavedLocalStorage(JSON.stringify(addedProducts));
      }
    },
    [addedProducts]
  );

  return (
    <StoreContext.Provider
      value={{ products, savedLocalStorage, saveQuantity, addToCart, deleteFromCart, addedProducts, clearCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const saveInLocalStorage = (cart: IProduct[] | []) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useStoreContext = () => {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error("useProductsContext must be used within an ProductsContext");
  }

  return context;
};
