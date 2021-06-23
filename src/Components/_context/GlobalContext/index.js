import { createContext, useContext, useState } from 'react';

export const ContextGlobal = createContext();

export function GlobalContextProvider({ children, ...props }) {
  const [cart, setCart] = useState([]);

  return (
    <ContextGlobal.Provider value={{ cart, setCart, ...props }}>
      {children}
    </ContextGlobal.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(ContextGlobal);
  return context;
}
