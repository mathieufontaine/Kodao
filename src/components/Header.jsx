import React from "react";
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <a
        className="logo_link"
        href="/blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="logo"
          src="/images/logo/logo-kodao.png"
          alt="logo kodao"
        />
      </a>
      <nav className="navbar">
        <ul>
          <li className="navbar_item">
            <a href="/index.html#web3" id="nav-web3" className="navbar_link">
              Web3
            </a>
          </li>
          <li className="navbar_item">
            <a
              href="/index.html#concept"
              id="nav-concept"
              className="navbar_link"
            >
              Concept
            </a>
          </li>
          <li className="navbar_item">
            <a href="/index.html#offer" id="nav-offer" className="navbar_link">
              Offre
            </a>
          </li>
          <li className="navbar_item">
            <a href="/index.html#about" id="nav-about" className="navbar_link">
              A propos
            </a>
          </li>
          <li className="navbar_item">
            <a
              href="/index.html#contact"
              id="nav-contact"
              className="navbar_link"
            >
              Contact
            </a>
          </li>
          <li className="navbar_item">
            <a href="/index.html#faq" id="nav-faq" className="navbar_link">
              FAQ
            </a>
          </li>
          <li className="navbar_item">
            <a href="/blog" className="navbar_link navbar_link--active">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu_button">
        <i className="menu_icon fa-solid fa-bars"></i>
      </div>
      <nav className="menu">
        <ul>
          <li className="menu_item">
            <a href="/index.html#web3" id="nav-web3" className="menu_link">
              Web3
            </a>
          </li>
          <li className="menu_item">
            <a
              href="/index.html#concept"
              id="nav-concept"
              className="menu_link"
            >
              Concept
            </a>
          </li>
          <li className="menu_item">
            <a href="/index.html#offer" id="nav-offer" className="menu_link">
              Offre
            </a>
          </li>
          <li className="menu_item">
            <a href="/index.html#about" id="nav-about" className="menu_link">
              A propos
            </a>
          </li>
          <li className="menu_item">
            <a
              href="/index.html#contact"
              id="nav-contact"
              className="menu_link"
            >
              Contact
            </a>
          </li>
          <li className="menu_item">
            <a href="/index.html#faq" id="nav-faq" className="menu_link">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
