import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const persistedUser = localStorage.getItem("user");
  const userLocal = JSON.parse(persistedUser);

  const [user, setUser] = useState(userLocal);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
