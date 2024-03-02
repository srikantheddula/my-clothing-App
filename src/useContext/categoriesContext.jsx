import { createContext,useEffect,useState} from "react";

// import SHOP_DATA from '../shop-data.js'

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext=createContext({
categoriesMap:{},
})



export const CategoriesProvider=({children})=>{
const [categoriesMap,setCategoriesMap]=useState({})

// useEffect(()=>{
//     // addCollectionAndDocuments('categories',SHOP_DATA)   //pushing data to DB using this method and batch will complete
// },[])

useEffect(()=>{
   const getCategoriesMap=async ()=> {
    const categoryMap=await getCategoriesAndDocuments()
    console.log(categoryMap)
   return setCategoriesMap(categoryMap)
}
getCategoriesMap()
},[])  //getting data from firestoreDB what we pushed previously

const value={categoriesMap};
return  <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}