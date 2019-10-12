import React from 'react';
import BeerLogo from "./SVGs/BeerLogo";

const MainHeader = () => {
  return (
    <header className='main-header'>
      <h3 className='primary-heading main-header__heading'>
        Brewery Application

        <span className="main-header__logo">
          <BeerLogo/>
        </span>
      </h3>
    </header>
  )
};

export default MainHeader;