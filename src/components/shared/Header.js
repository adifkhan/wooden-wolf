import React from "react";
import style from "../../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Wooden olf</h1>
      </div>
      <nav className={style.navbar}>
        <a href="/">home</a>
        <a href="/">login</a>
        <a href="/">register</a>
      </nav>
    </header>
  );
};

export default Header;
