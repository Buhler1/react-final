import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <Link to={'/'} className='home'>Home</Link>
        <Link to={'/cart'} className='cart'>Cart</Link>
    </div>
  )
}
