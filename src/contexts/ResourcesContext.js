import { createContext, useState } from "react";

export const ResourcesContext = createContext(null);

export const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState();
  const [sections, setSections] = useState();

  return (
    <ResourcesContext.Provider
      value={{ resources, setResources, sections, setSections }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
