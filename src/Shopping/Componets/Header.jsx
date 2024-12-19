import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="headersection">
            <div className="left">
                <div className="title">
                    <h2>Shopping Mall</h2>
                </div>
            </div>
            <div className="center">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" name="" id="" placeholder='Search' />
            </div>
            <div className="right">
                <div className="signin">
                    signin/signup
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header