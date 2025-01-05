import React,{createContext,useState} from "react";

export const PostOfficeContext=createContext();

export const PostOfficeProvide=({children})=>{
    const [postOffice,setPostOffice]=useState({})

    return (
        <PostOfficeContext.Provider value={{postOffice,setPostOffice}}>
            {children}
        </PostOfficeContext.Provider>
    )
}