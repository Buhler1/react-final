import React from 'react'
import { useCartInfo } from '../../context/CartContext'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import './cartPage.css'

export default function CartPage() {
  const {products, quantity, setQuantity, setCart, cart} = useCartInfo()
  const deleteItem = (itemId) => {
    setCart(liveCart => {
      return liveCart.filter(sameId => sameId.id != itemId)
    })
  }
  return (
    <div>
      <Header></Header>
        <h1 className='pageTitle'>Cart</h1>
        {cart.map((items, index) => {
            return (
                <div key={index}>
                    <h1>{items.itemName}</h1>
                    <p>{items.itemQuantity}</p>
                    <img src={items.itemImage}></img>
                    <button onClick={() => deleteItem(items.id)} className='btn'>Delete</button>
                </div>
            )
        })}
        {cart.length > 0 && <button className='checkoutBtn'>
          <Link to={'/checkout'}>Checkout</Link>
        </button>}
    </div>
  )
}
