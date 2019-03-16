import React from "react"
import Product from './Product'
import vschoolProducts from '../../data/vschoolProducts'

function Products() {
    const productComponents = vschoolProducts.map(item => <Product key={item.id} product={item}/>)

    return (
        <div className="jokes">
            {productComponents}
        </div>
    )
}

export default Products;