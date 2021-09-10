import { useContext } from "react";
import { SetUserContext } from "../contexts/UserContext";

import { signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";

const queryFieldExists = async (db, col, field, value) => {
  const q = query(collection(db, col), where(field, "==", value));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

const addNewUser = async (db, uid, screenName) => {
  await setDoc(doc(db, "users", uid), {
    uid: uid,
    screenName: screenName,
  });
}

export const SignIn = ({ auth }) => {
  const setUser = useContext(SetUserContext);

  const login = (provider) => {
    signInWithPopup(auth, provider).then(async result => {
      const db = getFirestore();
      // If user does not exist, create new user
      if (!(await queryFieldExists(db, "users", "uid", result.user.uid)))
        addNewUser(db, result.user.uid, result.user.reloadUserInfo.screenName);

      setUser({
        uid: result.user.uid,
        screenName: result.user.reloadUserInfo.screenName,
      });
    }).catch(err => console.log(err.message));
  }

  return (
    <>
      <TwitterSignIn login={login} />
      {/* Other SignIn components */}
    </>
  )
}

// TwitterSignIn component
import { TwitterAuthProvider } from "firebase/auth";
const twitterProvider = new TwitterAuthProvider();

const TwitterSignIn = ({ login }) => {
  return (
    <button onClick={() => login(twitterProvider)}>
      Sign In With Twitter
    </button>
  )
}
