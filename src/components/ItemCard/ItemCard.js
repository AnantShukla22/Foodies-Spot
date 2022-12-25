import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Items } from '../Data';
import './ItemCard.css'
import { actionType } from '../redux/reducer';
import { useStateValue } from '../redux/StateProvider';

let cartData = [];

const ItemCard = ({ price, rating, imgSrc, name, itemId }) => {

    const [isFavourite, setFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(rating));

    const [isCart, setCart] = useState(null);
    // here we are dispatching the isCart
    // the empty curly is the two empty values cart and total in reducer  -- destracturing
    const [{ }, dispatch] = useStateValue();

    const handleClickRating = (value) => {
        setCurrentValue(value);
    };

    // here to push the isCart we are creating an array named cartData
    useEffect(() => {
        if (isCart) {
            cartData.push(isCart);
            // then we are dispatching it to the reducer to set the state
            dispatch({
                type: actionType.SET_CART,
                cart: cartData,
            });
        }
    }, [isCart]);

    return (

        <div className="container">
            <div className="imgBox">
                <img src={imgSrc} alt="" className='itemImg' />
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <Favorite className={`favourite ${isFavourite ? "active" : ""}`} onClick={() => setFavourite(!isFavourite)} />
                <div className="bottom">
                    <div className="ratings">
                        {/* making an array initially at null to length 5 which has a map that counts the element in array  nad produce that many icon elememnt i */}
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`}
                                onClick={() => handleClickRating(i + 1)}>
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price">
                            <span>$ </span>
                            {price}
                        </h3>
                    </div>
                    <AddRounded className="addToCart"
                        // it means onClick we will find the n in Items if it matches then we return that item in setCart
                        // on click we will know the itemId so we can compare it with the n we are finding
                        onClick={() => {
                            setCart(Items.find((n) => n.id === itemId))
                        }} />
                </div>
            </div>
        </div>
    )
}

export default ItemCard