
// PopupContext.jsx
import { createContext, useContext, useState } from "react";
import { Popup } from "../components/popup";

const PopupContext = createContext();

export function PopupProvider({ children }) {

  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
  });

  function showPopup(title, message) {
    setPopup({
      open: true,
      title,
      message,
    });
  }

  function closePopup() {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }));
  }

  return (
    <PopupContext.Provider value={{ showPopup, closePopup }}>
      {children}

     {popup.message && <Popup
        isOpen={popup.open}
        title={popup.title}
        message={popup.message}
        onClose={closePopup}
      />}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}