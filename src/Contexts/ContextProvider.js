import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5]);
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState();
  const [checkbox, setCheckbox] = useState();

  //Removing items
  

  return (
    <StateContext.Provider
      value={{
        products,
        cart,
        setCart,
        setProducts,
        checkbox,
        setCheckbox,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
