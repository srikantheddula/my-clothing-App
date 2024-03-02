// import SHOP_DATA from '../../shop-data.json'

import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../useContext/categoriesContext'
// import ProductCard from '../../product-card/product-card.component'
import CategoryPreview from '../../components/catogory-preview/categorypreview.component'

const CategoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => {
          const products=categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products}/>
          )
          

        })
      }
    </Fragment>
  )

}
export default CategoriesPreview