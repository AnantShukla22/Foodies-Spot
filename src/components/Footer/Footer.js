import React, { useEffect } from 'react'
import MenuforFooter from './MenuforFooter';
import { BsFillGearFill, BsFillChatFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { MdAccountBalanceWallet, MdSummarize, MdFavorite } from 'react-icons/md';
import './Footer.css'


const Footer = () => {

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  })


  return (
    <div className="bottomMenu">
      <div className="menuList">
        <ul id='menu'>
          <li><MenuforFooter link={"#"} icon={<AiFillHome />} /></li>
          <li> <MenuforFooter link={"#"} icon={<BsFillChatFill />} /></li>
          <li> <MenuforFooter link={"#"} icon={<MdAccountBalanceWallet />} /></li>
          <li><MenuforFooter link={"#"} icon={<MdFavorite />} /></li>
          <li> <MenuforFooter link={"#"} icon={<MdSummarize />} /></li>
          <li>        <MenuforFooter link={"#"} icon={<BsFillGearFill />} /></li>

        </ul>
      </div>
    </div>
  )
}

export default Footer