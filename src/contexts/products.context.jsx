import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setCurrentUser: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [ products, setProducts ] = useState(PRODUCTS);
  const value = { products }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if(user){
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     })

//     return unsubscribe;
//   }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}