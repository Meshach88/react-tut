import React from 'react'

const Products = ({title, price, inStock, categories}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>In Stock: {inStock ? 'Yes' : 'No'}</p>
        <p>Categories: {categories.join(', ')}</p>
    </div>
  )
}

export default Products