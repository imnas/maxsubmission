import { useContext } from "react";

import { SignIn } from "../components/SignIn";
import { SignOut } from "../components/SignOut";
import { UserContext } from "../contexts/UserContext";

import { getAuth } from "firebase/auth";
const auth = getAuth();

export const User = () => {
  const user = useContext(UserContext);

  const isLoggedIn = () => (user.uid && user.screenName);

  return (
    <>
      { !isLoggedIn()
          ? <SignIn auth={auth} />
          : <>
              <p>Logged in as <b>{user.screenName}</b></p>
              <SignOut auth={auth} />
            </>
      }
    </>
  )
}
