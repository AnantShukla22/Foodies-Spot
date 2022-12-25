import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { actionType } from '../redux/reducer';
import { useStateValue } from '../redux/StateProvider'
import './CartItem.css'

let cartItems = [];


const CartItem = ({ name, imgSrc, price, itemId }) => {
  const [qty, setqty] = useState(1)
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  const [{ cart }, dispatch] = useStateValue();


  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price))
  }, [qty,price,cart]);

  const updateQty = (action, id) => {
    if (action === "add") {
      setqty(qty + 1);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setqty(qty - 1);
        console.log(qty);
      }
    }
  };



  return (
    <>
      <div className="cartItem">
        <div className="imgBox">
          <img src={imgSrc} alt="" />
        </div>
        <div className="itemDescription">
          <h2 className="itemName">{name}</h2>
          <div className="itemQuantity">
            <span>X {qty}</span>
            <div className="quantity">
              <RemoveRounded onClick={() => updateQty("remove", itemId)}
              />
              <AddRounded onClick={() => updateQty("add", itemId)} />
            </div>
          </div>
        </div>
        <div className="itemPrice">
          <span className="dollarSign">$</span>
          <span className="itemPriceValue">{itemPrice}</span>
        </div>
      </div>
    </>
  )

}

export default CartItem