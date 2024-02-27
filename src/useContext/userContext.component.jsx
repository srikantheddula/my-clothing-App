import { useState,createContext, useEffect } from "react";
import { onAuthStateChangedListener,signOutUser } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

//actual value
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
    })


export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
     let value={currentUser,setCurrentUser}
        // signOutUser()
     useEffect(()=>{
      const unsubscribe=  onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        // console.log(user)
        setCurrentUser(user)
       
      })
      return unsubscribe;
     },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

