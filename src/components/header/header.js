import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../cart-block'
import './header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapers' >
                <Link to='/' className='wrapers-link' >
                    GameAvStor
                </Link>
            </div>
            <div className='header-carts' >
                <CartBlock />
            </div>
        </div>
    )
}
