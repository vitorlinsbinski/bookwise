import { ReactNode, createContext, useState } from "react";

interface BookModalContextProviderProps {
  children: ReactNode;
}

interface BookModalContextType {
  isBookModalOpen: boolean;
  toggleBookModal: () => void;
  closeBookModal: () => void;
  openBookModal: () => void;
  onBookModalOpenChange: (open: boolean) => void;
}

export const BookModalContext = createContext({} as BookModalContextType);

export function BookModalContextProvider({
  children,
}: BookModalContextProviderProps) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

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
    <BookModalContext.Provider
      value={{
        isBookModalOpen,
        toggleBookModal,
        closeBookModal,
        openBookModal,
        onBookModalOpenChange,
      }}>
      {children}
    </BookModalContext.Provider>
  );
}
