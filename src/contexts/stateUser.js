import { useContext } from "react";
import { ContextCreator } from "./GlobalState";

const StateUser = () => {
  return useContext(ContextCreator);
};

export default StateUser;
