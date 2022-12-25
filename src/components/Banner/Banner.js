import React from 'react'
import './Banner.css'

const Banner = ({name, discount, link}) => {
    return (
        <div className="banner">
            <div className="bannerContent">
                <h3>Hello {name},</h3>
                <p>
                    Get free discount for every <span>${discount}</span>{" "}
                    purchase
                </p>
                <a href={link}>Learn More</a>
            </div>
        </div>
    )
}

export default Banner