import { createContext } from "react";
import useRegister, { useRegisterDefaultProvider } from "./useRegister";

type GlobalContextType = {
  newUserProvider: ReturnType<typeof useRegister>;
};

export const GlobalContext = createContext<GlobalContextType>({
  newUserProvider: useRegisterDefaultProvider,
});

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const newUserProvider = useRegister();
  return (
    <GlobalContext.Provider value={{ newUserProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
