import { createContext, useState } from "react";

export const PropertyContext = createContext();

const PropertyContextProvider = ({ children }) => {
  const [propertiesArr, setPropertiesArr] = useState([]);

  return (
    <PropertyContext.Provider value={{ propertiesArr, setPropertiesArr }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
