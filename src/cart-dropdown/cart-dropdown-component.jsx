import Button from '../components/button/button.component'
import CartItem from '../components/cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../useContext/cartContext.component'
import {useNavigate} from 'react-router-dom'
import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown-styles.jsx'
const CartDropdown = () => {

    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const goToCheckOutHandler=()=>{
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer >

            <CartItems>
                {cartItems.length?cartItems.map((item)=>{
               return <CartItem key={item.id} cartItem={item}></CartItem>
            }):<EmptyMessage>your cart is empty</EmptyMessage>}
            <Button onClick={goToCheckOutHandler} buttonType='inverted'>go to checkout</Button>
            </CartItems>
        </CartDropdownContainer>
    )
}

export default CartDropdown