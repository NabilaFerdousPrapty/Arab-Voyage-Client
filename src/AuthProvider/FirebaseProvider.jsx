import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/Firebase.config';
export const AuthContext=createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
 const FirebaseProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider = new GoogleAuthProvider();


    //create user
    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
  
    }
    console.log(user);
    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            
            setUser(user);
            // ...
          } 
        });
      }, []);

      const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
      }
    const values={
        createUser,
        signInUser,
        user


    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
