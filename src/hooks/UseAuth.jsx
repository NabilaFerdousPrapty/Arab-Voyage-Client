import { useContext } from "react";
import { AuthContext } from "../AuthProvider/FirebaseProvider";


const UseAuth = () => {
    const all=useContext(AuthContext);
    return all;
}

export default UseAuth;