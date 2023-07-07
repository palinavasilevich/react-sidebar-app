import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const openModal = () => setIsModalOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;
