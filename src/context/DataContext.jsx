import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // to provide the data to different components
  // children will refer to the components that are within the data provider and then the data will be available to the children
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataProvider;
