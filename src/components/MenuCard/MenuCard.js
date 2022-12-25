import React from 'react'
import { ChevronRightRounded } from "@mui/icons-material";
import './MenuCard.css'

const MenuCard = ({name}) => {
    return (
        <div className="menuCard">
            <div className="subMenuContainer">
                <h3>{name}</h3>
                <div className="viewAll">
                    <p>View All</p>
                    <i>
                        <ChevronRightRounded />
                    </i>
                </div>
            </div>
        </div>)
}

export default MenuCard