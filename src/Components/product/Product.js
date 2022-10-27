import React from 'react'
import {Link} from 'react-router-dom'
import './product.css'
export default function Product({product}) {
  return (
    <div className='card'>
        <Link to={`/products/${product.id}`} className='text-link'>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <img src={product.image}></img>
        </Link>
    </div>
  )
}
