import React, { useEffect, useState } from 'react'
import { useCartInfo } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'

export default function Checkout() {
  const {products, quantity, setQuantity, setCart, cart} = useCartInfo()
  const navigate = useNavigate()
  const [subTotal, setSubTotal] = useState({subTotal: 0})
  const calculateTotal = () => {
    if(cart.length === 0) return
    const itemCosts = []
    for(let item of cart) {
      itemCosts.push(item.totalCost)
    }
    const reduceArray = itemCosts.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    setSubTotal({subTotal: reduceArray})
  }
  const orderPlace = (event) => {
    event.preventDefault()
    alert('Order submitted! Thank you!')
    setCart([])
    navigate('/')
  }
  useEffect(() => {
    calculateTotal()
  }, [])
  return (
    <div>
      <Header></Header>
      {cart.map((items, index) => {
            return (
                <div key={index}>
                    <h1>{items.itemName}</h1>
                    <p>{items.itemQuantity}</p>
                    <p>{items.price}</p>
                    <img src={items.itemImage}></img>
                </div>
            )
        })}
        <div>
          <h2>Total Cost: ${subTotal.subTotal.toFixed(2)}</h2>
        </div>
        <form onSubmit={(event) => orderPlace(event)}>
          <input placeholder='Name'></input>
          {/*Shipping Info*/}
          <div>
            <label htmlFor='Address'>Street Address </label>
            <input placeholder='Shipping Address' id='streetAddress'></input>
            <input placeholder='State'></input>
            <input placeholder='City'></input>
            <input placeholder='Zip Code'></input>
          </div>
          {/*Billing Info*/}
          <div>
          <label htmlFor='Address'>Billing Address </label>
            <input placeholder='Billing Address'></input>
            <input placeholder='State'></input>
            <input placeholder='City'></input>
            <input placeholder='Zip Code'></input>
          </div>
          {/*Credit Card Info*/}
          <div>
            <label htmlFor='Address'>Card Information </label>
            <input placeholder='Card Holder Name'></input>
            <input placeholder='Card Number'></input>
            <input placeholder='Expiration Date'></input>
            <input placeholder='Security Code'></input>
          </div>
          <input type='submit'></input>
        </form>
    </div>
  )
}
