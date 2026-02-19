"use client";

import { createContext, useContext, useState, useEffect } from "react";

type LoaderContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null)

export const LoaderProvider = ({children}: {children: React.ReactNode}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be inside LoaderProvider");
  return context;
};
