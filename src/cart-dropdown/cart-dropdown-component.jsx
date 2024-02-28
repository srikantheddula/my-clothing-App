import './cart-dropdown-styles.scss'
import Button from '../components/button/button.component'
import CartItem from '../components/cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../useContext/cartContext.component'
import {useNavigate} from 'react-router-dom'

const CartDropdown = () => {

    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()
    const goToCheckOutHandler=()=>{
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>

            <div className='cart-items'>
            {cartItems.map((item)=>{
               return <CartItem key={item.id} cartItem={item}></CartItem>
            })}
                <Button onClick={goToCheckOutHandler} buttonType='inverted'>go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown