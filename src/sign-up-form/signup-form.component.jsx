import { Fragment, useContext } from "react"
import {useState} from 'react'
import FormInput from "../components/form-input/form-input.component"
import { createAuthUserWithUsernamePassword } from "../utils/firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"
import './sign-up-form.styles.scss'
import Button from "../components/button/button.component"
import { UserContext } from "../useContext/userContext.component"
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignupForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields
    // console.log(formFields)
    const {setCurrentUser}=useContext(UserContext)

const resetFormFields=()=>{
    setFormFields(defaultFormFields)
}
    const handleSubmit=async (event)=>{
     event.preventDefault();
            if(password !== confirmPassword){
                alert ('passwords not match')
                 return;
            }
            try{
                    const {user}=await createAuthUserWithUsernamePassword(email,password)
                    // console.log(user)
                    setCurrentUser(user)
                    await createUserDocumentFromAuth(user,{displayName})
                    resetFormFields()
            }catch(er){
                if(er='auth/email-already-in-use'){
                    alert('email already exists,try anoother')
                }
                    console.log('user creation  error',er)
            }
    }
    const handleChange=(event)=>{
        const {name,value} = event.target
setFormFields({...formFields,[name]:value})
    }
    return (
        <Fragment>
            <div className='sign-up-container'>
            <h2>Don't have an account</h2>
                <span>sign up with your email and password</span>
                <form action="" onSubmit={handleSubmit}>
                        <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                       <FormInput  label=' email' type="email" required onChange={handleChange} name='email' value={email}/> 
                       <FormInput  label='password ' type="password" required onChange={handleChange} name='password' value={password}/> 
                       <FormInput label='confirm password ' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                        <Button buttonType='inverted' type='submit'>signup</Button>
                </form>
            </div>
        </Fragment>
    )
}

export default SignupForm