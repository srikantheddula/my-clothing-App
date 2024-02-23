import CategoryItem from "../category-item/category-item.component";
import './directory.component.style.scss';

const Directory=({categories})=>{
return(
    <div className='directory-container'>
        {
          categories.map((categorie)=>{
            return <CategoryItem key={categorie.id } categorie={categorie}/>
       
          })
        }
    </div>
)
}
export default Directory