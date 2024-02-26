import { Fragment } from "react"
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import  {auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumentFromAuth}  from "../utils/firebase/firebase.utils.js"

import SignupForm from "../sign-up-form/signup-form.component.jsx";

const SignIn=()=>{

useEffect(()=>async () => {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      }, []
)
       


const logGoogleUser=async ()=>{

    const {user}=await signInWithGooglePopup();
    // console.log(response)
   const userDocRef= createUserDocumentFromAuth(user)
}


return (
    <Fragment>
        <div>
            <h1>in the signIn</h1>
            
            <button onClick={logGoogleUser}>signIn with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>signIn with Google Redirect</button>
            <SignupForm></SignupForm>
        </div>
    </Fragment>
)
}
export default SignIn