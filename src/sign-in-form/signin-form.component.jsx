import { Fragment } from "react"
import {useState,useContext} from 'react'
import FormInput from "../components/form-input/form-input.component"
import { signInWithGooglePopup } from "../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"
import { signInUserWithEmailPassword } from "../utils/firebase/firebase.utils"
import './sign-in-form.styles.scss'
import Button from "../components/button/button.component"
// import { useContext } from "react"
import {UserContext } from "../useContext/userContext.component"

const defaultFormFields={
    email:'',
    password:'',
}
const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {email,password}=formFields
    const {setCurrentUser}=useContext(UserContext)
    // console.log(formFields)
const resetFormFields=()=>{
    setFormFields(defaultFormFields)
}

const signInWithGoogle=async ()=>{


try{
    const {user}=await signInWithGooglePopup();
    // console.log(response)
    await createUserDocumentFromAuth(user)
}
    catch(er){
        if(er.code==='auth/popup-closed-by-user'){
            alert ('user login failed try again')
        }
    }
}

const handleSubmit=async (event)=>{

     event.preventDefault();
            try{
                    const {user}=await  signInUserWithEmailPassword(email,password)
                    // console.log(user)
setCurrentUser(user)
                    resetFormFields()
            }
            catch(er){
                switch(er.code){
                    // case 'auth/invalid-credential': alert('password Incorrect');
                    // break;
                    case 'auth/invalid-credential': alert('invalid username/password');
                    break;
                    default:console.log(er)
                }
                    // if(er.code==='auth/invalid-credential'){
                    //     alert('password Incorrect')
                    
                    // }
                    // console.log(er)
                }
              
            
            }
    const handleChange=(event)=>{
        const {name,value} = event.target
            setFormFields({...formFields,[name]:value})
    }
    return (
        <Fragment>

            <div className='sign-up-container'>
            
                <h2>Already have an account</h2>
                <span>sign in with your email and password</span>
                
                <form action="" onSubmit={handleSubmit}>
                       
                       <FormInput  label=' email' type="email" required onChange={handleChange} name='email' value={email}/> 
                       <FormInput  label='password ' type="password" required onChange={handleChange} name='password' value={password}/> 
                      
                       <div className="button-container">       
                       <Button type='submit' buttonType='inverted' >signIn</Button>
                       <Button onClick={signInWithGoogle} buttonType='google' type='button'>signin with google</Button>
                       </div>

                </form>

            </div>
        </Fragment>
    )
}

export default SignInForm