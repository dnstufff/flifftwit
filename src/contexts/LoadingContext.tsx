import React, { createContext, useContext, useState } from 'react';

interface ILoadingContext {
    isLoading: boolean;
    showLoading: Function;
    hideLoading: Function;
}

const initialContextState: ILoadingContext = {
    isLoading: false,
    showLoading: () => {},
    hideLoading: () => {},
};

const LoadingContext = createContext<ILoadingContext>(initialContextState);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
