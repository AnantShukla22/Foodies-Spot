import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner.js'
import MenuCard from '../MenuCard/MenuCard.js'
import MenuItem from '../MenuItems/MenuItem.js'
import './Main.css'
import { MenuDetails, Items } from '../Data.js'
import ItemCard from '../ItemCard/ItemCard.js'
import DebitCard from '../DebitCard/DebitCard.js'
import CartItem from '../CartItem/CartItem.js'
import TotalSection from '../TotalSection/TotalSection.js'
import { useStateValue } from '../redux/StateProvider.js'

const Main = () => {

  const [isMainData, setMainData] = useState(null);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };


  const [{ cart }] = useStateValue();

  // useEffect for menuItem toggling
  useEffect(() => {

    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".boxOfMenuItem");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive))
  }, [isMainData, cart])

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="banner">
          <Banner name={"Aanat"} discount={"8"} link="#" />
        </div>

        <div className="dishContainer">

          <MenuCard name={"Menu Category"} />

          <div className="rowContainer">
            {/* here using map to render all the menuItems with their details */}
            {MenuDetails &&
              //  MenuDetails.map((D)=>())}
              MenuDetails.map((D) => (
                // we have to give unique key for mapping
                <div onClick={() => setData(D.itemId)} ><MenuItem key={D.id} name={D.name} imgSrc={D.imgSrc} isActive={D.id === 1 ? true : false} />
                </div>

              ))}
          </div>

          <div className="dishItemContainer">
            {isMainData &&
              isMainData.map((data) => (
                <ItemCard
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                  ratings={data.ratings}
                  price={data.price}
                />
              ))}
          </div>
        </div>

      </div>
      <div className="rightMenu">
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard />
          </div>
        </div>

        {!cart ? (
          <div className="addSomeItem">
            {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              /> */}
          </div>
        ) : (
          <div className="cartCheckOutContianer">
            <div className="cartContainer">
              <MenuCard name={"Carts Items"} />

              <div className="cartItems">
                {cart &&
                  cart.map((data) => (
                    <CartItem
                      key={data.id}
                      itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      qty={"4"}
                      price={data.price}
                    />
                  ))}
                <TotalSection />
              </div>
            </div>
          </div>

        )}
      </div>
    </div>


  )
}




export default Main