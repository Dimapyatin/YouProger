import React from "react";
import './Header.css';

function Header({color, shadowHead}) {
  return (
    <>
      <div className="container-header">
        <div className="container_txt">
          <h1 style={{color: color, textShadow: shadowHead, transition: 'all .3s ease-in-out'}} className="head-text">
            Я у мамы программист
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;