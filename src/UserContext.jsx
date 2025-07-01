import { createContext, useState } from "react";

//create a Context
const UserContext = createContext();
//create a provider component

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
