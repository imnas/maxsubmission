import { useContext } from "react";
import { SetUserContext } from "../contexts/UserContext";

import { signOut } from "firebase/auth";

export const SignOut = ({ auth }) => {
  const setUser = useContext(SetUserContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser({ uid: null, screenName: null }))
      .catch(err => console.log(err.message));
  }

  return <button onClick={handleSignOut}>Sign Out</button>
}
