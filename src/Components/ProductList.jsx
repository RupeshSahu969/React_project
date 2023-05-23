import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    
  return (
    <div>
      {props.productList.map((product,i) => {
        return <Product product={product} key={i} 
        incremetQuantity={props.incremetQuantity}  index={i}
        decremetQuantity={props.decremetQuantity}
      
        />
      })}
    </div>
  )
}

export default ProductList
