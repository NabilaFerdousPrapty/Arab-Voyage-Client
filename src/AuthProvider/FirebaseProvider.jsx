import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/Firebase.config';
export const AuthContext=createContext(null);
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from 'firebase/auth';
 const FirebaseProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading,setloading]=useState(true);
    //create user
    const createUser = (email, password) => {
        setloading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
  
    }
    //update user profile
    const updateUserProfile = ( name,image) => {
       
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL:image
          })
    };
    //google sign in
    const googleSignIn = () => {
        setloading(true)
      return signInWithPopup(auth, googleProvider)
    }
    //github sign in
    const githubSignIn = () => {
        setloading(true)
      return signInWithPopup(auth, githubProvider)
    }
   
    //observer
    useEffect(() => {
      const unSubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setloading(false)
          } 
          setloading(false)
        });
        return ()=>unSubscribe();
        
      }, []);

      const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
      }

      //log out
    const logOut = () => {
        signOut(auth)
          .then(() => {
            setUser(null);
            setloading(false)
          })
          .catch((error) => {
            console.log(error);
          });
      };
    const values={
        createUser,
        signInUser,
        user,
        googleSignIn,
        logOut,
        githubSignIn,
        loading,
        updateUserProfile


    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
