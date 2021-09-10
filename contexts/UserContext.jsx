import { useState, createContext } from "react";

const initialUserState = {
  uid: null,
  screenName: null
};

const initialSetUserState = () => null;

export const UserContext = createContext(initialUserState);
export const SetUserContext = createContext(initialSetUserState);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        { children }
      </SetUserContext.Provider>
    </UserContext.Provider>
  )
}
