import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoader(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, loader, signUp, signIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;