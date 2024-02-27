import { useState,createContext } from "react";

//actual value
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
    })


export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
     let value={currentUser,setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

