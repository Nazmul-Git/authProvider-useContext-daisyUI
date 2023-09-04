/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.config';

export const AuthContext= createContext(null);
const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const createUser=(email, pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const userLogin=(email, pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }



    const authInfo={
        user,
        createUser,
        userLogin,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;