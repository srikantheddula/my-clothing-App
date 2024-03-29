import './checkOut-item.styles.scss'
import  {useContext} from 'react'
import { CartContext } from '../../useContext/cartContext.component'
const CheckoutItem=({cartItem})=>{
    const {key,name,quantity,price,imageUrl}=cartItem
        const {clearItemFromCart,addItemToCart,removeItemToCart}=useContext(CartContext)
        const clearItemHandler=()=>clearItemFromCart(cartItem)
        const addItemToCartHandler=()=>addItemToCart(cartItem)
        const removeItemToCartHandler=()=>removeItemToCart(cartItem)
return(
    <div className='checkout-item-container'>
            <div className='image-container' >
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={removeItemToCartHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </div>
)
}

export default CheckoutItem
