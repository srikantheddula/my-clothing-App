import {initializeApp} from 'firebase/app';

import {getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBUsV-VEe00Twq8XOnRADRpAs8zC7GKns",
  authDomain: "crwn-clothing-36f52.firebaseapp.com",
  projectId: "crwn-clothing-36f52",
  storageBucket: "crwn-clothing-36f52.appspot.com",
  messagingSenderId: "906208552503",
  appId: "1:906208552503:web:69c7a0152604cf6dc841b2"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth=getAuth();

  export const signInWithGooglePopup=()=>{
return signInWithPopup(auth,provider)
  }
  
  // export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider)
  


  export const db=getFirestore();

  export const createUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    const userDocRef=doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot=await getDoc(userDocRef)
      // console.log(userSnapshot)  
      // console.log(userSnapshot.exists())

      //if user data exists
      //return  userDocRed
      if(!userSnapshot.exists()){
        const {displayName,email}=userAuth
        const createdAt=new Date();
      try{
        await setDoc(userDocRef,{displayName,email,createdAt,...additionalInformation})
      }catch(err){
console.log('error creating' ,err.message)
      }
    }
  }

  export const createAuthUserWithUsernamePassword=async(email,password)=>{
    if(!email||!password){
      return ;
    }
return createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInUserWithEmailPassword=async(email,password)=>{
    if(!email||!password){
      return ;
    }
    return signInWithEmailAndPassword(auth,email,password)
      }