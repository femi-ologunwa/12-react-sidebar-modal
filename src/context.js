import React, { createContext } from 'react';

//create the context
const AppContext = createContext();

//create a component that will wrap around the parent component for which data & functions is to be shared among its children.
const AppProvider = ({ children }) => {
   return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
