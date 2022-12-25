import React from 'react'
import './TotalSection.css'

const TotalSection = ({total}) => {
    return (
        <>
            <div className="totalSection">
                <h3>Total</h3>
                <p>
                    <span>$ </span> 50
                </p>
            </div>
            <button className="checkOutBtn">Check Out</button></>
    )
}

export default TotalSection