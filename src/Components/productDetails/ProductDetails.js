import React from 'react'
import { useCartInfo } from '../../context/CartContext'
import {useParams} from 'react-router-dom'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import './productDetails.css'

export default function ProductDetails() {
    const {products, quantity, setQuantity, setCart, cart} = useCartInfo()
    const {id} = useParams()
    const getProduct = products.find(item => item.id == id)
    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const handleAddToCart = (itemId) => {
        const findProduct = cart.find(product => product.id == itemId)
        if (findProduct === undefined) {
            setCart((previousCart) => {
                return [...previousCart, {itemName: getProduct.title, itemQuantity: quantity, itemPrice: getProduct.price, itemImage: getProduct.image, id: getProduct.id, totalCost: quantity * getProduct.price}]
            })
        }else {
            const newCart = cart.map(item => {
                if (item.id == itemId) {
                    return {...item, itemQuantity: item.itemQuantity + quantity, totalCost: item.totalCost + quantity * getProduct.price}
                }
                return item
            })
            setCart(newCart)
            setQuantity(1)
        }
    }
    return (
    <div>
        <Header></Header>
        {products.length > 0 &&(
        <div>    
            <img src={getProduct.image}></img>
            <h1>{getProduct.title}</h1>
            <p>{getProduct.price}</p>
            <p>{getProduct.category}</p>
            <p>{getProduct.description}</p>
            <button onClick={() => handleAddToCart(getProduct.id)}>Add to Cart</button>
            <input value={quantity} onChange={(event) => handleQuantity(event)}></input>
        </div>
        )}
        {products.length === 0 && 
            <h1>Loading...</h1>
        }
    </div>
  )
}
