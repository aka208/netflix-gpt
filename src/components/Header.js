import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log("User ", user);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
        // dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("USER AUTH STATE", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/login");
        // navigate("/");
        // User is signed out
        // ...
      }
    });
    // this will be unsubscribed when components unmount
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="w-screen absolute z-10 flex justify-between bg-gradient-to-b from-black">
      <img className="w-64 px-8 py-2" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="px-4 m-2 bg-purple-800 text-white rounded-md mx-4 my-2"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
