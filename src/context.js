import React, { useState, createContext } from 'react';

//create the context
const AppContext = createContext();

//create a component that will wrap around the parent component for which data & functions is to be shared among its children.
const AppProvider = ({ children }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);

   //function to open sidebar
   const openSidebar = () => {
      setIsSidebarOpen(true);
   };

   //function to close sidebar
   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   //function to open modal
   const openModal = () => {
      setIsModalOpen(true);
   };

   //function to close modal
   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <AppContext.Provider
         value={{
            isSidebarOpen,
            isModalOpen,
            openSidebar,
            closeSidebar,
            openModal,
            closeModal,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
