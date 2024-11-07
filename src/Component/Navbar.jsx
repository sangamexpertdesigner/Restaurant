import React, { useRef } from "react";
import Logo from "../assests/logo.png";
const Navbar = () => {
  const searchRef = useRef();
  const nabvbarRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    nabvbarRef.current.classList.remove("active");
  };
  const navbarHandler = () => {
    nabvbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={nabvbarRef}>
          <a href="#home">Home</a>
          <a href="#home">About</a>
          <a href="#home">Menu</a>
          <a href="#home">Products</a>
          <a href="#home">Review</a>
          <a href="#home">Contact</a>
          <a href="#home">Blogs</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart"></div>
          <div className="fas fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
       

      </header>
    </>
  );
};

export default Navbar;
