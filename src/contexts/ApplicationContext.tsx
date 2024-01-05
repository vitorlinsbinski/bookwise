import { Router } from "next/router";
import { ReactNode, createContext, useState } from "react";

interface ApplicationContextProviderProps {
  children: ReactNode;
}

interface ApplicationContextType {
  isBookModalOpen: boolean;
  toggleBookModal: () => void;
  closeBookModal: () => void;
  openBookModal: () => void;
  onBookModalOpenChange: (open: boolean) => void;
  isPageLoading: boolean;
}

export const ApplicationContext = createContext({} as ApplicationContextType);

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderProps) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const [isPageLoading, setIsPageLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setIsPageLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setIsPageLoading(false);
  });

  function toggleBookModal() {
    setIsBookModalOpen((state) => !state);
  }

  function onBookModalOpenChange(open: boolean) {
    setIsBookModalOpen(open);
  }

  function closeBookModal() {
    setIsBookModalOpen(false);
  }

  function openBookModal() {
    setIsBookModalOpen(true);
  }

  return (
    <ApplicationContext.Provider
      value={{
        isBookModalOpen,
        toggleBookModal,
        closeBookModal,
        openBookModal,
        onBookModalOpenChange,
        isPageLoading,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}
