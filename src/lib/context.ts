import { createContext, useContext } from "react";

export const AppContext = createContext<ContextValue | null>(null);
export const useAppContext = () => useContext(AppContext);
