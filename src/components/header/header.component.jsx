import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';

import { ReactComponent as Logo } from "../../assests/crown.svg";

export const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to='/shop'>Shop</Link>
        <Link className="option" to='/shop'>Contact</Link>
        <Link className="option" to='/shop'>Blog</Link>
    </div>
  </div>
);
