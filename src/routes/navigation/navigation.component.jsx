import { Outlet,Link } from "react-router-dom"
import { Fragment ,useContext} from "react";
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'
import './navigation.style.scss'
import { UserContext } from "../../useContext/userContext.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation=()=>{
const {currentUser}=useContext(UserContext)
// const signOutHandler=async ()=>{
//   const res=await signOutUser()
//   // console.log(res)
//   // setCurrentUser(null)
// }
// console.log(currentUser)
    return (
     <Fragment>

          <div className="navigation">

            <Link className='logo-container' to='/'>
              <Crwnlogo className="logo"/>
            </Link>
            
            <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser?<span className="nav-link" onClick={signOutUser}>signout</span>:<Link className='nav-link' to='/auth'>
                        signIn
                    </Link>
                    
                    }
                    
            </div>


        </div>
        <Outlet />

     </Fragment>
      

    )
  }
  export default Navigation