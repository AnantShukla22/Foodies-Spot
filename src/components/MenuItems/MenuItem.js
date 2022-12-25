import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'
import "./MenuItem.css"

const MenuItem = ({ name, imgSrc, isActive }) => {
    return (
        // <div className='boxOfMenuItem'>
        <div className={`boxOfMenuItem ${isActive ? 'active' : ''}`}>
            <div className="imageBox">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>

            <ChevronRightRounded className='loadMenu' />

        </div>
    )
}

export default MenuItem