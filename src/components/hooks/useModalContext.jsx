import React from "react";
import useModal from "./useModal";
import TestModal from "../TestModal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <TestModal />
      {children}
    </Provider>
  );
};
console.log("Modal Context is", ModalContext);

export { ModalContext, ModalProvider };
