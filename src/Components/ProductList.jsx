import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    
  return (
    
    props.productList.length > 0 ? 
      props.productList.map((product,i) => {
        return <Product product={product} key={i} 
        incremetQuantity={props.incremetQuantity}  index={i}
        decremetQuantity={props.decremetQuantity}
        remove={props.remove}
        />
      })
      :
      <h1>No Products Cart CAn You Add New Products</h1>
    
  )
}

export default ProductList
