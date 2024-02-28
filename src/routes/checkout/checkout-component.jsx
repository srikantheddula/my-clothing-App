import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../useContext/cartContext.component'
import CheckoutItem from '../../components/checkout-item/checkOut-item.component'

const Checkout=()=>{

  const {cartItems,cartTotal}=  useContext(CartContext)
    return(

        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            <h1>CheckOut Page</h1>
            {
                cartItems.map(cartItem=>{
                       return  <CheckoutItem key={cartItem.id}cartItem={cartItem}/>
                     })
            }
            <span className='total'>Total: RS. {cartTotal}</span>
        </div>
    )
}

export default Checkout