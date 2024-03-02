
import { Body,BackgroundImage,DirectoryItemContainer } from './directory-item.styles'
import { Link, useNavigate } from 'react-router-dom'

const DirectoryItem=({categorie})=>{
    const {imageUrl,title,route}=categorie
    const navigate=useNavigate();
    const onNavigateHandler=()=>navigate(route)
return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
              <BackgroundImage  imageUrl={imageUrl}>    
              </BackgroundImage>
              <Body >
                <h2>{title}</h2>
                <p >shop now</p>
              </Body>
       </DirectoryItemContainer>
)

}

export default DirectoryItem;