import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BarChartIcon from '@mui/icons-material/BarChart'
import './Header.css'

const Header = () => {

   const rightMenu=()=>{
        document.querySelector(".rightMenu").classList.toggle("active")
        }

    return (
        <header>
            <h1 className='name'>Foodies Spot</h1>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" className='headerPic' />

            <div className="inputBox">
                <SearchIcon className='searchIcon' />
                <input type="text" placeholder='Search' />
            </div>

            <div className="shoppingCart">
                <ShoppingCartIcon className='cartIcon' />
                <div className="cart_content">
                    <span>2</span>
                </div>
            </div>
            
            <div className="profileContainer">
                <div className="profileBox">
                    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt="" className='profilePic'/>
                </div>
                <h2 className='userName'>Anant Shukla </h2>
            </div>
            <div className="toggleMenu" onClick={rightMenu}>
                    <BarChartIcon className="toggleIcon" />
                </div>
        </header>
    )
}

export default Header