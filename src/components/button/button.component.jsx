
import {BaseButton,GoogleSignInButton,InvertedSignInButton} from './button.styles.jsx'

export const button_types_Classes={
    base:'base',google:'google-sign-in',
                    inverted:'inverted'}

const getButton=(buttonType=button_types_Classes.base)=>( {
    [button_types_Classes.base]:BaseButton,
    [button_types_Classes.google]:GoogleSignInButton,
    [button_types_Classes.inverted]:InvertedSignInButton
   
} [buttonType] )        

// const getButton2=(buttonType=button_types_Classes.base)=>{
// if(buttonType=button_types_Classes.google){
//     return GoogleSignInButton
// }else if(buttonType=button_types_Classes.inverted)
// {
//     return InvertedSignInButton;
// }
// return BaseButton;
// } 
const Button=({children,buttonType,onClick})=>{

    const CustomButton=getButton( buttonType)  //here we getting 

return (
<CustomButton onClick={onClick} >
    {children}
</CustomButton>
)
}

export default Button;