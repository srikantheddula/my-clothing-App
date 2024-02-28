import './product-card.component.scss'
import Button from '../components/button/button.component'

const ProductCard=({product})=>{
    const {name,price,imageUrl}=product
return(
    <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>                 
            </div>
            <Button buttonType={'inverted'}>add to card</Button>
    </div>
)
}
export default ProductCard