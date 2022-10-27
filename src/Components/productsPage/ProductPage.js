import React from 'react'
import { useCartInfo } from '../../context/CartContext'
import Product from '../product/Product'
import './productPage.css'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
//renders product component
export default function ProductPage() {
    const {products} = useCartInfo()
    return (
    <div>
        <Header></Header>
        {products.length === 0 && <h1>Loading...</h1>}
        {products.length > 0 && (
            <div className='productCard'> 
            {products.map((product) => {
                return <Product key={product.id} product={product}/>
            })}
            </div>
        )}
    </div>
  )
}
