import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Quicksand</span>
            <ul className='nav'>
                <li>Home</li>
                <li>Catalog</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
