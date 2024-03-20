import Image from "next/image";
import React from "react";
import { IoSearch, IoTicketOutline, IoBagOutline } from "react-icons/io5";
import { IoIosLogIn, IoMdHeart } from "react-icons/io";

type Props = {};

function Header({}: Props) {
  return (
    <header className="header">
      <div className="div_home_primary">
        <Image src={"/logo.png"} alt="logo" width={150} height={150} className="logo" />
        <div className="div_home_secondary">
          <div className="div_search">
            <input
              type="text"
              name="search"
              id="search"
              className="search_input"
              placeholder="o que você procura?"
            />
            <IoSearch className="search_button" />
          </div>
          <div className="div_home_terceary">
            <div className="flex items-center gap-1 font-semibold">
              <a href="#" className="login">ENTRAR</a>
              <IoIosLogIn className="login" />
            </div>
            <div className="icons_nav">
              <IoTicketOutline />
              <IoMdHeart />
              <IoBagOutline />
            </div>
          </div>
        </div>
      </div>
      <div className="links">
        <div className="links_div">
          <a href="#">Liquida</a>
          <a href="#">Novidades</a>
          <a href="#">Feminino</a>
          <a href="#">Masculino</a>
          <a href="#">Infantil</a>
          <a href="#">Esportivo</a>
          <a href="#">Marcas</a>
          <a href="#">Outlet</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
