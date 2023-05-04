import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Auth
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   User Signed in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        console.log("logged in user");
        setUser(loggedUser);
        setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
