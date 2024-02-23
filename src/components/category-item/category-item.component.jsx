
import './category-item.component.scss'

const CategoryItem=({categorie})=>{
    const {imageUrl,title}=categorie
return (
    <div className='category-container'>
              <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}></div>
              <div className='category-body-container'>
                <h1>{title}</h1>
                <p>shop now</p>
              </div>
       </div>
)

}

export default CategoryItem;