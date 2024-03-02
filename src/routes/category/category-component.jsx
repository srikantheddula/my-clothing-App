import './category.styles.scss'
import { Fragment, useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../useContext/categoriesContext'
import { useParams } from 'react-router-dom'
import ProductCard from '../../product-card/product-card.component'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category])

    console.log(products)

    useEffect(() => {
        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

    return (

        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {

                    products && products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }

            </div>
        </Fragment>

    )

}




export default Category