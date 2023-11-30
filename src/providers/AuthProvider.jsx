import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosAll from "../Hooks/useAxiosAll";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const googleProvider = new GoogleAuthProvider();
    const axiosAll = useAxiosAll();

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


    const updateUser = (name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });         
    }


    useEffect(()=>{      
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosAll.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token);
                        setLoading(false);
                    }
                   
                })
                
            }
            else{
                localStorage.removeItem('token');
                setLoading(false);
            }
           
        });
              
       return () =>{
        return unsubscribe();
       }
    },[axiosAll])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;