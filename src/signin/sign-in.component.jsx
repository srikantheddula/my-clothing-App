import { Fragment } from "react"
import  {signInWithGooglePopup,createUserDocumentFromAuth}  from "../utils/firebase/firebase.utils.js"

const SignIn=()=>{
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
        </div>
    </Fragment>
)
}
export default SignIn