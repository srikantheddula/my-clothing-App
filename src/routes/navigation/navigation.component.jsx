import { Outlet,Link } from "react-router-dom"
import { Fragment ,useContext} from "react";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'
// import './navigation.style.scss'
import { UserContext } from "../../useContext/userContext.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon-componet";
import CartDropdown from "../../cart-dropdown/cart-dropdown-component";
import { CartContext } from "../../useContext/cartContext.component";
import { NavigationContainer,NavLink,NavLinks,LogoContainer } from './navigation.style.jsx';

const Navigation=()=>{
const {currentUser}=useContext(UserContext)
const {isCartOpen}=useContext(CartContext)
// const signOutHandler=async ()=>{
//   const res=await signOutUser()
//   // console.log(res)
//   // setCurrentUser(null)
// }
// console.log(currentUser)
    return (
     <Fragment>

          <NavigationContainer>

            <LogoContainer  to='/'>
              <Crwnlogo className="logo"/>
            </LogoContainer>
            
            <NavLinks >
                    <NavLink  to='/shop'>
                        Shop
                    </NavLink>
                    {currentUser?
                    <NavLink as='span'  onClick={signOutUser}>
                      signout</NavLink>:<NavLink  to='/auth'>
                        signIn
                    </NavLink>
                    
                    }
                    
                    <CartIcon/>
                    
            </NavLinks>
            {isCartOpen &&<CartDropdown/>}

        </NavigationContainer>
        <Outlet />

     </Fragment>
      

    )
  }
  export default Navigation