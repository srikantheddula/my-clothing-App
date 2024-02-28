import './cart-icon-styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../useContext/cartContext.component'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
const CartIcon=()=>{
        const {isCartOpen,setIsCartOpen}=useContext(CartContext)
        const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen)
return(
<div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon  className='shopping-icon'></ShoppingIcon>
        <span className='item-count' >0</span>
</div>
)
}
export default CartIcon