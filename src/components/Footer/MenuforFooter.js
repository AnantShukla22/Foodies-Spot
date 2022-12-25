import React from 'react'
import './MenuforFooter.css'

const MenuforFooter = ({ link, icon }) => {
    return (
        <li>
            <a href={link}>
                <span className='icon'>{icon}</span>
            </a>
        </li>
            
        )
}

export default MenuforFooter