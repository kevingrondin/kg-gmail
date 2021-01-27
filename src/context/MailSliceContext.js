import { createContext, useContext, useState } from "react";

export const MailSliceContext = createContext(null);

export const MailSliceProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSendMessage = async () => {
    try {
      await setIsOpen(true);
    } catch (err) {
      console.log("MailSlice error");
    }
  };

  const closeSendMessage = async () => {
    try {
      await setIsOpen(false);
    } catch (err) {
      console.log("MailSlice error");
    }
  };

  return (
    <MailSliceContext.Provider
      value={{ isOpen, openSendMessage, closeSendMessage }}
    >
      {children}
    </MailSliceContext.Provider>
  );
};

export const useMailSlice = () => {
  const sendMessage = useContext(MailSliceContext);
  return sendMessage;
};
