import { createContext, useState } from "react";

export const ContextCreator = createContext();

const ContextProvider = ({ children }) => {
  const [whichPage, setWhichPage] = useState(" ");

  return (
    <ContextCreator.Provider value={{ whichPage, setWhichPage }}>
      {children}
    </ContextCreator.Provider>
  );
};

export default ContextProvider;
