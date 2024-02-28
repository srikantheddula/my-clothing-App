import './product-card.component.scss'
import Button from '../components/button/button.component'
import { CartContext } from '../useContext/cartContext.component'
import { useContext } from 'react'


const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
    const {addItemToCart}=useContext(CartContext)
    const addProductToCart=()=>addItemToCart(product)

return(
    <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>                 
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>add to card</Button>
    </div>
)
}
export default ProductCard