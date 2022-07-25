import { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formContext, setData] = useState({});

  const setFormContext = (data) => {
    setData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formContext, setFormContext }}>
      {children}
    </FormDataContext.Provider>
  );
};
