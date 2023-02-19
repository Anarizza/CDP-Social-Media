import React from 'react';
import "./MenuLink.css";

const MenuLink = ({Icon, text}) => {
  return (
    <div className="menuLink">
    {Icon}
    <div className="menuLinkText">{text}</div>
    <div className="menuLinkTextName">{text === "Logout" && "(Amber)"}</div>
  </div>
);
};

export default MenuLink;