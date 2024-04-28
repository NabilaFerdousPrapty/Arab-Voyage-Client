import { createUserWithEmailAndPassword } from 'firebase/auth';
import  { createContext } from 'react';
import auth from './../Firebase/Firebase.config';
export const AuthContext=createContext(null);
 const FirebaseProvider = ({children}) => {


    //create user
    const createUser = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
  
    }
    const values={
        createUser
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
